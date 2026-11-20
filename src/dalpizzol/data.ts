/* =====================================================
   Doceria Dalpizzol — conteúdo do app e catálogo do PDF 26.11.
   ===================================================== */
import boloCamadas from "@/assets/dalpizzol/bolo-camadas.webp";
import boloRedVelvet from "@/assets/dalpizzol/bolo-redvelvet.webp";
import boloOreo from "@/assets/dalpizzol/bolo-oreo.webp";
import brigadeiros from "@/assets/dalpizzol/brigadeiros.webp";
import duoPlaca from "@/assets/dalpizzol/duo-placa.webp";
import duoSentadas from "@/assets/dalpizzol/duo-sentadas.webp";
import duoBanco from "@/assets/dalpizzol/duo-banco.webp";
import duoCafe from "@/assets/dalpizzol/duo-cafe.webp";
import duoBalcao from "@/assets/dalpizzol/duo-balcao.webp";
import lojaDuo from "@/assets/dalpizzol/loja-duo.webp";
import duo from "@/assets/dalpizzol/duo.webp";
import glaucia from "@/assets/dalpizzol/glaucia.webp";
import dani from "@/assets/dalpizzol/dani.webp";
import logo from "@/assets/dalpizzol/logo-oficial.webp";

const heroOreo = "/hero-oreo-cinematic.webp";

export const BRAND = {
  name: "Doceria Dalpizzol",
  short: "Dalpizzol",
  tagline: "Feito com amor",
  slogan: "A vida fica mais doce com amor.",
  phoneDisplay: "48 99133-8766",
  phoneE164: "5548991338766",
  instagram: "https://instagram.com/doceriadalpizzol",
  instagramHandle: "@doceriadalpizzol",
  city: "Barra da Lagoa · Florianópolis/SC",
  street: "R. Altamiro Barcelos Dutra, 1334",
  district: "Barra da Lagoa",
  cityState: "Florianópolis · SC",
  zip: "88061-300",
  addressFull:
    "R. Altamiro Barcelos Dutra, 1334 — Barra da Lagoa, Florianópolis/SC, 88061-300",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Doceria Dalpizzol, R. Altamiro Barcelos Dutra, 1334, Barra da Lagoa, Florianópolis - SC, 88061-300",
    ),
  hours: "Seg a Sáb · 9h às 19h",
  leadTimeHours: 48,
  logo,
};

export const WHATSAPP_URL = `https://wa.me/${BRAND.phoneE164}?text=${encodeURIComponent(
  "Olá! Gostaria de fazer uma encomenda na Doceria Dalpizzol 🍰",
)}`;

export const waMessage = (text: string) =>
  `https://wa.me/${BRAND.phoneE164}?text=${encodeURIComponent(text)}`;

/* ---------- Catálogo ---------- */
export type Size = { id: string; label: string; hint: string };

import type { IconKey } from "./icons";

export type Category = {
  id: string;
  label: string;
  icon: IconKey;
  photo: string;
};

export const CATEGORIES: Category[] = [
  { id: "bolos-tradicionais", label: "Bolos tradicionais", icon: "cake", photo: "/catalog/thumbs/bolo-brigadeiro-gourmet-preto.webp" },
  { id: "bolos-refinados", label: "Bolos refinados", icon: "cake", photo: "/catalog/thumbs/torta-mineira.webp" },
  { id: "bolos-especiais", label: "Bolos especiais", icon: "cake", photo: "/catalog/thumbs/bolo-marta-rocha.webp" },
  { id: "bento-cake", label: "Bento Cake", icon: "cake", photo: "/catalog/thumbs/bento-brigadeiro-gourmet-preto.webp" },
  { id: "brigadeiros-tradicionais", label: "Brigadeiros tradicionais", icon: "bonbon", photo: "/catalog/thumbs/brigadeiro-beijinho.webp" },
  { id: "brigadeiros-especiais", label: "Brigadeiros especiais", icon: "bonbon", photo: "/catalog/thumbs/brigadeiro-cafe.webp" },
  { id: "brigadeiros-gourmet", label: "Brigadeiros gourmet", icon: "bonbon", photo: "/catalog/thumbs/brigadeiro-amendoas.webp" },
];

