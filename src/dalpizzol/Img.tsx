import { useState } from "react";
import { cn } from "@/lib/utils";

/* Imagem com fade-in suave e placeholder creme — evita "pulo" visual ao carregar. */
export const Img = ({
  className = "",
  wrapperClassName = "",
  alt = "",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <span
      className={cn("block overflow-hidden bg-creme-deep", wrapperClassName)}
    >
      <img
        {...props}
        alt={alt}
        onLoad={() => setLoaded(true)}
        decoding="async"
        className={cn(
          "block transition-[opacity,transform,filter] duration-700 ease-out",
          loaded
            ? "opacity-100 scale-100 blur-0"
            : "opacity-0 scale-[1.03] blur-sm",
          className,
        )}
      />
    </span>
  );
};
