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

/* =====================================================
   Proposta 2026 — Dalpizzol · Performance Local
   Os slides SÃO as 5 peças 3D, na ordem em que foram
   numeradas ("Slide 1 de 5" … "Slide 5 de 5").
   Não existe texto fora das peças — só o cromo de navegação.
   ===================================================== */

export type Slide = {
  id: string;
  /** rótulo curto (barra superior e rótulo do ponto) */
  label: string;
  /** título da peça, como está impresso nela */
  title: string;
  /** subtítulo da peça, como está impresso nela */
  caption: string;
  wide: string;
  tall: string;
  /** transição de entrada: fatia de bolo ou brigadeiro (círculo) */
  reveal: "fatia" | "brigadeiro";
};

export const SLIDES: Slide[] = [
  {
    id: "performance",
    label: "Performance Local",
    title: "Dalpizzol · Performance Local",
    caption: "Upsell de posicionamento · Meta Ads + Google Ads",
    wide: capa,
    tall: capaV,
    reveal: "fatia",
  },
  {
    id: "meta",
    label: "Meta Ads",
    title: "Meta Ads",
    caption: "Descoberta, desejo e lembrança de marca",
    wide: metaPiece,
    tall: metaV,
    reveal: "brigadeiro",
  },
  {
    id: "google",
    label: "Google Ads",
    title: "Google Ads",
    caption: "Capturar quem já está procurando",
    wide: googlePiece,
    tall: googleV,
    reveal: "fatia",
  },
  {
    id: "ecossistema",
    label: "Ecossistema",
    title: "Ecossistema de Performance",
    caption: "Conteúdo + Google + Site + Tráfego",
    wide: ecossistemaPiece,
    tall: ecossistemaV,
    reveal: "brigadeiro",
  },
  {
    id: "plano",
    label: "O plano",
    title: "Plano Dalpizzol · Performance Local",
    caption: "Investimento para posicionar e vender mais",
    wide: planoPiece,
    tall: planoV,
    reveal: "fatia",
  },
];

/* ---------- Pontos do mapa ----------
   O mapa é a peça 1. Coordenadas em % sobre a peça:
   `wide` = 16:9 (desktop) · `tall` = 9:16 (celular).
   A ordem aqui É a ordem dos slides (1 → 5).
   ------------------------------------ */
export type Hotspot = {
  slide: string;
  wide: { x: number; y: number };
  tall: { x: number; y: number };
  side?: "left" | "right";
};

export const HOTSPOTS: Hotspot[] = [
  // 01 · o selo da marca, no alto
  {
    slide: "performance",
    wide: { x: 9.8, y: 10.6 },
    tall: { x: 50, y: 8.9 },
    side: "right",
  },
  // 02 · Meta Ads → o cartão de social media (Instagram / Facebook)
  {
    slide: "meta",
    wide: { x: 15.9, y: 68.1 },
    tall: { x: 36.7, y: 79.8 },
    side: "right",
  },
  // 03 · Google Ads → o cartão do Google
  {
    slide: "google",
    wide: { x: 15.9, y: 38.3 },
    tall: { x: 15.9, y: 79.8 },
    side: "right",
  },
  // 04 · Ecossistema → a loja, no centro de tudo
  {
    slide: "ecossistema",
    wide: { x: 36.5, y: 47.5 },
    tall: { x: 26, y: 45 },
    side: "right",
  },
  // 05 · O plano → o cartão Meta Ads + Google Ads
  {
    slide: "plano",
    wide: { x: 85.9, y: 68.1 },
    tall: { x: 82.8, y: 79.8 },
    side: "left",
  },
];
