import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Icon,
  IconChevronRight,
  IconCalendarHeart,
  IconPin,
  IconStar,
  IconTruck,
  IconInstagram,
} from "../icons";
import { CornerFlourish, EdgeWave, GoldRule, Seal } from "../ornaments";
import {
  BRAND,
  CATEGORIES,
  OCCASIONS,
  PRODUCTS,
  TESTIMONIALS,
  GOOGLE_RATING,
  GOOGLE_REVIEWS_URL,
  WHATSAPP_URL,
  type Product,
} from "../data";
import { LinkButton, SectionTitle, WhatsAppIcon } from "../ui";
import { ProductCard } from "../ProductCard";
import { FloralPattern } from "../Pattern";
import { Img } from "../Img";

const ProductSheet = lazy(() =>
  import("../ProductSheet").then(({ ProductSheet }) => ({ default: ProductSheet })),
);
import {
  BlurIn,
  ClipReveal,
  DrawPath,
  FanIn,
  FlipIn,
  Parallax,
  ScrubScale,
  SplitIn,
  StarBurst,
  TiltIn,
  Words,
} from "../motion";

const LEAF_PATHS = [
  "M2 12c8-9 20-9 44 0",
  "M10 8c1.5 3 1.5 5 0 8",
  "M18 6c2 3.5 2 6.5 0 10",
  "M26 5c2 4 2 8 0 12",
  "M34 6c1.5 3.5 1.5 6.5 0 10",
];

const HERO_SLIDES = [...PRODUCTS]
  .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
  .map((product) => {
    const category = CATEGORIES.find((item) => item.id === product.category)?.label ?? "Doces artesanais";
    return {
      product,
      src: product.img.replace(/\.jpg$/i, ".webp"),
      category,
      title: product.name,
      alt: `${product.name}, ${category.toLowerCase()}`,
    };
  });

const HERO_ROTATION_MS = 5200;
const HERO_HEADLINE_LINES = [
  "Bolos artesanais",
  "que transformam",
  "momentos em doces",
  "memórias.",
] as const;
const HERO_HEADLINE_TEXT = HERO_HEADLINE_LINES.join("\n");

