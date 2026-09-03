import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { BRAND } from "../data";
import { cn } from "@/lib/utils";
import { FloralPattern } from "../Pattern";
import { GoldRule, CornerFlourish, EdgeWave, Seal } from "../ornaments";
import {
  BlurIn,
  ClipReveal,
  FanIn,
  FlipIn,
  ScrollProgressBar,
  SplitIn,
  TiltIn,
  Words,
} from "../motion";
import {
  Icon,
  IconCheck,
  IconChevronRight,
  IconPin,
  IconSparkle,
  type IconKey,
} from "../icons";

import capa from "@/assets/dalpizzol/proposta/capa.webp";
import metaPiece from "@/assets/dalpizzol/proposta/meta.webp";
import googlePiece from "@/assets/dalpizzol/proposta/google.webp";
import ecossistemaPiece from "@/assets/dalpizzol/proposta/ecossistema.webp";
import planoPiece from "@/assets/dalpizzol/proposta/plano.webp";
import capaV from "@/assets/dalpizzol/proposta/capa-v.webp";
import metaV from "@/assets/dalpizzol/proposta/meta-v.webp";
import googleV from "@/assets/dalpizzol/proposta/google-v.webp";
import ecossistemaV from "@/assets/dalpizzol/proposta/ecossistema-v.webp";
import planoV from "@/assets/dalpizzol/proposta/plano-v.webp";

/* =====================================================
   Proposta 2026 — Dalpizzol · Performance Local
   Rota privada (/proposta2026): fora da navegação e com noindex.
   Conteúdo espelha as 5 peças 3D aprovadas pela MAF.
   ===================================================== */

/* ---------- Peça 3D em moldura, com plinto e leve profundidade ---------- */
const Piece = ({
  wide,
  tall,
  alt,
  priority = false,
}: {
  /** peça 16:9 — usada de 768px para cima */
  wide: string;
  /** peça 9:16 — usada no celular, onde a horizontal ficaria ilegível */
  tall: string;
  alt: string;
  priority?: boolean;
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <TiltIn>
      <figure className="piece-3d relative">
        <div className="relative rounded-[26px] overflow-hidden card-lux edge-gold p-1.5">
          <picture className="block overflow-hidden rounded-[20px] bg-creme-deep">
            <source media="(min-width: 768px)" srcSet={wide} />
            <img
              src={tall}
              alt={alt}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              onLoad={() => setLoaded(true)}
              className={cn(
                "block w-full h-auto rounded-[20px] transition-[opacity,transform,filter] duration-700 ease-out",
                loaded
                  ? "opacity-100 scale-100 blur-0"
                  : "opacity-0 scale-[1.03] blur-sm",
              )}
            />
          </picture>
        </div>
      </figure>
    </TiltIn>
  );
};

/* ---------- Card de ponto, com base sálvia (eco dos pedestais das peças) ---------- */
const PointCard = ({
  n,
  icon,
  title,
  desc,
}: {
  n: number;
  icon: IconKey;
  title: string;
  desc: string;
}) => (
  <div className="relative h-full">
    <div className="card-lux h-full p-4 pb-5">
      <span className="medallion w-11 h-11 text-rosa-deep">
        <Icon name={icon} className="w-[21px] h-[21px]" />
      </span>
      <p className="mt-3 text-[10.5px] font-semibold tracking-[0.14em] uppercase text-dourado-deep">
        {String(n).padStart(2, "0")}
      </p>
      <h3 className="font-serif text-[16px] leading-snug text-ink mt-0.5">
        {title}
      </h3>
      <p className="mt-1.5 text-[12.5px] text-ink/65 leading-relaxed">{desc}</p>
    </div>
    <span
      aria-hidden
      className="absolute inset-x-4 -bottom-1.5 h-3 rounded-b-2xl bg-salvia-deep/25 blur-[2px]"
    />
  </div>
);

const SectionHead = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center max-w-2xl mx-auto">
    <p className="font-script text-rosa-deep text-2xl leading-none">
      {eyebrow}
    </p>
    <h2 className="mt-1 font-serif text-[28px] sm:text-[38px] leading-[1.08] text-ink">
      <Words text={title} />
    </h2>
    {subtitle && (
      <p className="mt-3 text-[13.5px] sm:text-[15px] text-ink/65 leading-relaxed">
        {subtitle}
      </p>
    )}
    <GoldRule className="mx-auto mt-4 text-dourado" width={150} />
  </div>
);

