import logo from "@/assets/logo-lumina.jpg";

const Footer = () => (
  <footer className="py-12 px-6" style={{ backgroundColor: "#EDEADD" }}>
    <div className="max-w-4xl mx-auto text-center">
      <div className="rounded-xl overflow-hidden w-32 mx-auto mb-6" style={{ backgroundColor: "#EDEADD" }}>
        <img src={logo} alt="Lumina" className="w-full object-contain" />
      </div>

      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://instagram.com/lumina.velasartesanais"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/5548999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          WhatsApp
        </a>
      </div>

      <p className="font-serif text-lg text-foreground mb-1">Ilumine seus momentos</p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lumina Velas Artesanais · Barra da Lagoa, Florianópolis
      </p>
    </div>
  </footer>
);

export default Footer;
