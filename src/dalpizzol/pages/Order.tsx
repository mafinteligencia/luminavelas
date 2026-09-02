import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Trash2,
  ChevronRight,
  CalendarDays,
  Store,
  Truck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Button } from "../ui";
import { BRAND, productById } from "../data";
import {
  buildOrderMessage,
  describeLine,
  useCart,
  type OrderDetails,
} from "../cart";
import { LinkButton, SectionTitle, Stepper, WhatsAppIcon } from "../ui";
import { FooterBand } from "./Home";
import { cn } from "@/lib/utils";

const TIMES = [
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

const toISO = (d: Date) => {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};
const minDateISO = (hours: number) =>
  toISO(new Date(Date.now() + hours * 3600 * 1000));
const addDays = (n: number) => toISO(new Date(Date.now() + n * 86400 * 1000));
const weekdayLabel = (iso: string) =>
  new Date(iso + "T12:00:00")
    .toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short" })
    .replace(/\./g, "")
    .replace(/^\w/, (c) => c.toUpperCase());

const Field = ({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) => (
  <label className="block">
    <span className="text-[12px] font-semibold text-marrom-deep block mb-1.5">
      {label}
    </span>
    {children}
    {hint && <span className="block mt-1 text-[11px] text-ink/50">{hint}</span>}
  </label>
);

const inputCls =
  "w-full h-12 rounded-2xl border border-marrom/15 bg-white px-4 text-[14px] text-ink placeholder:text-ink/35 outline-none focus:border-rosa";

const Steps = ({ current }: { current: 1 | 2 | 3 }) => (
  <ol className="flex items-center gap-2 text-[11px] font-semibold">
    {["Produtos", "Detalhes", "Finalizar"].map((s, i) => {
      const n = (i + 1) as 1 | 2 | 3;
      const done = n < current;
      const active = n === current;
      return (
        <li key={s} className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 h-7 px-2.5 rounded-full",
              active
                ? "bg-rosa text-white"
                : done
                  ? "bg-salvia/30 text-salvia-deep"
                  : "bg-creme text-ink/50",
            )}
          >
            <span className="w-4 h-4 rounded-full bg-white/60 text-[9px] grid place-items-center text-ink">
              {n}
            </span>
            {s}
          </span>
          {i < 2 && <span className="w-3 h-px bg-marrom/20" />}
        </li>
      );
    })}
  </ol>
);

