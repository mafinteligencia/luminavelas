/* =====================================================
   Doceria Dalpizzol — conteúdo do app
   Textos preservados do site anterior; sem valores em R$ (decisão 02/09/2026).
   ===================================================== */
import boloCamadas from "@/assets/dalpizzol/bolo-camadas.jpg";
import boloRedVelvet from "@/assets/dalpizzol/bolo-redvelvet.jpg";
import boloOreo from "@/assets/dalpizzol/bolo-oreo.jpg";
import brigadeiros from "@/assets/dalpizzol/brigadeiros.jpg";
import sobremesaTaca from "@/assets/dalpizzol/sobremesa-taca.jpg";
import heroOreo from "@/assets/dalpizzol/hero-oreo.jpg";
import duoPlaca from "@/assets/dalpizzol/duo-placa.jpg";
import duoSentadas from "@/assets/dalpizzol/duo-sentadas.jpg";
import duoBanco from "@/assets/dalpizzol/duo-banco.jpg";
import duoCafe from "@/assets/dalpizzol/duo-cafe.jpg";
import duoBalcao from "@/assets/dalpizzol/duo-balcao.jpg";
import lojaDuo from "@/assets/dalpizzol/loja-duo.jpg";
import duo from "@/assets/dalpizzol/duo.jpg";
import glaucia from "@/assets/dalpizzol/glaucia.jpg";
import dani from "@/assets/dalpizzol/dani.jpg";
import logo from "@/assets/dalpizzol/logo.png";

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

export const CAKE_SIZES: Size[] = [
  { id: "P", label: "Pequeno", hint: "10 fatias" },
  { id: "M", label: "Médio", hint: "15 fatias" },
  { id: "G", label: "Grande", hint: "20 fatias" },
];

import type { IconKey } from "./icons";

export type Category = { id: string; label: string; icon: IconKey };

export const CATEGORIES: Category[] = [
  { id: "bolos", label: "Bolos", icon: "cake" },
  { id: "doces", label: "Doces finos", icon: "bonbon" },
  { id: "potes", label: "No pote", icon: "jar" },
  { id: "presentes", label: "Presentes", icon: "gift" },
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

export const PRODUCTS: Product[] = [
  {
    id: "bolo-oreo",
    name: "Bolo de Oreo",
    desc: "Massa de chocolate úmida, creme de baunilha com cookies triturados.",
    img: boloOreo,
    category: "bolos",
    tags: ["Chocolate", "Mais pedido"],
    sizes: CAKE_SIZES,
    featured: true,
  },
  {
    id: "red-velvet",
    name: "Red Velvet",
    desc: "Clássico aveludado, cream cheese e morangos frescos.",
    img: boloRedVelvet,
    category: "bolos",
    tags: ["Clássico"],
    sizes: CAKE_SIZES,
    featured: true,
  },
  {
    id: "bolo-camadas",
    name: "Bolo de Camadas",
    desc: "Camadas fofinhas, creme sedoso e amêndoas crocantes.",
    img: boloCamadas,
    category: "bolos",
    tags: ["Tradicional"],
    sizes: CAKE_SIZES,
  },
  {
    id: "brigadeiros",
    name: "Brigadeiros Gourmet",
    desc: "Belga, nozes, ninho, beijinho e mais sabores da casa.",
    img: brigadeiros,
    category: "doces",
    tags: ["Festas"],
    featured: true,
  },
  {
    id: "bem-casados",
    name: "Bem-casados & mimos",
    desc: "Doces finos para lembranças, festas e casamentos.",
    img: brigadeiros,
    category: "doces",
    tags: ["Casamentos"],
  },
  {
    id: "taca-morango",
    name: "Taça de Morango",
    desc: "Camadas de creme, morango fresco e chocolate.",
    img: sobremesaTaca,
    category: "potes",
    tags: ["Sobremesa"],
    featured: true,
  },
  {
    id: "bolo-pote",
    name: "Bolo no Pote",
    desc: "A sobremesa perfeita para levar — pronta para presentear.",
    img: boloCamadas,
    category: "potes",
    tags: ["Para levar"],
  },
  {
    id: "caixa-presente",
    name: "Caixa Presente",
    desc: "Caixas e kits prontos para entregar em datas especiais.",
    img: brigadeiros,
    category: "presentes",
    tags: ["Datas especiais"],
  },
];

export const productById = (id: string) => PRODUCTS.find((p) => p.id === id);

/* ---------- Ocasiões (encomendas) ---------- */
export const OCCASIONS: {
  id: string;
  title: string;
  desc: string;
  icon: IconKey;
}[] = [
  {
    id: "aniversario",
    title: "Aniversários",
    desc: "Bolos personalizados do seu jeito.",
    icon: "balloon",
  },
  {
    id: "datas",
    title: "Datas especiais",
    desc: "Dia das Mães, Namorados e Natal.",
    icon: "bouquet",
  },
  {
    id: "presentes",
    title: "Presentes",
    desc: "Caixas e kits prontos para entregar.",
    icon: "gift",
  },
  {
    id: "festas",
    title: "Festas",
    desc: "Mesas de doces e bem-casados.",
    icon: "sparkle",
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
    },
    {
      title: "Feito com amor",
      desc: "Do forno para a sua mesa.",
      icon: "heart" as IconKey,
    },
    {
      title: "Tradição de família",
      desc: "Receitas que atravessam gerações.",
      icon: "family" as IconKey,
    },
  ],
  // Donas conforme o brand board (Juliana e Sandra). Ordem das fotos a confirmar com o cliente.
  makersNames: "Juliana e Sandra",
  makersIntro:
    "Somos Juliana e Sandra, e a Doceria Dalpizzol nasceu do amor pela confeitaria e pelo cuidado com cada detalhe.",
  makers: [
    { role: "Confeiteira", img: glaucia },
    { role: "Confeiteira", img: dani },
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

export const TESTIMONIALS = [
  {
    name: "Marina S.",
    text: "O bolo de Oreo é simplesmente o melhor de Floripa. Chegou lindo e fresquinho!",
  },
  {
    name: "Rafael T.",
    text: "Encomendei os doces do aniversário da minha filha. Todo mundo elogiou.",
  },
  {
    name: "Camila P.",
    text: "Atendimento carinhoso e sabor de casa. Virei cliente fiel.",
  },
];

export const HERO_IMAGE = heroOreo;
