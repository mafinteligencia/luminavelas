import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  IconBag,
  IconCake,
  IconClose,
  IconDownload,
  IconHeart,
  IconHome,
  IconOrderList,
} from "./icons";
import { BRAND, HERO_IMAGE, WHATSAPP_URL } from "./data";
import { useCart } from "./cart";
import { WhatsAppIcon } from "./ui";
import { cn } from "@/lib/utils";

const TABS = [
  { to: "/", label: "Início", icon: IconHome, end: true },
  { to: "/bolos", label: "Bolos", icon: IconCake },
  { to: "/encomendar", label: "Encomendar", icon: IconOrderList },
  { to: "/sobre", label: "Sobre", icon: IconHeart },
];

/* ---- Badge do carrinho ---- */
const Badge = ({
  count,
  className = "",
}: {
  count: number;
  className?: string;
}) => (
  count > 0 ? (
    <span
      className={cn(
        "absolute min-w-[18px] h-[18px] px-1 rounded-full bg-rosa-deep text-white text-[10px] font-bold grid place-items-center shadow-[0_2px_8px_rgba(91,58,38,0.6)]",
        className,
      )}
    >
      {count}
    </span>
  ) : null
);

/* ---- Prompt de instalação (PWA) ---- */
type BIPEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: string }>;
};

const InstallBanner = () => {
  const { pathname } = useLocation();
  const [evt, setEvt] = useState<BIPEvent | null>(null);
  const [hidden, setHidden] = useState(() => {
    try {
      return localStorage.getItem("dalpizzol.install.dismissed") === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setEvt(e as BIPEvent);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  const dismiss = () => {
    setHidden(true);
    try {
      localStorage.setItem("dalpizzol.install.dismissed", "1");
    } catch {
      /* ignore */
    }
  };

  return evt && !hidden && pathname === "/" ? (
    <div className="mx-auto w-full max-w-md px-4 py-3 md:hidden">
      <div className="card-soft flex items-center gap-3 px-4 py-3">
        <img src={BRAND.logo} alt="" className="w-10 h-10 object-contain shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-ink leading-tight">
            Adicionar à tela inicial
          </p>
          <p className="text-[11px] text-ink/60 leading-tight">
            Peça seus doces em um toque.
          </p>
        </div>
        <button
          onClick={async () => {
            await evt.prompt();
            dismiss();
          }}
          className="h-9 px-3 rounded-full bg-rosa text-white text-[12px] font-semibold inline-flex items-center gap-1.5"
        >
          <IconDownload className="w-3.5 h-3.5" /> Instalar
        </button>
        <button
          onClick={dismiss}
          aria-label="Fechar"
          className="text-ink/40"
        >
          <IconClose className="w-4 h-4" />
        </button>
      </div>
    </div>
  ) : null;
};

/* ---- Barra superior ---- */
const TopBar = () => {
  const { count } = useCart();

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 isolate topbar-framed border-b border-[#F2B591]/25 bg-[#2B170F]/75 text-[#F2EDDC] shadow-[0_8px_24px_rgba(32,20,12,0.24)] backdrop-blur-md"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-45 blur-[12px]"
        />
        <div className="absolute inset-0 bg-[#2B170F]/65" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-0 h-[56px] md:h-[72px] flex items-center justify-between gap-3">
        <NavLink to="/" aria-label={BRAND.name} className="flex items-center min-w-0">
          <img
            src={BRAND.logo}
            alt={BRAND.name}
            className="w-12 h-12 object-contain shrink-0"
          />
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          {TABS.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              end={t.end}
              className={({ isActive }) =>
                cn(
                  "px-4 h-9 rounded-full text-[12.5px] font-semibold inline-flex items-center transition",
                  isActive
                    ? "bg-[#D96A29]/20 text-[#F2B591]"
                    : "text-[#F2EDDC]/85 hover:bg-[#A66D3C]/40",
                )
              }
            >
              {t.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <NavLink
            to="/encomendar"
            aria-label="Meu pedido"
            className="relative medallion h-12 w-12 text-[#3E2D21] active:scale-95"
          >
            <IconBag className="w-[18px] h-[18px]" />
            <Badge count={count} className="-top-1 -right-1" />
          </NavLink>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 h-10 rounded-full bg-[#D96A29] text-white text-[12px] font-semibold shadow-[0_6px_16px_rgba(217,106,41,0.28)] active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

/* ---- Barra inferior flutuante (mobile) ---- */
const BottomNav = () => {
  const { count } = useCart();
  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 md:hidden px-3 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-2 pointer-events-none"
      aria-label="Navegação principal"
    >
      <div className="pointer-events-auto max-w-md mx-auto grid grid-cols-4 rounded-[28px] glass-warm p-1.5">
        {TABS.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            end={t.end}
            className={({ isActive }) =>
              cn(
                "relative flex flex-col items-center gap-0.5 py-1.5 rounded-[22px] transition active:scale-95",
                isActive ? "text-rosa-deep" : "text-marrom",
              )
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-[22px] bg-white shadow-[0_4px_14px_rgba(166,109,60,0.12)]"
                  />
                )}
                <span className="relative">
                  <t.icon
                    className="w-[20px] h-[20px]"
                    strokeWidth={isActive ? 2.3 : 1.8}
                  />
                  {t.to === "/encomendar" && (
                    <Badge count={count} className="-top-2 -right-3" />
                  )}
                </span>
                <span className="relative text-[10.5px] font-semibold">
                  {t.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

/* ---- Transição entre páginas ---- */
const PageTransition = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return <div key={pathname}><Outlet /></div>;
};

const ScrollProgressBar = () => {
  useEffect(() => {
    const bar = document.getElementById("dalpizzol-scroll-progress");
    if (!bar) return;
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      bar.style.transform = `scaleX(${progress})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      id="dalpizzol-scroll-progress"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-0.5 bg-rosa-deep origin-left z-[60]"
      style={{ transform: "scaleX(0)" }}
    />
  );
};

export const AppShell = () => (
  <div className="min-h-[100svh] bg-offwhite font-sans text-ink">
    <ScrollProgressBar />
    <TopBar />
    <main className="pb-32 md:pb-16">
      <PageTransition />
    </main>
    <InstallBanner />
    <BottomNav />
  </div>
);
