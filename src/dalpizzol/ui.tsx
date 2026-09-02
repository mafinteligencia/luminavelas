import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WhatsAppIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  center = false,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) => (
  <div
    className={cn(
      center ? "text-center mx-auto max-w-lg" : "max-w-lg",
      className,
    )}
  >
    {eyebrow && (
      <p className="font-script text-rosa-deep text-xl leading-none mb-1">
        {eyebrow}
      </p>
    )}
    <h2 className="font-serif text-[26px] leading-tight sm:text-3xl text-ink">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 text-[13.5px] text-ink/65 leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export const Button = ({
  variant = "primary",
  className = "",
  full = false,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  full?: boolean;
}) => (
  <button
    {...props}
    className={cn(
      "inline-flex items-center justify-center gap-2 rounded-2xl px-5 h-12 text-[13px] font-semibold tracking-wide transition active:scale-[0.97] disabled:opacity-50 disabled:active:scale-100",
      variant === "primary" &&
        "bg-rosa text-white shadow-[0_10px_26px_rgba(235,160,166,0.45)]",
      variant === "secondary" && "bg-creme-deep text-marrom-deep",
      variant === "ghost" &&
        "bg-transparent text-marrom border border-marrom/20",
      variant === "whatsapp" &&
        "bg-salvia-deep text-white shadow-[0_10px_26px_rgba(138,154,118,0.4)]",
      full && "w-full",
      className,
    )}
  />
);

export const LinkButton = ({
  variant = "primary",
  className = "",
  full = false,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  full?: boolean;
}) => (
  <a
    {...props}
    className={cn(
      "inline-flex items-center justify-center gap-2 rounded-2xl px-5 h-12 text-[13px] font-semibold tracking-wide transition active:scale-[0.97]",
      variant === "primary" &&
        "bg-rosa text-white shadow-[0_10px_26px_rgba(235,160,166,0.45)]",
      variant === "secondary" && "bg-creme-deep text-marrom-deep",
      variant === "ghost" &&
        "bg-transparent text-marrom border border-marrom/20",
      variant === "whatsapp" &&
        "bg-salvia-deep text-white shadow-[0_10px_26px_rgba(138,154,118,0.4)]",
      full && "w-full",
      className,
    )}
  />
);

export const Chip = ({
  active,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) => (
  <button
    {...props}
    className={cn(
      "shrink-0 px-4 h-9 rounded-full text-[12px] font-semibold whitespace-nowrap transition active:scale-95 border",
      active
        ? "bg-rosa border-rosa text-white"
        : "bg-white/80 border-marrom/15 text-marrom-deep",
      className,
    )}
  />
);

export const Stepper = ({
  value,
  onChange,
  min = 1,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
}) => (
  <div className="inline-flex items-center rounded-full border border-marrom/15 bg-white h-10">
    <button
      type="button"
      aria-label="Diminuir"
      onClick={() => onChange(Math.max(min, value - 1))}
      className="w-10 h-10 grid place-items-center text-marrom-deep text-lg active:scale-90"
    >
      −
    </button>
    <span className="w-8 text-center text-sm font-semibold text-ink">
      {value}
    </span>
    <button
      type="button"
      aria-label="Aumentar"
      onClick={() => onChange(value + 1)}
      className="w-10 h-10 grid place-items-center text-marrom-deep text-lg active:scale-90"
    >
      +
    </button>
  </div>
);

export const Leaf = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    aria-hidden="true"
  >
    <path d="M2 12c8-9 20-9 44 0" />
    <path d="M10 8c1.5 3 1.5 5 0 8M18 6c2 3.5 2 6.5 0 10M26 5c2 4 2 8 0 12M34 6c1.5 3.5 1.5 6.5 0 10" />
  </svg>
);
