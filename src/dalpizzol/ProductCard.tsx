import { motion } from "framer-motion";
import { IconHeart, IconPlus } from "./icons";
import { type Product } from "./data";
import { useFavorites } from "./favorites";
import { Img } from "./Img";
import { cn } from "@/lib/utils";

export const FavButton = ({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) => {
  const { has, toggle } = useFavorites();
  const on = has(id);
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.8 }}
      aria-label={on ? "Remover dos favoritos" : "Salvar nos favoritos"}
      aria-pressed={on}
      onClick={(e) => {
        e.stopPropagation();
        toggle(id);
      }}
      className={cn(
        "w-8 h-8 rounded-full grid place-items-center backdrop-blur-md transition",
        on
          ? "bg-rosa text-white shadow-[0_4px_12px_-2px_rgba(235,160,166,0.8)]"
          : "glass-warm text-marrom-deep",
        className,
      )}
    >
      <motion.span
        animate={on ? { scale: [1, 1.35, 1] } : { scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        <IconHeart className="w-4 h-4" duotone={!on} strokeWidth={1.6} />
      </motion.span>
    </motion.button>
  );
};

export const ProductCard = ({
  product,
  onOpen,
  index = 0,
  compact = false,
}: {
  product: Product;
  onOpen: (p: Product) => void;
  index?: number;
  compact?: boolean;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.45 }}
    className={cn(
      "relative card-lux overflow-hidden flex flex-col",
      compact ? "w-[64vw] max-w-[250px] shrink-0 snap-start" : "w-full",
    )}
  >
    <button
      type="button"
      onClick={() => onOpen(product)}
      className="text-left flex-1 flex flex-col active:scale-[0.985] transition"
      aria-label={`Ver ${product.name}`}
    >
      <div className="relative">
        <Img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className={cn(
            "w-full object-cover",
            compact ? "h-40" : "h-44 sm:h-48",
          )}
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-marrom-deep/35 via-marrom-deep/8 to-transparent pointer-events-none" />
        {product.tags?.[0] && (
          <span className="absolute top-2.5 left-2.5 text-[10px] font-semibold px-2.5 py-1 rounded-full glass-warm text-marrom-deep">
            {product.tags[0]}
          </span>
        )}
        <span className="absolute -bottom-3.5 right-3 w-9 h-9 rounded-full bg-gradient-to-br from-rosa to-rosa-deep text-white grid place-items-center shadow-[0_8px_18px_-4px_rgba(217,134,141,0.75)] ring-2 ring-white">
          <IconPlus className="w-4 h-4" strokeWidth={2} />
        </span>
      </div>
      <div className="p-3.5 pt-4 flex-1">
        <h3 className="font-serif text-[16px] leading-snug text-ink">
          {product.name}
        </h3>
        <p className="mt-1 text-[11.5px] text-ink/60 leading-relaxed line-clamp-2">
          {product.desc}
        </p>
        {product.sizes && (
          <p className="mt-2 text-[10.5px] font-semibold text-salvia-deep">
            3 tamanhos · 10 a 20 fatias
          </p>
        )}
      </div>
    </button>
    <FavButton id={product.id} className="absolute top-2.5 right-2.5" />
  </motion.article>
);
