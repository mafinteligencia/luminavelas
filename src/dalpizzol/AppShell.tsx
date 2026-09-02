import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Cake,
  ClipboardList,
  Heart,
  ShoppingBag,
  X,
  Download,
} from "lucide-react";
import { BRAND, WHATSAPP_URL } from "./data";
import { useCart } from "./cart";
import { WhatsAppIcon } from "./ui";
import { cn } from "@/lib/utils";

const TABS = [
  { to: "/", label: "Início", icon: Home, end: true },
  { to: "/bolos", label: "Bolos", icon: Cake },
  { to: "/encomendar", label: "Encomendar", icon: ClipboardList },
  { to: "/sobre", label: "Sobre", icon: Heart },
];

/* ---- Badge do carrinho com "pulo" ao mudar ---- */
const Badge = ({
  count,
  className = "",
}: {
  count: number;
  className?: string;
}) => (
  <AnimatePresence>
    {count > 0 && (
      <motion.span
        key={count}
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: [1.35, 1], opacity: 1 }}
        exit={{ scale: 0.4, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={cn(
          "absolute min-w-[18px] h-[18px] px-1 rounded-full bg-rosa-deep text-white text-[10px] font-bold grid place-items-center shadow-[0_2px_8px_rgba(217,134,141,0.6)]",
          className,
        )}
      >
        {count}
      </motion.span>
    )}
  </AnimatePresence>
);

/* ---- Prompt de instalação (PWA) ---- */
type BIPEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: string }>;
};

const InstallBanner = () => {
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

  return (
    <AnimatePresence>
      {evt && !hidden && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          className="fixed left-3 right-3 z-40 bottom-[calc(env(safe-area-inset-bottom)+92px)] md:hidden"
        >
          <div className="card-soft flex items-center gap-3 px-4 py-3">
            <img src={BRAND.logo} alt="" className="w-10 h-10 rounded-full" />
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
              <Download className="w-3.5 h-3.5" /> Instalar
            </button>
            <button
              onClick={dismiss}
              aria-label="Fechar"
              className="text-ink/40"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ---- Barra superior ---- */
const TopBar = () => {
  const { count } = useCart();
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 safe-top",
        solid
          ? "bg-creme/85 backdrop-blur-xl shadow-[0_6px_24px_rgba(139,107,79,0.10)]"
          : "bg-transparent",
      )}
    >
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
        <NavLink to="/" className="flex items-center gap-2.5 min-w-0">
          <img
            src={BRAND.logo}
            alt={BRAND.name}
            className="w-10 h-10 rounded-full shadow-sm ring-2 ring-white/70"
          />
          <span className="leading-none">
            <span className="block text-[9px] tracking-[0.28em] uppercase text-marrom">
              Doceria
            </span>
            <span className="block font-script text-[22px] text-rosa-deep -mt-0.5">
              Dalpizzol
            </span>
          </span>
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
                    ? "bg-rosa/20 text-rosa-deep"
                    : "text-marrom-deep hover:bg-creme-deep",
                )
              }
            >
              {t.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <NavLink
            to="/encomendar"
            aria-label="Meu pedido"
            className="relative w-10 h-10 rounded-full bg-white/80 border border-marrom/10 grid place-items-center text-marrom-deep active:scale-95"
          >
            <ShoppingBag className="w-[18px] h-[18px]" />
            <Badge count={count} className="-top-1 -right-1" />
          </NavLink>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 h-10 rounded-full bg-salvia-deep text-white text-[12px] font-semibold active:scale-95"
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
      <div className="pointer-events-auto max-w-md mx-auto grid grid-cols-4 rounded-[28px] bg-creme/90 backdrop-blur-xl border border-white/70 shadow-[0_14px_40px_rgba(139,107,79,0.22)] p-1.5">
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
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-[22px] bg-white shadow-[0_4px_14px_rgba(139,107,79,0.12)]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
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
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export const AppShell = () => (
  <div className="min-h-[100svh] bg-offwhite font-sans text-ink">
    <TopBar />
    <main className="pb-32 md:pb-16">
      <PageTransition />
    </main>
    <InstallBanner />
    <BottomNav />
  </div>
);
