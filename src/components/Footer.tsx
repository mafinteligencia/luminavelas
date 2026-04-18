import logo from "@/assets/logo-dalpizzol.jpg";

const Footer = () => (
  <footer className="py-16 px-6 bg-logo text-white/90">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-block bg-logo rounded-full p-2 mb-6 gold-glow">
        <img
          src={logo}
          alt="Doceria Dal Pizzol"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <p className="font-serif text-2xl mb-2 text-shimmer">Doceria Dal Pizzol</p>
      <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
        Doces que abraçam o coração
      </p>
      <p className="text-sm text-white/70 mb-2">📍 Barra da Lagoa · Florianópolis</p>
      <p className="text-sm text-white/70 mb-8">💬 (48) 99133-8766</p>

      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://instagram.com/doceriadalpizzol"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-gold transition-colors text-sm tracking-wider uppercase"
        >
          @doceriadalpizzol
        </a>
      </div>

      <div className="border-t border-gold/20 pt-6">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Doceria Dal Pizzol — Feito com 💌 em Floripa
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
