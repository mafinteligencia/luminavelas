import capa from "@/assets/dalpizzol/proposta/capa.webp";
import metaPiece from "@/assets/dalpizzol/proposta/meta.webp";
import googlePiece from "@/assets/dalpizzol/proposta/google.webp";
import ecossistemaPiece from "@/assets/dalpizzol/proposta/ecossistema.webp";
import planoPiece from "@/assets/dalpizzol/proposta/plano.webp";
import capaV from "@/assets/dalpizzol/proposta/capa-v.webp";
import metaV from "@/assets/dalpizzol/proposta/meta-v.webp";
import googleV from "@/assets/dalpizzol/proposta/google-v.webp";
import ecossistemaV from "@/assets/dalpizzol/proposta/ecossistema-v.webp";
import planoV from "@/assets/dalpizzol/proposta/plano-v.webp";
import type { IconKey } from "../icons";

/* =====================================================
   Proposta 2026 — Dalpizzol · Performance Local
   Conteúdo do mapa 3D interativo. Uma peça por slide;
   os pontos do mapa apontam para os slides pelo id.
   ===================================================== */

export const PIECES = {
  capa: { wide: capa, tall: capaV },
  meta: { wide: metaPiece, tall: metaV },
  google: { wide: googlePiece, tall: googleV },
  ecossistema: { wide: ecossistemaPiece, tall: ecossistemaV },
  plano: { wide: planoPiece, tall: planoV },
} as const;

export type PieceKey = keyof typeof PIECES;

export type Slide = {
  id: string;
  label: string;
  title: string;
  lead: string;
  bullets?: { title: string; desc: string; icon: IconKey }[];
  notes?: string[];
  piece: PieceKey;
  /** slide do plano — rende os cartões de investimento */
  plan?: boolean;
};

export const SLIDES: Slide[] = [
  {
    id: "marca",
    label: "A marca",
    title: "Uma doceria que já é querida na Barra",
    lead: "Tradição de família, sabor que acolhe. A Dalpizzol tem marca, produto e reputação — a proposta parte de uma base que já funciona.",
    bullets: [
      {
        title: "Identidade consolidada",
        desc: "Marca, tom e linguagem visual reconhecíveis.",
        icon: "heart",
      },
      {
        title: "Reputação alta no Google",
        desc: "Avaliação de 4,9 no perfil da doceria.",
        icon: "star",
      },
      {
        title: "Ponto físico na Barra",
        desc: "R. Altamiro Barcelos Dutra, 1334 — a poucos passos da praia.",
        icon: "pin",
      },
    ],
    piece: "capa",
  },
  {
    id: "google",
    label: "Google Ads",
    title: "Capturar quem já está procurando",
    lead: "Quem digita “bolo Barra da Lagoa” não precisa ser convencido a querer bolo. Precisa encontrar a Dalpizzol primeiro.",
    bullets: [
      {
        title: "Busca com intenção",
        desc: "Quem procura bolo ou doceria já quer comprar.",
        icon: "search",
      },
      {
        title: "Presença local",
        desc: "Aparecer melhor no Google e no Maps, na hora da decisão.",
        icon: "pin",
      },
      {
        title: "Palavras-chave do bairro",
        desc: "“bolo Barra da Lagoa”, “doceria Barra da Lagoa” e variações.",
        icon: "store",
      },
      {
        title: "Tráfego qualificado",
        desc: "Leva ao site pessoas prontas para encomendar, não curiosos.",
        icon: "truck",
      },
    ],
    piece: "google",
  },
  {
    id: "social",
    label: "Conteúdo",
    title: "Social media com a Thaís",
    lead: "A camada que já roda: conteúdo, relacionamento e consistência. O tráfego pago não substitui isso — ele amplifica.",
    bullets: [
      {
        title: "Conteúdo",
        desc: "Bolos, bastidores e datas especiais em ritmo constante.",
        icon: "bonbon",
      },
      {
        title: "Relacionamento",
        desc: "Responder, comentar e manter a marca viva no feed de quem já segue.",
        icon: "heart",
      },
      {
        title: "Consistência",
        desc: "Presença previsível — o que dá lastro para o anúncio converter.",
        icon: "calendarHeart",
      },
    ],
    piece: "ecossistema",
  },
  {
    id: "site",
    label: "Site + app",
    title: "Site e app mobile-first, entregues",
    lead: "Catálogo, favoritos, montagem de pedido e envio direto pelo WhatsApp. É para cá que o tráfego vai.",
    bullets: [
      {
        title: "Catálogo completo",
        desc: "Bolos, doces finos, potes e presentes com foto e descrição.",
        icon: "store",
      },
      {
        title: "Encomenda em 3 passos",
        desc: "Escolher, definir data e enviar o resumo pelo WhatsApp.",
        icon: "bag",
      },
      {
        title: "Instalável no celular",
        desc: "Funciona como aplicativo, com ícone na tela inicial.",
        icon: "sparkle",
      },
    ],
    piece: "ecossistema",
  },
  {
    id: "meta",
    label: "Meta Ads",
    title: "Descoberta, desejo e lembrança de marca",
    lead: "Instagram e Facebook para alcançar quem ainda não conhece a doceria — e para voltar a aparecer para quem já demonstrou interesse.",
    bullets: [
      {
        title: "Alcance local",
        desc: "Atrai pessoas da Barra da Lagoa e região, quem realmente pode chegar até a loja.",
        icon: "pin",
      },
      {
        title: "Criativos que dão água na boca",
        desc: "Bolos, doces e momentos especiais em peças feitas para parar o dedo no feed.",
        icon: "bonbon",
      },
      {
        title: "Remarketing",
        desc: "Reimpacta quem já visitou o perfil ou o site e ainda não encomendou.",
        icon: "family",
      },
      {
        title: "Mais pedidos",
        desc: "Leva a pessoa direto ao site ou ao WhatsApp, pelo caminho mais curto.",
        icon: "bag",
      },
    ],
    piece: "meta",
  },
  {
    id: "duo",
    label: "Quem faz",
    title: "Glaucia e Dani",
    lead: "Duas irmãs à frente da produção. Cada bolo é montado na hora e cada docinho é enrolado à mão — é isso que a comunicação precisa mostrar.",
    bullets: [
      {
        title: "Rosto da marca",
        desc: "Pessoas vendem doceria de bairro melhor do que qualquer anúncio genérico.",
        icon: "family",
      },
      {
        title: "Produção diária",
        desc: "Nada de estoque parado: o que sai do forno é o que vai para a vitrine.",
        icon: "whisk",
      },
    ],
    piece: "capa",
  },
  {
    id: "ecossistema",
    label: "Ecossistema",
    title: "Como as camadas se conectam",
    lead: "Conteúdo + Google + Site + Tráfego. Nenhuma peça funciona sozinha — o ganho vem da soma.",
    bullets: [
      {
        title: "Descoberta",
        desc: "A pessoa vê a Dalpizzol pela primeira vez.",
        icon: "search",
      },
      {
        title: "Desejo",
        desc: "O criativo desperta vontade de comer aquele bolo.",
        icon: "heart",
      },
      {
        title: "Busca",
        desc: "Ela procura o nome, o endereço, o cardápio.",
        icon: "pin",
      },
      {
        title: "Pedido",
        desc: "Encomenda pelo site ou pelo WhatsApp.",
        icon: "bag",
      },
    ],
    notes: [
      "Resultado esperado: mais descoberta, mais autoridade, mais pedidos.",
    ],
    piece: "ecossistema",
  },
  {
    id: "plano",
    label: "O plano",
    title: "Performance Local",
    lead: "Investimento para posicionar e vender mais, com otimização semanal e relatório mensal simplificado.",
    piece: "plano",
    plan: true,
  },
  {
    id: "resultado",
    label: "Resultado",
    title: "Mais descoberta. Mais autoridade. Mais pedidos.",
    lead: "A próxima camada transforma presença em demanda. É isso que a Dalpizzol ganha ao ligar tráfego ao que já está de pé.",
    bullets: [
      {
        title: "Mais descoberta",
        desc: "Gente nova conhecendo a doceria toda semana.",
        icon: "search",
      },
      {
        title: "Mais autoridade",
        desc: "Aparecer bem no Google constrói confiança antes da visita.",
        icon: "star",
      },
      {
        title: "Mais pedidos",
        desc: "Encomendas previsíveis, não só o movimento de balcão.",
        icon: "bag",
      },
    ],
    piece: "plano",
  },
];

