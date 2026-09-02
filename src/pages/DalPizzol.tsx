import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Cake,
  Gift,
  Heart,
  Sparkles,
  Calendar,
  Star,
  MapPin,
  Instagram,
  Home,
  BookOpen,
  Clock,
  ChevronRight,
} from "lucide-react";
import logo from "@/assets/dalpizzol/logo.png";
import boloCamadas from "@/assets/dalpizzol/bolo-camadas.jpg";
import boloRedVelvet from "@/assets/dalpizzol/bolo-redvelvet.jpg";
import boloOreo from "@/assets/dalpizzol/bolo-oreo.jpg";
import brigadeiros from "@/assets/dalpizzol/brigadeiros.jpg";
import sobremesaTaca from "@/assets/dalpizzol/sobremesa-taca.jpg";
import duoPlaca from "@/assets/dalpizzol/duo-placa.jpg";
import duoSentadas from "@/assets/dalpizzol/duo-sentadas.jpg";
import lojaDuo from "@/assets/dalpizzol/loja-duo.jpg";

/* ===================== IDENTIDADE VISUAL ===================== */
const C = {
  cream: "#FAF4E9", // fundo do logotipo
  creamDeep: "#F2E7D5",
  terracotta: "#D9784A",
  terracottaSoft: "#E9A07A",
  cocoa: "#5A3A2A",
  sage: "#9BA98B",
  blush: "#EDA9A2",
  ink: "#3B2A22",
};

const WHATSAPP_URL =
  "https://wa.me/5548991338766?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20encomenda%20na%20Doceria%20Dalpizzol";
const INSTAGRAM_URL = "https://instagram.com/doceriadalpizzol";

const waLink = (item: string) =>
  `https://wa.me/5548991338766?text=${encodeURIComponent(
    `Olá! Gostaria de encomendar: ${item} 🍰`,
  )}`;

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Reveal = ({
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
    viewport={{ once: true, amount: 0.25 }}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) => (
  <div className={center ? "text-center max-w-xl mx-auto" : "max-w-xl"}>
    <p
      className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-3"
      style={{ color: C.terracotta }}
    >
      {eyebrow}
    </p>
    <h2
      className="font-serif text-[28px] leading-tight sm:text-4xl md:text-5xl font-normal"
      style={{ color: C.cocoa }}
    >
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-sm sm:text-base font-light" style={{ color: `${C.ink}B0` }}>
        {subtitle}
      </p>
    )}
  </div>
);

/* ===================== APP BAR ===================== */
const AppBar = () => {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: solid ? `${C.cream}F2` : "transparent",
        backdropFilter: solid ? "blur(14px)" : "none",
        boxShadow: solid ? "0 6px 24px rgba(90,58,42,0.08)" : "none",
        paddingTop: "env(safe-area-inset-top)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5">
          <img src={logo} alt="Doceria Dalpizzol" className="w-10 h-10 rounded-full" />
          <span
            className="font-serif text-base leading-none"
            style={{ color: C.cocoa, opacity: solid ? 1 : 0.95 }}
          >
            Dalpizzol
          </span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold tracking-wide active:scale-95 transition"
          style={{ background: C.terracotta, color: C.cream }}
        >
          <WhatsAppIcon className="w-4 h-4" />
          Pedir
        </a>
      </div>
    </header>
  );
};

