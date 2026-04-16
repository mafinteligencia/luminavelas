import { motion } from "framer-motion";
import bgLumi from "@/assets/bg-lumi.jpg";
import bg03 from "@/assets/bg-lumina-03.jpg";
import bgRockets from "@/assets/bg-lumina-rockets.jpg";
import bg4444 from "@/assets/bg-lumina-4444.jpg";

const WHATSAPP_URL = "https://wa.me/5548999999999?text=Ol%C3%A1!%20Gostaria%20de%20encomendar%20uma%20vela%20Lumina";

const products = [
  {
    image: bgLumi,
    name: "Vela Bubble",
    desc: "Vela decorativa artesanal em formato escultural. Perfeita para presentear.",
  },
  {
    image: bg03,
    name: "Cravo & Canela",
    desc: "Vela aromática no vidro com notas quentes de cravo e canela. Aconchego em cada chama.",
  },
  {
    image: bgRockets,
    name: "Coleção Criativa",
    desc: "Velas lúdicas feitas com cera de coco. Peças decorativas e divertidas.",
  },
  {
    image: bg4444,
    name: "Essência de Mãe",
    desc: "Edição especial Dia das Mães. Chá branco, canela e champagne — com embalagem gift.",
  },
];

const ProductsSection = () => (
  <section className="py-20 px-6 bg-secondary/40">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4"
      >
        Nossos Produtos
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-sm mb-14 font-light"
      >
        Calor, presença e propósito em cada detalhe
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="glass rounded-2xl overflow-hidden group flex flex-col"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-serif text-lg text-foreground mb-1">{p.name}</h3>
              <p className="text-muted-foreground text-xs font-light flex-1 mb-4">{p.desc}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-primary text-primary-foreground text-xs tracking-wide uppercase py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Quero Comprar
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