export type Product = {
  id: string;
  name: string;
  desc: string;
  img: string;
  category: Category["id"];
  tags?: string[];
  sizes?: Size[];
  featured?: boolean;
};

type CatalogEntry = {
  id: string;
  name: string;
  desc: string;
  category: Category["id"];
  kind: "cake-traditional" | "cake-refined" | "cake-special" | "bento" | "brigadeiro-traditional" | "brigadeiro-special" | "brigadeiro-gourmet";
  price?: number;
  featured?: boolean;
};

const CATALOG_ENTRIES: CatalogEntry[] = [
  {"id":"bolo-brigadeiro-gourmet-preto","name":"Brigadeiro Gourmet Preto","desc":"Massa à sua escolha com brigadeiro de chocolate.","category":"bolos-tradicionais","kind":"cake-traditional","featured":true},
  {"id":"bolo-dois-amores","name":"Dois Amores","desc":"Massa à sua escolha com brigadeiro branco e brigadeiro gourmet.","category":"bolos-tradicionais","kind":"cake-traditional"},
  {"id":"bolo-quatro-leites","name":"4 Leites","desc":"Massa à sua escolha com brigadeiro de quatro leites.","category":"bolos-tradicionais","kind":"cake-traditional"},
  {"id":"torta-mineira","name":"Torta Mineira","desc":"Nata com abacaxi e brigadeiro de coco.","category":"bolos-refinados","kind":"cake-refined","featured":true},
  {"id":"bolo-prestigio","name":"Prestígio","desc":"Brigadeiro de coco com ganache de chocolate.","category":"bolos-refinados","kind":"cake-refined"},
  {"id":"bolo-arraia","name":"Arraiá","desc":"Mousse de paçoca com mousse de chocolate.","category":"bolos-refinados","kind":"cake-refined"},
  {"id":"bolo-chocotorta","name":"Chocotorta","desc":"Brigadeiro de chocolate e doce de leite.","category":"bolos-refinados","kind":"cake-refined"},
  {"id":"bolo-maracuja","name":"Maracujá","desc":"Maracujá e chocolate meio amargo.","category":"bolos-refinados","kind":"cake-refined"},
  {"id":"bolo-tres-amores","name":"Três Amores","desc":"Doce de leite, brigadeiro branco e brigadeiro de chocolate.","category":"bolos-refinados","kind":"cake-refined"},
  {"id":"bolo-cocada-doce-leite","name":"Cocada com Doce de Leite","desc":"Cocada com doce de leite.","category":"bolos-refinados","kind":"cake-refined"},
  {"id":"bolo-pessego-coco","name":"Pêssego com Coco","desc":"Brigadeiro de quatro leites com pêssego em calda e brigadeiro de coco.","category":"bolos-refinados","kind":"cake-refined"},
  {"id":"bolo-marta-rocha","name":"Marta Rocha","desc":"Creme belga com nozes crocantes, nata com suspiro e doce de leite com ameixa.","category":"bolos-especiais","kind":"cake-special","featured":true},
  {"id":"bolo-gaya","name":"Gaya","desc":"Strogonoff de nozes, brigadeiro gourmet e creme belga com damasco.","category":"bolos-especiais","kind":"cake-special"},
  {"id":"bolo-raio-de-sol","name":"Raio de Sol","desc":"Brigadeiro gourmet, doce de leite e caramelo salgado com nozes crocantes.","category":"bolos-especiais","kind":"cake-special"},
  {"id":"bolo-suculentas","name":"Suculentas","desc":"Nata, morango, suspiros e brigadeiro de quatro leites.","category":"bolos-especiais","kind":"cake-special"},
  {"id":"bolo-red-velvet","name":"Red Velvet","desc":"Massa amanteigada e brigadeiro de requeijão.","category":"bolos-especiais","kind":"cake-special"},
  {"id":"bolo-quatro-leites-morango","name":"Quatro Leites com Morango","desc":"Quatro leites com morango.","category":"bolos-especiais","kind":"cake-special"},
  {"id":"bolo-chocolate-morango","name":"Chocolate com Morango","desc":"Chocolate com morango.","category":"bolos-especiais","kind":"cake-special"},
  {"id":"bolo-matilda","name":"Matilda","desc":"Bolo de chocolate intenso.","category":"bolos-especiais","kind":"cake-special"},
  {"id":"bolo-ninho-frutas-vermelhas","name":"Ninho com Geleia de Frutas Vermelhas","desc":"Creme de leite Ninho com geleia de frutas vermelhas.","category":"bolos-especiais","kind":"cake-special"},
  {"id":"bolo-kinder","name":"Kinder","desc":"Chocolate e creme de avelã.","category":"bolos-especiais","kind":"cake-special"},
  {"id":"bolo-delicia-uva","name":"Delícia de Uva","desc":"Uvas frescas com creme suave.","category":"bolos-especiais","kind":"cake-special"},
  {"id":"bento-brigadeiro-gourmet-preto","name":"Bento Cake · Brigadeiro Gourmet Preto","desc":"Bolo de 12 cm com uma camada de recheio.","category":"bento-cake","kind":"bento","price":70,"featured":true},
  {"id":"bento-brigadeiro-gourmet-branco","name":"Bento Cake · Brigadeiro Gourmet Branco","desc":"Bolo de 12 cm com uma camada de recheio.","category":"bento-cake","kind":"bento","price":70},
  {"id":"bento-ninho-nutella","name":"Bento Cake · Ninho com Nutella","desc":"Bolo de 12 cm com uma camada de recheio.","category":"bento-cake","kind":"bento","price":85},
  {"id":"bento-leite-ninho","name":"Bento Cake · Leite Ninho","desc":"Bolo de 12 cm com uma camada de recheio.","category":"bento-cake","kind":"bento","price":70},
  {"id":"bento-quatro-leites","name":"Bento Cake · 4 Leites","desc":"Bolo de 12 cm com uma camada de recheio.","category":"bento-cake","kind":"bento","price":70},
  {"id":"brigadeiro-beijinho","name":"Beijinho","desc":"Sabor da linha de brigadeiros tradicionais. Vendido por cento.","category":"brigadeiros-tradicionais","kind":"brigadeiro-traditional","price":175,"featured":true},
  {"id":"brigadeiro-bicho-de-pe","name":"Bicho de Pé","desc":"Sabor da linha de brigadeiros tradicionais. Vendido por cento.","category":"brigadeiros-tradicionais","kind":"brigadeiro-traditional","price":175},
  {"id":"brigadeiro-branco-tradicional","name":"Brigadeiro Branco","desc":"Sabor da linha de brigadeiros tradicionais. Vendido por cento.","category":"brigadeiros-tradicionais","kind":"brigadeiro-traditional","price":175},
  {"id":"brigadeiro-preto-tradicional","name":"Brigadeiro Preto","desc":"Sabor da linha de brigadeiros tradicionais. Vendido por cento.","category":"brigadeiros-tradicionais","kind":"brigadeiro-traditional","price":175},
  {"id":"brigadeiro-cajuzinho","name":"Cajuzinho","desc":"Sabor da linha de brigadeiros tradicionais. Vendido por cento.","category":"brigadeiros-tradicionais","kind":"brigadeiro-traditional","price":175},
  {"id":"brigadeiro-casadinho","name":"Casadinho","desc":"Sabor da linha de brigadeiros tradicionais. Vendido por cento.","category":"brigadeiros-tradicionais","kind":"brigadeiro-traditional","price":175},
  {"id":"brigadeiro-casadinho-moranguinho","name":"Casadinho Moranguinho","desc":"Sabor da linha de brigadeiros tradicionais. Vendido por cento.","category":"brigadeiros-tradicionais","kind":"brigadeiro-traditional","price":175},
  {"id":"brigadeiro-farinha-lactea","name":"Farinha Láctea","desc":"Sabor da linha de brigadeiros tradicionais. Vendido por cento.","category":"brigadeiros-tradicionais","kind":"brigadeiro-traditional","price":175},
  {"id":"brigadeiro-leite-ninho","name":"Leite Ninho","desc":"Sabor da linha de brigadeiros tradicionais. Vendido por cento.","category":"brigadeiros-tradicionais","kind":"brigadeiro-traditional","price":175},
  {"id":"brigadeiro-prestigio","name":"Prestígio","desc":"Sabor da linha de brigadeiros tradicionais. Vendido por cento.","category":"brigadeiros-tradicionais","kind":"brigadeiro-traditional","price":175},
  {"id":"brigadeiro-cafe","name":"Café","desc":"Sabor da linha de brigadeiros especiais. Vendido por cento.","category":"brigadeiros-especiais","kind":"brigadeiro-special","price":215,"featured":true},
  {"id":"brigadeiro-crocante","name":"Brigadeiro Crocante","desc":"Sabor da linha de brigadeiros especiais. Vendido por cento.","category":"brigadeiros-especiais","kind":"brigadeiro-special","price":215},
  {"id":"brigadeiro-caramelo-amendoim","name":"Caramelo Salgado com Amendoim","desc":"Sabor da linha de brigadeiros especiais. Vendido por cento.","category":"brigadeiros-especiais","kind":"brigadeiro-special","price":215},
  {"id":"brigadeiro-charge","name":"Charge","desc":"Sabor da linha de brigadeiros especiais. Vendido por cento.","category":"brigadeiros-especiais","kind":"brigadeiro-special","price":215},
  {"id":"brigadeiro-chocoball","name":"Chocoball","desc":"Sabor da linha de brigadeiros especiais. Vendido por cento.","category":"brigadeiros-especiais","kind":"brigadeiro-special","price":215},
  {"id":"brigadeiro-churros","name":"Churros","desc":"Sabor da linha de brigadeiros especiais. Vendido por cento.","category":"brigadeiros-especiais","kind":"brigadeiro-special","price":215},
  {"id":"brigadeiro-coco-queimado","name":"Coco Queimado","desc":"Sabor da linha de brigadeiros especiais. Vendido por cento.","category":"brigadeiros-especiais","kind":"brigadeiro-special","price":215},
  {"id":"brigadeiro-ferrero-rocher","name":"Ferrero Rocher","desc":"Sabor da linha de brigadeiros especiais. Vendido por cento.","category":"brigadeiros-especiais","kind":"brigadeiro-special","price":215},
  {"id":"brigadeiro-mini-confeti","name":"Mini Confeti","desc":"Sabor da linha de brigadeiros especiais. Vendido por cento.","category":"brigadeiros-especiais","kind":"brigadeiro-special","price":215},
  {"id":"brigadeiro-ninho-nutella","name":"Ninho com Nutella","desc":"Sabor da linha de brigadeiros especiais. Vendido por cento.","category":"brigadeiros-especiais","kind":"brigadeiro-special","price":215},
  {"id":"brigadeiro-olho-de-sogra","name":"Olho de Sogra","desc":"Sabor da linha de brigadeiros especiais. Vendido por cento.","category":"brigadeiros-especiais","kind":"brigadeiro-special","price":215},
  {"id":"brigadeiro-pacoca","name":"Paçoca","desc":"Sabor da linha de brigadeiros especiais. Vendido por cento.","category":"brigadeiros-especiais","kind":"brigadeiro-special","price":215},
  {"id":"brigadeiro-amendoas","name":"Amêndoas","desc":"Sabor da linha de brigadeiros gourmet. Vendido por cento.","category":"brigadeiros-gourmet","kind":"brigadeiro-gourmet","price":260,"featured":true},
  {"id":"brigadeiro-banana-passa","name":"Banana Passa","desc":"Sabor da linha de brigadeiros gourmet. Vendido por cento.","category":"brigadeiros-gourmet","kind":"brigadeiro-gourmet","price":260},
  {"id":"brigadeiro-ao-leite","name":"Brigadeiro ao Leite","desc":"Sabor da linha de brigadeiros gourmet. Vendido por cento.","category":"brigadeiros-gourmet","kind":"brigadeiro-gourmet","price":260},
  {"id":"brigadeiro-branco-gourmet","name":"Brigadeiro Branco","desc":"Sabor da linha de brigadeiros gourmet. Vendido por cento.","category":"brigadeiros-gourmet","kind":"brigadeiro-gourmet","price":260},
  {"id":"brigadeiro-meio-amargo","name":"Brigadeiro Meio Amargo","desc":"Sabor da linha de brigadeiros gourmet. Vendido por cento.","category":"brigadeiros-gourmet","kind":"brigadeiro-gourmet","price":260},
  {"id":"brigadeiro-caipirinha","name":"Caipirinha","desc":"Sabor da linha de brigadeiros gourmet. Vendido por cento.","category":"brigadeiros-gourmet","kind":"brigadeiro-gourmet","price":260},
  {"id":"brigadeiro-creme-brulee","name":"Crème Brûlée","desc":"Sabor da linha de brigadeiros gourmet. Vendido por cento.","category":"brigadeiros-gourmet","kind":"brigadeiro-gourmet","price":260},
  {"id":"brigadeiro-damasco","name":"Damasco","desc":"Sabor da linha de brigadeiros gourmet. Vendido por cento.","category":"brigadeiros-gourmet","kind":"brigadeiro-gourmet","price":260},
  {"id":"brigadeiro-delicia-uva","name":"Delícia de Uva","desc":"Sabor da linha de brigadeiros gourmet. Vendido por cento.","category":"brigadeiros-gourmet","kind":"brigadeiro-gourmet","price":260},
  {"id":"brigadeiro-maracuja","name":"Maracujá","desc":"Sabor da linha de brigadeiros gourmet. Vendido por cento.","category":"brigadeiros-gourmet","kind":"brigadeiro-gourmet","price":260},
  {"id":"brigadeiro-nozes","name":"Nozes","desc":"Sabor da linha de brigadeiros gourmet. Vendido por cento.","category":"brigadeiros-gourmet","kind":"brigadeiro-gourmet","price":260},
  {"id":"brigadeiro-raphaello","name":"Raphaello","desc":"Sabor da linha de brigadeiros gourmet. Vendido por cento.","category":"brigadeiros-gourmet","kind":"brigadeiro-gourmet","price":260},
  {"id":"brigadeiro-romeu-julieta","name":"Romeu e Julieta","desc":"Sabor da linha de brigadeiros gourmet. Vendido por cento.","category":"brigadeiros-gourmet","kind":"brigadeiro-gourmet","price":260}
];

