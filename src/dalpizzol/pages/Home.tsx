import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  HERO_IMAGE,
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

/* ============ 1 · HERO — composição editorial da referência oficial ============ */
const Hero = () => (
  <section className="relative hero-cinematic border-b border-[#D96A29]/45 pt-[108px] md:pt-36 pb-10 sm:pb-16 px-5 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <FloralPattern color="#D96A29" opacity={0.09} />
      <svg
        className="absolute inset-0 h-full w-full opacity-45"
        viewBox="0 0 1440 1400"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M-80 280C130 72 360 80 580 110" stroke="#D96A29" strokeWidth="2" />
        <path d="M1520 1090c-180 165-450 205-690 184" stroke="#D96A29" strokeWidth="2" />
      </svg>
    </div>

    <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
      <motion.figure
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative order-first mb-7 w-[calc(100%+2.5rem)] max-w-[54rem] sm:w-full md:mb-10"
      >
        <div className="absolute -inset-3 rounded-[28px] bg-[#D96A29]/15 blur-2xl" aria-hidden />
        <div className="relative overflow-hidden rounded-[18px] border border-[#D96A29]/35 bg-[#2B170F] shadow-[0_28px_80px_rgba(15,7,3,0.52)] sm:rounded-[26px]">
          <Img
            src={HERO_IMAGE}
            alt="Fatia de bolo de chocolate com camadas de creme e biscoito Oreo"
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 900px) 864px, 100vw"
            wrapperClassName="relative overflow-hidden"
            className="aspect-square w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2B170F]/35 via-transparent to-[#2B170F]/10" aria-hidden />
        </div>
      </motion.figure>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        className="relative z-10 flex w-full flex-col items-center"
      >
        <p
          aria-label={BRAND.city}
          className="flex items-center justify-center gap-2.5 text-[8px] font-semibold tracking-[0.14em] text-[#F2EDDC]/90 uppercase sm:gap-3 sm:text-[10px] sm:tracking-[0.2em]"
        >
          <span className="h-px w-5 bg-[#D96A29] sm:w-10" aria-hidden />
          <IconPin className="h-3.5 w-3.5 shrink-0 text-[#D96A29]" />
          <span>{BRAND.district} <span className="px-1 text-[#D96A29]">·</span> {BRAND.cityState}</span>
          <span className="h-px w-5 bg-[#D96A29] sm:w-10" aria-hidden />
        </p>

        <h1 className="mt-6 max-w-5xl font-serif font-semibold leading-[0.98]">
          <span className="block italic text-[#F2EDDC] text-[clamp(2.25rem,8vw,5rem)]">
            Bolos artesanais
          </span>
          <span className="mt-1 block text-[#F2EDDC] text-[clamp(1.9rem,5.8vw,3.8rem)]">
            que transformam
          </span>
          <span className="mt-1 block italic text-[#D96A29] text-[clamp(1.75rem,5.4vw,3.5rem)]">
            momentos em doces memórias.
          </span>
        </h1>

        <p className="mt-5 max-w-3xl text-[13px] leading-relaxed text-[#F2EDDC]/85 sm:text-[16px] md:text-[18px]">
          Bolos, doces finos e presentes com sabor único — feitos à mão, todos os dias,
          por duas confeiteiras apaixonadas.
        </p>

        <div className="mt-6 grid w-full max-w-[48rem] grid-cols-2 gap-2.5 sm:mt-8 sm:gap-4">
          <Link
            to="/bolos"
            className="inline-flex h-12 items-center justify-center gap-1 rounded-full bg-gradient-to-r from-[#F0781C] to-[#C94A0A] px-2 text-[10px] font-semibold text-white shadow-[0_10px_28px_rgba(217,106,41,0.28)] transition hover:brightness-110 active:scale-[0.97] sm:h-[58px] sm:gap-2 sm:px-6 sm:text-[15px]"
          >
            Ver nossos bolos <IconChevronRight className="h-4 w-4 shrink-0" />
          </Link>
          <LinkButton
            variant="ghost"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 gap-1 rounded-full border border-[#F2B591]/80 px-1.5 text-[10px] text-[#F2EDDC] hover:bg-[#A66D3C]/25 sm:h-[58px] sm:gap-2 sm:px-6 sm:text-[15px]"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#F2B591] sm:h-5 sm:w-5" />
            Falar no WhatsApp
          </LinkButton>
        </div>

        <svg className="mt-7 h-12 w-64 text-[#D96A29] sm:mt-9 sm:w-80" viewBox="0 0 320 48" fill="none" aria-hidden>
          <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            <path d="M8 24h74M238 24h74" />
            <path d="M160 16c-9-12-25-1-16 10l16 14 16-14c9-11-7-22-16-10Z" />
            <path d="M145 27c-20 0-35-5-51-17M175 27c20 0 35-5 51-17" />
            <path d="M108 19c-9-1-14-6-17-12 9 0 15 4 17 12ZM123 25c-8 1-15-1-20-6 8-3 15-1 20 6ZM136 28c-7 3-14 3-20 0 6-5 13-5 20 0Z" />
            <path d="M212 19c9-1 14-6 17-12-9 0-15 4-17 12ZM197 25c8 1 15-1 20-6-8-3-15-1-20 6ZM184 28c7 3 14 3 20 0-6-5-13-5-20 0Z" />
          </g>
        </svg>
      </motion.div>
    </div>
  </section>
);
/* ============ 2 · CATEGORIAS — leque que abre a partir do centro ============ */
const Categories = () => (
  <section className="px-5 pt-8">
    <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3">
      {CATEGORIES.map((c, i) => (
        <FanIn key={c.id} index={i} total={CATEGORIES.length}>
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
    <EdgeWave fill="#A66D3C" flip className="mt-10 -mb-px text-salvia-deep" />
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
                className="group relative block h-full rounded-3xl overflow-hidden ring-1 ring-white/60 shadow-[0_16px_36px_-14px_rgba(43,38,30,0.6)] active:scale-[0.98] transition"
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
                      "linear-gradient(to top, rgba(38,33,26,0.94) 0%, rgba(38,33,26,0.78) 30%, rgba(38,33,26,0.34) 58%, rgba(38,33,26,0.06) 82%, transparent 100%)",
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
    <EdgeWave fill="#A66D3C" className="-mt-px rotate-180" />
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
      <Hero />
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
