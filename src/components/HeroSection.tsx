import { motion } from "framer-motion";
import logo from "@/assets/logo-dalpizzol.jpg";
import heroBg from "@/assets/hero-dalpizzol.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Doceria Dal Pizzol — bolo artesanal premium"
        className="w-full h-full object-cover"
        style={{ filter: "brightness(0.7) saturate(1.05)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsla(22,35%,8%,0.55) 0%, hsla(22,35%,8%,0.35) 45%, hsla(36,30%,96%,0.92) 100%)",
        }}
      />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,83,0.5) 0%, transparent 60%)",
        }}
      />
    </div>

    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-gold/60 pointer-events-none"
        style={{ left: `${10 + i * 11}%`, top: `${20 + (i % 4) * 18}%` }}
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
      />
    ))}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="bg-logo rounded-full p-3 mb-8 shadow-2xl gold-glow"
        style={{ border: "1px solid hsla(36,65%,52%,0.3)" }}
      >
        <img
          src={logo}
          alt="Logotipo Doceria Dal Pizzol"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-xs md:text-sm tracking-[0.4em] uppercase text-gold mb-5"
      >
        ✦ Confeitaria Artesanal Premium ✦
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.05] mb-6"
        style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
      >
        Doces que <span className="italic text-shimmer">abraçam</span>
        <br /> o coração
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-base md:text-lg text-white/85 font-light max-w-xl mb-10 leading-relaxed"
        style={{ textShadow: "0 2px 15px rgba(0,0,0,0.4)" }}
      >
        Bolos, doces finos e presentes com sabor — feitos à mão na Barra da Lagoa, Florianópolis.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.97 }}
        href="#cardapio"
        className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-sm font-semibold tracking-[0.2em] uppercase bg-gradient-gold text-white shadow-gold"
      >
        Ver o cardápio
        <span className="text-lg">→</span>
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="mt-10 flex items-center gap-2 text-white/70 text-xs tracking-widest uppercase"
      >
        <span>📍</span>
        <span>Barra da Lagoa · Floripa</span>
      </motion.div>
    </motion.div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/70 text-2xl"
    >
      ↓
    </motion.div>
  </section>
);

export default HeroSection;
