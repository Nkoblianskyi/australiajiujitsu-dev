interface LogoMarkProps {
  size?: number
  className?: string
  /** 'color' uses brand blue+navy, 'white' is all-white, 'dark' is navy */
  variant?: 'color' | 'white' | 'dark'
}

export default function LogoMark({ size = 36, className = '', variant = 'color' }: LogoMarkProps) {
  const shieldFill   = variant === 'white' ? 'white'   : variant === 'dark' ? '#1a2340' : '#74ACDF'
  const accentFill   = variant === 'white' ? 'white'   : variant === 'dark' ? '#74ACDF' : '#1a2340'
  const strokeColor  = variant === 'white' ? 'white'   : variant === 'dark' ? '#74ACDF' : '#1a2340'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Shield outer */}
      <path
        d="M20 2 L38 9 L38 24 C38 34 29 40 20 42 C11 40 2 34 2 24 L2 9 Z"
        fill={shieldFill}
        stroke={strokeColor}
        strokeWidth="1.5"
      />

      {/* Shield inner diagonal split — left half darker */}
      <path
        d="M20 2 L2 9 L2 24 C2 34 11 40 20 42 Z"
        fill={accentFill}
        opacity="0.9"
      />

      {/* Horizontal belt stripe across middle */}
      <rect x="5" y="20" width="30" height="3.5" fill={shieldFill} opacity="0.6" />

      {/* "A" letter mark */}
      <text
        x="20"
        y="30"
        textAnchor="middle"
        fontSize="15"
        fontFamily="'Bebas Neue', Impact, sans-serif"
        fontWeight="400"
        letterSpacing="0.05em"
        fill="white"
      >
        AJ
      </text>

      {/* Top notch dot */}
      <circle cx="20" cy="7" r="2" fill="white" opacity="0.7" />
    </svg>
  )
}
