import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { BRAND } from "../data";
import { FloralPattern } from "../Pattern";
import { Words } from "../motion";
import { IconChevronRight, IconClose, IconSparkle } from "../icons";
import { HOTSPOTS, SLIDES, type Slide } from "../proposta/content";

/* =====================================================
   Proposta 2026 — Dalpizzol · Performance Local
   Mapa 3D interativo. A peça 1 é o mapa; cada ponto abre
   uma das 5 peças em tela cheia. Nenhum texto fora das
   peças — só o cromo de navegação. Rota privada (noindex).
   ===================================================== */

const EASE = [0.16, 1, 0.3, 1] as const;

const useIsWide = () => {
  const [wide, setWide] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const on = () => setWide(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return wide;
};

const slideIndex = (id: string) => SLIDES.findIndex((s) => s.id === id);
const pad = (n: number) => String(n).padStart(2, "0");

/* ---------- Peça responsiva: 16:9 no desktop, 9:16 no celular ---------- */
const PieceImg = ({
  slide,
  className = "",
  priority = false,
  fade = true,
}: {
  slide: Slide;
  className?: string;
  priority?: boolean;
  /** false no deck: a peça já entra pela transição, sem blur-in próprio */
  fade?: boolean;
}) => {
  const [loaded, setLoaded] = useState(!fade);
  return (
    <picture className="block w-full h-full">
      <source media="(min-width: 768px)" srcSet={slide.wide} />
      <img
        src={slide.tall}
        alt={`${slide.title} — ${slide.caption}`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "block w-full h-full transition-[opacity,filter] duration-700 ease-out",
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-md",
          className,
        )}
      />
    </picture>
  );
};

/* =====================================================
   Transições — fatia de bolo e brigadeiro
   A peça que entra é "cortada" como uma fatia que gira a
   partir do centro (fatia) ou cresce como um brigadeiro
   redondo (brigadeiro). A que sai fica embaixo, escurecendo.
   ===================================================== */
const wedge = (t: number, dir: 1 | -1) => {
  if (t >= 1) return "polygon(-50% -50%, 150% -50%, 150% 150%, -50% 150%)";
  const pts = ["50% 50%"];
  const steps = 40;
  const sweep = 360 * t;
  for (let i = 0; i <= steps; i++) {
    const a = ((-90 + dir * ((sweep * i) / steps)) * Math.PI) / 180;
    pts.push(
      `${(50 + 110 * Math.cos(a)).toFixed(2)}% ${(50 + 110 * Math.sin(a)).toFixed(2)}%`,
    );
  }
  return `polygon(${pts.join(",")})`;
};

const Reveal = ({
  mode,
  dir,
  children,
}: {
  mode: Slide["reveal"];
  dir: 1 | -1;
  children: React.ReactNode;
}) => {
  const reduce = useReducedMotion();
  const t = useMotionValue(reduce ? 1 : 0);
  const clipPath = useTransform(t, (v) =>
    mode === "fatia"
      ? wedge(v, dir)
      : `circle(${(v * 72).toFixed(1)}% at 50% 50%)`,
  );
  useEffect(() => {
    if (reduce) return;
    const c = animate(t, 1, { duration: 1.25, ease: [0.65, 0, 0.35, 1] });
    return () => c.stop();
  }, [t, reduce]);
  return (
    <motion.div style={{ clipPath }} className="[grid-area:1/1] relative z-10">
      {children}
    </motion.div>
  );
};