const money = (value: number) => `R$ ${value.toFixed(2).replace(".", ",")}`;
const cakeSizes = (values: number[]): Size[] => [
  { id: "fatias-10", label: "10 fatias", hint: money(values[0]) },
  { id: "fatias-20", label: "20 fatias", hint: money(values[1]) },
  { id: "fatias-24", label: "24 fatias", hint: money(values[2]) },
  { id: "fatias-30", label: "30 fatias", hint: money(values[3]) },
  { id: "fatias-45", label: "45 fatias", hint: money(values[4]) },
  { id: "fatias-40-q", label: "40 fatias Q", hint: money(values[5]) },
  { id: "fatias-70-q", label: "70 fatias Q", hint: money(values[6]) },
];

const CAKE_SIZES_BY_CATEGORY: Partial<Record<Category["id"], Size[]>> = {
  "bolos-tradicionais": cakeSizes([128, 190, 208, 245, 370, 298, 420]),
  "bolos-refinados": cakeSizes([135, 215, 248, 298, 398, 325, 445]),
  "bolos-especiais": cakeSizes([150, 238, 272, 315, 420, 365, 480]),
};

const CATEGORY_LABELS = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label])) as Record<Category["id"], string>;

export const PRODUCTS: Product[] = CATALOG_ENTRIES.map((entry) => {
  const sizes =
    entry.kind.startsWith("cake")
      ? CAKE_SIZES_BY_CATEGORY[entry.category]
      : entry.kind === "bento"
        ? [{ id: "12-cm", label: "12 cm", hint: `1 camada · ${money(entry.price ?? 70)}` }]
        : [{ id: "cento", label: "Cento", hint: `100 unidades · ${money(entry.price ?? 0)}` }];
  return {
    id: entry.id,
    name: entry.name,
    desc: entry.desc,
    img: `/catalog/${entry.id}.jpg`,
    category: entry.category,
    tags: [CATEGORY_LABELS[entry.category]],
    sizes,
    featured: entry.featured,
  };
});

