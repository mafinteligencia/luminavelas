import { lazy, Suspense, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Icon, IconClose, IconHeart, IconSearch } from "../icons";
import { GoldRule } from "../ornaments";
import { CATEGORIES, PRODUCTS, type Product } from "../data";
import { Chip, SectionTitle } from "../ui";
import { ProductCard } from "../ProductCard";
import { Img } from "../Img";
import { FooterBand } from "./Home";
import { useFavorites } from "../favorites";
import { FloralPattern } from "../Pattern";
import { motion } from "framer-motion";
import { ClipReveal } from "../motion";

const ProductSheet = lazy(() =>
  import("../ProductSheet").then(({ ProductSheet }) => ({ default: ProductSheet })),
);

const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

type MenuFlavor = { name: string; description?: string; price?: string };
type MenuPrice = { size: string; value: string };
type MenuGroup = {
  title: string;
  subtitle?: string;
  flavors: MenuFlavor[];
  prices?: MenuPrice[];
  unitLabel?: string;
  unitPrice?: string;
};

const MENU_GROUPS: MenuGroup[] = [
  {
    title: "Bolos tradicionais",
    flavors: [
      { name: "Brigadeiro gourmet preto", description: "Massa à escolha com brigadeiro de chocolate." },
      { name: "Dois Amores", description: "Massa à escolha com brigadeiro branco e brigadeiro gourmet." },
      { name: "4 Leites", description: "Massa à escolha com brigadeiro de quatro leites." },
    ],
    prices: [
      { size: "10 fatias", value: "128,00" },
      { size: "20 fatias", value: "190,00" },
      { size: "24 fatias", value: "208,00" },
      { size: "30 fatias", value: "245,00" },
      { size: "45 fatias", value: "370,00" },
      { size: "40 fatias Q", value: "298,00" },
      { size: "70 fatias Q", value: "420,00" },
    ],
  },
  {
    title: "Bolos refinados",
    flavors: [
      { name: "Torta Mineira", description: "Nata com abacaxi e brigadeiro de coco." },
      { name: "Prestígio", description: "Brigadeiro de coco com ganache de chocolate." },
      { name: "Arraiá", description: "Mousse de paçoca com mousse de chocolate." },
      { name: "Chocotorta", description: "Brigadeiro de chocolate e doce de leite." },
      { name: "Maracujá", description: "Maracujá e chocolate meio amargo." },
      { name: "Três Amores", description: "Doce de leite, brigadeiro branco e brigadeiro de chocolate." },
      { name: "Cocada com Doce de Leite", description: "Cocada com doce de leite." },
      { name: "Pêssego com Coco", description: "Brigadeiro de quatro leites com pêssego em calda e brigadeiro de coco." },
    ],
    prices: [
      { size: "10 fatias", value: "135,00" },
      { size: "20 fatias", value: "215,00" },
      { size: "24 fatias", value: "248,00" },
      { size: "30 fatias", value: "298,00" },
      { size: "45 fatias", value: "398,00" },
      { size: "40 fatias Q", value: "325,00" },
      { size: "70 fatias Q", value: "445,00" },
    ],
  },
  {
    title: "Bolos especiais",
    flavors: [
      { name: "Marta Rocha", description: "Creme belga com nozes crocantes, nata com suspiro e doce de leite com ameixa." },
      { name: "Gaya", description: "Strogonoff de nozes, brigadeiro gourmet e creme belga com damasco." },
      { name: "Raio de Sol", description: "Brigadeiro gourmet, doce de leite e caramelo salgado com nozes crocantes." },
      { name: "Suculentas", description: "Nata, morango, suspiros e brigadeiro de quatro leites." },
      { name: "Red Velvet", description: "Massa amanteigada e brigadeiro de requeijão." },
      { name: "Quatro Leites com Morango" },
      { name: "Chocolate com Morango" },
      { name: "Matilda" },
      { name: "Ninho com Geleia de Frutas Vermelhas" },
      { name: "Kinder" },
      { name: "Delícia de Uva" },
    ],
    prices: [
      { size: "10 fatias", value: "150,00" },
      { size: "20 fatias", value: "238,00" },
      { size: "24 fatias", value: "272,00" },
      { size: "30 fatias", value: "315,00" },
      { size: "45 fatias", value: "420,00" },
      { size: "40 fatias Q", value: "365,00" },
      { size: "70 fatias Q", value: "480,00" },
    ],
  },
  {
    title: "Bento Cake",
    subtitle: "Bolo de 12 cm com uma camada de recheio.",
    flavors: [
      { name: "Brigadeiro gourmet preto", price: "70,00" },
      { name: "Brigadeiro gourmet branco", price: "70,00" },
      { name: "Ninho com Nutella", price: "85,00" },
      { name: "Leite Ninho", price: "70,00" },
      { name: "4 Leites", price: "70,00" },
    ],
  },
  {
    title: "Brigadeiros tradicionais",
    unitLabel: "Cento · 100 unidades",
    unitPrice: "175,00",
    flavors: [
      { name: "Beijinho" }, { name: "Bicho de Pé" }, { name: "Brigadeiro Branco" },
      { name: "Brigadeiro Preto" }, { name: "Cajuzinho" }, { name: "Casadinho" },
      { name: "Casadinho Moranguinho" }, { name: "Farinha Láctea" },
      { name: "Leite Ninho" }, { name: "Prestígio" },
    ],
  },
  {
    title: "Brigadeiros especiais",
    unitLabel: "Cento · 100 unidades",
    unitPrice: "215,00",
    flavors: [
      { name: "Café" }, { name: "Brigadeiro Crocante" },
      { name: "Caramelo Salgado com Amendoim" }, { name: "Charge" },
      { name: "Chocoball" }, { name: "Churros" }, { name: "Coco Queimado" },
      { name: "Ferrero Rocher" }, { name: "Mini Confeti" },
      { name: "Ninho com Nutella" }, { name: "Olho de Sogra" }, { name: "Paçoca" },
    ],
  },
  {
    title: "Brigadeiros gourmet",
    unitLabel: "Cento · 100 unidades",
    unitPrice: "260,00",
    flavors: [
      { name: "Amêndoas" }, { name: "Banana Passa" }, { name: "Brigadeiro ao Leite" },
      { name: "Brigadeiro Branco" }, { name: "Brigadeiro Meio Amargo" },
      { name: "Caipirinha" }, { name: "Crème Brûlée" }, { name: "Damasco" },
      { name: "Delícia de Uva" }, { name: "Maracujá" }, { name: "Nozes" },
      { name: "Raphaello" }, { name: "Romeu e Julieta" },
    ],
  },
];

