import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { BRAND } from "../data";
import { FloralPattern } from "../Pattern";
import { GoldRule, CornerFlourish, EdgeWave, Seal } from "../ornaments";
import { BlurIn, SplitIn, Words } from "../motion";
import {
  Icon,
  IconCheck,
  IconChevronRight,
  IconClose,
  IconPin,
  IconSparkle,
} from "../icons";
import {
  HOTSPOTS,
  PIECES,
  PLAN_CARDS,
  PLAN_INCLUDES,
  SLIDES,
  type Slide,
} from "../proposta/content";

/* =====================================================
   Proposta 2026 — Dalpizzol · Performance Local
   Mapa 3D interativo: a peça de abertura é o mapa,
   cada ponto abre um slide. Rota privada, com noindex.
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

/* ---------- Peça responsiva: 16:9 no desktop, 9:16 no celular ---------- */
const PieceImg = ({
  piece,
  alt,
  className = "",
  priority = false,
}: {
  piece: keyof typeof PIECES;
  alt: string;
  className?: string;
  priority?: boolean;
}) => {
  const [loaded, setLoaded] = useState(false);
  const p = PIECES[piece];
  return (
    <picture className="block w-full">
      <source media="(min-width: 768px)" srcSet={p.wide} />
      <img
        src={p.tall}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "block w-full h-auto transition-[opacity,filter] duration-700 ease-out",
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-md",
          className,
        )}
      />
    </picture>
  );
};

