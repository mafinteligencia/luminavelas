/* =====================================================
   Doceria Dalpizzol — ornamentos da marca
   Molduras, filetes e texturas derivados do brand board.
   ===================================================== */
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Moldura de rótulo (a forma do logotipo): cantos arredondados + filete duplo. */
export const LabelFrame = ({
  className = "",
  color = "#D1B071",
  animate = false,
}: {
  className?: string;
  color?: string;
  animate?: boolean;
}) => {
  const P = motion.rect;
  const common = {
    fill: "none",
    stroke: color,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg
      viewBox="0 0 100 60"
      preserveAspectRatio="none"
      className={cn("absolute inset-0 w-full h-full", className)}
      aria-hidden
    >
      <P
        x="1.2"
        y="1.2"
        width="97.6"
        height="57.6"
        rx="9"
        {...common}
        strokeWidth="0.7"
        initial={animate ? { pathLength: 0, opacity: 0 } : false}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
      <rect
        x="3.4"
        y="3.4"
        width="93.2"
        height="53.2"
        rx="7"
        {...common}
        strokeWidth="0.35"
        opacity="0.65"
      />
    </svg>
  );
};

/** Filete dourado com losango central — separador de seções. */
export const GoldRule = ({
  className = "",
  width = 120,
}: {
  className?: string;
  width?: number;
}) => (
  <svg
    viewBox="0 0 120 8"
    className={cn("h-2", className)}
    style={{ width }}
    fill="none"
    aria-hidden
  >
    <motion.path
      d="M2 4h44M74 4h44"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    />
    <motion.path
      d="M60 1.2 63 4l-3 2.8L57 4z"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinejoin="round"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 14 }}
      style={{ transformOrigin: "60px 4px" }}
    />
    <motion.circle
      cx="50"
      cy="4"
      r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.65 }}
    />
    <motion.circle
      cx="70"
      cy="4"
      r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.65 }}
    />
  </svg>
);

/** Floreio de canto — ramo curvo que se desenha. */
export const CornerFlourish = ({
  className = "",
  flip = false,
  delay = 0,
}: {
  className?: string;
  flip?: boolean;
  delay?: number;
}) => (
  <svg
    viewBox="0 0 64 64"
    className={cn(
      "absolute w-16 h-16 pointer-events-none",
      flip && "-scale-x-100",
      className,
    )}
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    aria-hidden
  >
    {[
      "M2 2c14 0 26 10 30 26",
      "M12 6c-1 4 0 7 3 9M20 11c-1 4 0 6 3 8M27 19c-1 3 0 5 2 7",
      "M12 6c3 3 6 3 10 1M20 11c3 3 6 2 8 0M27 19c3 2 5 1 7-1",
    ].map((d, i) => (
      <motion.path
        key={i}
        d={d}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.1,
          ease: "easeInOut",
          delay: delay + i * 0.18,
        }}
      />
    ))}
  </svg>
);

/** Onda de borda entre seções — troca de fundo sem corte reto. */
export const EdgeWave = ({
  className = "",
  fill = "#F7F2EA",
  flip = false,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
}) => (
  <svg
    viewBox="0 0 1440 48"
    preserveAspectRatio="none"
    className={cn("block w-full h-6 sm:h-8", flip && "rotate-180", className)}
    aria-hidden
  >
    <path
      d="M0 24c120-24 240-24 360 0s240 24 360 0 240-24 360 0 240 24 360 0v24H0z"
      fill={fill}
    />
  </svg>
);

/** Selo circular com texto curvo — carimbo artesanal. */
export const Seal = ({
  text = "FEITO  COM  AMOR   ·   ",
  repeat = 2,
  className = "",
  spin = true,
}: {
  text?: string;
  repeat?: number;
  className?: string;
  spin?: boolean;
}) => {
  const uid = `seal-${Math.abs(text.length * 31 + repeat)}`;
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("w-20 h-20", className)}
      aria-hidden
    >
      <defs>
        <path
          id={uid}
          d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1 -76 0"
          fill="none"
        />
      </defs>
      <motion.g
        animate={spin ? { rotate: 360 } : undefined}
        transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
        style={{ transformOrigin: "50px 50px" }}
      >
        <text
          fill="currentColor"
          fontSize="9.6"
          letterSpacing="0.9"
          fontWeight="700"
        >
          <textPath href={`#${uid}`}>{text.repeat(repeat)}</textPath>
        </text>
      </motion.g>
      <circle
        cx="50"
        cy="50"
        r="27.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.45"
      />
      <g
        stroke="currentColor"
        strokeWidth="1.1"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      >
        <path d="M50 60.5C46 57 38.5 52 38.5 45.6c0-3.4 2.6-5.9 5.6-5.9 2 0 3.6 1.1 4.9 2.6 1.3-1.5 2.9-2.6 4.9-2.6 3 0 5.6 2.5 5.6 5.9 0 6.4-7.5 11.4-11.5 14.9z" />
      </g>
    </svg>
  );
};
