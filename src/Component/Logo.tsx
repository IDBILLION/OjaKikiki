interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({
  size = 300,
  className = "",
}: LogoProps) {
  const center = size / 2;
  const radius = size * 0.45; // Outer boundary
  const textRadius = size * 0.38; // Path for the curved text
  const innerRadius = size * 0.28; // Inner circle for OK3

  // Path for top text (clockwise): 9 o'clock -> 12 -> 3
  const topPath = `
    M ${center - textRadius}, ${center}
    A ${textRadius},${textRadius} 0 1,1 ${center + textRadius},${center}
  `;

  // Path for bottom text (counter-clockwise): 9 o'clock -> 6 -> 3
  // This ensures text at the bottom is readable (not upside down)
  const bottomPath = `
    M ${center - textRadius}, ${center}
    A ${textRadius},${textRadius} 0 0,0 ${center + textRadius},${center}
  `;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
        className="select-none"
      >
        <defs>
          <path id="textCirclePathTop" d={topPath} />
          <path id="textCirclePathBottom" d={bottomPath} />
          
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>

        {/* Outer Decorative Ring */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth={size * 0.02}
          opacity="0.2"
        />

        {/* Rotating ring element */}
        <circle
           cx={center}
           cy={center}
           r={radius}
           fill="none"
           stroke="url(#logoGradient)"
           strokeWidth={size * 0.01}
           strokeDasharray={`${size * 0.1} ${size * 0.1}`}
           className="origin-center animate-[spin_10s_linear_infinite] opacity-40"
        />

        {/* Solid Background Circle for "OK3" */}
        <circle
          cx={center}
          cy={center}
          r={innerRadius}
          fill="url(#logoGradient)"
          className="shadow-lg"
        />

        {/* Central Text "OK3" */}
        <text
          x="50%"
          y="50%"
          dy="0.1em"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={size * 0.22}
          fontWeight="900"
          fill="white"
          style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.05em" }}
        >
          OK3
        </text>

        {/* Top Curved Text "OJAKIKIKI" */}
        <text
          fill="url(#logoGradient)"
          fontWeight="bold"
          fontSize={size * 0.09}
          letterSpacing={size * 0.02}
          style={{ textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}
        >
          <textPath href="#textCirclePathBottom" startOffset="50%" textAnchor="middle">
            Ojakikiki
          </textPath>
        </text>
      </svg>
    </div>
  );
}