/* ============ 1 · ABERTURA ============ */
const Hero = ({ onEnter }: { onEnter: () => void }) => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.12], [0, reduce ? 0 : -50]);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pattern-creme grain">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={PIECES.capa.wide}
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
          Nove pontos vivos em um mapa 3D. Cada um abre uma camada do plano de
          performance local 2026 — da descoberta até o pedido.
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

        <div className="mt-6">
          <p className="inline-flex items-center gap-1.5 text-[12px] text-ink/55">
            <IconPin className="w-4 h-4 text-salvia-deep" />
            Doceria · {BRAND.district} · Florianópolis, SC
          </p>
        </div>
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
          "absolute w-11 h-11 rounded-full bg-rosa/35",
          "motion-safe:animate-ping motion-safe:[animation-duration:2.6s]",
          active && "bg-dourado/45",
        )}
      />
      <span
        className={cn(
          "relative grid place-items-center w-8 h-8 rounded-full text-[11px] font-semibold tabular-nums",
          "bg-white/95 text-marrom-deep ring-1 ring-dourado/60",
          "shadow-[0_6px_16px_-4px_rgba(43,38,30,0.55)]",
          "transition group-hover:scale-110 group-focus-visible:scale-110",
          active && "bg-rosa text-white ring-white/70",
        )}
      >
        {String(n).padStart(2, "0")}
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
  return (
    <section
      ref={mapRef}
      id="mapa"
      className="relative pattern-creme grain px-4 sm:px-6 py-12 sm:py-16 overflow-hidden scroll-mt-2"
    >
      <div className="absolute inset-0 pointer-events-none">
        <FloralPattern color="#8B6B4F" opacity={0.05} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-script text-rosa-deep text-2xl leading-none">
              O mapa
            </p>
            <h2 className="mt-1 font-serif text-[26px] sm:text-[34px] leading-tight text-ink">
              Performance Local, ponto a ponto
            </h2>
          </div>
          <p className="text-[11px] text-ink/55 tracking-[0.1em] uppercase">
            Toque em um ponto para abrir o slide
          </p>
        </div>
        <GoldRule className="mt-3 text-dourado" width={160} />

        <div className="mt-6 flex gap-5">
          <div className="relative flex-1 min-w-0 rounded-[26px] overflow-hidden card-lux edge-gold p-1.5">
            <div className="relative">
              <PieceImg
                piece="capa"
                alt="Mapa da proposta Dalpizzol Performance Local"
                priority
                className="rounded-[20px]"
              />
              {HOTSPOTS.map((h, i) => {
                const s = SLIDES[slideIndex(h.slide)];
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
            {HOTSPOTS.map((h, i) => (
              <button
                key={h.slide}
                type="button"
                onClick={() => onOpen(h.slide)}
                className={cn(
                  "group flex items-center gap-2 py-1.5 text-[12px] tabular-nums transition",
                  openId === h.slide
                    ? "text-rosa-deep"
                    : "text-ink/35 hover:text-marrom-deep",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "h-px transition-all",
                    openId === h.slide
                      ? "w-5 bg-rosa-deep"
                      : "w-2 bg-ink/25 group-hover:w-4 group-hover:bg-marrom",
                  )}
                />
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto no-scrollbar lg:hidden -mx-4 px-4">
          {HOTSPOTS.map((h, i) => {
            const s = SLIDES[slideIndex(h.slide)];
            return (
              <button
                key={h.slide}
                type="button"
                onClick={() => onOpen(h.slide)}
                className="shrink-0 inline-flex items-center gap-2 rounded-full card-lux px-3.5 py-2 text-[12px] text-ink/75"
              >
                <span className="text-[10px] font-semibold text-dourado-deep tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ============ 3 · DECK ============ */
const PlanBlock = () => (
  <div className="grid sm:grid-cols-2 gap-3">
    <div className="space-y-3">
      {PLAN_CARDS.map((c) => (
        <div
          key={c.label}
          className={cn(
            "card-lux p-4 relative overflow-hidden",
            c.highlight && "edge-gold",
          )}
        >
          {c.highlight && (
            <span className="absolute inset-0 halo-rosa opacity-40 pointer-events-none" />
          )}
          <div className="relative">
            <p
              className={cn(
                "text-[10px] font-semibold tracking-[0.16em] uppercase",
                c.highlight ? "text-dourado-deep" : "text-salvia-deep",
              )}
            >
              {c.label}
            </p>
            <p
              className={cn(
                "mt-1.5 font-serif leading-none whitespace-nowrap",
                c.highlight
                  ? "text-[32px] text-rosa-deep"
                  : "text-[27px] text-ink",
              )}
            >
              {c.prefix && (
                <span className="text-[13px] text-ink/50">{c.prefix}</span>
              )}
              {c.value}
              <span className="text-[14px] text-ink/50">/mês</span>
            </p>
            <p className="mt-1.5 text-[11.5px] text-ink/55 leading-relaxed">
              {c.note}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="card-lux p-4 relative overflow-hidden">
      <CornerFlourish className="absolute -top-1 -right-1 w-14 h-14 text-rosa/50 scale-x-[-1]" />
      <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-marrom-deep">
        Inclui
      </p>
      <ul className="mt-3 space-y-2.5">
        {PLAN_INCLUDES.map((t) => (
          <li
            key={t}
            className="flex gap-2.5 text-[13px] text-ink/80 leading-relaxed"
          >
            <span className="mt-0.5 inline-grid place-items-center w-[17px] h-[17px] shrink-0 rounded-full bg-rosa text-white">
              <IconCheck className="w-3 h-3" strokeWidth={2.4} />
            </span>
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-4 pt-3 border-t border-marrom/10 text-[11.5px] text-ink/55 leading-relaxed">
        Sem fidelidade. A verba de mídia é paga por você diretamente à Meta e ao
        Google — a MAF não intermedeia esse valor.
      </p>
    </div>
  </div>
);

const SlideBody = ({ slide }: { slide: Slide }) => (
  <div className="grid lg:grid-cols-[1.25fr_1fr] gap-5 lg:gap-7 items-start">
    <div className="rounded-[22px] overflow-hidden card-lux edge-gold p-1.5">
      <PieceImg
        piece={slide.piece}
        alt={slide.title}
        priority
        className="rounded-[16px]"
      />
    </div>

    <div>
      <h3 className="font-serif text-[24px] sm:text-[30px] leading-[1.1] text-ink">
        {slide.title}
      </h3>
      <p className="mt-3 text-[14px] text-ink/70 leading-relaxed">
        {slide.lead}
      </p>
      <GoldRule className="mt-4 text-dourado" width={120} />

      {slide.plan ? (
        <div className="mt-5">
          <PlanBlock />
        </div>
      ) : (
        <ul className="mt-5 space-y-3">
          {slide.bullets?.map((b) => (
            <li key={b.title} className="flex gap-3">
              <span className="medallion w-10 h-10 shrink-0 text-rosa-deep">
                <Icon name={b.icon} className="w-5 h-5" />
              </span>
              <span>
                <span className="block font-serif text-[15.5px] leading-snug text-ink">
                  {b.title}
                </span>
                <span className="block mt-0.5 text-[12.5px] text-ink/60 leading-relaxed">
                  {b.desc}
                </span>
              </span>
            </li>
          ))}
        </ul>
      )}

      {slide.notes?.map((n) => (
        <p
          key={n}
          className="mt-5 rounded-2xl band-salvia text-white px-4 py-3 text-[13px] leading-relaxed"
        >
          {n}
        </p>
      ))}
    </div>
  </div>
);

const Deck = ({
  index,
  onClose,
  onGo,
}: {
  index: number;
  onClose: () => void;
  onGo: (i: number) => void;
}) => {
  const slide = SLIDES[index];
  const touch = useRef<number | null>(null);

  const prev = useCallback(
    () => onGo((index - 1 + SLIDES.length) % SLIDES.length),
    [index, onGo],
  );
  const next = useCallback(
    () => onGo((index + 1) % SLIDES.length),
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
      aria-label={`Slide ${index + 1}: ${slide.title}`}
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
      <header className="shrink-0 glass-warm rounded-none border-x-0 border-t-0 safe-top">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-3">
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
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0">
              <span className="block text-[9.5px] font-semibold tracking-[0.18em] uppercase text-ink/45">
                Slide {index + 1} · {slide.label}
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

      <div className="flex-1 overflow-y-auto">
        <div className="relative min-h-full flex items-center max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-9 md:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="w-full"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.42, ease: EASE }}
            >
              <SlideBody slide={slide} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Slide anterior"
        className="hidden md:grid place-items-center absolute z-10 left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-warm text-marrom-deep hover:bg-white transition"
      >
        <IconChevronRight className="w-5 h-5 rotate-180" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Próximo slide"
        className="hidden md:grid place-items-center absolute z-10 right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-warm text-marrom-deep hover:bg-white transition"
      >
        <IconChevronRight className="w-5 h-5" />
      </button>

      <footer className="shrink-0 glass-warm rounded-none border-x-0 border-b-0 safe-bottom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Slide anterior"
            className="md:hidden grid place-items-center w-10 h-10 rounded-full card-lux text-marrom-deep shrink-0"
          >
            <IconChevronRight className="w-4 h-4 rotate-180" />
          </button>
          <div className="flex-1 flex items-center justify-center gap-1.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => onGo(i)}
                aria-label={`Ir para o slide ${i + 1}`}
                className={cn(
                  "h-1 rounded-full transition-all",
                  i === index
                    ? "w-7 bg-rosa-deep"
                    : "w-3.5 bg-ink/20 hover:bg-marrom/50",
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
            Slide {index + 1} de {SLIDES.length}
          </span>
        </div>
      </footer>
    </motion.div>
  );
};

/* ============ 4 · SEÇÕES ============ */
const Contexto = () => (
  <section className="relative px-5 py-14 overflow-hidden">
    <div className="max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <p className="font-script text-rosa-deep text-2xl leading-none">
          O momento
        </p>
        <h2 className="mt-1 font-serif text-[28px] sm:text-[36px] leading-[1.08] text-ink">
          <Words text="A base está pronta. Falta a demanda." />
        </h2>
        <p className="mt-3 text-[13.5px] sm:text-[15px] text-ink/65 leading-relaxed">
          A Dalpizzol já tem marca, conteúdo, presença no Google e agora um
          site-app próprio. O que ainda não existe é um canal que leve gente
          nova até essa estrutura, todo dia.
        </p>
        <GoldRule className="mx-auto mt-4 text-dourado" width={150} />
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <SplitIn from="left">
          <div className="card-lux h-full p-5 relative overflow-hidden">
            <CornerFlourish className="absolute -top-1 -left-1 w-16 h-16 text-salvia/60" />
            <p className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-salvia-deep">
              O que já está de pé
            </p>
            <ul className="mt-3 space-y-2.5">
              {[
                "Identidade visual e marca consolidadas",
                "Conteúdo e relacionamento nas redes, com a Thaís",
                "Perfil no Google com avaliação alta",
                "Site + app mobile-first com catálogo e encomenda",
              ].map((t) => (
                <li
                  key={t}
                  className="flex gap-2.5 text-[13px] text-ink/75 leading-relaxed"
                >
                  <IconCheck className="w-4 h-4 mt-0.5 shrink-0 text-salvia-deep" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </SplitIn>
        <SplitIn from="right">
          <div className="card-lux h-full p-5 relative overflow-hidden">
            <span className="absolute inset-0 halo-rosa opacity-40 pointer-events-none" />
            <p className="relative text-[10.5px] font-semibold tracking-[0.16em] uppercase text-rosa-deep">
              O que ainda falta
            </p>
            <ul className="relative mt-3 space-y-2.5">
              {[
                "Alcançar quem ainda não conhece a doceria",
                "Aparecer na hora em que a pessoa está procurando bolo",
                "Reimpactar quem visitou e não encomendou",
                "Transformar visita em pedido, de forma previsível",
              ].map((t) => (
                <li
                  key={t}
                  className="flex gap-2.5 text-[13px] text-ink/75 leading-relaxed"
                >
                  <IconChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-rosa-deep" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </SplitIn>
      </div>
    </div>
  </section>
);

const Galeria = ({ onOpen }: { onOpen: (id: string) => void }) => (
  <section className="relative pattern-creme grain px-5 py-14 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <FloralPattern color="#8B6B4F" opacity={0.05} />
    </div>
    <div className="relative max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <p className="font-script text-rosa-deep text-2xl leading-none">
          Todas as camadas
        </p>
        <h2 className="mt-1 font-serif text-[28px] sm:text-[36px] leading-[1.08] text-ink">
          <Words text="Os nove slides da proposta" />
        </h2>
        <GoldRule className="mx-auto mt-4 text-dourado" width={150} />
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SLIDES.map((s, i) => (
          <BlurIn key={s.id} index={i % 3} className="h-full">
            <button
              type="button"
              onClick={() => onOpen(s.id)}
              className="group text-left w-full h-full card-lux p-4 active:scale-[0.985] transition"
            >
              <span className="flex items-center gap-2">
                <span className="grid place-items-center w-7 h-7 rounded-full bg-rosa/15 text-rosa-deep text-[11px] font-semibold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-salvia-deep">
                  {s.label}
                </span>
              </span>
              <span className="block mt-2 font-serif text-[17px] leading-snug text-ink">
                {s.title}
              </span>
              <span className="block mt-1.5 text-[12.5px] text-ink/60 leading-relaxed line-clamp-3">
                {s.lead}
              </span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-marrom-deep">
                Abrir slide
                <IconChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </button>
          </BlurIn>
        ))}
      </div>
    </div>
  </section>
);

const Fechamento = () => (
  <>
    <EdgeWave fill="#8A9A76" />
    <section className="relative band-salvia px-5 py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <FloralPattern color="#FFFFFF" opacity={0.1} />
      </div>
      <div className="relative max-w-3xl mx-auto text-center">
        <Seal className="mx-auto w-24 h-24 text-white/90" />
        <h2 className="mt-6 font-serif text-[26px] sm:text-[36px] leading-tight text-white">
          <Words text="Mais descoberta. Mais autoridade." />{" "}
          <span className="italic text-rosa-soft">
            <Words text="Mais pedidos." delay={0.3} />
          </span>
        </h2>
        <p className="mt-4 text-[14px] sm:text-[15.5px] text-white/85 leading-relaxed">
          Vamos transformar presença digital em demanda real para a Dalpizzol.
        </p>
        <GoldRule className="mx-auto mt-6 text-white/60" width={170} />
        <div className="mt-6 flex flex-col items-center gap-1 text-white/80">
          <img
            src={BRAND.logo}
            alt={BRAND.name}
            className="w-16 h-16 object-contain opacity-95"
          />
          <p className="mt-1 text-[12.5px]">{BRAND.addressFull}</p>
          <p className="text-[12px] text-white/65">
            Proposta preparada pela MAF Inteligência Operacional · 2026
          </p>
        </div>
      </div>
    </section>
  </>
);

/* ============ PÁGINA ============ */
const Proposta = () => {
  const [open, setOpen] = useState<number | null>(null);
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
    if (i >= 0) setOpen(i);
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
      <Contexto />
      <Galeria onOpen={openById} />
      <Fechamento />

      <AnimatePresence>
        {open !== null && (
          <Deck index={open} onClose={() => setOpen(null)} onGo={setOpen} />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Proposta;
