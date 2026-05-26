interface LogoProps {
  variant?: 'dark' | 'light';
  stacked?: boolean;
  className?: string;
}

function OathMark({ fg, accent }: { fg: string; accent: string }) {
  return (
    <g>
      <path
        className="logo-m"
        d="M 8 72 L 8 34 L 25 64 L 42 34 L 42 72"
        fill="none"
        stroke={fg}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="logo-g"
        d="M 62 38 C 42 38 42 72 64 72 L 78 72 L 78 59 L 66 59"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="logo-oath"
        d="M 7 84 C 32 80 56 80 86 84"
        fill="none"
        stroke={accent}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle className="logo-dot" cx="86" cy="84" r="3.5" fill={fg} />
    </g>
  );
}

export function LogoMark({
  variant = 'dark',
  className = '',
}: Pick<LogoProps, 'variant' | 'className'>) {
  const fg = variant === 'dark' ? '#FFFFFF' : '#1C2B48';
  const accent = '#D8C6A8';

  return (
    <svg
      viewBox="0 0 94 92"
      className={className}
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <OathMark fg={fg} accent={accent} />
    </svg>
  );
}

export function Logo({ variant = 'dark', stacked = false, className = '' }: LogoProps) {
  const fg = variant === 'dark' ? '#FFFFFF' : '#1C2B48';
  const accent = '#D8C6A8';
  const muted = variant === 'dark' ? 'rgba(216,198,168,0.44)' : 'rgba(28,43,72,0.28)';

  if (stacked) {
    return (
      <svg
        viewBox="0 0 172 136"
        className={className}
        aria-label="Matheus Giovanne Advogado"
        role="img"
        style={{ overflow: 'visible' }}
      >
        <g transform="translate(40 0)">
          <OathMark fg={fg} accent={accent} />
        </g>

        <line x1="38" y1="93" x2="134" y2="93" stroke={muted} strokeWidth="0.8" />

        <text
          x="86"
          y="114"
          fontFamily="'Instrument Serif', Georgia, serif"
          fontSize="16"
          fill={fg}
          letterSpacing="4.6"
          textAnchor="middle"
        >
          MATHEUS
        </text>
        <text
          x="86"
          y="134"
          fontFamily="'Instrument Serif', Georgia, serif"
          fontSize="16"
          fill={accent}
          letterSpacing="3.1"
          textAnchor="middle"
        >
          GIOVANNE
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 286 104"
      className={className}
      aria-label="Matheus Giovanne Advogado"
      role="img"
      style={{ overflow: 'visible' }}
    >
      <g>
        <OathMark fg={fg} accent={accent} />
      </g>

      <line x1="108" y1="18" x2="108" y2="86" stroke={muted} strokeWidth="0.8" />

      <text
        x="128"
        y="45"
        fontFamily="'Instrument Serif', Georgia, serif"
        fontSize="27"
        fill={fg}
        letterSpacing="4.8"
      >
        MATHEUS
      </text>
      <text
        x="128"
        y="72"
        fontFamily="'Instrument Serif', Georgia, serif"
        fontSize="27"
        fill={accent}
        letterSpacing="3"
      >
        GIOVANNE
      </text>
      <line x1="128" y1="80" x2="284" y2="80" stroke={muted} strokeWidth="0.6" />
      <text
        x="130"
        y="91"
        fontFamily="'Inter', system-ui, sans-serif"
        fontSize="7"
        fill={muted}
        letterSpacing="6"
      >
        ADVOGADO
      </text>
    </svg>
  );
}
