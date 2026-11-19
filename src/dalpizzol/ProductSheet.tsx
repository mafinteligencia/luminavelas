import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { IconBag, IconClose } from "./icons";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { type Product, type Size } from "./data";
import { buildQuickMessage, useCart } from "./cart";
import { Button, LinkButton, Stepper, WhatsAppIcon } from "./ui";
import { cn } from "@/lib/utils";

export const ProductSheet = ({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) => {
  const { add } = useCart();
  const navigate = useNavigate();
  const [size, setSize] = useState<Size | undefined>();
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");

  useEffect(() => {
    setSize(product?.sizes?.[1] ?? product?.sizes?.[0]);
    setQty(1);
    setNote("");
  }, [product]);

  const open = !!product;

  return (
    <Drawer
      open={open}
      onOpenChange={(o) => !o && onClose()}
      shouldScaleBackground={false}
    >
      <DrawerContent className="rounded-t-[32px] border-0 bg-offwhite max-h-[92svh] outline-none md:bottom-6 md:mx-auto md:w-[min(1120px,calc(100vw-48px))] md:max-h-[88svh] md:rounded-[30px]">
        {product && (
          <div className="min-h-0 overflow-y-auto pb-[calc(env(safe-area-inset-bottom)+16px)] md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-6 md:overflow-hidden md:p-5">
            <div className="relative px-5 pt-3 md:min-h-0 md:p-0">
              <picture className="block">
                {product.img.startsWith("/catalog/") && product.img.endsWith(".jpg") && (
                  <source srcSet={product.img.replace(/\.jpg$/i, ".webp")} type="image/webp" />
                )}
                <img
                  src={product.img}
                  alt={product.name}
                  decoding="async"
                  className="w-full h-56 sm:h-72 md:h-[min(68svh,560px)] md:min-h-[320px] md:max-h-[560px] object-cover rounded-3xl ring-1 ring-dourado/30 outline outline-[5px] outline-white/70"
                />
              </picture>
              <DrawerClose asChild>
                <button
                  type="button"
                  aria-label="Fechar detalhes do produto"
                  className="absolute right-8 top-6 md:right-3 md:top-3 grid h-10 w-10 place-items-center rounded-full bg-offwhite/95 text-marrom-deep shadow-md ring-1 ring-marrom/10 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dourado"
                >
                  <IconClose className="h-4 w-4" />
                </button>
              </DrawerClose>
            </div>
            <div className="min-w-0 px-5 pt-5 md:min-h-0 md:overflow-y-auto md:px-1 md:pt-2 md:pr-2">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {product.tags?.map((t) => (
                  <span
                    key={t}
                    className="text-[10.5px] font-semibold px-2.5 py-1 rounded-full bg-salvia/25 text-salvia-deep"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <DrawerTitle className="font-serif text-2xl text-ink">
                {product.name}
              </DrawerTitle>
              <DrawerDescription className="mt-1.5 text-[13.5px] text-ink/65 leading-relaxed">
                {product.desc}
              </DrawerDescription>

              {product.sizes && (
                <div className="mt-5">
                  <p className="text-[12px] font-semibold text-marrom-deep mb-2">
                    Tamanho
                  </p>
                  <div className="grid grid-cols-2 gap-2 xl:grid-cols-3">
                    {product.sizes.map((s, index) => {
                      const active = size?.id === s.id;
                      const lastSize = index === product.sizes.length - 1;
                      const centerLastSize =
                        lastSize && product.sizes.length % 2 === 1
                          ? "col-span-2 w-1/2 justify-self-center xl:col-span-1 xl:w-full"
                          : "";
                      const centerLastDesktop =
                        lastSize && product.sizes.length % 3 === 1
                          ? "xl:col-start-2"
                          : "";
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSize(s)}
                          className={cn(
                            "rounded-2xl border px-2 py-3 text-center transition active:scale-95",
                            centerLastSize,
                            centerLastDesktop,
                            active
                              ? "border-rosa bg-rosa/15"
                              : "border-marrom/15 bg-white",
                          )}
                        >
                          <span className="block text-[13px] font-semibold text-ink">
                            {s.label}
                          </span>
                          <span className="block text-[11px] text-ink/55">
                            {s.hint}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mt-5 flex items-center justify-between">
                <p className="text-[12px] font-semibold text-marrom-deep">
                  Quantidade
                </p>
                <Stepper value={qty} onChange={setQty} />
              </div>

              <div className="mt-4">
                <label
                  className="text-[12px] font-semibold text-marrom-deep block mb-1.5"
                  htmlFor="note"
                >
                  Alguma observação?{" "}
                  <span className="font-normal text-ink/45">(opcional)</span>
                </label>
                <input
                  id="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Ex.: sem nozes, frase no topo, cor da decoração…"
                  className="w-full h-11 rounded-2xl border border-marrom/15 bg-white px-4 text-[13px] text-ink placeholder:text-ink/35 outline-none focus:border-rosa"
                />
              </div>

              <p className="mt-4 text-[11.5px] text-ink/50 leading-relaxed">
                Valores por tamanho conforme catálogo. Confirme disponibilidade
                e prazo pelo WhatsApp.
              </p>

              <div className="mt-4 grid gap-2.5">
                <Button
                  full
                  onClick={() => {
                    add(product, { size, qty, note: note.trim() || undefined });
                    toast.success(`${product.name} adicionado ao pedido`, {
                      action: {
                        label: "Ver pedido",
                        onClick: () => navigate("/encomendar"),
                      },
                    });
                    onClose();
                  }}
                >
                  <IconBag className="w-4 h-4" /> Adicionar ao pedido
                </Button>
                <LinkButton
                  full
                  variant="whatsapp"
                  href={buildQuickMessage(product, size, qty)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="w-4 h-4" /> Pedir agora no WhatsApp
                </LinkButton>
              </div>
            </div>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
};
