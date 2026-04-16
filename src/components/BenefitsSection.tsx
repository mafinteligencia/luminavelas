import { motion } from "framer-motion";
import { Flame, Wind, Gift, Sparkles } from "lucide-react";

const benefits = [
  { icon: Flame, title: "Ambiente Aconchegante", desc: "A luz suave da vela transforma qualquer espaço" },
  { icon: Wind, title: "Redução de Estresse", desc: "Aromas terapêuticos que acalmam corpo e mente" },
  { icon: Gift, title: "Presente Sofisticado", desc: "Ideal para surpreender quem você ama" },
  { icon: Sparkles, title: "Decoração Elegante", desc: "Design artístico que complementa qualquer ambiente" },
];

const BenefitsSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-3xl md:text-4xl text-foreground mb-14"
      >
        Por que escolher a Lumina?
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass rounded-2xl p-6 flex flex-col items-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
              <b.icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-serif text-lg text-foreground">{b.title}</h3>
            <p className="text-muted-foreground text-xs font-light">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
