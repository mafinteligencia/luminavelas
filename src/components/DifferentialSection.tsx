import { motion } from "framer-motion";
import bgEssencia from "@/assets/bg-essencia-mae.jpg";

const DifferentialSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          Não é só uma vela.<br />
          <span className="text-gold">É uma experiência.</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed font-light mb-6">
          Cada embalagem é pensada para emocionar. Da escolha dos aromas à apresentação final,
          tudo é feito para transformar um gesto simples em algo memorável.
        </p>
        <p className="text-muted-foreground leading-relaxed font-light">
          Ideal para Dia das Mães, aniversários, datas especiais ou para presentear a si mesma.
          Porque você merece momentos de luz.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <img
          src={bgEssencia}
          alt="Kit Essência de Mãe"
          className="rounded-2xl shadow-xl w-full object-cover"
          loading="lazy"
        />
        <div className="absolute -bottom-4 -right-4 glass rounded-xl px-5 py-3">
          <span className="text-xs font-medium tracking-wide uppercase text-foreground">
            Embalagem Premium
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DifferentialSection;
