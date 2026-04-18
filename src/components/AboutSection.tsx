import { motion } from "framer-motion";
import glauciaEDani from "@/assets/glaucia-e-dani.jpg";
import dani from "@/assets/dani.jpg";
import glaucia from "@/assets/glaucia.jpg";

const AboutSection = () => (
  <section id="sobre" className="py-24 px-6 bg-background overflow-hidden">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-gradient-gold opacity-20 rounded-3xl blur-2xl" />
        <img
          src={glauciaEDani}
          alt="Glaucia e Dani — fundadoras da Doceria Dal Pizzol"
          loading="lazy"
          className="relative rounded-3xl w-full object-cover shadow-soft"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">✦ Nossa história ✦</p>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 font-light leading-tight">
          Feito com as mãos, <em className="text-shimmer not-italic">e com o coração</em>
        </h2>
        <p className="text-muted-foreground font-light leading-relaxed mb-4 text-lg">
          Somos a <strong className="text-foreground font-medium">Glaucia e a Dani</strong> — a dupla
          por trás de cada doce que sai da Dal Pizzol.
        </p>
        <p className="text-muted-foreground font-light leading-relaxed mb-6">
          Tudo começou na nossa cozinha, em Barra da Lagoa, com receitas de família e a vontade
          de transformar dias comuns em momentos memoráveis. Hoje, cada bolo, cada brigadeiro,
          cada presente é feito à mão — com a mesma doçura de sempre.
        </p>

        <div className="flex items-center gap-4 mb-6">
          <img src={dani} alt="Dani" loading="lazy" className="w-16 h-16 rounded-full object-cover border-2 border-gold/40" />
          <img src={glaucia} alt="Glaucia" loading="lazy" className="w-16 h-16 rounded-full object-cover border-2 border-gold/40 -ml-6" />
          <div className="ml-2">
            <p className="font-serif text-foreground">Dani &amp; Glaucia</p>
            <p className="text-xs text-muted-foreground tracking-wider uppercase">Confeiteiras</p>
          </div>
        </div>

        <p className="text-muted-foreground font-light leading-relaxed italic border-l-2 border-gold/40 pl-4">
          "Quando alguém prova, a gente sente que entregou um pedacinho de carinho." 💌
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
