import { motion } from "framer-motion";
import bgProduction from "@/assets/bg-lumina-production.jpg";
import bg02 from "@/assets/bg-lumina-02.jpg";

const AboutSection = () => (
  <section className="py-20 px-6 bg-secondary/40">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      {/* Images */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-2 gap-4"
      >
        <img
          src={bgProduction}
          alt="Produção artesanal"
          className="rounded-2xl object-cover h-72 w-full"
          loading="lazy"
        />
        <img
          src={bg02}
          alt="Feita com amor"
          className="rounded-2xl object-cover h-72 w-full mt-8"
          loading="lazy"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          Sobre a Lumina
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4 font-light">
          Cada vela é criada com intenção, cuidado e significado. Na Lumina, acreditamos que
          uma chama pode transformar um ambiente, acalmar a mente e criar memórias que ficam.
        </p>
        <p className="text-muted-foreground leading-relaxed font-light">
          Artesanal, carinhosamente feita à mão, com atenção em cada detalhe.
          Controlamos cuidadosamente a qualidade de cada vela, da escolha dos aromas
          até a embalagem final.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <div className="w-12 h-px bg-accent" />
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            Barra da Lagoa · Florianópolis
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
