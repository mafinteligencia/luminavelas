import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ChevronRight,
  Truck,
  CalendarHeart,
  Star,
  MapPin,
  Clock,
  ChevronDown,
} from "lucide-react";
import {
  BRAND,
  CATEGORIES,
  HERO_IMAGE,
  OCCASIONS,
  PRODUCTS,
  TESTIMONIALS,
  WHATSAPP_URL,
  type Product,
} from "../data";
import { LinkButton, SectionTitle, WhatsAppIcon } from "../ui";
import { ProductCard } from "../ProductCard";
import { ProductSheet } from "../ProductSheet";
import { FloralPattern } from "../Pattern";
import { Img } from "../Img";
import {
  BlurIn,
  ClipReveal,
  CountUp,
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

/* ============ 1 · HERO — parallax em camadas + saída suave ao rolar ============ */
const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const imgRotate = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const patternY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const s = (v: unknown) => (reduce ? undefined : (v as never));

  return (
    <section
      ref={ref}
      className="relative pattern-creme pt-24 pb-14 px-5 overflow-hidden"
    >
      <motion.div
        style={{ y: s(patternY) }}
        className="absolute -inset-y-16 inset-x-0 pointer-events-none"
      >
        <FloralPattern color="#8B6B4F" opacity={0.09} />
      </motion.div>

      <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          style={{ y: s(textY), opacity: s(textOpacity) }}
          className="relative z-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.25em] uppercase text-salvia-deep bg-white/70 px-3 py-1.5 rounded-full"
          >
            <MapPin className="w-3 h-3" /> {BRAND.city}
          </motion.p>
          <h1 className="mt-4 font-serif text-[38px] leading-[1.05] sm:text-5xl md:text-[56px] text-ink">
            <motion.span
              initial={{ opacity: 0, x: -24, rotate: -3 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-script text-rosa-deep text-[46px] sm:text-6xl md:text-7xl leading-none block -mb-1 origin-left"
            >
              Feito com amor,
            </motion.span>
            <Words
              text="para momentos inesquecíveis."
              delay={0.35}
              stagger={0.09}
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 text-[14.5px] sm:text-base text-ink/70 leading-relaxed max-w-md"
          >
            Bolos, doces finos e presentes com sabor — feitos à mão, todos os
            dias, por duas confeiteiras apaixonadas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row gap-2.5"
          >
            <Link
              to="/bolos"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 h-12 text-[13px] font-semibold bg-rosa text-white shadow-[0_10px_26px_rgba(235,160,166,0.45)] active:scale-[0.97] transition"
            >
              Ver nossos bolos <ChevronRight className="w-4 h-4" />
            </Link>
            <LinkButton
              variant="ghost"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="w-4 h-4 text-salvia-deep" /> Falar no
              WhatsApp
            </LinkButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95 }}
            className="mt-6 flex items-center gap-4 text-[11.5px] text-ink/60"
          >
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-dourado" fill="#D1B071" />
              <CountUp to={1300} suffix="+ clientes" />
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-salvia-deep" /> {BRAND.hours}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: s(imgY), rotate: s(imgRotate), scale: s(imgScale) }}
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm md:max-w-md"
        >
          <div
            className="absolute -inset-4 rounded-[40px] bg-rosa/25 blur-2xl"
            aria-hidden
          />
          <Img
            src={HERO_IMAGE}
            alt="Bolo de Oreo da Doceria Dalpizzol"
            wrapperClassName="relative rounded-[36px] shadow-[0_24px_60px_rgba(139,107,79,0.25)] ring-4 ring-white/70"
            className="w-full aspect-[4/4.2] object-cover"
          />
          <motion.span
            aria-hidden
            animate={{ y: [0, -6, 0], rotate: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-3 -left-2 sm:-left-4 w-12 h-12 rounded-full bg-white shadow-[0_8px_20px_rgba(139,107,79,0.18)] grid place-items-center text-2xl"
          >
            🍰
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-64 card-soft px-4 py-3 flex items-center gap-3"
          >
            <img src={BRAND.logo} alt="" className="w-10 h-10 rounded-full" />
            <div className="leading-tight">
              <p className="text-[12px] font-semibold text-ink">
                Feito com ingredientes selecionados
              </p>
              <p className="font-script text-rosa-deep text-lg leading-none mt-0.5">
                Feito com amor ♡
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: s(cueOpacity) }}
        className="relative mt-10 flex justify-center text-marrom/60 md:hidden"
        aria-hidden
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="inline-flex flex-col items-center gap-0.5 text-[10px] tracking-[0.2em] uppercase"
        >
          role
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </motion.div>
    </section>
  );
};

