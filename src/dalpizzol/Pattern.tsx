/* Padrão floral da marca (brand board: "Padrões e ícones") — desenhado em SVG, leve e escalável. */
export const FloralPattern = ({
  className = "",
  color = "#8B6B4F",
  opacity = 0.08,
  scale = 1,
}: {
  className?: string;
  color?: string;
  opacity?: number;
  scale?: number;
}) => {
  const id = `floral-${color.replace("#", "")}`;
  const s = 140 * scale;
  return (
    <svg className={className} aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id={id} width={s} height={s} patternUnits="userSpaceOnUse">
          <g
            fill="none"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity={opacity}
            transform={`scale(${scale})`}
          >
            {/* ramo */}
            <path d="M14 96c18-22 30-36 58-46" />
            <path d="M30 78c-1 6 1 11 6 14M38 70c0 5 2 9 6 12M48 62c0 5 3 9 7 11M58 56c1 4 3 8 7 10" />
            {/* coração */}
            <path d="M104 28c-4-8-16-6-16 4 0 8 12 14 16 18 4-4 16-10 16-18 0-10-12-12-16-4z" />
            {/* cupcake */}
            <path d="M18 24h24l-3 16H21z" />
            <path d="M16 22c0-9 28-9 28 0" />
            <path d="M24 12c2-4 8-4 10 0" />
            {/* flor */}
            <circle cx="112" cy="104" r="4" />
            <path d="M112 92c3 3 3 7 0 10M112 116c-3-3-3-7 0-10M100 104c3-3 7-3 10 0M124 104c-3 3-7 3-10 0" />
            {/* fatia */}
            <path d="M62 122l30-14-4 22z" />
            <path d="M64 118l26-12" />
            {/* pontos */}
            <circle cx="86" cy="80" r="1.4" fill={color} />
            <circle cx="132" cy="60" r="1.4" fill={color} />
            <circle cx="40" cy="132" r="1.4" fill={color} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};
