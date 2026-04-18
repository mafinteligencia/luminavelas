import { motion } from "framer-motion";
import { Cake, Gift, Heart, Sparkles, Calendar, Star, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/dalpizzol/logo.jpg";
import boloCamadas from "@/assets/dalpizzol/bolo-camadas.jpg";
import boloRedVelvet from "@/assets/dalpizzol/bolo-redvelvet.jpg";
import brigadeiros from "@/assets/dalpizzol/brigadeiros.jpg";
import sobremesaTaca from "@/assets/dalpizzol/sobremesa-taca.jpg";
import dani from "@/assets/dalpizzol/dani.jpg";
import glaucia from "@/assets/dalpizzol/glaucia.jpg";
import duo from "@/assets/dalpizzol/duo.jpg";

const WHATSAPP_URL =
  "https://wa.me/5548991338766?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20encomenda%20na%20Doceria%20Dal%20Pizzol";
const INSTAGRAM_URL = "https://instagram.com/doceriadalpizzol";
const LOGO_BG = "#0E0B0A"; // Cor exata do fundo do logotipo

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* =========================== HERO =========================== */
const Hero = () => (
  <section
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
    style={{ backgroundColor: LOGO_BG }}
  >
    {/* Glow chocolate/dourado */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, #6B3B1F 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, #C9A24A 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-glow"
        style={{ background: "radial-gradient(circle, #E8C77E 0%, transparent 70%)" }}
      />
    </div>

    {/* Vinheta */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)" }}
    />

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
      {/* Logo — fundo igual ao do logotipo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 rounded-full overflow-hidden"
        style={{
          backgroundColor: LOGO_BG,
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.5), 0 0 100px rgba(201,162,74,0.25), inset 0 0 0 1px rgba(232,199,126,0.2)",
        }}
      >
        <img src={logo} alt="Doceria Dal Pizzol" className="w-44 md:w-52 object-contain" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-[10px] md:text-xs tracking-[0.45em] uppercase mb-6"
        style={{ color: "#C9A24A" }}
      >
        ✦ Doceria Artesanal · Florianópolis ✦
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-8"
        style={{ color: "#FAF3E3", textShadow: "0 4px 40px rgba(0,0,0,0.4)" }}
      >
        Doces que <em className="italic" style={{ color: "#E8C77E" }}>abraçam</em>
        <br /> o coração
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="text-base md:text-lg font-light max-w-xl mb-12"
        style={{ color: "rgba(250, 243, 227, 0.75)" }}
      >
        Bolos, doces finos e presentes com sabor. Feitos à mão, com afeto e técnica
        em cada detalhe.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #E8C77E 0%, #C9A24A 100%)",
            color: LOGO_BG,
            boxShadow: "0 15px 50px rgba(201,162,74,0.4), 0 4px 15px rgba(0,0,0,0.3)",
          }}
        >
          <WhatsAppIcon />
          Encomendar agora
        </a>
        <a
          href="#cardapio"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-medium tracking-[0.2em] uppercase transition-all"
          style={{
            color: "#FAF3E3",
            border: "1px solid rgba(232,199,126,0.4)",
          }}
        >
          Ver cardápio
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-16 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase"
        style={{ color: "rgba(232,199,126,0.6)" }}
      >
        <MapPin className="w-3 h-3" />
        Barra da Lagoa · Floripa
      </motion.div>
    </div>

    {/* Fade transition para próxima seção */}
    <div
      className="absolute bottom-0 left-0 right-0 h-32"
      style={{ background: "linear-gradient(to bottom, transparent, #FAF3E3)" }}
    />
  </section>
);

/* =========================== SOBRE =========================== */
const Sobre = () => (
  <section className="py-28 px-6" style={{ backgroundColor: "#FAF3E3" }}>
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        <div className="grid grid-cols-2 gap-4">
          <img
            src={dani}
            alt="Dani — confeiteira da Doceria Dal Pizzol"
            className="rounded-[2rem] object-cover h-80 w-full shadow-2xl"
            loading="lazy"
          />
          <img
            src={glaucia}
            alt="Glaucia — confeiteira da Doceria Dal Pizzol"
            className="rounded-[2rem] object-cover h-80 w-full mt-12 shadow-2xl"
            loading="lazy"
          />
        </div>
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full shadow-xl"
          style={{ backgroundColor: LOGO_BG, color: "#E8C77E" }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium">
            ✦ Feito à mão ✦
          </span>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p
          className="text-[10px] tracking-[0.4em] uppercase mb-5"
          style={{ color: "#8A5A2B" }}
        >
          Sobre nós
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: "#2A1810" }}>
          Duas mãos, <em className="italic" style={{ color: "#8A5A2B" }}>uma só paixão</em>
          <br /> pela confeitaria.
        </h2>
        <p className="text-base leading-relaxed mb-5 font-light" style={{ color: "#5C4434" }}>
          A Doceria Dal Pizzol nasceu da união entre Glaucia e Dani — duas confeiteiras
          que transformam ingredientes simples em experiências afetivas. Cada bolo, cada
          brigadeiro, cada sobremesa é assinado com cuidado artesanal.
        </p>
        <p className="text-base leading-relaxed font-light" style={{ color: "#5C4434" }}>
          Acreditamos que doce bom é aquele que abraça. Por isso, escolhemos a dedo cada
          ingrediente e cuidamos de cada detalhe — da massa à embalagem final.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <div className="w-12 h-px" style={{ backgroundColor: "#C9A24A" }} />
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "#8A5A2B" }}>
            Glaucia & Dani · Confeiteiras
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