/* ============ 1 · HERO — carrossel editorial da vitrine ============ */
const Hero = ({ onOpen }: { onOpen: (product: Product) => void }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [typedHeadlineChars, setTypedHeadlineChars] = useState(0);
  const [isDesktopLayout, setIsDesktopLayout] = useState(false);
  const reduceMotion = useReducedMotion();
  const slide = HERO_SLIDES[slideIndex];

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const updateLayout = () => setIsDesktopLayout(media.matches);
    updateLayout();
    media.addEventListener("change", updateLayout);
    return () => media.removeEventListener("change", updateLayout);
  }, []);

  useEffect(() => {
    if (isDesktopLayout) return;
    const timer = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, HERO_ROTATION_MS);
    return () => window.clearInterval(timer);
  }, [isDesktopLayout]);

  useEffect(() => {
    if (reduceMotion) {
      setTypedHeadlineChars(HERO_HEADLINE_TEXT.length);
      return;
    }

    let typedChars = 0;
    let timer = 0;
    const typeNextCharacter = () => {
      typedChars += 1;
      setTypedHeadlineChars(typedChars);
      if (typedChars < HERO_HEADLINE_TEXT.length) {
        const nextCharacter = HERO_HEADLINE_TEXT[typedChars];
        timer = window.setTimeout(typeNextCharacter, nextCharacter === "\n" ? 300 : 42);
      }
    };

    timer = window.setTimeout(typeNextCharacter, 450);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  useEffect(() => {
    if (isDesktopLayout) return;
    const nextSlide = HERO_SLIDES[(slideIndex + 1) % HERO_SLIDES.length];
    const image = new window.Image();
    image.decoding = "async";
    image.src = nextSlide.src;
  }, [slideIndex, isDesktopLayout]);

  const renderHeadlineLine = (lineIndex: number, className: string) => {
    const text = HERO_HEADLINE_LINES[lineIndex];
    const start = HERO_HEADLINE_LINES.slice(0, lineIndex).reduce((length, line) => length + line.length + 1, 0);
    const visibleText = HERO_HEADLINE_TEXT.slice(start, Math.min(typedHeadlineChars, start + text.length));
    const isTyping = typedHeadlineChars >= start && typedHeadlineChars < start + text.length && !reduceMotion;

    return (
      <span className={`grid min-h-[1.04em] place-items-center ${className}`} aria-hidden="true">
        <span className="invisible col-start-1 row-start-1">{text}</span>
        <span className="col-start-1 row-start-1">
          {visibleText}
          {isTyping && (
            <motion.span
              aria-hidden="true"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="ml-0.5 inline-block h-[0.72em] w-[2px] translate-y-[0.08em] rounded-full bg-current"
            />
          )}
        </span>
      </span>
    );
  };

  return (
  <section className="relative hero-brand border-b border-[#BABDA2]/50 pt-[60px] md:pt-24 pb-10 sm:pb-16 px-5 overflow-hidden lg:flex lg:min-h-[100svh] lg:flex-col lg:pt-[80px] lg:pb-0">
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <FloralPattern color="#BABDA2" opacity={0.2} />
      <svg
        className="absolute inset-0 h-full w-full opacity-45"
        viewBox="0 0 1440 1400"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M-80 280C130 72 360 80 580 110" stroke="#EAC29E" strokeWidth="2" />
        <path d="M1520 1090c-180 165-450 205-690 184" stroke="#BABDA2" strokeWidth="2" />
      </svg>
    </div>

    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center text-center lg:justify-between">
      <motion.figure
        role="group"
        aria-roledescription="carrossel"
        aria-label="Carrossel contínuo de bolos e doces da Doceria Dalpizzol"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="group relative order-first mb-4 w-[calc(100%+1rem)] max-w-[54rem] sm:w-full md:mb-10 lg:hidden"
      >
        <button
            type="button"
            onClick={() => onOpen(slide.product)}
            aria-label={`Ver ${slide.title}`}
            className="relative block aspect-square w-full bg-transparent text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#737A5D] lg:hidden"
          >
            <AnimatePresence initial={false} mode="sync">
              <motion.img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                loading="eager"
                fetchPriority={slideIndex === 0 ? "high" : "auto"}
                decoding="async"
                sizes="(min-width: 900px) 864px, 100vw"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: reduceMotion ? 0.2 : 1.15, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-contain"
              />
            </AnimatePresence>
          </button>
        <figcaption className="mt-1 min-h-[34px] px-1 text-center lg:hidden" aria-live="off" aria-atomic="true">
          <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#737A5D]">
            {slide.category}
          </p>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={slide.title}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: reduceMotion ? 0.12 : 0.35 }}
              className="truncate font-serif text-[15px] leading-tight text-[#4F5145] sm:text-lg"
            >
              {slide.title}
            </motion.p>
          </AnimatePresence>
        </figcaption>
      </motion.figure>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        className="relative z-10 flex w-full flex-col items-center lg:flex-1 lg:justify-center lg:items-start lg:py-10 lg:text-left"
      >
        <p
          aria-label={BRAND.city}
          className="flex items-center justify-center gap-2.5 text-[8px] font-semibold tracking-[0.14em] text-[#626553] uppercase sm:gap-3 sm:text-[10px] sm:tracking-[0.2em] lg:justify-start"
        >
          <span className="h-px w-5 bg-[#D08040] sm:w-10" aria-hidden />
          <IconPin className="h-3.5 w-3.5 shrink-0 text-[#A97A4C]" />
          <span>{BRAND.district} <span className="px-1 text-[#D08040]">·</span> {BRAND.cityState}</span>
          <span className="h-px w-5 bg-[#D08040] sm:w-10" aria-hidden />
        </p>

        <h1 aria-label="Bolos artesanais que transformam momentos em doces memórias" className="mt-3 max-w-5xl font-serif font-semibold leading-[0.98] sm:mt-6 lg:mt-4 lg:max-w-none">
          {renderHeadlineLine(0, "whitespace-nowrap italic text-[#737A5D] text-[clamp(2rem,8.5vw,5.25rem)] lg:place-items-start lg:text-[clamp(2.6rem,3.75vw,3.6rem)]")}
          {renderHeadlineLine(1, "mt-1 text-[#4F5145] text-[clamp(1.4rem,5.8vw,3.1rem)] sm:mt-2 lg:place-items-start lg:text-[clamp(1.5rem,2.75vw,2.5rem)]")}
          {renderHeadlineLine(2, "mt-1 italic leading-[1.02] text-[#C7815C] text-[clamp(1.5rem,6.4vw,3.65rem)] sm:mt-2 lg:place-items-start lg:text-[clamp(1.7rem,2.9vw,2.55rem)]")}
          {renderHeadlineLine(3, "mt-0.5 italic leading-[1.02] text-[#C7815C] text-[clamp(1.8rem,7.2vw,4.2rem)] lg:place-items-start lg:text-[clamp(1.9rem,3.2vw,2.8rem)]")}
        </h1>

        <p className="mt-5 max-w-3xl text-[13px] leading-relaxed text-[#626553] sm:text-[16px] md:text-[18px] lg:mt-4">
          Bolos, doces finos e presentes com sabor único — feitos à mão, todos os dias,
          por duas confeiteiras apaixonadas.
        </p>

        <div className="mt-6 grid w-full max-w-[48rem] grid-cols-2 gap-2.5 sm:mt-8 sm:gap-4 lg:mt-6">
          <Link
            to="/bolos"
            className="inline-flex h-12 items-center justify-center gap-1 rounded-full bg-[#666D52] px-2 text-[10px] font-semibold text-[#FAF5E2] shadow-[0_10px_24px_rgba(115,122,93,0.24)] transition hover:brightness-105 active:scale-[0.97] sm:h-[58px] sm:gap-2 sm:px-6 sm:text-[15px]"
          >
            Ver nossos bolos <IconChevronRight className="h-4 w-4 shrink-0" />
          </Link>
          <LinkButton
            variant="ghost"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 gap-1 rounded-full border border-[#C7815C]/55 px-1.5 text-[10px] text-[#4F5145] hover:bg-[#EAC29E]/35 sm:h-[58px] sm:gap-2 sm:px-6 sm:text-[15px]"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#737A5D] sm:h-5 sm:w-5" />
            Falar no WhatsApp
          </LinkButton>
        </div>

        <svg className="mt-7 h-12 w-64 text-[#A97A4C] sm:mt-9 sm:w-80 lg:mt-6 lg:h-10 lg:w-64" viewBox="0 0 320 48" fill="none" aria-hidden>
          <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            <path d="M8 24h74M238 24h74" />
            <path d="M160 16c-9-12-25-1-16 10l16 14 16-14c9-11-7-22-16-10Z" />
            <path d="M145 27c-20 0-35-5-51-17M175 27c20 0 35-5 51-17" />
            <path d="M108 19c-9-1-14-6-17-12 9 0 15 4 17 12ZM123 25c-8 1-15-1-20-6 8-3 15-1 20 6ZM136 28c-7 3-14 3-20 0 6-5 13-5 20 0Z" />
            <path d="M212 19c9-1 14-6 17-12-9 0-15 4-17 12ZM197 25c8 1 15-1 20-6-8-3-15-1-20 6ZM184 28c7 3 14 3 20 0-6-5-13-5-20 0Z" />
          </g>
        </svg>
      </motion.div>

      <div className="hero-carousel-shell relative left-1/2 mt-8 hidden w-screen -translate-x-1/2 lg:mt-0 lg:block" role="region" aria-label="Vitrine contínua de produtos">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center justify-between gap-3 px-5 py-3 sm:px-7 lg:py-3.5">
            <p className="font-serif text-[13px] font-semibold tracking-wide text-[#4F5145] sm:text-[15px]">
              Vitrine da casa
            </p>
            <p className="text-right text-[9px] font-medium tracking-[0.04em] text-[#737A5D] sm:text-[11px]">
              <span className="xl:hidden">Clique em um doce para ver detalhes</span>
              <span className="hidden xl:inline">15 produtos à vista · clique para ver detalhes</span>
            </p>
          </div>
          <div className="hero-marquee-mask overflow-hidden" aria-live="off">
            <div
              className="hero-marquee-track flex w-max"
              style={{ animationDuration: `${Math.max(1, HERO_SLIDES.length) * 2.5}s` }}
            >
              {[false, true].map((duplicate) => (
                <div
                  key={duplicate ? "loop-copy" : "loop-start"}
                  aria-hidden={duplicate || undefined}
                  className="hero-marquee-set flex shrink-0"
                >
                  {HERO_SLIDES.map((item, index) => (
                    <button
                      key={`${item.product.id}-${index}`}
                      type="button"
                      onClick={() => onOpen(item.product)}
                      tabIndex={duplicate ? -1 : undefined}
                      aria-label={`Ver detalhes de ${item.title}`}
                      title={item.title}
                      className="hero-marquee-item group/hero-slide flex shrink-0 flex-col items-center justify-center gap-1 px-1 py-2 text-center transition-colors hover:bg-white/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#737A5D]"
                    >
                      <span className="hero-marquee-image-frame block transition-transform duration-500 group-hover/hero-slide:scale-[1.03]">
                        <img
                          src={item.src}
                          alt={duplicate ? "" : item.alt}
                          loading={index < 15 ? "eager" : "lazy"}
                          decoding="async"
                          className="block aspect-square h-full w-full object-contain"
                        />
                      </span>
                      <span className="block h-[2.2em] w-full overflow-hidden text-[8px] font-medium leading-[1.1] text-[#4F5145] sm:text-[9px]">
                        {item.title}
                      </span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
/* ============ 2 · CATEGORIAS — leque que abre a partir do centro ============ */
const Categories = () => (
  <section className="px-5 pt-8">
    <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3">
      {CATEGORIES.map((c, i) => (
        <FanIn
          key={c.id}
          index={i}
          total={CATEGORIES.length}
          className={i === CATEGORIES.length - 1 ? "col-span-2 sm:col-span-1" : ""}
        >
          <Link
            to={`/bolos?cat=${c.id}`}
            className="group card-lux flex flex-col items-center gap-2 py-4 active:scale-95 transition"
          >
            <span className="block w-16 h-16 rounded-full p-[3px] bg-gradient-to-br from-dourado/70 via-white to-rosa/50 shadow-[0_6px_16px_-6px_rgba(167,141,109,0.5)]">
              <Img
                src={c.photo}
                alt={c.label}
                loading="lazy"
                wrapperClassName="block w-full h-full rounded-full"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="text-[11px] font-semibold text-marrom-deep tracking-wide">
              {c.label}
            </span>
          </Link>
        </FanIn>
      ))}
    </div>
  </section>
);

/* ============ 3 · INFO — dois cartões que se encontram no centro ============ */
const InfoCards = () => (
  <section className="px-5 pt-4 overflow-hidden">
    <div className="max-w-5xl mx-auto grid grid-cols-2 gap-2.5 sm:gap-3">
      <SplitIn from="left">
        <div className="relative h-full rounded-3xl bg-gradient-to-br from-rosa/25 to-rosa/10 border border-rosa/30 p-4 overflow-hidden">
          <div
            className="absolute -right-8 -bottom-8 w-28 h-28 halo-rosa"
            aria-hidden
          />
          <IconTruck className="relative w-6 h-6 text-rosa-deep" />
          <p className="mt-2 text-[13px] font-semibold text-ink">
            Entrega ou retirada
          </p>
          <p className="text-[11.5px] text-ink/60 leading-snug">
            Escolha como receber.
          </p>
        </div>
      </SplitIn>
      <SplitIn from="right">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-full rounded-3xl bg-gradient-to-br from-salvia/30 to-salvia/12 border border-salvia/40 p-4 active:scale-[0.98] transition overflow-hidden"
        >
          <div
            className="absolute -right-8 -bottom-8 w-28 h-28 halo-salvia"
            aria-hidden
          />
          <WhatsAppIcon className="relative w-6 h-6 text-salvia-deep" />
          <p className="mt-2 text-[13px] font-semibold text-ink">
            Atendimento pelo WhatsApp
          </p>
          <p className="text-[11.5px] text-ink/60 leading-snug">
            Fale com a gente!
          </p>
        </a>
      </SplitIn>
    </div>
  </section>
);

/* ============ 4 · VITRINE — título em cortina + cartões girando em 3D ============ */
const Featured = ({ onOpen }: { onOpen: (p: Product) => void }) => {
  const items = PRODUCTS.filter((p) => p.featured);
  return (
    <section className="pt-10">
      <div className="px-5 max-w-5xl mx-auto flex items-end justify-between">
        <ClipReveal>
          <SectionTitle eyebrow="Os queridinhos" title="Mais pedidos da casa" />
        </ClipReveal>
        <Link
          to="/bolos"
          className="text-[12px] font-semibold text-rosa-deep inline-flex items-center gap-1 shrink-0"
        >
          Ver todos <IconChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      <div className="mt-5 overflow-x-auto no-scrollbar snap-x snap-mandatory md:overflow-visible [perspective:1000px]">
        <div className="flex gap-3 px-5 md:flex-wrap md:justify-center md:gap-4 md:max-w-5xl md:mx-auto md:px-5">
          {items.map((p, i) => (
            <TiltIn
              key={p.id}
              index={i}
              className="snap-start shrink-0 md:w-[calc((100%-2rem)/3)] md:max-w-[250px] lg:w-[calc((100%-3rem)/4)]"
            >
              <ProductCard product={p} onOpen={onOpen} index={0} compact />
            </TiltIn>
          ))}
          <div className="w-2 shrink-0 md:hidden" />
        </div>
      </div>
    </section>
  );
};

/* ============ 5 · BANNER — cresce com o scroll e a folha se desenha ============ */
const OrderBanner = () => (
  <section className="px-5 pt-10">
    <ScrubScale>
      <Link
        to="/encomendar"
        className="max-w-5xl mx-auto block rounded-[28px] card-lux edge-gold grain p-5 sm:p-6 relative overflow-hidden active:scale-[0.99] transition"
      >
        <CornerFlourish
          className="-right-3 -top-3 text-dourado/50"
          flip
          delay={0.25}
        />
        <CornerFlourish
          className="-left-3 -bottom-3 text-dourado/30 rotate-180"
          delay={0.4}
        />
        <div className="flex items-start gap-4">
          <motion.span
            initial={{ rotate: -20, scale: 0.6 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 14,
              delay: 0.2,
            }}
            className="medallion w-14 h-14 shrink-0"
          >
            <IconCalendarHeart className="w-7 h-7 text-rosa-deep" />
          </motion.span>
          <div className="flex-1">
            <p className="font-serif text-lg text-ink leading-snug">
              Encomende com antecedência e garanta a data especial!
            </p>
            <p className="mt-1 text-[12.5px] text-ink/60">
              Bolos personalizados: pedidos com {BRAND.leadTimeHours}h de
              antecedência.
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-rosa-deep">
              Montar meu pedido <IconChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </ScrubScale>
  </section>
);

/* ============ 6 · OCASIÕES — cartas viradas na mesa + fundo em parallax inverso ============ */
const Occasions = () => (
  <>
    <EdgeWave fill="#737A5D" flip className="mt-10 -mb-px text-salvia-deep" />
    <section className="relative py-10 px-5 band-salvia grain overflow-hidden">
      <Parallax
        speed={-0.35}
        className="absolute -inset-y-24 inset-x-0 pointer-events-none"
      >
        <FloralPattern color="#FFFFFF" opacity={0.22} />
      </Parallax>
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center">
          <p className="font-script text-3xl text-creme leading-none">
            Encomendas
          </p>
          <h2 className="mt-1 font-serif text-[26px] sm:text-3xl text-white max-w-lg mx-auto">
            <Words text="Feito sob medida para o seu momento" stagger={0.05} />
          </h2>
          <GoldRule className="mx-auto mt-3 text-creme/70" width={130} />
        </div>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2.5 [perspective:900px]">
          {OCCASIONS.map((o, i) => (
            <FlipIn key={o.id} index={i}>
              <Link
                to={`/encomendar?ocasiao=${encodeURIComponent(o.title)}`}
                className="group relative block h-full rounded-3xl overflow-hidden ring-1 ring-white/60 shadow-[0_16px_36px_-14px_rgba(54,59,43,0.42)] active:scale-[0.98] transition"
              >
                <Img
                  src={o.photo}
                  alt={o.title}
                  loading="lazy"
                  wrapperClassName="w-full"
                  className="w-full h-48 sm:h-52 object-cover transition duration-700 group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(41,46,34,0.94) 0%, rgba(41,46,34,0.78) 30%, rgba(41,46,34,0.34) 58%, rgba(41,46,34,0.06) 82%, transparent 100%)",
                  }}
                />
                <span className="absolute top-3 left-3 inline-grid place-items-center w-9 h-9 rounded-full bg-white/95 text-marrom-deep shadow-[0_4px_12px_-4px_rgba(0,0,0,0.5)]">
                  <Icon name={o.icon} className="w-[19px] h-[19px]" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-3.5">
                  <p className="font-serif text-[16px] text-white leading-tight drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                    {o.title}
                  </p>
                  <p className="text-[11.5px] text-white/85 leading-snug mt-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                    {o.desc}
                  </p>
                </div>
              </Link>
            </FlipIn>
          ))}
        </div>
      </div>
    </section>
    <EdgeWave fill="#737A5D" className="-mt-px rotate-180" />
  </>
);

/* ============ 7 · DEPOIMENTOS — do desfoque ao nítido + estrelas acendendo ============ */
const Testimonials = () => (
  <section className="pt-12">
    <div className="px-5 max-w-5xl mx-auto">
      <BlurIn>
        <div className="text-center">
          <SectionTitle
            center
            eyebrow="Quem prova, volta"
            title="Palavras que adoçam"
          />
          <p className="mt-3 inline-flex items-center gap-2 text-[12.5px] text-ink/70">
            <span className="font-serif text-xl text-ink">
              {GOOGLE_RATING.score}
            </span>
            <StarBurst
              render={() => (
                <IconStar filled className="w-3.5 h-3.5 text-dourado" />
              )}
            />
            <span className="text-ink/55">
              · {GOOGLE_RATING.count} avaliações no Google
            </span>
          </p>
          <GoldRule className="mx-auto mt-2 text-dourado" width={130} />
        </div>
      </BlurIn>
    </div>
    <div className="mt-5 overflow-x-auto no-scrollbar snap-x snap-mandatory md:overflow-visible">
      <div className="flex gap-3 px-5 md:grid md:grid-cols-3 md:max-w-5xl md:mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <BlurIn
            key={t.text}
            index={i}
            className="snap-start shrink-0 w-[78vw] max-w-[320px] md:w-auto md:max-w-none"
          >
            <div className="card-lux p-5 h-full relative overflow-hidden">
              <span
                className="absolute -top-3 right-4 font-serif text-[64px] leading-none text-rosa/25 select-none"
                aria-hidden
              >
                &rdquo;
              </span>
              <div className="mb-2 relative">
                <StarBurst
                  delay={0.2 + i * 0.12}
                  render={() => (
                    <IconStar filled className="w-3.5 h-3.5 text-dourado" />
                  )}
                />
              </div>
              <p className="relative text-[13.5px] text-ink/80 leading-relaxed">
                “{t.text}”
              </p>
              <p className="mt-3 text-[11px] font-semibold text-marrom-deep inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-salvia-deep" />
                {t.name} · avaliação verificada no {t.source}
              </p>
            </div>
          </BlurIn>
        ))}
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="snap-start shrink-0 w-[62vw] max-w-[240px] md:w-auto md:max-w-none card-lux edge-gold p-5 grid place-items-center text-center active:scale-[0.98] transition"
        >
          <span className="medallion w-12 h-12 text-dourado-deep">
            <IconStar className="w-6 h-6" />
          </span>
          <p className="mt-2.5 font-serif text-[15px] text-ink leading-snug">
            Ver todas no Google
          </p>
          <p className="text-[11.5px] text-ink/55 mt-0.5">
            Já é cliente? Conte como foi ♡
          </p>
        </a>
        <div className="w-2 shrink-0 md:hidden" />
      </div>
    </div>
  </section>
);

/* ============ 8 · RODAPÉ — slogan palavra a palavra e ramos desenhados ============ */
export const FooterBand = () => (
  <footer className="relative mt-14 band-salvia grain text-white overflow-hidden">
    <Parallax
      speed={0.25}
      className="absolute -inset-y-20 inset-x-0 pointer-events-none"
    >
      <FloralPattern color="#FFFFFF" opacity={0.12} />
    </Parallax>
    <div className="relative max-w-5xl mx-auto px-5 py-8 text-center">
      <Seal className="w-24 h-24 mx-auto mb-3 text-creme/90" />
      <div className="flex items-center justify-center gap-3 text-white/70">
        <DrawPath d={LEAF_PATHS} className="w-10 shrink-0" duration={1.2} />
        <p className="font-script text-2xl text-white">
          <Words text={`♡ ${BRAND.slogan} ♡`} stagger={0.08} delay={0.2} />
        </p>
        <DrawPath
          d={LEAF_PATHS}
          className="w-10 shrink-0 -scale-x-100"
          duration={1.2}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <a
          href={BRAND.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-start gap-1.5 text-[12.5px] text-white/90 leading-snug hover:text-white transition"
        >
          <IconPin className="w-4 h-4 shrink-0 mt-px" />
          <span>
            {BRAND.street}
            <br />
            {BRAND.district} · {BRAND.cityState} · {BRAND.zip}
          </span>
        </a>
        <p className="mt-2 text-[12px] text-white/80">
          {BRAND.hours} · {BRAND.phoneDisplay}
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-4 rounded-full bg-white/15 text-[12px] font-semibold inline-flex items-center"
          >
            <IconInstagram className="w-4 h-4 mr-1.5" /> {BRAND.instagramHandle}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-4 rounded-full bg-white text-salvia-deep text-[12px] font-semibold inline-flex items-center gap-1.5"
          >
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp
          </a>
        </div>
        <p className="mt-6 text-[10.5px] text-white/60">
          © {new Date().getFullYear()} {BRAND.name} · Feito com amor
        </p>
      </motion.div>
    </div>
  </footer>
);

const Home = () => {
  const [open, setOpen] = useState<Product | null>(null);
  return (
    <>
      <Hero onOpen={setOpen} />
      <Categories />
      <DeferredContent minHeight={120}><InfoCards /></DeferredContent>
      <DeferredContent minHeight={360}><Featured onOpen={setOpen} /></DeferredContent>
      <DeferredContent minHeight={150}><OrderBanner /></DeferredContent>
      <DeferredContent minHeight={470}><Occasions /></DeferredContent>
      <DeferredContent minHeight={360}><Testimonials /></DeferredContent>
      <DeferredContent minHeight={320}><FooterBand /></DeferredContent>
      {open && (
        <Suspense fallback={null}>
          <ProductSheet product={open} onClose={() => setOpen(null)} />
        </Suspense>
      )}
    </>
  );
};

const DeferredContent = ({
  children,
  minHeight,
}: {
  children: React.ReactNode;
  minHeight: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "180px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
};

export default Home;