/* ===================== HERO ===================== */
const Hero = () => (
  <section
    id="inicio"
    className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-32"
    style={{ backgroundColor: C.cream }}
  >
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute -top-32 -left-24 w-[380px] h-[380px] rounded-full blur-3xl opacity-50"
        style={{ background: `radial-gradient(circle, ${C.terracottaSoft} 0%, transparent 70%)` }}
      />
      <div
        className="absolute -bottom-28 -right-24 w-[380px] h-[380px] rounded-full blur-3xl opacity-40"
        style={{ background: `radial-gradient(circle, ${C.sage} 0%, transparent 70%)` }}
      />
      <div
        className="absolute top-1/3 right-8 w-[220px] h-[220px] rounded-full blur-3xl opacity-40"
        style={{ background: `radial-gradient(circle, ${C.blush} 0%, transparent 70%)` }}
      />
    </div>

    <div className="relative z-10 w-full max-w-xl mx-auto text-center flex flex-col items-center">
      <motion.img
        src={logo}
        alt="Doceria Dalpizzol — bolos, doces e presentes com sabor"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-32 sm:w-40 rounded-full mb-8"
        style={{ filter: "drop-shadow(0 18px 40px rgba(90,58,42,0.18))" }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-[10px] font-semibold tracking-[0.32em] uppercase mb-4"
        style={{ color: C.sage }}
      >
        Barra da Lagoa · Florianópolis
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="font-serif text-[34px] leading-[1.08] sm:text-5xl md:text-6xl font-normal mb-5"
        style={{ color: C.cocoa }}
      >
        Doces que{" "}
        <em className="italic" style={{ color: C.terracotta }}>
          abraçam
        </em>{" "}
        o coração
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
        className="text-[15px] sm:text-lg font-light max-w-sm sm:max-w-md mb-8"
        style={{ color: `${C.ink}B3` }}
      >
        Bolos, doces finos e presentes com sabor — feitos à mão, todos os dias, por
        duas confeiteiras apaixonadas.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="w-full flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-[13px] font-semibold tracking-wide active:scale-95 transition"
          style={{
            background: `linear-gradient(135deg, ${C.terracottaSoft} 0%, ${C.terracotta} 100%)`,
            color: "#FFF8EE",
            boxShadow: "0 14px 34px rgba(217,120,74,0.35)",
          }}
        >
          <WhatsAppIcon />
          Encomendar no WhatsApp
        </a>
        <a
          href="#cardapio"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-[13px] font-medium active:scale-95 transition"
          style={{ color: C.cocoa, border: `1px solid ${C.cocoa}25`, background: "#FFFFFF80" }}
        >
          Ver cardápio
          <ChevronRight className="w-4 h-4" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-10 flex items-center gap-5 text-[11px]"
        style={{ color: `${C.ink}99` }}
      >
        <span className="inline-flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5" style={{ color: C.terracotta }} /> 1.300+ clientes
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Heart className="w-3.5 h-3.5" style={{ color: C.blush }} /> Feito à mão
        </span>
      </motion.div>
    </div>
  </section>
);

/* ===================== DESTAQUES ===================== */
const highlights = [
  { icon: Cake, label: "Bolos artesanais", color: C.terracotta },
  { icon: Sparkles, label: "Doces finos", color: C.blush },
  { icon: Gift, label: "Presentes com sabor", color: C.sage },
  { icon: Calendar, label: "Encomendas", color: C.cocoa },
];

const Highlights = () => (
  <section className="px-4 -mt-20 relative z-20" style={{ background: "transparent" }}>
    <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
      {highlights.map((h, i) => (
        <Reveal key={h.label} delay={i * 0.06}>
          <div
            className="rounded-3xl p-4 h-full flex flex-col items-center text-center gap-2"
            style={{
              background: "#FFFFFFCC",
              backdropFilter: "blur(12px)",
              border: `1px solid ${C.cocoa}12`,
              boxShadow: "0 12px 30px rgba(90,58,42,0.08)",
            }}
          >
            <h.icon className="w-5 h-5" style={{ color: h.color }} />
            <span className="text-[11px] font-medium leading-tight" style={{ color: C.cocoa }}>
              {h.label}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

/* ===================== SOBRE ===================== */
const About = () => (
  <section id="sobre" className="px-5 py-20 sm:py-28" style={{ background: C.cream }}>
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <Reveal>
        <div className="grid grid-cols-2 gap-3">
          <img
            src={duoPlaca}
            alt="Glaucia e Dani na Doceria Dalpizzol"
            loading="lazy"
            className="col-span-2 w-full h-56 sm:h-72 object-cover rounded-[28px]"
            style={{ boxShadow: "0 18px 40px rgba(90,58,42,0.14)" }}
          />
          <img
            src={duoSentadas}
            alt="As confeiteiras da Dalpizzol"
            loading="lazy"
            className="w-full h-36 object-cover rounded-[22px]"
          />
          <img
            src={lojaDuo}
            alt="Balcão da Doceria Dalpizzol"
            loading="lazy"
            className="w-full h-36 object-cover rounded-[22px]"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <SectionTitle
          center={false}
          eyebrow="Nossa história"
          title={
            <>
              Duas mãos, um{" "}
              <em className="italic" style={{ color: C.terracotta }}>
                coração
              </em>{" "}
              só
            </>
          }
        />
        <p className="mt-5 text-[15px] leading-relaxed font-light" style={{ color: `${C.ink}B3` }}>
          A Dalpizzol nasceu na Barra da Lagoa do jeito mais simples e mais bonito:
          receitas de família, forno quente e vontade de adoçar o dia de quem chega.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed font-light" style={{ color: `${C.ink}B3` }}>
          Cada bolo é montado na hora, cada docinho é enrolado à mão. Nada de pressa —
          só carinho, ingredientes de verdade e aquele sabor de casa.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Receitas de família", "Ingredientes selecionados", "Produção diária"].map((t) => (
            <span
              key={t}
              className="text-[11px] px-3.5 py-2 rounded-full font-medium"
              style={{ background: C.creamDeep, color: C.cocoa }}
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

/* ===================== CARDÁPIO ===================== */
const menu = [
  {
    id: "bolos",
    label: "Bolos",
    items: [
      {
        name: "Bolo de Oreo",
        desc: "Massa de chocolate úmida, creme de baunilha com cookies triturados.",
        img: boloOreo,
      },
      {
        name: "Red Velvet",
        desc: "Clássico aveludado, cream cheese e morangos frescos.",
        img: boloRedVelvet,
      },
      {
        name: "Bolo de Camadas",
        desc: "Camadas fofinhas, creme sedoso e amêndoas crocantes.",
        img: boloCamadas,
      },
    ],
  },
  {
    id: "doces",
    label: "Doces finos",
    items: [
      {
        name: "Brigadeiros Gourmet",
        desc: "Belga, nozes, ninho, beijinho e mais sabores da casa.",
        img: brigadeiros,
      },
      {
        name: "Bem-casados & mimos",
        desc: "Doces finos para lembranças, festas e casamentos.",
        img: brigadeiros,
      },
    ],
  },
  {
    id: "potes",
    label: "No pote",
    items: [
      {
        name: "Taça de Morango",
        desc: "Camadas de creme, morango fresco e chocolate.",
        img: sobremesaTaca,
      },
      {
        name: "Bolo no Pote",
        desc: "A sobremesa perfeita para levar — pronta para presentear.",
        img: boloCamadas,
      },
    ],
  },
];

const Menu = () => {
  const [tab, setTab] = useState(menu[0].id);
  const active = menu.find((m) => m.id === tab)!;

  return (
    <section id="cardapio" className="py-20 sm:py-28" style={{ background: C.creamDeep }}>
      <div className="px-5">
        <Reveal>
          <SectionTitle
            eyebrow="Cardápio"
            title={
              <>
                Escolha o seu{" "}
                <em className="italic" style={{ color: C.terracotta }}>
                  doce
                </em>
              </>
            }
            subtitle="Toque em um item e faça o pedido direto no WhatsApp."
          />
        </Reveal>
      </div>

      {/* Tabs deslizantes */}
      <div className="mt-8 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 px-5 w-max mx-auto">
          {menu.map((m) => (
            <button
              key={m.id}
              onClick={() => setTab(m.id)}
              className="px-5 py-2.5 rounded-full text-[12px] font-semibold whitespace-nowrap transition active:scale-95"
              style={{
                background: tab === m.id ? C.terracotta : "#FFFFFFB3",
                color: tab === m.id ? "#FFF8EE" : C.cocoa,
                border: `1px solid ${tab === m.id ? C.terracotta : `${C.cocoa}18`}`,
              }}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Carrossel mobile / grid desktop */}
      <div className="mt-6 overflow-x-auto no-scrollbar snap-x snap-mandatory md:overflow-visible">
        <div className="flex gap-4 px-5 md:grid md:grid-cols-3 md:max-w-5xl md:mx-auto">
          {active.items.map((item, i) => (
            <motion.a
              key={item.name}
              href={waLink(item.name)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="snap-center shrink-0 w-[78vw] max-w-[320px] md:w-auto md:max-w-none rounded-[26px] overflow-hidden active:scale-[0.98] transition"
              style={{
                background: C.cream,
                border: `1px solid ${C.cocoa}12`,
                boxShadow: "0 16px 36px rgba(90,58,42,0.10)",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="font-serif text-xl mb-1.5" style={{ color: C.cocoa }}>
                  {item.name}
                </h3>
                <p className="text-[13px] font-light leading-relaxed" style={{ color: `${C.ink}A6` }}>
                  {item.desc}
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide"
                  style={{ color: C.terracotta }}
                >
                  Quero esse <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== ENCOMENDAS ===================== */
const orders = [
  { icon: Calendar, title: "Aniversários", desc: "Bolos personalizados do seu jeito." },
  { icon: Heart, title: "Datas especiais", desc: "Dia das Mães, Namorados e Natal." },
  { icon: Gift, title: "Presentes", desc: "Caixas e kits prontos para entregar." },
  { icon: Sparkles, title: "Festas", desc: "Mesas de doces e bem-casados." },
];

const Orders = () => (
  <section id="encomendas" className="px-5 py-20 sm:py-28" style={{ background: C.cream }}>
    <div className="max-w-4xl mx-auto">
      <Reveal>
        <SectionTitle
          eyebrow="Encomendas"
          title={
            <>
              Feito{" "}
              <em className="italic" style={{ color: C.terracotta }}>
                sob medida
              </em>{" "}
              para o seu momento
            </>
          }
          subtitle="Peça com antecedência de 48h para bolos personalizados."
        />
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
        {orders.map((o, i) => (
          <Reveal key={o.title} delay={i * 0.06}>
            <div
              className="h-full rounded-[24px] p-5"
              style={{ background: C.creamDeep, border: `1px solid ${C.cocoa}10` }}
            >
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center mb-3"
                style={{ background: `${C.terracotta}1F` }}
              >
                <o.icon className="w-5 h-5" style={{ color: C.terracotta }} />
              </div>
              <h3 className="font-serif text-lg mb-1" style={{ color: C.cocoa }}>
                {o.title}
              </h3>
              <p className="text-[12.5px] font-light leading-relaxed" style={{ color: `${C.ink}A6` }}>
                {o.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ===================== DEPOIMENTOS ===================== */
const testimonials = [
  { name: "Marina S.", text: "O bolo de Oreo é simplesmente o melhor de Floripa. Chegou lindo e fresquinho!" },
  { name: "Rafael T.", text: "Encomendei os doces do aniversário da minha filha. Todo mundo elogiou." },
  { name: "Camila P.", text: "Atendimento carinhoso e sabor de casa. Virei cliente fiel." },
];

const Testimonials = () => (
  <section className="py-20 sm:py-28" style={{ background: C.creamDeep }}>
    <div className="px-5">
      <Reveal>
        <SectionTitle eyebrow="Quem prova, volta" title="Palavras que adoçam" />
      </Reveal>
    </div>
    <div className="mt-8 overflow-x-auto no-scrollbar snap-x snap-mandatory">
      <div className="flex gap-4 px-5 md:justify-center w-max mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="snap-center shrink-0 w-[80vw] max-w-[330px] rounded-[26px] p-6"
            style={{ background: C.cream, boxShadow: "0 14px 32px rgba(90,58,42,0.08)" }}
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5" style={{ color: C.terracotta }} fill={C.terracotta} />
              ))}
            </div>
            <p className="text-[14px] font-light leading-relaxed mb-4" style={{ color: `${C.ink}B3` }}>
              “{t.text}”
            </p>
            <span className="text-[11px] font-semibold tracking-wide" style={{ color: C.cocoa }}>
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ===================== CTA ===================== */
const CTA = () => (
  <section id="contato" className="px-5 py-20 sm:py-28" style={{ background: C.cream }}>
    <Reveal>
      <div
        className="max-w-3xl mx-auto rounded-[32px] px-6 py-12 text-center relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${C.terracottaSoft} 0%, ${C.terracotta} 100%)`,
          boxShadow: "0 24px 60px rgba(217,120,74,0.30)",
        }}
      >
        <div
          className="absolute -top-20 -right-16 w-56 h-56 rounded-full blur-3xl opacity-40"
          style={{ background: C.blush }}
        />
        <div className="relative">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "#FFF1E2" }}>
            Produção artesanal e limitada
          </p>
          <h2 className="font-serif text-[30px] sm:text-4xl leading-tight mb-4" style={{ color: "#FFF8EE" }}>
            Peça agora pelo WhatsApp
          </h2>
          <p className="text-[14px] font-light max-w-sm mx-auto mb-8" style={{ color: "#FFF1E2CC" }}>
            Responderemos rapidinho com sabores, tamanhos e valores.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-10 py-4 rounded-2xl text-[13px] font-bold tracking-wide active:scale-95 transition"
            style={{ background: C.cream, color: C.terracotta, boxShadow: "0 12px 28px rgba(0,0,0,0.18)" }}
          >
            <WhatsAppIcon />
            Falar com a Dalpizzol
          </a>
          <p className="mt-6 text-[11px] flex items-center justify-center gap-1.5" style={{ color: "#FFF1E2CC" }}>
            <Clock className="w-3.5 h-3.5" /> Seg a Sáb · 9h às 19h
          </p>
        </div>
      </div>
    </Reveal>
  </section>
);

/* ===================== FOOTER ===================== */
const Footer = () => (
  <footer className="px-5 pt-14 pb-32 md:pb-14 text-center" style={{ background: C.cream }}>
    <img src={logo} alt="Doceria Dalpizzol" className="w-20 h-20 rounded-full mx-auto mb-5" />
    <p className="font-serif text-xl mb-2" style={{ color: C.cocoa }}>
      Doceria Dalpizzol
    </p>
    <p className="text-[12px] font-light mb-6 inline-flex items-center gap-1.5" style={{ color: `${C.ink}A6` }}>
      <MapPin className="w-3.5 h-3.5" /> Barra da Lagoa · Florianópolis/SC
    </p>
    <div className="flex items-center justify-center gap-3 mb-8">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram da Doceria Dalpizzol"
        className="w-11 h-11 rounded-2xl flex items-center justify-center active:scale-95 transition"
        style={{ background: C.creamDeep, color: C.cocoa }}
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp da Doceria Dalpizzol"
        className="w-11 h-11 rounded-2xl flex items-center justify-center active:scale-95 transition"
        style={{ background: C.terracotta, color: "#FFF8EE" }}
      >
        <WhatsAppIcon />
      </a>
    </div>
    <p className="font-serif italic text-sm" style={{ color: C.terracotta }}>
      Doces que abraçam o coração
    </p>
    <p className="mt-4 text-[10px]" style={{ color: `${C.ink}66` }}>
      © {new Date().getFullYear()} Doceria Dalpizzol · @doceriadalpizzol
    </p>
  </footer>
);

/* ===================== BOTTOM NAV (mobile) ===================== */
const tabs = [
  { href: "#inicio", icon: Home, label: "Início" },
  { href: "#cardapio", icon: BookOpen, label: "Cardápio" },
  { href: "#encomendas", icon: Calendar, label: "Encomendas" },
];

const BottomNav = () => (
  <nav
    className="fixed bottom-0 inset-x-0 z-50 md:hidden px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3"
    style={{
      background: `${C.cream}F0`,
      backdropFilter: "blur(16px)",
      borderTop: `1px solid ${C.cocoa}12`,
    }}
  >
    <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
      {tabs.map((t) => (
        <a
          key={t.href}
          href={t.href}
          className="flex-1 flex flex-col items-center gap-1 py-1 active:scale-95 transition"
          style={{ color: C.cocoa }}
        >
          <t.icon className="w-[18px] h-[18px]" />
          <span className="text-[10px] font-medium">{t.label}</span>
        </a>
      ))}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center gap-1 py-1.5 rounded-2xl active:scale-95 transition"
        style={{ background: C.terracotta, color: "#FFF8EE" }}
      >
        <WhatsAppIcon className="w-[18px] h-[18px]" />
        <span className="text-[10px] font-semibold">Pedir</span>
      </a>
    </div>
  </nav>
);

/* ===================== PAGE ===================== */
const DalPizzol = () => (
  <div className="font-sans antialiased scroll-smooth" style={{ background: C.cream }}>
    <AppBar />
    <main>
      <Hero />
      <Highlights />
      <About />
      <Menu />
      <Orders />
      <Testimonials />
      <CTA />
    </main>
    <Footer />
    <BottomNav />
  </div>
);

export default DalPizzol;
