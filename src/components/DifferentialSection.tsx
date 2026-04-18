import { motion } from "framer-motion";

const points = [
  { num: "01", title: "Receita de família", desc: "Sabores autênticos, passados de geração em geração e refinados ao longo dos anos." },
  { num: "02", title: "Ingredientes selecionados", desc: "Chocolate belga, frutas frescas e fornecedores locais que conhecemos pelo nome." },
  { num: "03", title: "Pequenos lotes diários", desc: "Produzimos pouco e com cuidado. Tudo sai fresquinho da nossa cozinha." },
  { num: "04", title: "Atendimento próximo", desc: "Você fala direto conosco no WhatsApp. Sem intermediários, com carinho de verdade." },
];

const DifferentialSection = () => (
  <section className="py-24 px-6 bg-gradient-chocolate text-white relative overflow-hidden">
    {/* Gold decorative glow */}
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(212,168,83,0.6) 0%, transparent 60%)" }}
    />
    <div
      className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-15 pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(212,168,83,0.6) 0%, transparent 60%)" }}
    />

    <div className="max-w-6xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">✦ Nosso diferencial ✦</p>
        <h2 className="font-serif text-4xl md:text-5xl font-light">
          Por que somos <em className="text-shimmer not-italic">diferentes</em>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {points.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-dark rounded-3xl p-8 flex gap-5 items-start hover:border-gold/50 transition-all duration-500"
          >
            <span className="font-serif text-5xl text-shimmer leading-none shrink-0">{p.num}</span>
            <div>
              <h3 className="font-serif text-2xl text-white mb-2">{p.title}</h3>
              <p className="text-sm text-white/70 font-light leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialSection;