/* ============ 2 · CATEGORIAS — leque que abre a partir do centro ============ */
const Categories = () => (
  <section className="px-5 pt-8">
    <div className="max-w-5xl mx-auto grid grid-cols-4 gap-2 sm:gap-3">
      {CATEGORIES.map((c, i) => (
        <FanIn key={c.id} index={i} total={CATEGORIES.length}>
          <Link
            to={`/bolos?cat=${c.id}`}
            className="card-soft flex flex-col items-center gap-1.5 py-3.5 active:scale-95 transition"
          >
            <span className="w-11 h-11 rounded-2xl bg-creme grid place-items-center text-[22px]">
              {c.emoji}
            </span>
            <span className="text-[11px] font-semibold text-marrom-deep">
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
        <div className="h-full rounded-3xl bg-rosa/15 border border-rosa/30 p-4">
          <Truck className="w-5 h-5 text-rosa-deep" />
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
          className="block h-full rounded-3xl bg-salvia/20 border border-salvia/40 p-4 active:scale-[0.98] transition"
        >
          <WhatsAppIcon className="w-5 h-5 text-salvia-deep" />
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
          Ver todos <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      <div className="mt-5 overflow-x-auto no-scrollbar snap-x snap-mandatory md:overflow-visible [perspective:1000px]">
        <div className="flex gap-3 px-5 md:grid md:grid-cols-4 md:max-w-5xl md:mx-auto">
          {items.map((p, i) => (
            <TiltIn
              key={p.id}
              index={i}
              className="snap-start shrink-0 md:shrink"
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
        className="max-w-5xl mx-auto block rounded-[28px] bg-creme border border-dourado/40 p-5 sm:p-6 relative overflow-hidden active:scale-[0.99] transition"
      >
        <DrawPath
          d={LEAF_PATHS}
          className="absolute -right-2 -top-2 w-28 text-dourado/60"
          delay={0.3}
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
            className="w-12 h-12 rounded-2xl bg-white grid place-items-center shrink-0"
          >
            <CalendarHeart className="w-6 h-6 text-rosa-deep" />
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
              Montar meu pedido <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </ScrubScale>
  </section>
);

/* ============ 6 · OCASIÕES — cartas viradas na mesa + fundo em parallax inverso ============ */
const Occasions = () => (
  <section className="relative mt-10 py-10 px-5 bg-salvia/15 overflow-hidden">
    <Parallax
      speed={-0.35}
      className="absolute -inset-y-24 inset-x-0 pointer-events-none"
    >
      <FloralPattern color="#8A9A76" opacity={0.14} />
    </Parallax>
    <div className="relative max-w-5xl mx-auto">
      <SectionTitle
        eyebrow="Encomendas"
        title={
          <Words text="Feito sob medida para o seu momento" stagger={0.05} />
        }
      />
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2.5 [perspective:900px]">
        {OCCASIONS.map((o, i) => (
          <FlipIn key={o.id} index={i}>
            <Link
              to={`/encomendar?ocasiao=${encodeURIComponent(o.title)}`}
              className="block h-full rounded-3xl bg-white/90 border border-white p-4 shadow-[0_8px_24px_rgba(139,107,79,0.08)] active:scale-[0.98] transition"
            >
              <span className="text-[22px]">{o.emoji}</span>
              <p className="mt-2 font-serif text-[15px] text-ink">{o.title}</p>
              <p className="text-[11.5px] text-ink/60 leading-snug mt-0.5">
                {o.desc}
              </p>
            </Link>
          </FlipIn>
        ))}
      </div>
    </div>
  </section>
);

/* ============ 7 · DEPOIMENTOS — do desfoque ao nítido + estrelas acendendo ============ */
const Testimonials = () => (
  <section className="pt-12">
    <div className="px-5 max-w-5xl mx-auto">
      <BlurIn>
        <SectionTitle eyebrow="Quem prova, volta" title="Palavras que adoçam" />
      </BlurIn>
    </div>
    <div className="mt-5 overflow-x-auto no-scrollbar snap-x snap-mandatory md:overflow-visible">
      <div className="flex gap-3 px-5 md:grid md:grid-cols-3 md:max-w-5xl md:mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <BlurIn
            key={t.name}
            index={i}
            className="snap-start shrink-0 w-[78vw] max-w-[320px] md:w-auto md:max-w-none"
          >
            <div className="card-soft p-5 h-full">
              <div className="mb-2">
                <StarBurst
                  delay={0.2 + i * 0.12}
                  render={() => (
                    <Star className="w-3.5 h-3.5 text-dourado" fill="#D1B071" />
                  )}
                />
              </div>
              <p className="text-[13.5px] text-ink/75 leading-relaxed">
                “{t.text}”
              </p>
              <p className="mt-3 text-[11.5px] font-semibold text-marrom-deep">
                {t.name}
              </p>
            </div>
          </BlurIn>
        ))}
        <div className="w-2 shrink-0 md:hidden" />
      </div>
    </div>
  </section>
);

/* ============ 8 · RODAPÉ — slogan palavra a palavra e ramos desenhados ============ */
export const FooterBand = () => (
  <footer className="relative mt-14 bg-salvia-deep text-white overflow-hidden">
    <Parallax
      speed={0.25}
      className="absolute -inset-y-20 inset-x-0 pointer-events-none"
    >
      <FloralPattern color="#FFFFFF" opacity={0.12} />
    </Parallax>
    <div className="relative max-w-5xl mx-auto px-5 py-8 text-center">
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
        <p className="mt-4 text-[12px] text-white/80 inline-flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" /> {BRAND.city}
        </p>
        <p className="mt-1 text-[12px] text-white/80">
          {BRAND.hours} · {BRAND.phoneDisplay}
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-4 rounded-full bg-white/15 text-[12px] font-semibold inline-flex items-center"
          >
            Instagram {BRAND.instagramHandle}
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
      <InfoCards />
      <Featured onOpen={setOpen} />
      <OrderBanner />
      <Occasions />
      <Testimonials />
      <FooterBand />
      <ProductSheet product={open} onClose={() => setOpen(null)} />
    </>
  );
};

export default Home;