export const PLAN_CARDS = [
  {
    label: "Gestão de performance",
    prefix: "",
    value: "R$ 1.497",
    note: "Meta Ads + Google Ads + estratégia + otimização",
    highlight: false,
  },
  {
    label: "Verba de mídia",
    prefix: "a partir de ",
    value: "R$ 1.200",
    note: "Investimento pago diretamente às plataformas",
    highlight: false,
  },
  {
    label: "Investimento inicial",
    prefix: "",
    value: "R$ 2.697",
    note: "Gestão + verba de mídia somadas. A verba pode crescer conforme o resultado.",
    highlight: true,
  },
];

export const PLAN_INCLUDES = [
  "Gestão de Meta Ads",
  "Gestão de Google Ads",
  "Remarketing",
  "Integração com o site e o WhatsApp",
  "Otimização semanal",
  "Relatório mensal simplificado",
];

/* ---------- Pontos do mapa ----------
   Coordenadas em % sobre a peça de abertura.
   `wide` = peça 16:9 (desktop) · `tall` = peça 9:16 (celular).
   ------------------------------------ */
export type Hotspot = {
  slide: string;
  wide: { x: number; y: number };
  tall: { x: number; y: number };
  /** lado para o qual o rótulo abre, para não sair da tela */
  side?: "left" | "right";
};

export const HOTSPOTS: Hotspot[] = [
  {
    slide: "marca",
    wide: { x: 9.8, y: 10.6 },
    tall: { x: 50, y: 8.9 },
    side: "right",
  },
  {
    slide: "google",
    wide: { x: 15.9, y: 38.3 },
    tall: { x: 15.9, y: 79.8 },
    side: "right",
  },
  {
    slide: "social",
    wide: { x: 15.9, y: 68.1 },
    tall: { x: 36.7, y: 79.8 },
    side: "right",
  },
  {
    slide: "site",
    wide: { x: 85.9, y: 38.3 },
    tall: { x: 61.3, y: 79.8 },
    side: "left",
  },
  {
    slide: "meta",
    wide: { x: 85.9, y: 68.1 },
    tall: { x: 82.8, y: 79.8 },
    side: "left",
  },
  {
    slide: "duo",
    wide: { x: 71.5, y: 67.4 },
    tall: { x: 78.5, y: 47 },
    side: "left",
  },
  {
    slide: "ecossistema",
    wide: { x: 36.5, y: 47.5 },
    tall: { x: 26, y: 45 },
    side: "right",
  },
  {
    slide: "plano",
    wide: { x: 60, y: 77.7 },
    tall: { x: 67.4, y: 67.7 },
    side: "left",
  },
  {
    slide: "resultado",
    wide: { x: 15, y: 95 },
    tall: { x: 10.3, y: 97.4 },
    side: "right",
  },
];
