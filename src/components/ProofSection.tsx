import { motion } from "framer-motion";
import bgLumi from "@/assets/bg-lumi.jpg";
import bgButterflies from "@/assets/bg-lumina-butterflies.jpg";
import bgEssencia from "@/assets/bg-essencia-mae.jpg";

const proofs = [
  { image: bgLumi, title: "Feito à Mão", desc: "Cada vela é moldada com carinho e atenção aos detalhes" },
  { image: bgButterflies, title: "Aromas Exclusivos", desc: "Fragrâncias selecionadas que transformam ambientes" },
  { image: bgEssencia, title: "Presente Perfeito", desc: "Embalagens especiais para momentos inesquecíveis" },
];

const ProofSection = () => (
  <section className="py-24 px-6 relative">
    <div className="max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs tracking-[0.3em] uppercase text-gold text-center mb-4"
      >
        ✦ Artesanal ✦
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-3xl md:text-4xl text-center text-foreground mb-14"
      >
        A arte em cada detalhe
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {proofs.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="glass rounded-2xl overflow-hidden group hover:gold-glow transition-shadow duration-500"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-light">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofSection;
