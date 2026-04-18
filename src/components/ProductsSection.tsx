import { motion } from "framer-motion";
import bolo from "@/assets/produto-bolo.jpg";
import brigadeiros from "@/assets/produto-brigadeiros.jpg";
import love from "@/assets/produto-love.jpg";
import pave from "@/assets/produto-pave.jpg";
import palha from "@/assets/produto-palha.jpg";
import presente from "@/assets/produto-presente.jpg";

const WHATSAPP_BASE = "https://wa.me/5548991338766?text=";

const items = [
  {
    img: bolo,
    title: "Bolos Decorados",
    tagline: "Datas especiais",
    desc: "Bolos artesanais com acabamento sofisticado — para aniversários, casamentos e celebrações que merecem doçura.",
    cta: "Encomendar%20um%20bolo%20personalizado",
  },
  {
    img: brigadeiros,
    title: "Brigadeiros Gourmet",
    tagline: "Doces finos",
    desc: "Brigadeiros premium em sabores únicos — chocolate belga, pistache, ninho, beijinho e nossas criações exclusivas.",
    cta: "Pedir%20brigadeiros%20gourmet",
  },
  {
    img: love,
    title: "Coleção Love",
    tagline: "Presentes afetivos",
    desc: "Doces em formato de coração, perfeitos para declarações, datas românticas e momentos para presentear quem se ama.",
    cta: "Encomendar%20a%20Cole%C3%A7%C3%A3o%20Love",
  },
  {
    img: pave,
    title: "Pavês & Sobremesas",
    tagline: "Para a mesa",
    desc: "Pavês cremosos, mousses e sobremesas em camadas — para fechar refeições especiais com chave de ouro.",
    cta: "Pedir%20um%20pav%C3%AA",
  },
  {
    img: palha,
    title: "Doces de Festa",
    tagline: "Bem casados & mais",
    desc: "Palha italiana, bombons recheados, trufas e bem casados — feitos para encantar em festas e casamentos.",
    cta: "Pedir%20doces%20de%20festa",
  },
  {
    img: presente,
    title: "Caixas Presente",
    tagline: "Para presentear",
    desc: "Embalagens premium com seleção de doces — o jeito mais doce de dizer 'estou pensando em você'.",
    cta: "Montar%20uma%20caixa%20presente",
  },
];

const ProductsSection = () => (
  <section id="cardapio" className="py-24 px-6 bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">✦ Nosso cardápio ✦</p>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light mb-4">
          Cada doce, uma <em className="text-shimmer not-italic">história</em>
        </h2>
        <p className="text-muted-foreground font-light max-w-xl mx-auto">
          Selecionamos o melhor da casa para você. Toque em qualquer item para encomendar pelo WhatsApp.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.a
            key={item.title}
            href={`${WHATSAPP_BASE}Ol%C3%A1!%20Gostaria%20de%20${item.cta}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -8 }}
            className="group block rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-gold transition-all duration-500"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-logo/90 backdrop-blur-sm">
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold">{item.tagline}</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                {item.desc}
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-gold flex items-center gap-2">
                Encomendar
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