/* ============ 1 · ABERTURA ============ */
const Hero = ({ onEnter }: { onEnter: () => void }) => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.12], [0, reduce ? 0 : -50]);
  const first = SLIDES[0];

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pattern-creme grain">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={first.wide}
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-30 blur-[26px] scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-creme/70 via-creme/55 to-offwhite" />
        <FloralPattern color="#8B6B4F" opacity={0.06} />
      </div>

      <motion.div
        style={{ y }}
        className="relative w-full max-w-5xl mx-auto px-6 py-20"
      >
        <motion.img
          src={BRAND.logo}
          alt={BRAND.name}
          initial={reduce ? false : { opacity: 0, y: 14, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="w-20 h-20 object-contain drop-shadow-[0_10px_22px_rgba(139,107,79,0.28)]"
        />

        <p className="mt-6 inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.22em] uppercase text-marrom-deep glass-warm rounded-full px-4 py-2">
          <IconSparkle className="w-3.5 h-3.5" /> Proposta 2026 · Dalpizzol
        </p>

        <h1 className="mt-5 font-serif text-[40px] sm:text-[64px] leading-[0.98] text-ink">
          <span className="block">
            <Words text="Uma proposta" />
          </span>
          <span className="block italic text-rosa-deep">
            <Words text="para explorar." delay={0.2} />
          </span>
        </h1>

        <p className="mt-5 max-w-md text-[14px] sm:text-[16px] text-ink/70 leading-relaxed">
          Cinco pontos vivos no mapa 3D. Cada um abre um slide da proposta
          Performance Local 2026.
        </p>

        <motion.button
          type="button"
          onClick={onEnter}
          whileTap={{ scale: 0.97 }}
          className="mt-8 group inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-rosa to-rosa-deep text-white pl-7 pr-6 py-4 text-[12px] font-semibold tracking-[0.16em] uppercase shadow-[0_18px_36px_-14px_rgba(217,134,141,0.9)]"
        >
          Entrar no mapa
          <IconChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </motion.div>
    </section>
  );
};

/* ============ 2 · MAPA ============ */
const Hotspot = ({
  n,
  x,
  y,
  label,
  side = "right",
  active,
  onOpen,
}: {
  n: number;
  x: number;
  y: number;
  label: string;
  side?: "left" | "right";
  active: boolean;
  onOpen: () => void;
}) => (
  <button
    type="button"
    onClick={onOpen}
    aria-label={`Abrir slide ${n}: ${label}`}
    style={{ left: `${x}%`, top: `${y}%` }}
    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
  >
    <span className="relative grid place-items-center">
      <span
        aria-hidden
        className={cn(
          "absolute w-12 h-12 rounded-full bg-rosa/35",
          "motion-safe:animate-ping motion-safe:[animation-duration:2.6s]",
          active && "bg-dourado/45",
        )}
      />
      <span
        className={cn(
          "relative grid place-items-center w-9 h-9 rounded-full text-[11.5px] font-semibold tabular-nums",
          "bg-white/95 text-marrom-deep ring-1 ring-dourado/60",
          "shadow-[0_6px_16px_-4px_rgba(43,38,30,0.55)]",
          "transition group-hover:scale-110 group-focus-visible:scale-110",
          active && "bg-rosa text-white ring-white/70",
        )}
      >
        {pad(n)}
      </span>
    </span>
    <span
      className={cn(
        "pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap",
        "rounded-full glass-warm px-3 py-1.5 text-[11px] font-semibold text-marrom-deep",
        "opacity-0 transition-all duration-300",
        "group-hover:opacity-100 group-focus-visible:opacity-100",
        "hidden md:block",
        side === "right"
          ? "left-full ml-3 group-hover:translate-x-1"
          : "right-full mr-3 group-hover:-translate-x-1",
      )}
    >
      {label}
    </span>
  </button>
);

