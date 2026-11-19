import { useState } from "react";
import { cn } from "@/lib/utils";

/* Imagem com fade-in suave e placeholder creme — evita "pulo" visual ao carregar. */
export const Img = ({
  className = "",
  wrapperClassName = "",
  alt = "",
  loading = "lazy",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
}) => {
  const [loaded, setLoaded] = useState(false);
  const webpSrc =
    typeof props.src === "string" &&
    props.src.startsWith("/catalog/") &&
    /\.jpe?g$/i.test(props.src)
      ? props.src.replace(/\.jpe?g$/i, ".webp")
      : undefined;
  const cardWebpSrc =
    webpSrc && loading === "lazy"
      ? webpSrc.replace("/catalog/", "/catalog/cards/")
      : undefined;
  const instant = loading === "eager";

  return (
    <span
      className={cn("block overflow-hidden bg-creme-deep", wrapperClassName)}
    >
      <picture className="block w-full h-full">
        {cardWebpSrc && <source srcSet={cardWebpSrc} type="image/webp" />}
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          {...props}
          alt={alt}
          loading={loading}
          onLoad={() => setLoaded(true)}
          decoding="async"
          className={cn(
            instant ? "block" : "block transition-[opacity,transform,filter] duration-700 ease-out",
            instant || loaded
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-[1.03] blur-sm",
            className,
          )}
        />
      </picture>
    </span>
  );
};
