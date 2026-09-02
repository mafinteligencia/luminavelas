import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-[100svh] items-center justify-center bg-creme px-6 font-sans">
    <div className="text-center max-w-sm">
      <p className="text-5xl">🧁</p>
      <h1 className="mt-4 font-serif text-3xl text-ink">Página não encontrada</h1>
      <p className="mt-2 text-[14px] text-ink/65">Esse doce não está no cardápio. Vamos voltar para o início?</p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center justify-center h-12 px-6 rounded-2xl bg-rosa text-white text-[13px] font-semibold"
      >
        Voltar ao início
      </Link>
    </div>
  </div>
);

export default NotFound;
