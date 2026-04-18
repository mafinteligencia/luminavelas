import { motion } from "framer-motion";

const benefits = [
  { icon: "🍰", title: "100% Artesanal", desc: "Tudo feito à mão, em pequenos lotes, com ingredientes selecionados." },
  { icon: "💌", title: "Feito com afeto", desc: "Cada doce é pensado para abraçar o coração de quem recebe." },
  { icon: "✨", title: "Acabamento premium", desc: "Apresentação cuidadosa, perfeita para presentear ou celebrar." },
  { icon: "🌿", title: "Receitas de família", desc: "Sabores que atravessam gerações, com sofisticação contemporânea." },
];

const BenefitsSection = () => (
  <section className="py-24 px-6 bg-gradient-cream relative overflow-hidden">
    <div className="max-w-6xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">✦ Por que escolher ✦</p>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light">
          O sabor de quem <em className="text-shimmer not-italic">se importa</em>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-strong rounded-3xl p-8 text-center group hover:gold-glow transition-all duration-500"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">
              {b.icon}
            </div>
            <h3 className="font-serif text-xl text-foreground mb-3">{b.title}</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