/* ============ 1 · ABERTURA ============ */
const Abertura = () => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.18], [0, reduce ? 0 : -40]);

  return (
    <section className="relative pattern-creme grain overflow-hidden pt-16 pb-14 px-5">
      <div className="absolute inset-0 pointer-events-none">
        <FloralPattern color="#8B6B4F" opacity={0.06} />
      </div>
      <motion.div style={{ y }} className="relative max-w-5xl mx-auto">
        <div className="text-center">
          <ClipReveal>
            <img
              src={BRAND.logo}
              alt={BRAND.name}
              className="w-20 h-20 object-contain mx-auto drop-shadow-[0_10px_20px_rgba(139,107,79,0.25)]"
            />
          </ClipReveal>
          <p className="mt-4 inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.22em] uppercase text-marrom-deep glass-warm rounded-full px-4 py-2">
            <IconSparkle className="w-3.5 h-3.5" /> Proposta 2026
          </p>
          <h1 className="mt-4 font-serif text-[34px] sm:text-[52px] leading-[1.03] text-ink">
            <span className="block text-rosa-deep">
              <Words text="Dalpizzol" />
            </span>
            <span className="block text-salvia-deep">
              <Words text="Performance Local" delay={0.18} />
            </span>
          </h1>
          <p className="mt-3 font-serif italic text-[15px] sm:text-[19px] text-marrom-deep">
            Upsell de posicionamento · Meta Ads + Google Ads
          </p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] text-ink/60">
            <IconPin className="w-4 h-4 text-rosa-deep" />
            Doceria · {BRAND.district} · Florianópolis, SC
          </p>
          <GoldRule className="mx-auto mt-4 text-dourado" width={170} />
        </div>

        <div className="mt-8">
          <Piece
            wide={capa}
            tall={capaV}
            alt="Dalpizzol — Performance Local"
            priority
          />
        </div>

        <div className="mt-9 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              icon: "search" as IconKey,
              title: "Google",
              desc: "Presença local, avaliações e descoberta.",
            },
            {
              icon: "instagram" as IconKey,
              title: "Social media com Thaís",
              desc: "Conteúdo, relacionamento e consistência.",
            },
            {
              icon: "store" as IconKey,
              title: "Site + app mobile-first",
              desc: "Catálogo, encomendas e experiência 2026.",
            },
            {
              icon: "sparkle" as IconKey,
              title: "Meta Ads + Google Ads",
              desc: "Tráfego qualificado e mais pedidos.",
            },
          ].map((c, i, arr) => (
            <FanIn key={c.title} index={i} total={arr.length}>
              <div className="card-lux h-full p-4 text-center">
                <span className="medallion w-11 h-11 mx-auto text-salvia-deep">
                  <Icon name={c.icon} className="w-[21px] h-[21px]" />
                </span>
                <h3 className="mt-2.5 font-serif text-[15px] leading-snug text-ink">
                  {c.title}
                </h3>
                <p className="mt-1 text-[11.5px] text-ink/60 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </FanIn>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

/* ============ 2 · O QUE JÁ EXISTE / O QUE FALTA ============ */
const Contexto = () => (
  <section className="relative px-5 py-14 overflow-hidden">
    <div className="max-w-5xl mx-auto">
      <SectionHead
        eyebrow="O momento"
        title="A base está pronta. Falta a demanda."
        subtitle="A Dalpizzol já tem marca, conteúdo, presença no Google e agora um site-app próprio. O que ainda não existe é um canal que leve gente nova até essa estrutura, todo dia."
      />
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

/* ============ 3 · META ADS ============ */
const META = [
  {
    icon: "pin" as IconKey,
    title: "Alcance local",
    desc: "Atrai pessoas da Barra da Lagoa e região — quem realmente pode chegar até a loja.",
  },
  {
    icon: "bonbon" as IconKey,
    title: "Criativos que dão água na boca",
    desc: "Bolos, doces e momentos especiais em peças feitas para parar o dedo no feed.",
  },
  {
    icon: "family" as IconKey,
    title: "Remarketing",
    desc: "Reimpacta quem já visitou o perfil ou o site e ainda não encomendou.",
  },
  {
    icon: "bag" as IconKey,
    title: "Mais pedidos",
    desc: "Leva a pessoa direto ao site ou ao WhatsApp, com o caminho mais curto possível.",
  },
];

const MetaAds = () => (
  <section className="relative pattern-creme grain px-5 py-14 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <FloralPattern color="#8B6B4F" opacity={0.05} />
    </div>
    <div className="relative max-w-5xl mx-auto">
      <SectionHead
        eyebrow="Etapa 1"
        title="Meta Ads"
        subtitle="Descoberta, desejo e lembrança de marca — no Instagram e no Facebook."
      />
      <div className="mt-8">
        <Piece
          wide={metaPiece}
          tall={metaV}
          alt="Meta Ads — descoberta, desejo e lembrança de marca"
        />
      </div>
      <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {META.map((p, i) => (
          <BlurIn key={p.title} index={i} className="h-full">
            <PointCard n={i + 1} {...p} />
          </BlurIn>
        ))}
      </div>
      <p className="mt-8 text-center font-serif text-[16px] sm:text-[19px] text-ink/80">
        Mais descoberta <span className="text-dourado">·</span>{" "}
        <span className="text-rosa-deep">Mais desejo</span>{" "}
        <span className="text-dourado">·</span> Mais pedidos
      </p>
    </div>
  </section>
);

/* ============ 4 · GOOGLE ADS ============ */
const GOOGLE = [
  {
    icon: "search" as IconKey,
    title: "Busca com intenção",
    desc: "Quem procura bolo ou doceria já quer comprar. A intenção está pronta.",
  },
  {
    icon: "pin" as IconKey,
    title: "Presença local",
    desc: "Aparecer melhor no Google e no Maps, na hora da decisão.",
  },
  {
    icon: "store" as IconKey,
    title: "Palavras-chave",
    desc: "“bolo Barra da Lagoa”, “doceria Barra da Lagoa” e as buscas do bairro.",
  },
  {
    icon: "truck" as IconKey,
    title: "Tráfego qualificado",
    desc: "Leva ao site pessoas prontas para encomendar, não curiosos.",
  },
];

const GoogleAds = () => (
  <section className="relative px-5 py-14">
    <div className="max-w-5xl mx-auto">
      <SectionHead
        eyebrow="Etapa 2"
        title="Google Ads"
        subtitle="Capturar quem já está procurando — e chegar antes da concorrência."
      />
      <div className="mt-8">
        <Piece
          wide={googlePiece}
          tall={googleV}
          alt="Google Ads — capturar quem já está procurando"
        />
      </div>
      <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {GOOGLE.map((p, i) => (
          <FlipIn key={p.title} index={i} className="h-full">
            <PointCard n={i + 1} {...p} />
          </FlipIn>
        ))}
      </div>
      <p className="mt-8 text-center font-serif text-[16px] sm:text-[19px] text-ink/80">
        Mais busca <span className="text-dourado">·</span> Mais confiança{" "}
        <span className="text-dourado">·</span>{" "}
        <span className="text-rosa-deep">Mais conversões</span>
      </p>
    </div>
  </section>
);

/* ============ 5 · ECOSSISTEMA ============ */
const FLUXO: { label: string; icon: IconKey }[] = [
  { label: "Descoberta", icon: "search" },
  { label: "Desejo", icon: "heart" },
  { label: "Busca", icon: "pin" },
  { label: "Pedido", icon: "bag" },
];

const Ecossistema = () => (
  <>
    <EdgeWave fill="#8A9A76" />
    <section className="relative band-salvia px-5 py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <FloralPattern color="#FFFFFF" opacity={0.09} />
      </div>
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-script text-white/85 text-2xl leading-none">
            Como tudo se conecta
          </p>
          <h2 className="mt-1 font-serif text-[28px] sm:text-[38px] leading-[1.08] text-white">
            <Words text="Ecossistema de performance" />
          </h2>
          <p className="mt-3 font-serif italic text-[15px] sm:text-[18px] text-white/85">
            Conteúdo + Google + Site + Tráfego
          </p>
          <GoldRule className="mx-auto mt-4 text-white/60" width={150} />
        </div>

        <div className="mt-8">
          <Piece
            wide={ecossistemaPiece}
            tall={ecossistemaV}
            alt="Ecossistema de performance — conteúdo, Google, site e tráfego"
          />
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {FLUXO.map((f, i) => (
            <BlurIn key={f.label} index={i}>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/95 text-marrom-deep px-4 py-2.5 shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)]">
                  <Icon name={f.icon} className="w-[17px] h-[17px]" />
                  <span className="font-serif text-[14px]">{f.label}</span>
                </span>
                {i < FLUXO.length - 1 && (
                  <IconChevronRight className="w-4 h-4 text-white/70" />
                )}
              </div>
            </BlurIn>
          ))}
        </div>

        <div className="mt-9 grid grid-cols-3 gap-3 max-w-2xl mx-auto">
          {[
            { icon: "search" as IconKey, t: "Mais descoberta" },
            { icon: "star" as IconKey, t: "Mais autoridade" },
            { icon: "bag" as IconKey, t: "Mais pedidos" },
          ].map((r, i, arr) => (
            <FanIn key={r.t} index={i} total={arr.length}>
              <div className="rounded-2xl bg-white/12 border border-white/25 backdrop-blur-sm p-4 text-center h-full">
                <span className="inline-grid place-items-center w-10 h-10 rounded-full bg-white/95 text-rosa-deep mx-auto">
                  <Icon name={r.icon} className="w-5 h-5" />
                </span>
                <p className="mt-2 text-[12.5px] font-semibold text-white leading-snug">
                  {r.t}
                </p>
              </div>
            </FanIn>
          ))}
        </div>

        <p className="mt-9 text-center font-serif italic text-[16px] sm:text-[20px] text-white">
          A próxima camada transforma presença em demanda.
        </p>
      </div>
    </section>
    <EdgeWave fill="#8A9A76" className="-mt-px rotate-180" />
  </>
);

/* ============ 6 · PLANO E INVESTIMENTO ============ */
const INCLUI = [
  "Gestão de Meta Ads",
  "Gestão de Google Ads",
  "Remarketing",
  "Integração com o site e o WhatsApp",
  "Otimização semanal",
  "Relatório mensal simplificado",
];

const Plano = () => (
  <section className="relative pattern-creme grain px-5 py-14 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <FloralPattern color="#8B6B4F" opacity={0.06} />
    </div>
    <div className="relative max-w-5xl mx-auto">
      <SectionHead
        eyebrow="O plano"
        title="Performance Local"
        subtitle="Investimento para posicionar e vender mais, com tudo acompanhado de perto."
      />

      <div className="mt-8">
        <Piece
          wide={planoPiece}
          tall={planoV}
          alt="Plano Dalpizzol Performance Local — investimento"
        />
      </div>

      <div className="mt-9 grid lg:grid-cols-[1.15fr_1fr] gap-4">
        <BlurIn>
          <div className="space-y-3">
            <div className="card-lux edge-gold p-5 relative overflow-hidden">
              <p className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-salvia-deep">
                Gestão de performance
              </p>
              <p className="mt-2 font-serif text-[32px] leading-none text-ink whitespace-nowrap">
                R$ 1.497
                <span className="text-[15px] text-ink/50">/mês</span>
              </p>
              <p className="mt-2 text-[12px] text-ink/55 leading-relaxed">
                Meta Ads + Google Ads + estratégia + otimização
              </p>
            </div>

            <div className="card-lux p-5">
              <p className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-salvia-deep">
                Verba de mídia
              </p>
              <p className="mt-2 font-serif text-[32px] leading-none text-ink whitespace-nowrap">
                <span className="text-[14px] text-ink/50">a partir de </span>
                R$ 1.200
                <span className="text-[15px] text-ink/50">/mês</span>
              </p>
              <p className="mt-2 text-[12px] text-ink/55 leading-relaxed">
                Investimento pago diretamente às plataformas
              </p>
            </div>

            <div className="card-lux edge-gold p-5 relative overflow-hidden">
              <span className="absolute inset-0 halo-rosa opacity-40 pointer-events-none" />
              <div className="relative">
                <p className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-dourado-deep">
                  Investimento inicial
                </p>
                <p className="mt-2 font-serif text-[36px] leading-none text-rosa-deep whitespace-nowrap">
                  R$ 2.697
                  <span className="text-[16px] text-ink/50">/mês</span>
                </p>
                <p className="mt-2 text-[11.5px] text-ink/55 leading-relaxed">
                  Gestão + verba de mídia somadas. A verba pode crescer conforme
                  o resultado.
                </p>
              </div>
            </div>
          </div>
        </BlurIn>

        <BlurIn>
          <div className="card-lux h-full p-5 relative overflow-hidden">
            <CornerFlourish className="absolute -top-1 -right-1 w-16 h-16 text-rosa/50 scale-x-[-1]" />
            <p className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-marrom-deep">
              Inclui
            </p>
            <ul className="mt-3 space-y-3">
              {INCLUI.map((t, i) => (
                <li
                  key={t}
                  className="flex gap-2.5 text-[13.5px] text-ink/80 leading-relaxed"
                >
                  <span className="mt-0.5 inline-grid place-items-center w-[18px] h-[18px] shrink-0 rounded-full bg-rosa text-white">
                    <IconCheck className="w-3 h-3" strokeWidth={2.4} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-marrom/10">
              <p className="text-[11.5px] text-ink/55 leading-relaxed">
                Sem fidelidade. A verba de mídia é paga por você diretamente à
                Meta e ao Google — a MAF não intermedeia esse valor.
              </p>
            </div>
          </div>
        </BlurIn>
      </div>
    </div>
  </section>
);

/* ============ 7 · FECHAMENTO ============ */
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
        <div className="mt-6 inline-flex flex-col items-center gap-1 text-white/80">
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

  return (
    <main className="bg-offwhite">
      <ScrollProgressBar />
      <Abertura />
      <Contexto />
      <MetaAds />
      <GoogleAds />
      <Ecossistema />
      <Plano />
      <Fechamento />
    </main>
  );
};

export default Proposta;
