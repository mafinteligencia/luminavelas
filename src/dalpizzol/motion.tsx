/* =====================================================
   Dalpizzol — biblioteca de movimento por scroll
   Cada primitiva tem uma assinatura própria; as seções combinam
   sem repetir. Respeita prefers-reduced-motion.
   ===================================================== */
import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Progresso 0→1 de um elemento cruzando a viewport (entra por baixo → sai por cima). */
export const useSectionProgress = (
  ref: React.RefObject<HTMLElement>,
  offset: [string, string] = ["start end", "end start"],
) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: offset as any,
  });
  return useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
};

/* 1 · PARALLAX — camadas que se movem em velocidades diferentes. */
export const Parallax = ({
  children,
  speed = 0.3,
  className = "",
  scaleFrom = 1,
  rotate = 0,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  scaleFrom?: number;
  rotate?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const p = useSectionProgress(ref);
  const y = useTransform(p, [0, 1], [speed * 120, -speed * 120]);
  const scale = useTransform(p, [0, 0.5, 1], [scaleFrom, 1, scaleFrom]);
  const r = useTransform(p, [0, 1], [-rotate, rotate]);
  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { y, scale, rotate: r }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* 2 · FAN-IN — cartões que abrem em leque a partir do centro (categorias). */
export const FanIn = ({
  children,
  index,
  total,
  className = "",
}: {
  children: React.ReactNode;
  index: number;
  total: number;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  const mid = (total - 1) / 2;
  const offset = index - mid;
  return (
    <motion.div
      initial={
        reduce
          ? false
          : {
              opacity: 0,
              y: 40,
              rotate: offset * 9,
              x: offset * -18,
              scale: 0.8,
            }
      }
      whileInView={{ opacity: 1, y: 0, rotate: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
        delay: Math.abs(offset) * 0.08,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* 3 · SPLIT — dois blocos que deslizam de lados opostos e se encontram. */
export const SplitIn = ({
  children,
  from,
  className = "",
}: {
  children: React.ReactNode;
  from: "left" | "right";
  className?: string;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={
        reduce
          ? false
          : {
              opacity: 0,
              x: from === "left" ? -70 : 70,
              rotate: from === "left" ? -3 : 3,
            }
      }
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* 4 · TILT-IN — cartão que gira em 3D ao entrar (vitrine). */
export const TiltIn = ({
  children,
  index = 0,
  className = "",
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={
        reduce
          ? false
          : { opacity: 0, rotateY: -35, x: 40, transformPerspective: 900 }
      }
      whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* 5 · CLIP-REVEAL — título que se revela como uma cortina da esquerda. */
export const ClipReveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { clipPath: "inset(0 100% 0 0)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* 6 · SCRUB-SCALE — bloco cuja escala/brilho acompanha o scroll (banner). */
export const ScrubScale = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const p = useSectionProgress(ref, ["start end", "center center"]);
  const scale = useTransform(p, [0, 1], [0.86, 1]);
  const opacity = useTransform(p, [0, 1], [0.3, 1]);
  const y = useTransform(p, [0, 1], [60, 0]);
  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { scale, opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* 7 · FLIP-IN — cartas viradas na mesa, uma a uma (ocasiões). */
export const FlipIn = ({
  children,
  index = 0,
  className = "",
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={
        reduce
          ? false
          : { opacity: 0, rotateX: -80, y: 24, transformPerspective: 700 }
      }
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 16,
        delay: index * 0.11,
      }}
      style={{ transformOrigin: "top center" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* 8 · BLUR-IN — do desfoque para o nítido, como açúcar assentando (depoimentos). */
export const BlurIn = ({
  children,
  index = 0,
  className = "",
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={
        reduce
          ? false
          : { opacity: 0, filter: "blur(14px)", scale: 1.04, y: 20 }
      }
      whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: EASE, delay: index * 0.12 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* 9 · STARS — estrelas acendendo em sequência. */
export const StarBurst = ({
  count = 5,
  delay = 0,
  render,
}: {
  count?: number;
  delay?: number;
  render: (i: number) => React.ReactNode;
}) => {
  const reduce = useReducedMotion();
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          initial={reduce ? false : { opacity: 0, scale: 0, rotate: -90 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 14,
            delay: delay + i * 0.07,
          }}
        >
          {render(i)}
        </motion.span>
      ))}
    </div>
  );
};

/* 10 · WORDS — palavras que surgem uma a uma (slogan). */
export const Words = ({
  text,
  className = "",
  delay = 0,
  stagger = 0.06,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) => {
  const reduce = useReducedMotion();
  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block mr-[0.28em]"
          initial={reduce ? false : { opacity: 0, y: 14, rotate: 4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, ease: EASE, delay: delay + i * stagger }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
};

/* 11 · DRAW — traço SVG que se desenha (folhas / ramos). */
export const DrawPath = ({
  d,
  className = "",
  viewBox = "0 0 48 24",
  delay = 0,
  duration = 1.4,
  strokeWidth = 1.4,
}: {
  d: string | string[];
  className?: string;
  viewBox?: string;
  delay?: number;
  duration?: number;
  strokeWidth?: number;
}) => {
  const reduce = useReducedMotion();
  const paths = Array.isArray(d) ? d : [d];
  return (
    <svg
      viewBox={viewBox}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      aria-hidden
    >
      {paths.map((p, i) => (
        <motion.path
          key={i}
          d={p}
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration, ease: "easeInOut", delay: delay + i * 0.15 }}
        />
      ))}
    </svg>
  );
};

/* 12 · SCRUB-TEXT — o texto "acende" palavra por palavra conforme o scroll. */
export const ScrubText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.45"],
  });
  const words = text.split(" ");
  return (
    <p ref={ref} className={cn("flex flex-wrap", className)}>
      {words.map((w, i) => (
        <ScrubWord
          key={i}
          word={w}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        />
      ))}
    </p>
  );
};

const ScrubWord = ({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const reduce = useReducedMotion();
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [4, 0]);
  return (
    <motion.span
      style={reduce ? undefined : { opacity, y }}
      className="mr-[0.3em]"
    >
      {word}
    </motion.span>
  );
};

/* 13 · MASK-REVEAL — foto revelada por um círculo que cresce com o scroll. */
export const MaskReveal = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const p = useSectionProgress(ref, ["start 0.95", "center 0.55"]);
  const clip = useTransform(
    p,
    [0, 1],
    ["circle(18% at 50% 60%)", "circle(120% at 50% 50%)"],
  );
  const scale = useTransform(p, [0, 1], [1.15, 1]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { clipPath: clip, scale }}>
        {children}
      </motion.div>
    </div>
  );
};

/* 14 · COUNTER — número que sobe até o valor. */
export const CountUp = ({
  to,
  suffix = "",
  className = "",
}: {
  to: number;
  suffix?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const mv = useSpring(0, { stiffness: 60, damping: 20 });
  if (inView) mv.set(to);
  const text = useTransform(
    mv,
    (v) => `${Math.round(v).toLocaleString("pt-BR")}${suffix}`,
  );
  return (
    <span ref={ref} className={className}>
      {reduce ? (
        `${to.toLocaleString("pt-BR")}${suffix}`
      ) : (
        <motion.span>{text}</motion.span>
      )}
    </span>
  );
};

/* Progresso de leitura da página (barra fina no topo). */
export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 inset-x-0 h-[3px] z-[60] bg-gradient-to-r from-rosa via-dourado to-salvia-deep"
    />
  );
};
