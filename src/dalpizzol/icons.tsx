/* =====================================================
   Doceria Dalpizzol — sistema de ícones proprietário
   Traço desenhado à mão, derivado do painel "Padrões e Ícones"
   do brand board. Grid 24×24, stroke 1.5, pontas arredondadas.
   Nenhum emoji, nenhuma biblioteca genérica.
   ===================================================== */
import { cn } from "@/lib/utils";

export type IconProps = {
  className?: string;
  strokeWidth?: number;
  /** cor de preenchimento suave (duotone) — usa currentColor a 12% se true */
  duotone?: boolean;
};

const base = (className?: string) => cn("w-6 h-6 shrink-0", className);

const S = ({
  children,
  className,
  strokeWidth = 1.5,
}: IconProps & { children: React.ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    className={base(className)}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const soft = "currentColor";
const O = 0.13; // opacidade do duotone

/* ---------- Produtos ---------- */

/** Bolo de dois andares com coração — ecoa o logotipo. */
export const IconCake = ({ duotone, ...p }: IconProps) => (
  <S {...p}>
    {duotone && (
      <>
        <path d="M6.5 20v-4.2h11V20z" fill={soft} opacity={O} stroke="none" />
        <path
          d="M8.6 15.8v-3.6h6.8v3.6z"
          fill={soft}
          opacity={O}
          stroke="none"
        />
      </>
    )}
    <path d="M4.6 20h14.8" />
    <path d="M6.5 20v-4.4c0-.5.4-.9.9-.9h9.2c.5 0 .9.4.9.9V20" />
    <path d="M6.5 17.4c.9-.9 1.9-.9 2.8 0s1.9.9 2.8 0 1.9-.9 2.8 0 1.9.9 2.6.1" />
    <path d="M8.6 15v-2.9c0-.5.4-.9.9-.9h5c.5 0 .9.4.9.9V15" />
    <path d="M8.6 13c.7-.8 1.5-.8 2.2 0s1.5.8 2.2 0 1.5-.8 2.4-.1" />
    <path d="M12 10.9V9.4" />
    <path d="M12 9.4c-.5-1-2-.8-2 .4 0 .9 1.4 1.6 2 2 .6-.4 2-1.1 2-2 0-1.2-1.5-1.4-2-.4z" />
  </S>
);

/** Fatia de bolo em camadas com morango. */
export const IconSlice = ({ duotone, ...p }: IconProps) => (
  <S {...p}>
    {duotone && (
      <path
        d="M4.4 18.6 12.7 6.2l6.9 12.4z"
        fill={soft}
        opacity={O}
        stroke="none"
      />
    )}
    <path d="M4.4 18.6h15.2" />
    <path d="M4.4 18.6 12.7 6.2c.3-.5 1-.4 1.3.1l5.6 12.3" />
    <path d="M7.1 14.6c1.2-.7 2.3-.6 3.4.1s2.2.8 3.4.1 2.3-.6 3.4.2" />
    <path d="M12.7 6.2c.1-.9-.5-1.6-1.3-1.8" />
    <circle cx="13.9" cy="4.2" r="1.4" />
  </S>
);

/** Docinho / brigadeiro na forminha. */
export const IconBonbon = ({ duotone, ...p }: IconProps) => (
  <S {...p}>
    {duotone && (
      <circle cx="12" cy="10.4" r="4.4" fill={soft} opacity={O} stroke="none" />
    )}
    <circle cx="12" cy="10.4" r="4.4" />
    <path d="M6.6 14.6h10.8l-1.1 4.2c-.1.5-.5.8-1 .8H8.7c-.5 0-.9-.3-1-.8z" />
    <path d="M9.3 14.6 8.8 19.6M12 14.6v5M14.7 14.6l.5 5" />
    <path d="M10.4 9.2c.5-.6 1.2-.7 1.8-.2M12 5.6V4.2" />
  </S>
);

/** Sobremesa no pote / taça com camadas. */
export const IconJar = ({ duotone, ...p }: IconProps) => (
  <S {...p}>
    {duotone && (
      <path
        d="M6.9 8.4h10.2l-.9 10.4H7.8z"
        fill={soft}
        opacity={O}
        stroke="none"
      />
    )}
    <path d="M6.4 6.6h11.2c.4 0 .7.3.7.8l-.1 1c0 .4-.4.7-.8.7H6.6c-.4 0-.8-.3-.8-.7l-.1-1c0-.5.3-.8.7-.8z" />
    <path d="M6.9 9.1l.8 9.4c0 .6.5 1.1 1.1 1.1h6.4c.6 0 1.1-.5 1.1-1.1l.8-9.4" />
    <path d="M7.5 13.1c1.2-.8 2.4-.8 3.6 0s2.4.8 3.6 0 1.6-.6 1.9-.4" />
    <path d="M8 16.6c1-.7 2.1-.7 3.1 0s2.1.7 3.1 0" />
    <path d="M9.6 6.6c0-1.3.9-2.3 2.4-2.3s2.4 1 2.4 2.3" />
  </S>
);

/** Caixa presente com laço e florzinha. */
export const IconGift = ({ duotone, ...p }: IconProps) => (
  <S {...p}>
    {duotone && (
      <path d="M4.8 11.4h14.4v8H4.8z" fill={soft} opacity={O} stroke="none" />
    )}
    <path d="M4.4 8.6h15.2c.4 0 .7.3.7.7v1.8c0 .4-.3.7-.7.7H4.4c-.4 0-.7-.3-.7-.7V9.3c0-.4.3-.7.7-.7z" />
    <path d="M5.5 11.8v6.8c0 .6.5 1.1 1.1 1.1h10.8c.6 0 1.1-.5 1.1-1.1v-6.8" />
    <path d="M12 8.6v11" />
    <path d="M12 8.6C10.6 8.6 8 8.4 8 6.6c0-1.1 1-1.7 1.9-1.3 1 .5 1.7 2 2.1 3.3z" />
    <path d="M12 8.6c1.4 0 4-.2 4-2 0-1.1-1-1.7-1.9-1.3-1 .5-1.7 2-2.1 3.3z" />
  </S>
);

/* ---------- Marca / valores ---------- */

/** Ramo de folhas — do padrão da marca. */
export const IconSprig = ({ ...p }: IconProps) => (
  <S {...p}>
    <path d="M12 20.5c0-6 1.5-11 6.5-16" />
    <path d="M13.4 14.6c-1.7-.6-3.2-.2-4.4 1.1M14.6 11.2c-1.8-.9-3.4-.7-4.8.5M16.3 8c-1.7-1.1-3.3-1.1-4.8-.1" />
    <path d="M13.9 13.9c1.5.4 2.9-.1 4-1.6M15.3 10.4c1.4.2 2.7-.5 3.6-2" />
  </S>
);

/** Coração com traço da marca. */
export const IconHeart = ({ duotone, ...p }: IconProps) => (
  <S {...p}>
    {duotone && (
      <path
        d="M12 20.2C9.4 18 4.2 14.5 4.2 10.1 4.2 7.3 6.3 5.4 8.7 5.4c1.6 0 2.7.9 3.3 1.9.6-1 1.7-1.9 3.3-1.9 2.4 0 4.5 1.9 4.5 4.7 0 4.4-5.2 7.9-7.8 10.1z"
        fill={soft}
        opacity={O}
        stroke="none"
      />
    )}
    <path d="M12 20.2C9.4 18 4.2 14.5 4.2 10.1 4.2 7.3 6.3 5.4 8.7 5.4c1.6 0 2.7.9 3.3 1.9.6-1 1.7-1.9 3.3-1.9 2.4 0 4.5 1.9 4.5 4.7 0 4.4-5.2 7.9-7.8 10.1z" />
  </S>
);

/** Duas figuras — tradição de família. */
export const IconFamily = ({ ...p }: IconProps) => (
  <S {...p}>
    <circle cx="8.6" cy="7.4" r="2.6" />
    <circle cx="16" cy="8.6" r="2.2" />
    <path d="M3.8 19.6c0-3 2.1-5.2 4.8-5.2s4.8 2.2 4.8 5.2" />
    <path d="M14.2 19.6c0-2.6 1.4-4.4 3.4-4.4 1.7 0 2.9 1.3 3.2 3.2" />
    <path d="M11.2 12.2c.9-.5 1.4-1.1 1.5-2" />
  </S>
);

/** Batedor de confeiteiro. */
export const IconWhisk = ({ ...p }: IconProps) => (
  <S {...p}>
    <path d="M11.9 12.6 6.4 19.4c-.5.6-1.4.7-2 .1-.6-.5-.6-1.4-.1-2l5.6-6.6" />
    <path d="M12.3 3.9c2.6 0 4.7 2.1 4.7 4.7 0 2.3-1.9 4.6-4.5 4.6-2.5 0-4.4-2-4.4-4.5 0-2.7 1.9-4.8 4.2-4.8z" />
    <path d="M12.4 4c-1 1.1-1.5 2.7-1.5 4.6s.5 3.4 1.4 4.6M12.4 4c1 1.1 1.6 2.7 1.6 4.6s-.6 3.4-1.5 4.6" />
    <path d="M8.4 6.6h8M8.1 10.5h8.6" />
  </S>
);

/** Flor de 5 pétalas — do padrão da marca. */
export const IconFlower = ({ ...p }: IconProps) => (
  <S {...p}>
    <circle cx="12" cy="12" r="2.2" />
    <path d="M12 9.8c1-1.6.6-3.6-1-4.4-1.5.9-1.8 2.9-.8 4.4M14.2 12c1.9-.3 3.1-2 2.6-3.7-1.7-.3-3.3 1-3.5 2.9M13.4 14c1.5 1.2 3.6 1 4.4-.6-.9-1.5-3-1.8-4.4-.6M10.6 14c-1.5 1.2-3.6 1-4.4-.6.9-1.5 3-1.8 4.4-.6M9.8 12c-1.9-.3-3.1-2-2.6-3.7 1.7-.3 3.3 1 3.5 2.9" />
    <path d="M12 14.2v5.4M12 17.4c1.2-.2 1.9-1 2-2.2" />
  </S>
);

/* ---------- Ocasiões ---------- */

/** Balão de festa — aniversários. */
export const IconBalloon = ({ ...p }: IconProps) => (
  <S {...p}>
    <path d="M12 3.4c3 0 5.4 2.5 5.4 5.8 0 3.6-3.2 6.3-5.4 6.3s-5.4-2.7-5.4-6.3c0-3.3 2.4-5.8 5.4-5.8z" />
    <path d="m12 15.5-.8 1.4h1.6z" />
    <path d="M12 16.9c0 1.5-1.6 1.4-1.6 2.5s1.6 1.1 1.6-.2" />
    <path d="M9.6 8.1c.2-1.5 1.1-2.5 2.4-2.8" />
  </S>
);

/** Buquê — datas especiais. */
export const IconBouquet = ({ ...p }: IconProps) => (
  <S {...p}>
    <circle cx="8.6" cy="6.9" r="1.9" />
    <circle cx="15.3" cy="7.6" r="1.7" />
    <circle cx="12" cy="4.9" r="1.6" />
    <path d="M8.8 8.8 11 14M15.1 9.3 12.8 14M12 6.5V14" />
    <path d="M9.4 14h5.2l1.6 4.6c.2.6-.2 1.2-.9 1.2H8.7c-.6 0-1.1-.6-.9-1.2z" />
    <path d="M9.7 16.4h4.6" />
  </S>
);

/** Brilho / festas. */
export const IconSparkle = ({ ...p }: IconProps) => (
  <S {...p}>
    <path d="M12 3.6c.5 3.6 1.6 5.6 5.2 6.4-3.6.8-4.7 2.8-5.2 6.4-.5-3.6-1.6-5.6-5.2-6.4 3.6-.8 4.7-2.8 5.2-6.4z" />
    <path d="M18.2 15.2c.2 1.6.7 2.4 2.3 2.8-1.6.4-2.1 1.2-2.3 2.8-.2-1.6-.7-2.4-2.3-2.8 1.6-.4 2.1-1.2 2.3-2.8z" />
    <path d="M5.6 16.4c.1 1 .5 1.6 1.6 1.8-1.1.2-1.5.8-1.6 1.8-.1-1-.5-1.6-1.6-1.8 1.1-.2 1.5-.8 1.6-1.8z" />
  </S>
);

/* ---------- Serviço / interface ---------- */

export const IconTruck = ({ ...p }: IconProps) => (
  <S {...p}>
    <path d="M2.8 7.4h9.6c.5 0 .9.4.9.9v7.3H3.7c-.5 0-.9-.4-.9-.9z" />
    <path d="M13.3 10.4h3.4c.4 0 .7.2.9.5l2 3.2c.1.2.2.4.2.6v.9h-6.5z" />
    <circle cx="7.2" cy="17.4" r="1.9" />
    <circle cx="16.4" cy="17.4" r="1.9" />
    <path d="M9.1 17.4h5.4" />
  </S>
);

export const IconStore = ({ ...p }: IconProps) => (
  <S {...p}>
    <path d="M4.4 9.9h15.2v8.8c0 .5-.4.9-.9.9H5.3c-.5 0-.9-.4-.9-.9z" />
    <path d="M3.4 9.9 5 5.2c.1-.4.5-.7.9-.7h12.2c.4 0 .8.3.9.7l1.6 4.7" />
    <path d="M3.4 9.9c0 1.3 1 2.3 2.2 2.3s2.2-1 2.2-2.3c0 1.3 1 2.3 2.2 2.3s2.2-1 2.2-2.3c0 1.3 1 2.3 2.2 2.3s2.2-1 2.2-2.3c0 1.3 1 2.3 2.2 2.3s2.2-1 2.2-2.3" />
    <path d="M9.8 19.6v-4.3c0-.4.3-.7.7-.7h3c.4 0 .7.3.7.7v4.3" />
  </S>
);

export const IconCalendarHeart = ({ ...p }: IconProps) => (
  <S {...p}>
    <rect x="3.6" y="5.4" width="16.8" height="14.2" rx="2" />
    <path d="M3.6 9.8h16.8M8.2 3.4v3.6M15.8 3.4v3.6" />
    <path d="M12 17.6c-1.3-1.1-3.3-2.5-3.3-4.1 0-1.1.9-1.9 1.9-1.9.6 0 1.1.3 1.4.8.3-.5.8-.8 1.4-.8 1 0 1.9.8 1.9 1.9 0 1.6-2 3-3.3 4.1z" />
  </S>
);

export const IconClock = ({ ...p }: IconProps) => (
  <S {...p}>
    <circle cx="12" cy="12" r="8.2" />
    <path d="M12 7.4V12l3.1 1.9" />
  </S>
);

export const IconPin = ({ ...p }: IconProps) => (
  <S {...p}>
    <path d="M12 21c3.6-4.3 6-7.3 6-10.2C18 6.9 15.3 4 12 4s-6 2.9-6 6.8C6 13.7 8.4 16.7 12 21z" />
    <circle cx="12" cy="10.6" r="2.3" />
  </S>
);

export const IconStar = ({
  filled,
  ...p
}: IconProps & { filled?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={base(p.className)}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={p.strokeWidth ?? 1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m12 4 2.3 4.9 5.2.7-3.8 3.7 1 5.3L12 16.1 7.3 18.6l1-5.3-3.8-3.7 5.2-.7z" />
  </svg>
);

export const IconSearch = ({ ...p }: IconProps) => (
  <S {...p}>
    <circle cx="11" cy="11" r="6.4" />
    <path d="m15.8 15.8 3.6 3.6" />
  </S>
);

export const IconPlus = ({ ...p }: IconProps) => (
  <S {...p}>
    <path d="M12 6.4v11.2M6.4 12h11.2" />
  </S>
);

export const IconClose = ({ ...p }: IconProps) => (
  <S {...p}>
    <path d="m6.6 6.6 10.8 10.8M17.4 6.6 6.6 17.4" />
  </S>
);

export const IconChevronRight = ({ ...p }: IconProps) => (
  <S {...p}>
    <path d="m9.6 5.6 6.4 6.4-6.4 6.4" />
  </S>
);

export const IconChevronDown = ({ ...p }: IconProps) => (
  <S {...p}>
    <path d="m5.6 9.4 6.4 6.4 6.4-6.4" />
  </S>
);

export const IconBag = ({ ...p }: IconProps) => (
  <S {...p}>
    <path d="M5.6 7.8h12.8l1 11.1c.1.6-.4 1.1-1 1.1H5.6c-.6 0-1.1-.5-1-1.1z" />
    <path d="M8.9 10.2V7.2c0-1.8 1.4-3.2 3.1-3.2s3.1 1.4 3.1 3.2v3" />
  </S>
);

export const IconTrash = ({ ...p }: IconProps) => (
  <S {...p}>
    <path d="M4.8 6.9h14.4M9.4 6.9V5.3c0-.6.5-1.1 1.1-1.1h3c.6 0 1.1.5 1.1 1.1v1.6" />
    <path d="M6.6 6.9l.8 12c0 .6.5 1 1.1 1h7c.6 0 1.1-.4 1.1-1l.8-12" />
    <path d="M10.4 10.2v6M13.6 10.2v6" />
  </S>
);

export const IconCheck = ({ ...p }: IconProps) => (
  <S {...p}>
    <circle cx="12" cy="12" r="8.2" />
    <path d="m8.4 12.2 2.5 2.5 4.7-5.1" />
  </S>
);

export const IconDownload = ({ ...p }: IconProps) => (
  <S {...p}>
    <path d="M12 4v10.4M8.4 11l3.6 3.6L15.6 11" />
    <path d="M4.8 16.4v2.2c0 .7.6 1.3 1.3 1.3h11.8c.7 0 1.3-.6 1.3-1.3v-2.2" />
  </S>
);

export const IconInstagram = ({ ...p }: IconProps) => (
  <S {...p}>
    <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.6" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.6" cy="7.4" r=".9" fill="currentColor" stroke="none" />
  </S>
);

/* ---------- Navegação (versões cheias e vazadas) ---------- */

export const IconHome = ({
  active,
  ...p
}: IconProps & { active?: boolean }) => (
  <S {...p}>
    {active && (
      <path
        d="M5 10.6 12 4.8l7 5.8v8.1c0 .5-.4.9-.9.9H5.9c-.5 0-.9-.4-.9-.9z"
        fill={soft}
        opacity={O}
        stroke="none"
      />
    )}
    <path d="M4.4 10.9 12 4.6l7.6 6.3" />
    <path d="M6 11.9v6.8c0 .5.4 1 1 1h10c.6 0 1-.5 1-1v-6.8" />
    <path d="M12 19.7v-3.6c0-.9.7-1.6 1.5-1.6" />
  </S>
);

export const IconOrderList = ({ ...p }: IconProps) => (
  <S {...p}>
    <path d="M7.4 4.6h9.2c.7 0 1.3.6 1.3 1.3v13.2c0 .7-.6 1.3-1.3 1.3H7.4c-.7 0-1.3-.6-1.3-1.3V5.9c0-.7.6-1.3 1.3-1.3z" />
    <path d="M9.4 3.4h5.2v2.4H9.4z" />
    <path d="M9 10.4h6M9 13.6h6M9 16.8h3.6" />
  </S>
);

/* Mapa de ícones por chave — usado pelos dados. */
export const ICONS = {
  cake: IconCake,
  slice: IconSlice,
  bonbon: IconBonbon,
  jar: IconJar,
  gift: IconGift,
  sprig: IconSprig,
  heart: IconHeart,
  family: IconFamily,
  whisk: IconWhisk,
  flower: IconFlower,
  balloon: IconBalloon,
  bouquet: IconBouquet,
  sparkle: IconSparkle,
  truck: IconTruck,
  store: IconStore,
  calendarHeart: IconCalendarHeart,
  clock: IconClock,
  pin: IconPin,
  star: IconStar,
  search: IconSearch,
  bag: IconBag,
  instagram: IconInstagram,
} as const;

export type IconKey = keyof typeof ICONS;

export const Icon = ({ name, ...p }: IconProps & { name: IconKey }) => {
  const C = ICONS[name];
  return <C {...p} />;
};