const Mapa = ({
  onOpen,
  openId,
  mapRef,
}: {
  onOpen: (id: string) => void;
  openId: string | null;
  mapRef: React.RefObject<HTMLDivElement>;
}) => {
  const wide = useIsWide();
  const first = SLIDES[0];
  return (
    <section
      ref={mapRef}
      id="mapa"
      className="relative pattern-creme grain px-4 sm:px-6 pt-8 pb-14 sm:pt-10 sm:pb-16 overflow-hidden scroll-mt-2 min-h-screen flex flex-col justify-center"
    >
      <div className="absolute inset-0 pointer-events-none">
        <FloralPattern color="#8B6B4F" opacity={0.05} />
      </div>

      <div className="relative max-w-6xl w-full mx-auto">
        <div className="flex gap-5 items-center">
          <div className="relative flex-1 min-w-0 rounded-[26px] overflow-hidden card-lux edge-gold p-1.5">
            <div className="relative">
              <PieceImg
                slide={first}
                priority
                className="rounded-[20px] h-auto"
              />
              {HOTSPOTS.map((h) => {
                const i = slideIndex(h.slide);
                const s = SLIDES[i];
                const pos = wide ? h.wide : h.tall;
                return (
                  <Hotspot
                    key={h.slide}
                    n={i + 1}
                    x={pos.x}
                    y={pos.y}
                    label={s.label}
                    side={h.side}
                    active={openId === h.slide}
                    onOpen={() => onOpen(h.slide)}
                  />
                );
              })}
            </div>
          </div>

          <nav
            aria-label="Índice dos slides"
            className="hidden lg:flex w-12 shrink-0 flex-col items-end justify-center gap-1"
          >
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => onOpen(s.id)}
                aria-label={`Abrir slide ${i + 1}: ${s.label}`}
                className={cn(
                  "group flex items-center gap-2 py-1.5 text-[12px] tabular-nums transition",
                  openId === s.id
                    ? "text-rosa-deep"
                    : "text-ink/35 hover:text-marrom-deep",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "h-px transition-all",
                    openId === s.id
                      ? "w-5 bg-rosa-deep"
                      : "w-2 bg-ink/25 group-hover:w-4 group-hover:bg-marrom",
                  )}
                />
                {pad(i + 1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-[10.5px] text-ink/50 tracking-[0.12em] uppercase">
            Toque em um ponto do mapa para abrir o slide
          </p>
          <div className="flex gap-1.5 lg:hidden">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => onOpen(s.id)}
                aria-label={`Abrir slide ${i + 1}: ${s.label}`}
                className="grid place-items-center w-8 h-8 rounded-full card-lux text-[10.5px] font-semibold text-marrom-deep tabular-nums"
              >
                {pad(i + 1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ 3 · DECK ============ */
const Deck = ({
  index,
  dir,
  onClose,
  onGo,
}: {
  index: number;
  dir: 1 | -1;
  onClose: () => void;
  onGo: (i: number, dir: 1 | -1) => void;
}) => {
  const slide = SLIDES[index];
  const touch = useRef<number | null>(null);

  const prev = useCallback(
    () => onGo((index - 1 + SLIDES.length) % SLIDES.length, -1),
    [index, onGo],
  );
  const next = useCallback(
    () => onGo((index + 1) % SLIDES.length, 1),
    [index, onGo],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Slide ${index + 1} de ${SLIDES.length}: ${slide.title}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col bg-offwhite"
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touch.current === null) return;
        const d = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(d) > 60) (d < 0 ? next : prev)();
        touch.current = null;
      }}
    >
      {/* barra superior */}
      <header className="shrink-0 glass-warm rounded-none border-x-0 border-t-0 safe-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="hidden sm:inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-marrom-deep"
          >
            <IconChevronRight className="w-4 h-4 rotate-180" />
            Voltar ao mapa
          </button>
          <div className="flex-1 flex items-center justify-center gap-3 min-w-0">
            <span className="grid place-items-center w-9 h-9 shrink-0 rounded-full bg-rosa text-white text-[12px] font-semibold tabular-nums">
              {pad(index + 1)}
            </span>
            <span className="min-w-0">
              <span className="block text-[9.5px] font-semibold tracking-[0.18em] uppercase text-ink/45">
                Slide {pad(index + 1)} · {slide.label}
              </span>
              <span className="block font-serif text-[15px] sm:text-[17px] text-ink truncate">
                {slide.title}
              </span>
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="shrink-0 grid place-items-center w-10 h-10 rounded-full card-lux text-marrom-deep"
          >
            <IconClose className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* a peça, em tela cheia — a que entra é "cortada" sobre a que sai */}
      <div className="relative flex-1 min-h-0 pattern-creme grain overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloralPattern color="#8B6B4F" opacity={0.045} />
        </div>
        <div className="relative h-full grid place-items-center px-3 sm:px-16 py-3 sm:py-5">
          <div className="grid w-full h-full place-items-center">
            <AnimatePresence initial={false}>
              <motion.div
                key={slide.id}
                className="[grid-area:1/1] w-full h-full grid place-items-center"
                exit={{ opacity: 0.3, scale: 0.98 }}
                transition={{ duration: 1.25, ease: [0.65, 0, 0.35, 1] }}
              >
                <Reveal mode={slide.reveal} dir={dir}>
                  <div className="rounded-[22px] overflow-hidden card-lux edge-gold p-1.5 mx-auto">
                    <PieceImg
                      slide={slide}
                      priority
                      fade={false}
                      className="rounded-[16px] object-contain max-h-[calc(100dvh-9.5rem)] w-auto max-w-full"
                    />
                  </div>
                </Reveal>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Slide anterior"
          className="hidden md:grid place-items-center absolute z-20 left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-warm text-marrom-deep hover:bg-white transition"
        >
          <IconChevronRight className="w-5 h-5 rotate-180" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Próximo slide"
          className="hidden md:grid place-items-center absolute z-20 right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-warm text-marrom-deep hover:bg-white transition"
        >
          <IconChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* barra inferior */}
      <footer className="shrink-0 glass-warm rounded-none border-x-0 border-b-0 safe-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Slide anterior"
            className="md:hidden grid place-items-center w-10 h-10 rounded-full card-lux text-marrom-deep shrink-0"
          >
            <IconChevronRight className="w-4 h-4 rotate-180" />
          </button>
          <p className="hidden md:block font-serif text-[14px] text-ink/80 truncate min-w-0">
            {slide.caption}
          </p>
          <div className="flex-1 flex items-center justify-center gap-1.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => onGo(i, i > index ? 1 : -1)}
                aria-label={`Ir para o slide ${i + 1}`}
                className={cn(
                  "h-1 rounded-full transition-all",
                  i === index
                    ? "w-8 bg-rosa-deep"
                    : "w-4 bg-ink/20 hover:bg-marrom/50",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Próximo slide"
            className="md:hidden grid place-items-center w-10 h-10 rounded-full card-lux text-marrom-deep shrink-0"
          >
            <IconChevronRight className="w-4 h-4" />
          </button>
          <span className="hidden sm:block text-[10.5px] font-semibold tracking-[0.16em] uppercase text-ink/45 tabular-nums shrink-0">
            Slide {pad(index + 1)} de {pad(SLIDES.length)}
          </span>
        </div>
      </footer>
    </motion.div>
  );
};

/* ============ PÁGINA ============ */
const Proposta = () => {
  const [open, setOpen] = useState<number | null>(null);
  const [dir, setDir] = useState<1 | -1>(1);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Proposta 2026 · Dalpizzol Performance Local";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    window.scrollTo(0, 0);
    return () => {
      document.title = prevTitle;
      meta.remove();
    };
  }, []);

  const openById = useCallback((id: string) => {
    const i = slideIndex(id);
    if (i >= 0) {
      setDir(1);
      setOpen(i);
    }
  }, []);

  const go = useCallback((i: number, d: 1 | -1) => {
    setDir(d);
    setOpen(i);
  }, []);

  const goToMap = useCallback(() => {
    mapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main className="bg-offwhite">
      <Hero onEnter={goToMap} />
      <Mapa
        mapRef={mapRef}
        onOpen={openById}
        openId={open === null ? null : SLIDES[open].id}
      />

      <AnimatePresence>
        {open !== null && (
          <Deck
            index={open}
            dir={dir}
            onClose={() => setOpen(null)}
            onGo={go}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Proposta;