const Order = () => {
  const { lines, setQty, remove, clear } = useCart();
  const [params] = useSearchParams();
  const occasion = params.get("ocasiao");
  const minDate = useMemo(() => minDateISO(BRAND.leadTimeHours), []);

  const [d, setD] = useState<OrderDetails>({
    name: "",
    date: "",
    time: "",
    mode: "retirada",
    address: "",
    notes: occasion ? `Ocasião: ${occasion}` : "",
  });
  const up = (patch: Partial<OrderDetails>) =>
    setD((p) => ({ ...p, ...patch }));

  useEffect(() => {
    if (occasion && !d.notes) up({ notes: `Ocasião: ${occasion}` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [occasion]);

  const hasItems = lines.length > 0;
  const missing = [
    !d.date && "a data",
    !d.name.trim() && "seu nome",
    d.mode === "entrega" && !d.address.trim() && "o endereço",
  ].filter(Boolean) as string[];
  const ready = hasItems && missing.length === 0;
  const step: 1 | 2 | 3 = !hasItems ? 1 : ready ? 3 : 2;
  const href = buildOrderMessage(lines, d);
  const [sent, setSent] = useState(false);
  const shortcuts = [2, 3, 5, 7].map((n) => addDays(n));

  return (
    <>
      <section className="pattern-creme pt-24 pb-5 px-5">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            eyebrow="Encomendar"
            title="Encomende seu doce"
            subtitle="É simples, rápido e feito com amor! Você finaliza no WhatsApp."
          />
          <div className="mt-4">
            <Steps current={step} />
          </div>
        </div>
      </section>

      <section className="px-5 pt-5">
        <div className="max-w-3xl mx-auto grid gap-4">
          {/* Itens */}
          <div className="card-soft p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg text-ink">Seu pedido</h3>
              {hasItems && (
                <button
                  onClick={clear}
                  className="text-[11.5px] font-semibold text-ink/45"
                >
                  Limpar
                </button>
              )}
            </div>

            {!hasItems ? (
              <div className="mt-3 text-center py-6">
                <p className="text-4xl">🎂</p>
                <p className="mt-2 text-[13.5px] text-ink/65">
                  Seu pedido ainda está vazio.
                </p>
                <Link
                  to="/bolos"
                  className="mt-3 inline-flex items-center gap-1 h-10 px-4 rounded-full bg-rosa text-white text-[12.5px] font-semibold"
                >
                  Escolher doces <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <ul className="mt-3 divide-y divide-marrom/10">
                {lines.map((l) => {
                  const p = productById(l.productId);
                  if (!p) return null;
                  const size = p.sizes?.find((s) => s.id === l.sizeId);
                  return (
                    <li key={l.key} className="py-3 flex items-center gap-3">
                      <img
                        src={p.img}
                        alt=""
                        className="w-14 h-14 rounded-2xl object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-[13.5px] font-semibold text-ink leading-tight">
                          {p.name}
                        </p>
                        <p className="text-[11.5px] text-ink/55">
                          {size
                            ? `${size.label} · ${size.hint}`
                            : p.desc.slice(0, 40) + "…"}
                        </p>
                        {l.note && (
                          <p className="text-[11px] text-rosa-deep">{l.note}</p>
                        )}
                      </div>
                      <Stepper
                        value={l.qty}
                        onChange={(v) => setQty(l.key, v)}
                        min={0}
                      />
                      <button
                        onClick={() => remove(l.key)}
                        aria-label="Remover"
                        className="text-ink/35 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
            {hasItems && (
              <Link
                to="/bolos"
                className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold text-rosa-deep"
              >
                + Adicionar mais itens
              </Link>
            )}
          </div>

          {/* Detalhes */}
          <div
            className={cn(
              "card-soft p-4 grid gap-4 transition",
              !hasItems && "opacity-60 pointer-events-none",
            )}
          >
            <h3 className="font-serif text-lg text-ink">Detalhes</h3>

            <Field label="Retirada ou entrega?">
              <div className="grid grid-cols-2 gap-2">
                {(
                  [
                    { id: "retirada", label: "Retirada na loja", icon: Store },
                    { id: "entrega", label: "Entrega", icon: Truck },
                  ] as const
                ).map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => up({ mode: m.id })}
                    className={cn(
                      "h-12 rounded-2xl border text-[13px] font-semibold inline-flex items-center justify-center gap-2 transition active:scale-95",
                      d.mode === m.id
                        ? "border-rosa bg-rosa/15 text-ink"
                        : "border-marrom/15 bg-white text-marrom-deep",
                    )}
                  >
                    <m.icon className="w-4 h-4" /> {m.label}
                  </button>
                ))}
              </div>
            </Field>

            {d.mode === "entrega" && (
              <Field
                label="Endereço de entrega"
                hint="Taxa e área de entrega confirmadas no WhatsApp."
              >
                <input
                  className={inputCls}
                  value={d.address}
                  onChange={(e) => up({ address: e.target.value })}
                  placeholder="Rua, número, bairro"
                />
              </Field>
            )}

            <div className="grid grid-cols-2 gap-3">
              <Field
                label="Data"
                hint={`Mínimo ${BRAND.leadTimeHours}h de antecedência.`}
              >
                <div className="relative">
                  <CalendarDays className="w-4 h-4 text-marrom absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="date"
                    min={minDate}
                    value={d.date}
                    onChange={(e) => up({ date: e.target.value })}
                    className={cn(inputCls, "pl-10")}
                  />
                </div>
              </Field>
              <Field label="Horário">
                <select
                  value={d.time}
                  onChange={(e) => up({ time: e.target.value })}
                  className={inputCls}
                >
                  <option value="">Escolher</option>
                  {TIMES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="flex gap-2 overflow-x-auto no-scrollbar -mt-1">
              {shortcuts.map((iso) => (
                <button
                  key={iso}
                  type="button"
                  onClick={() => up({ date: iso })}
                  className={cn(
                    "shrink-0 h-8 px-3 rounded-full text-[11.5px] font-semibold border transition active:scale-95",
                    d.date === iso
                      ? "bg-rosa border-rosa text-white"
                      : "bg-white border-marrom/15 text-marrom-deep",
                  )}
                >
                  {weekdayLabel(iso)}
                </button>
              ))}
            </div>

            <Field label="Seu nome">
              <input
                className={inputCls}
                value={d.name}
                onChange={(e) => up({ name: e.target.value })}
                placeholder="Como podemos te chamar?"
                autoComplete="name"
              />
            </Field>

            <Field label="Observações (opcional)">
              <textarea
                className={cn(inputCls, "h-24 py-3 resize-none")}
                value={d.notes}
                onChange={(e) => up({ notes: e.target.value })}
                placeholder="Ocasião, frase no bolo, alergias, cores…"
              />
            </Field>
          </div>

          {/* Resumo + envio */}
          <div
            className={cn(
              "card-soft p-4",
              !hasItems && "opacity-60 pointer-events-none",
            )}
          >
            <h3 className="font-serif text-lg text-ink">Resumo</h3>
            <ul className="mt-2 text-[12.5px] text-ink/70 grid gap-1">
              {lines.map((l) => (
                <li key={l.key}>• {describeLine(l)}</li>
              ))}
            </ul>
            {d.date && (
              <p className="mt-2 text-[12px] text-ink/60">
                {d.mode === "entrega" ? "Entrega" : "Retirada"} ·{" "}
                {weekdayLabel(d.date)}
                {d.time ? ` às ${d.time}` : ""}
              </p>
            )}
            {hasItems && missing.length > 0 && (
              <p className="mt-3 text-[11.5px] text-rosa-deep font-semibold">
                Falta preencher{" "}
                {missing.join(", ").replace(/, ([^,]*)$/, " e $1")}.
              </p>
            )}
            <p className="mt-3 text-[11.5px] text-ink/50 leading-relaxed">
              Ao continuar, abrimos o WhatsApp com o seu pedido pronto. Valores
              e disponibilidade são confirmados pela {BRAND.name}.
            </p>
            <LinkButton
              full
              variant="whatsapp"
              className={cn(
                "mt-4 h-[52px] text-[14px]",
                !ready && "opacity-50 pointer-events-none",
              )}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!ready}
              onClick={() => setSent(true)}
            >
              <WhatsAppIcon /> Enviar pedido pelo WhatsApp
            </LinkButton>
          </div>
        </div>
      </section>

      <Drawer open={sent} onOpenChange={setSent} shouldScaleBackground={false}>
        <DrawerContent className="rounded-t-[32px] border-0 bg-offwhite outline-none">
          <div className="px-6 pt-4 pb-[calc(env(safe-area-inset-bottom)+20px)] text-center">
            <span className="mx-auto w-16 h-16 rounded-full bg-salvia/25 grid place-items-center">
              <CheckCircle2 className="w-8 h-8 text-salvia-deep" />
            </span>
            <DrawerTitle className="mt-4 font-serif text-2xl text-ink">
              Pedido a caminho do WhatsApp
            </DrawerTitle>
            <DrawerDescription className="mt-2 text-[13.5px] text-ink/65 leading-relaxed">
              A {BRAND.name} responde com disponibilidade e valores. Se o
              WhatsApp não abriu, toque no botão abaixo.
            </DrawerDescription>
            <div className="mt-5 grid gap-2.5">
              <LinkButton
                full
                variant="whatsapp"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="w-4 h-4" /> Abrir WhatsApp de novo
              </LinkButton>
              <Button
                full
                variant="secondary"
                onClick={() => {
                  clear();
                  setSent(false);
                }}
              >
                <Sparkles className="w-4 h-4" /> Concluir e limpar pedido
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      <FooterBand />
    </>
  );
};

export default Order;
