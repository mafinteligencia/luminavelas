import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, X } from "lucide-react";
import { CATEGORIES, PRODUCTS, type Product } from "../data";
import { Chip, SectionTitle } from "../ui";
import { ProductCard } from "../ProductCard";
import { ProductSheet } from "../ProductSheet";
import { FooterBand } from "./Home";
import { useFavorites } from "../favorites";
import { FloralPattern } from "../Pattern";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { ClipReveal } from "../motion";

const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

const Catalog = () => {
  const [params, setParams] = useSearchParams();
  const cat = params.get("cat") ?? "todos";
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<Product | null>(null);
  const { ids: favIds } = useFavorites();

  const items = useMemo(() => {
    const nq = normalize(q.trim());
    return PRODUCTS.filter(
      (p) =>
        (cat === "todos" ||
          (cat === "favoritos" ? favIds.includes(p.id) : p.category === cat)) &&
        (!nq ||
          normalize(`${p.name} ${p.desc} ${p.tags?.join(" ") ?? ""}`).includes(
            nq,
          )),
    );
  }, [cat, q, favIds]);

  const setCat = (id: string) => {
    if (id === "todos") params.delete("cat");
    else params.set("cat", id);
    setParams(params, { replace: true });
  };

  return (
    <>
      <section className="relative pattern-creme pt-24 pb-5 px-5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloralPattern color="#8B6B4F" opacity={0.08} />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <ClipReveal>
            <SectionTitle
              eyebrow="Cardápio"
              title="Escolha o seu doce"
              subtitle="Toque em um item para ver tamanhos e montar o seu pedido."
            />
          </ClipReveal>
          <label className="mt-5 flex items-center gap-2.5 h-12 rounded-2xl bg-white border border-marrom/10 px-4 shadow-sm">
            <Search className="w-4 h-4 text-marrom" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar bolos, doces…"
              className="flex-1 bg-transparent outline-none text-[14px] text-ink placeholder:text-ink/40"
              aria-label="Buscar no cardápio"
            />
            {q && (
              <button
                onClick={() => setQ("")}
                aria-label="Limpar busca"
                className="text-ink/40"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </label>
        </div>
      </section>

      <div className="sticky top-16 z-30 bg-offwhite/95 backdrop-blur-md border-b border-marrom/10">
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-2 px-5 py-3 w-max md:max-w-5xl md:mx-auto md:w-auto">
            <Chip active={cat === "todos"} onClick={() => setCat("todos")}>
              Todos
            </Chip>
            {CATEGORIES.map((c) => (
              <Chip
                key={c.id}
                active={cat === c.id}
                onClick={() => setCat(c.id)}
              >
                {c.emoji} {c.label}
              </Chip>
            ))}
            <Chip
              active={cat === "favoritos"}
              onClick={() => setCat("favoritos")}
              className="inline-flex items-center gap-1.5"
            >
              <Heart
                className="w-3.5 h-3.5"
                fill={cat === "favoritos" ? "currentColor" : "none"}
              />{" "}
              Favoritos
              {favIds.length > 0 && (
                <span className="opacity-70">({favIds.length})</span>
              )}
            </Chip>
          </div>
        </div>
      </div>

      <section className="px-5 pt-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11.5px] text-ink/50 mb-3">
            {items.length} {items.length === 1 ? "item" : "itens"}
          </p>
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl">{cat === "favoritos" ? "💗" : "🧁"}</p>
              <p className="mt-3 font-serif text-lg text-ink">
                {cat === "favoritos"
                  ? "Você ainda não salvou favoritos"
                  : "Nada encontrado por aqui"}
              </p>
              <p className="text-[13px] text-ink/60">
                {cat === "favoritos"
                  ? "Toque no coração de um doce para guardá-lo aqui."
                  : "Tente outra palavra ou fale com a gente no WhatsApp."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {items.map((p, i) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onOpen={setOpen}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <FooterBand />
      <ProductSheet product={open} onClose={() => setOpen(null)} />
    </>
  );
};

export default Catalog;