/* =========================== BENEFÍCIOS / DIFERENCIAIS =========================== */
const Beneficios = () => {
  const items = [
    { icon: Heart, title: "Feito com afeto", desc: "Receitas autorais que carregam memória e cuidado" },
    { icon: Sparkles, title: "Ingredientes nobres", desc: "Selecionamos cada item para garantir sabor único" },
    { icon: Gift, title: "Presente inesquecível", desc: "Embalagens pensadas para emocionar quem recebe" },
    { icon: Cake, title: "Personalização total", desc: "Bolos e doces criados sob medida para o seu momento" },
  ];

  return (
    <section className="py-28 px-6 relative" style={{ backgroundColor: "#F4EAD5" }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C9A24A, transparent)" }}
      />
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.4em] uppercase mb-5"
          style={{ color: "#8A5A2B" }}
        >
          ✦ Diferenciais ✦
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl font-light mb-16"
          style={{ color: "#2A1810" }}
        >
          Por que a <em className="italic" style={{ color: "#8A5A2B" }}>Dal Pizzol</em>?
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-3xl p-8 flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2"
              style={{
                backgroundColor: "#FAF3E3",
                boxShadow: "0 10px 40px rgba(106,66,38,0.08)",
                border: "1px solid rgba(201,162,74,0.15)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, rgba(201,162,74,0.15), rgba(201,162,74,0.05))" }}
              >
                <it.icon className="w-7 h-7" style={{ color: "#8A5A2B" }} />
              </div>
              <h3 className="font-serif text-xl" style={{ color: "#2A1810" }}>{it.title}</h3>
              <p className="text-xs font-light leading-relaxed" style={{ color: "#5C4434" }}>{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================== CARDÁPIO =========================== */
type Item = { name: string; desc: string; price?: string };
type Categoria = { id: string; title: string; image: string; items: Item[] };

const cardapio: Categoria[] = [
  {
    id: "bolos",
    title: "Bolos & Naked Cakes",
    image: boloCamadas,
    items: [
      { name: "Naked Cake de Coco", desc: "Massa amanteigada, recheio de coco cremoso e lascas frescas", price: "a partir de R$ 145" },
      { name: "Red Velvet Clássico", desc: "Massa aveludada com cream cheese e calda de morango", price: "a partir de R$ 165" },
      { name: "Bolo de Chocolate Belga", desc: "Três camadas com ganache intenso e brigadeiro gourmet", price: "a partir de R$ 175" },
      { name: "Bolo Personalizado", desc: "Sob encomenda para aniversários, casamentos e eventos", price: "sob consulta" },
    ],
  },
  {
    id: "doces",
    title: "Doces Finos",
    image: brigadeiros,
    items: [
      { name: "Brigadeiro Gourmet", desc: "Chocolate belga, granulado crocante", price: "R$ 4,50 / un" },
      { name: "Beijinho Trufado", desc: "Coco fresco com recheio cremoso", price: "R$ 4,50 / un" },
      { name: "Casadinho de Nozes", desc: "Crocante caramelizado com nozes selecionadas", price: "R$ 5,50 / un" },
      { name: "Quindim Artesanal", desc: "Receita tradicional com gemas e coco", price: "R$ 5,00 / un" },
    ],
  },
  {
    id: "sobremesas",
    title: "Sobremesas no Pote",
    image: sobremesaTaca,
    items: [
      { name: "Trifle de Morango", desc: "Camadas de creme, ganache e morangos frescos", price: "R$ 28" },
      { name: "Pavê de Chocolate", desc: "Biscoito amanteigado, creme belga e chocolate meio amargo", price: "R$ 26" },
      { name: "Tiramisù da Casa", desc: "Versão autoral com café espresso e mascarpone", price: "R$ 32" },
      { name: "Travessa para Eventos", desc: "Sobremesas grandes para confraternizações", price: "sob consulta" },
    ],
  },
  {
    id: "presentes",
    title: "Presentes com Sabor",
    image: boloRedVelvet,
    items: [
      { name: "Caixa Mini Bolo", desc: "Mini bolo + brigadeiros + cartão personalizado", price: "R$ 89" },
      { name: "Caixa Degustação", desc: "Seleção de 9 doces finos em embalagem premium", price: "R$ 65" },
      { name: "Kit Datas Especiais", desc: "Combinações para Dia das Mães, aniversários e Natal", price: "sob consulta" },
      { name: "Mensagem na Caixa", desc: "Cartão escrito à mão com dedicatória", price: "cortesia" },
    ],
  },
];

const Cardapio = () => (
  <section id="cardapio" className="py-28 px-6" style={{ backgroundColor: "#FAF3E3" }}>
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.4em] uppercase mb-5"
          style={{ color: "#8A5A2B" }}
        >
          ✦ Cardápio ✦
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl font-light"
          style={{ color: "#2A1810" }}
        >
          Nossas <em className="italic" style={{ color: "#8A5A2B" }}>criações</em>
        </motion.h2>
      </div>

      <div className="space-y-24">
        {cardapio.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative">
              <img
                src={cat.image}
                alt={cat.title}
                className="rounded-[2rem] object-cover w-full h-[480px] shadow-2xl"
                loading="lazy"
              />
              <div
                className="absolute -top-4 -left-4 w-20 h-20 rounded-full flex items-center justify-center font-serif text-2xl shadow-xl"
                style={{ backgroundColor: LOGO_BG, color: "#E8C77E" }}
              >
                0{idx + 1}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-light mb-8" style={{ color: "#2A1810" }}>
                {cat.title}
              </h3>
              <ul className="space-y-6">
                {cat.items.map((it) => (
                  <li
                    key={it.name}
                    className="pb-5 border-b"
                    style={{ borderColor: "rgba(201,162,74,0.2)" }}
                  >
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <span className="font-serif text-lg" style={{ color: "#2A1810" }}>{it.name}</span>
                      {it.price && (
                        <span className="text-xs tracking-wider whitespace-nowrap" style={{ color: "#8A5A2B" }}>
                          {it.price}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-light leading-relaxed" style={{ color: "#5C4434" }}>{it.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* =========================== ENCOMENDAS / DATAS ESPECIAIS =========================== */
const Encomendas = () => (
  <section className="py-28 px-6 relative overflow-hidden" style={{ backgroundColor: LOGO_BG }}>
    <div
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{
        background:
          "radial-gradient(circle at 20% 30%, rgba(201,162,74,0.25), transparent 50%), radial-gradient(circle at 80% 70%, rgba(107,59,31,0.4), transparent 50%)",
      }}
    />
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: "#C9A24A" }}>
          ✦ Encomendas ✦
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: "#FAF3E3" }}>
          Para os <em className="italic" style={{ color: "#E8C77E" }}>momentos</em>
          <br /> que merecem ser celebrados.
        </h2>
        <p className="text-base font-light leading-relaxed mb-8" style={{ color: "rgba(250,243,227,0.75)" }}>
          Aniversários, casamentos, chá de bebê, festas corporativas, Dia das Mães,
          Natal e Páscoa. Criamos peças únicas para cada celebração.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-10">
          {["Aniversários", "Casamentos", "Chá de bebê", "Eventos corporativos", "Dia das Mães", "Datas comemorativas"].map(
            (tag) => (
              <div
                key={tag}
                className="flex items-center gap-2 px-4 py-3 rounded-full text-xs"
                style={{
                  backgroundColor: "rgba(232,199,126,0.08)",
                  border: "1px solid rgba(232,199,126,0.2)",
                  color: "#FAF3E3",
                }}
              >
                <Calendar className="w-3.5 h-3.5" style={{ color: "#E8C77E" }} />
                {tag}
              </div>
            ),
          )}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-all hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #E8C77E 0%, #C9A24A 100%)",
            color: LOGO_BG,
            boxShadow: "0 15px 50px rgba(201,162,74,0.4)",
          }}
        >
          <WhatsAppIcon />
          Solicitar orçamento
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative"
      >
        <img
          src={duo}
          alt="Glaucia e Dani — Doceria Dal Pizzol"
          className="rounded-[2rem] w-full object-cover shadow-2xl"
          loading="lazy"
        />
        <div
          className="absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl"
          style={{ backgroundColor: "#FAF3E3", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase mb-1" style={{ color: "#8A5A2B" }}>
            Encomendas
          </p>
          <p className="font-serif text-lg" style={{ color: "#2A1810" }}>
            Antecedência de 48h
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* =========================== DEPOIMENTOS =========================== */
const depoimentos = [
  {
    text: "Os doces da Dal Pizzol são simplesmente perfeitos. Encomendei o naked cake de coco para o meu aniversário e foi o assunto da festa inteira.",
    name: "Carolina M.",
    role: "Floripa, SC",
  },
  {
    text: "Atendimento de outro nível e sabores que abraçam de verdade. Brigadeiros impecáveis, embalagem linda. Recomendo de olhos fechados.",
    name: "Marina R.",
    role: "Barra da Lagoa",
  },
  {
    text: "Pedimos um bolo personalizado para o casamento e superou todas as expectativas. Glaucia e Dani são artistas — cuidam de cada detalhe.",
    name: "Rafael & Júlia",
    role: "Florianópolis",
  },
];

const Depoimentos = () => (
  <section className="py-28 px-6" style={{ backgroundColor: "#F4EAD5" }}>
    <div className="max-w-6xl mx-auto text-center">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-[10px] tracking-[0.4em] uppercase mb-5"
        style={{ color: "#8A5A2B" }}
      >
        ✦ Depoimentos ✦
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="font-serif text-4xl md:text-5xl font-light mb-16"
        style={{ color: "#2A1810" }}
      >
        Quem prova, <em className="italic" style={{ color: "#8A5A2B" }}>volta sempre</em>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {depoimentos.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="rounded-3xl p-8 text-left flex flex-col"
            style={{
              backgroundColor: "#FAF3E3",
              boxShadow: "0 15px 50px rgba(106,66,38,0.1)",
              border: "1px solid rgba(201,162,74,0.15)",
            }}
          >
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, k) => (
                <Star key={k} className="w-4 h-4 fill-current" style={{ color: "#C9A24A" }} />
              ))}
            </div>
            <p className="font-serif italic text-lg leading-relaxed mb-6 flex-1" style={{ color: "#2A1810" }}>
              "{d.text}"
            </p>
            <div className="pt-5 border-t" style={{ borderColor: "rgba(201,162,74,0.2)" }}>
              <p className="font-semibold text-sm" style={{ color: "#2A1810" }}>{d.name}</p>
              <p className="text-xs tracking-wider mt-1" style={{ color: "#8A5A2B" }}>{d.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* =========================== CTA FINAL =========================== */
const CtaFinal = () => (
  <section className="py-28 px-6" style={{ backgroundColor: "#FAF3E3" }}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto text-center"
    >
      <p className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: "#8A5A2B" }}>
        ✦ Faça seu pedido ✦
      </p>
      <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-8" style={{ color: "#2A1810" }}>
        Vamos adoçar <br />
        <em className="italic" style={{ color: "#8A5A2B" }}>o seu próximo momento?</em>
      </h2>
      <p className="text-base font-light leading-relaxed mb-12 max-w-xl mx-auto" style={{ color: "#5C4434" }}>
        Fale com a gente pelo WhatsApp e receba um atendimento personalizado para
        encontrar o doce perfeito para você.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-12 py-5 rounded-full text-xs font-semibold tracking-[0.25em] uppercase transition-all hover:scale-105"
        style={{
          background: "linear-gradient(135deg, #E8C77E 0%, #C9A24A 100%)",
          color: LOGO_BG,
          boxShadow: "0 20px 60px rgba(201,162,74,0.4)",
        }}
      >
        <WhatsAppIcon />
        Falar no WhatsApp
      </a>
    </motion.div>
  </section>
);

/* =========================== FOOTER =========================== */
const Footer = () => (
  <footer className="pt-20 pb-10 px-6" style={{ backgroundColor: LOGO_BG }}>
    <div className="max-w-4xl mx-auto text-center">
      <div
        className="rounded-full overflow-hidden w-28 mx-auto mb-8"
        style={{ backgroundColor: LOGO_BG, boxShadow: "0 0 60px rgba(201,162,74,0.2)" }}
      >
        <img src={logo} alt="Doceria Dal Pizzol" className="w-full object-contain" />
      </div>

      <p className="font-serif italic text-2xl mb-2" style={{ color: "#E8C77E" }}>
        Doces que abraçam o coração
      </p>
      <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: "rgba(250,243,227,0.5)" }}>
        Bolos · Doces · Presentes com sabor
      </p>

      <div className="flex justify-center gap-6 mb-10">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs tracking-wider uppercase transition-colors"
          style={{ color: "rgba(250,243,227,0.7)" }}
        >
          <Instagram className="w-4 h-4" />
          @doceriadalpizzol
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs tracking-wider uppercase transition-colors"
          style={{ color: "rgba(250,243,227,0.7)" }}
        >
          <WhatsAppIcon className="w-4 h-4" />
          (48) 99133-8766
        </a>
      </div>

      <div className="flex items-center justify-center gap-2 text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(232,199,126,0.6)" }}>
        <MapPin className="w-3 h-3" />
        Barra da Lagoa · Florianópolis
      </div>

      <p className="text-[10px] tracking-wider" style={{ color: "rgba(250,243,227,0.35)" }}>
        © {new Date().getFullYear()} Doceria Dal Pizzol · Todos os direitos reservados
      </p>
    </div>
  </footer>
);

/* =========================== WHATSAPP FLOAT =========================== */
const WhatsFloat = () => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1.5, type: "spring" }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
    style={{ backgroundColor: "#25D366", color: "white" }}
    aria-label="WhatsApp Doceria Dal Pizzol"
  >
    <WhatsAppIcon className="w-7 h-7" />
  </motion.a>
);

/* =========================== PAGE =========================== */
const DalPizzol = () => (
  <main className="overflow-x-hidden" style={{ backgroundColor: "#FAF3E3" }}>
    <Hero />
    <Sobre />
    <Beneficios />
    <Cardapio />
    <Encomendas />
    <Depoimentos />
    <CtaFinal />
    <Footer />
    <WhatsFloat />
  </main>
);

export default DalPizzol;
