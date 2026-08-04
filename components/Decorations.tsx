export function Sparkle({ size = 24, color = "#FE9EED", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d="M12 2 L13.2 9.8 L21 11 L13.2 12.2 L12 20 L10.8 12.2 L3 11 L10.8 9.8 Z" />
    </svg>
  );
}

export function Heart({ size = 24, color = "#F2B8CE", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
    </svg>
  );
}

export function DiscoBall({ size = 48, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
    >
      <circle cx="24" cy="26" r="18" fill="#FEE2BC" stroke="#D49C84" strokeWidth="1.5" />
      <rect x="21" y="4" width="6" height="8" rx="2" fill="#D49C84" />
      {/* grid lines */}
      <line x1="6" y1="20" x2="42" y2="20" stroke="#F2B8CE" strokeWidth="1" />
      <line x1="6" y1="26" x2="42" y2="26" stroke="#F2B8CE" strokeWidth="1" />
      <line x1="6" y1="32" x2="42" y2="32" stroke="#F2B8CE" strokeWidth="1" />
      <line x1="14" y1="10" x2="14" y2="42" stroke="#F2B8CE" strokeWidth="1" />
      <line x1="20" y1="8" x2="20" y2="44" stroke="#F2B8CE" strokeWidth="1" />
      <line x1="26" y1="8" x2="26" y2="44" stroke="#F2B8CE" strokeWidth="1" />
      <line x1="32" y1="10" x2="32" y2="42" stroke="#F2B8CE" strokeWidth="1" />
      {/* sparkles */}
      <circle cx="38" cy="16" r="2" fill="#FE9EED" />
      <circle cx="10" cy="30" r="1.5" fill="#FE9EED" />
      <circle cx="42" cy="34" r="1.5" fill="#FE9EED" />
    </svg>
  );
}

export function CowboyBoot({ size = 48, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
    >
      <path
        d="M14 6 L18 6 L20 22 L28 26 L38 28 L38 36 L10 36 L10 28 L14 22 Z"
        fill="#D49C84"
        stroke="#6B4841"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 28 Q8 30 10 36 L38 36 L38 28"
        fill="#6B4841"
        stroke="#6B4841"
        strokeWidth="1"
      />
      <path
        d="M16 10 Q18 8 20 10"
        fill="none"
        stroke="#FEEFB8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WeddingRings({ size = 48, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
    >
      <circle cx="18" cy="24" r="10" fill="none" stroke="#D49C84" strokeWidth="3" />
      <circle cx="30" cy="24" r="10" fill="none" stroke="#FE9EED" strokeWidth="3" />
      <path d="M18 10 L20 6 L22 10" fill="#D49C84" />
    </svg>
  );
}

export function BirthdayCake({ size = 48, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
    >
      {/* candles */}
      <rect x="16" y="10" width="4" height="8" rx="1" fill="#FE9EED" />
      <rect x="28" y="10" width="4" height="8" rx="1" fill="#D49C84" />
      <ellipse cx="18" cy="9" rx="2" ry="3" fill="#FEEFB8" />
      <ellipse cx="30" cy="9" rx="2" ry="3" fill="#FEEFB8" />
      {/* cake body */}
      <rect x="8" y="18" width="32" height="10" rx="2" fill="#FEE2BC" stroke="#D49C84" strokeWidth="1.5" />
      <rect x="8" y="28" width="32" height="12" rx="2" fill="#F2B8CE" stroke="#D49C84" strokeWidth="1.5" />
      {/* frosting waves */}
      <path d="M8 28 Q12 24 16 28 Q20 24 24 28 Q28 24 32 28 Q36 24 40 28" fill="none" stroke="#FEEFB8" strokeWidth="1.5" />
    </svg>
  );
}

export function SmallStar({ size = 16, color = "#FE9EED", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color} className={className}>
      <path d="M8 1 L9 6.5 L15 8 L9 9.5 L8 15 L7 9.5 L1 8 L7 6.5 Z" />
    </svg>
  );
}