export const productById = (id: string) => PRODUCTS.find((p) => p.id === id);

/* ---------- Ocasiões (encomendas) ---------- */
export const OCCASIONS: {
  id: string;
  title: string;
  desc: string;
  icon: IconKey;
  photo: string;
}[] = [
  {
    id: "aniversario",
    title: "Aniversários",
    desc: "Bolos personalizados do seu jeito.",
    icon: "balloon",
    photo: boloOreo,
  },
  {
    id: "datas",
    title: "Datas especiais",
    desc: "Dia das Mães, Namorados e Natal.",
    icon: "bouquet",
    photo: boloRedVelvet,
  },
  {
    id: "presentes",
    title: "Presentes",
    desc: "Caixas e kits prontos para entregar.",
    icon: "gift",
    photo: brigadeiros,
  },
  {
    id: "festas",
    title: "Festas",
    desc: "Mesas de doces e bem-casados.",
    icon: "sparkle",
    photo: boloCamadas,
  },
];

/* ---------- Sobre ---------- */
export const STORY = {
  eyebrow: "Nossa história",
  title: "Duas mãos, um coração só",
  paragraphs: [
    "A Dalpizzol nasceu na Barra da Lagoa do jeito mais simples e mais bonito: receitas de família, forno quente e vontade de adoçar o dia de quem chega.",
    "Cada bolo é montado na hora, cada docinho é enrolado à mão. Nada de pressa — só carinho, ingredientes de verdade e aquele sabor de casa.",
  ],
  pills: [
    "Receitas de família",
    "Ingredientes selecionados",
    "Produção diária",
  ],
  values: [
    {
      title: "Ingredientes de qualidade",
      desc: "Selecionados um a um.",
      icon: "sprig" as IconKey,
      photo: boloCamadas,
    },
    {
      title: "Feito com amor",
      desc: "Do forno para a sua mesa.",
      icon: "heart" as IconKey,
      photo: duoCafe,
    },
    {
      title: "Tradição de família",
      desc: "Receitas que atravessam gerações.",
      icon: "family" as IconKey,
      photo: lojaDuo,
    },
  ],
  // Confirmado pelo Maicon em 03/09/2026: as donas são Glaucia e Dani (irmãs).
  makersNames: "Glaucia e Dani",
  makersIntro:
    "Somos Glaucia e Dani, duas irmãs. A Doceria Dalpizzol nasceu do amor pela confeitaria e pelo cuidado com cada detalhe.",
  makers: [
    { name: "Glaucia", role: "Confeiteira", img: glaucia },
    { name: "Dani", role: "Confeiteira", img: dani },
  ],
  photos: {
    duoPlaca,
    duoSentadas,
    duoBanco,
    duoCafe,
    duoBalcao,
    lojaDuo,
    duo,
    heroOreo,
  },
};

/* Avaliações reais publicadas no Google (perfil da Doceria Dalpizzol, 4,9★).
   NÃO adicionar depoimentos inventados aqui — só texto realmente escrito por clientes. */
export const GOOGLE_RATING = { score: "4,9", count: 9 };

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=" +
  encodeURIComponent("Doceria Dalpizzol Barra da Lagoa avaliações");

export const TESTIMONIALS: { name: string; text: string; source: string }[] = [
  {
    name: "Cliente no Google",
    text: "Doces e sobremesas deliciosas, uma experiência única.",
    source: "Google",
  },
  {
    name: "Cliente no Google",
    text: "O melhor bolo de pote!!!!",
    source: "Google",
  },
];

export const HERO_IMAGE = heroOreo;
