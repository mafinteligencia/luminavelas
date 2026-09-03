/* =====================================================
   Padrão floral da Doceria Dalpizzol
   Motivos do painel "Padrões e Ícones" do brand board:
   ramo, coração, cupcake, batedor, fatia, flor e confete.
   Tile de 240×240 com dois deslocamentos para não "quadricular".
   ===================================================== */
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
  const id = `dz-floral-${color.replace("#", "")}-${String(scale).replace(".", "")}`;
  const s = 240 * scale;
  return (
    <svg className={className} aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id={id} width={s} height={s} patternUnits="userSpaceOnUse">
          <g
            fill="none"
            stroke={color}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={opacity}
            transform={`scale(${scale})`}
          >
            {/* ramo com folhas — canto superior esquerdo */}
            <g transform="translate(14 18)">
              <path d="M0 44c4-18 14-32 30-42" />
              <path d="M7 30c-.5 4 .5 7 3 9M13 21c-.5 4 .6 6.5 3 8.5M20 13c-.4 3.6.7 5.8 3 7.4" />
              <path d="M7 30c3.4 1.6 6.2.8 8.4-2M13 21c3.3 1.4 5.8.4 7.6-2.4M20 13c3 1.1 5.2.1 6.6-2.4" />
            </g>

            {/* coração */}
            <g transform="translate(96 12)">
              <path d="M11 22C7.5 19 0 14.6 0 8.6 0 4.8 2.8 2.2 6 2.2c2.1 0 3.7 1.2 5 2.6 1.3-1.4 2.9-2.6 5-2.6 3.2 0 6 2.6 6 6.4 0 6-7.5 10.4-11 13.4z" />
            </g>

            {/* cupcake */}
            <g transform="translate(168 26)">
              <path d="M2 14h22l-3.4 18c-.2 1.2-1.2 2-2.4 2H7.8c-1.2 0-2.2-.8-2.4-2z" />
              <path d="M0 12C0 3 26 3 26 12" />
              <path d="M6 6c1-4 5-6 7-2s5 1 6 2" />
              <path d="M8 16l-1 16M13 16v16M18 16l1 16" />
            </g>

            {/* flor de 5 pétalas */}
            <g transform="translate(38 118)">
              <circle cx="12" cy="12" r="3.4" />
              <path d="M12 8.6c1.6-2.4.9-5.6-1.6-6.8-2.3 1.4-2.8 4.5-1.2 6.8M15.4 12c2.9-.5 4.8-3.1 4-5.8-2.6-.5-5.1 1.6-5.4 4.5M14.2 15.1c2.3 1.9 5.6 1.5 6.8-.9-1.4-2.3-4.6-2.8-6.8-.9M9.8 15.1c-2.3 1.9-5.6 1.5-6.8-.9 1.4-2.3 4.6-2.8 6.8-.9M8.6 12c-2.9-.5-4.8-3.1-4-5.8 2.6-.5 5.1 1.6 5.4 4.5" />
            </g>

            {/* fatia de bolo */}
            <g transform="translate(112 116)">
              <path d="M0 30h30" />
              <path d="M0 30 16 4c.6-1 2-.8 2.6.2L30 30" />
              <path d="M5.4 22c2.4-1.4 4.6-1.2 6.8.2 2.2 1.4 4.4 1.6 6.8.2" />
              <circle cx="20" cy="2.6" r="2.6" />
            </g>

            {/* batedor */}
            <g transform="translate(186 128)">
              <path d="M10 18 2 28c-1 1.2-2.8 1.4-4 .2-1.2-1-1.2-2.8-.2-4L6 14" />
              <path d="M11 0c5.2 0 9.4 4.2 9.4 9.4 0 4.6-3.8 9.2-9 9.2-5 0-8.8-4-8.8-9C2.6 4.2 6.4 0 11 0z" />
              <path d="M11 .2c-2 2.2-3 5.4-3 9.2s1 6.8 2.8 9.2M11 .2c2 2.2 3.2 5.4 3.2 9.2s-1.2 6.8-3 9.2" />
              <path d="M3.4 5.4h15.2M2.8 13h16.4" />
            </g>

            {/* confetes */}
            <circle cx="82" cy="76" r="1.8" fill={color} stroke="none" />
            <circle cx="212" cy="88" r="1.8" fill={color} stroke="none" />
            <circle cx="24" cy="196" r="1.8" fill={color} stroke="none" />
            <circle cx="150" cy="196" r="1.8" fill={color} stroke="none" />
            <circle cx="196" cy="212" r="1.8" fill={color} stroke="none" />
            <path d="M62 190c2-3 5-3 7 0M124 74c2-3 5-3 7 0" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};
