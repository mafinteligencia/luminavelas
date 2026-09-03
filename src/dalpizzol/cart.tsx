import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { BRAND, productById, waMessage, type Product, type Size } from "./data";

export type CartLine = {
  key: string;
  productId: string;
  sizeId?: string;
  qty: number;
  note?: string;
};

export type OrderDetails = {
  name: string;
  date: string; // yyyy-mm-dd
  time: string;
  mode: "retirada" | "entrega";
  address: string;
  notes: string;
};

type CartCtx = {
  lines: CartLine[];
  count: number;
  add: (
    p: Product,
    opts?: { size?: Size; qty?: number; note?: string },
  ) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);
const STORAGE_KEY = "dalpizzol.cart.v1";

const load = (): CartLine[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartLine[]) : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [lines, setLines] = useState<CartLine[]>(load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* storage indisponível — segue em memória */
    }
  }, [lines]);

  const add: CartCtx["add"] = useCallback((p, opts = {}) => {
    const key = `${p.id}${opts.size ? `:${opts.size.id}` : ""}`;
    setLines((prev) => {
      const found = prev.find((l) => l.key === key);
      if (found) {
        return prev.map((l) =>
          l.key === key
            ? { ...l, qty: l.qty + (opts.qty ?? 1), note: opts.note || l.note }
            : l,
        );
      }
      return [
        ...prev,
        {
          key,
          productId: p.id,
          sizeId: opts.size?.id,
          qty: opts.qty ?? 1,
          note: opts.note,
        },
      ];
    });
  }, []);

  const setQty = useCallback((key: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.key !== key)
        : prev.map((l) => (l.key === key ? { ...l, qty } : l)),
    );
  }, []);

  const remove = useCallback(
    (key: string) => setLines((prev) => prev.filter((l) => l.key !== key)),
    [],
  );
  const clear = useCallback(() => setLines([]), []);

  const value = useMemo(
    () => ({
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      add,
      setQty,
      remove,
      clear,
    }),
    [lines, add, setQty, remove, clear],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useCart = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart deve ser usado dentro de CartProvider");
  return ctx;
};

/* ---------- Mensagem do pedido para o WhatsApp ---------- */
const fmtDate = (iso: string) => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

export const describeLine = (l: CartLine) => {
  const p = productById(l.productId);
  if (!p) return "";
  const size = p.sizes?.find((s) => s.id === l.sizeId);
  return `${l.qty}x ${p.name}${size ? ` — ${size.label} (${size.hint})` : ""}${l.note ? ` · ${l.note}` : ""}`;
};

export const buildOrderMessage = (lines: CartLine[], d: OrderDetails) => {
  const items = lines.map((l) => `• ${describeLine(l)}`).join("\n");
  const when = d.date
    ? `📅 ${d.mode === "entrega" ? "Entrega" : "Retirada"}: ${fmtDate(d.date)}${d.time ? ` às ${d.time}` : ""}`
    : "";
  const where =
    d.mode === "entrega"
      ? `📍 Endereço: ${d.address || "(a combinar)"}`
      : `📍 Retirada na loja — ${BRAND.street}, ${BRAND.district}`;
  const parts = [
    `Olá, ${BRAND.name}! 🍰 Quero fazer uma encomenda:`,
    "",
    items,
    "",
    when,
    where,
    d.name ? `👤 Nome: ${d.name}` : "",
    d.notes ? `📝 Observações: ${d.notes}` : "",
    "",
    "Podem me confirmar disponibilidade e valores?",
  ].filter((s, i, arr) => !(s === "" && arr[i - 1] === ""));
  return waMessage(parts.join("\n"));
};

export const buildQuickMessage = (p: Product, size?: Size, qty = 1) =>
  waMessage(
    `Olá, ${BRAND.name}! 🍰 Gostaria de encomendar: ${qty}x ${p.name}${
      size ? ` — ${size.label} (${size.hint})` : ""
    }. Podem me confirmar disponibilidade e valores?`,
  );