const FullMenu = () => (
  <section className="px-5 py-10">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-6">
        <SectionTitle
          center
          eyebrow="Cardápio completo"
          title="Sabores para cada momento"
          subtitle="Confira as opções e os valores. Para encomendar, fale com a gente pelo WhatsApp."
        />
        <GoldRule className="mx-auto mt-3 text-dourado" width={130} />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {MENU_GROUPS.map((group) => (
          <details key={group.title} className="card-lux rounded-3xl overflow-hidden">
            <summary className="cursor-pointer list-none px-5 py-4 flex items-center gap-3">
              <span className="font-serif text-lg text-ink">{group.title}</span>
              <span aria-hidden="true" className="ml-auto text-xl text-rosa-deep">+</span>
            </summary>
            <div className="px-5 pb-5">
              {group.subtitle && <p className="text-[12px] text-ink/60 mb-3">{group.subtitle}</p>}
              <ul className="space-y-2">
                {group.flavors.map((flavor) => (
                  <li key={flavor.name} className="flex items-start justify-between gap-3 border-b border-marrom/10 pb-2 last:border-0">
                    <span>
                      <span className="text-[13px] font-medium text-ink">{flavor.name}</span>
                      {flavor.description && <span className="block text-[11.5px] leading-relaxed text-ink/55">{flavor.description}</span>}
                    </span>
                    {flavor.price && <span className="shrink-0 text-[12px] font-semibold text-marrom-deep">R$ {flavor.price}</span>}
                  </li>
                ))}
              </ul>
              {group.prices && (
                <div className="mt-4">
                  <p className="text-[11px] font-semibold text-marrom-deep mb-2">Tamanhos e valores</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {group.prices.map((price) => (
                      <div key={price.size} className="rounded-xl bg-rosa/10 px-2 py-2.5 text-center">
                        <p className="text-[10.5px] text-ink/60">{price.size}</p>
                        <p className="text-[12px] font-semibold text-ink">R$ {price.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {group.unitPrice && (
                <div className="mt-4 flex items-center justify-between rounded-2xl bg-rosa/10 px-4 py-3">
                  <span className="text-[12px] text-ink/65">{group.unitLabel}</span>
                  <strong className="text-[13px] text-ink">R$ {group.unitPrice}</strong>
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

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
          <FloralPattern color="#A78D6D" opacity={0.07} />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <ClipReveal>
            <div className="text-center">
              <SectionTitle
                center
                eyebrow="Cardápio"
                title="Escolha o seu doce"
                subtitle="Veja os destaques, confira o cardápio completo e monte o seu pedido."
              />
              <GoldRule className="mx-auto mt-3 text-dourado" width={130} />
            </div>
          </ClipReveal>
          <label className="mt-5 flex items-center gap-2.5 h-12 rounded-2xl card-lux px-4">
            <IconSearch className="w-[18px] h-[18px] text-marrom" />
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
                <IconClose className="w-4 h-4" />
              </button>
            )}
          </label>
        </div>
      </section>

      <div className="sticky top-16 z-30 glass-warm border-x-0 border-t-0 rounded-none">
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
                className="inline-flex items-center gap-1.5"
              >
                <Img
                  src={c.photo}
                  alt=""
                  loading="lazy"
                  wrapperClassName="w-5 h-5 rounded-full"
                  className="w-full h-full rounded-full object-cover ring-1 ring-white/70"
                />{" "}
                {c.label}
              </Chip>
            ))}
            <Chip
              active={cat === "favoritos"}
              onClick={() => setCat("favoritos")}
              className="inline-flex items-center gap-1.5"
            >
              <IconHeart className="w-4 h-4" duotone={cat === "favoritos"} />{" "}
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
              <span className="medallion w-16 h-16 mx-auto text-rosa-deep">
                {cat === "favoritos" ? (
                  <IconHeart duotone className="w-8 h-8" />
                ) : (
                  <IconSearch className="w-8 h-8" />
                )}
              </span>
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

      {cat === "todos" && !q.trim() && <FullMenu />}
      <FooterBand />
      {open && (
        <Suspense fallback={null}>
          <ProductSheet product={open} onClose={() => setOpen(null)} />
        </Suspense>
      )}
    </>
  );
};

export default Catalog;
