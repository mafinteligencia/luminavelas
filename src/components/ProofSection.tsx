import { motion } from "framer-motion";

const stats = [
  { number: "1.3K+", label: "Seguidores apaixonados" },
  { number: "100%", label: "Artesanal e fresco" },
  { number: "5★", label: "Avaliação dos clientes" },
];

const ProofSection = () => (
  <section className="py-20 px-6 bg-gradient-cream">
    <div className="max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-xs tracking-[0.3em] uppercase text-gold mb-3"
      >
        ✦ Quem prova, volta ✦
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center font-serif text-3xl md:text-4xl text-foreground mb-12 font-light"
      >
        A doçura que conquistou Floripa
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="glass-strong rounded-3xl p-8 text-center hover:gold-glow transition-all duration-500"
          >
            <p className="font-serif text-5xl md:text-6xl text-shimmer mb-2">{s.number}</p>
            <p className="text-sm text-muted-foreground tracking-wider uppercase">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofSection;
