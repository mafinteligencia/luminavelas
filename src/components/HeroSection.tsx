import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-lumina.jpg";

const WHATSAPP_URL = "https://wa.me/5548999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20velas%20Lumina";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Premium BG — bright & warm */}
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: "brightness(0.75) saturate(1.1)" }}
    />
    {/* Warm golden overlay */}
    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(30,20,10,0.35) 0%, rgba(40,30,15,0.2) 40%, rgba(237,234,221,0.6) 100%)" }} />

    {/* Soft glow particles effect */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-glow" style={{ background: "radial-gradient(circle, rgba(200,170,100,0.15) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full animate-glow" style={{ background: "radial-gradient(circle, rgba(200,170,100,0.1) 0%, transparent 70%)", animationDelay: "1.5s" }} />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-10 rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#EDEADD", boxShadow: "0 20px 60px rgba(0,0,0,0.3), 0 0 80px rgba(200,170,100,0.15)" }}
      >
        <img src={logo} alt="Lumina Velas Artesanais" className="w-44 md:w-56 object-contain" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
        style={{ color: "#FFFAF0", textShadow: "0 2px 40px rgba(0,0,0,0.3)" }}
      >
        Transforme momentos simples{" "}
        <span style={{ color: "#D4A853" }}>em experiências inesquecíveis</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-lg md:text-xl font-light max-w-2xl mb-10"
        style={{ color: "rgba(255, 250, 240, 0.85)", textShadow: "0 1px 10px rgba(0,0,0,0.2)" }}
      >
        Velas aromáticas artesanais que despertam sensações e criam memórias
      </motion.p>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #D4A853 0%, #B8893A 100%)",
          color: "#FFF",
          boxShadow: "0 10px 40px rgba(212, 168, 83, 0.4), 0 4px 15px rgba(0,0,0,0.2)",
        }}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
        Falar no WhatsApp
      </motion.a>

      {/* Location */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-10 text-xs tracking-[0.3em] uppercase"
        style={{ color: "rgba(255, 250, 240, 0.5)" }}
      >
        ✦ Barra da Lagoa · Florianópolis ✦
      </motion.p>
    </div>

    {/* Bottom fade to page bg */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
