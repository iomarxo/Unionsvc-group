import React, { useState } from 'react';

interface UnionLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
  className?: string;
  subtext?: string;
}

export const UnionLogo: React.FC<UnionLogoProps> = ({
  size = 'md',
  showText = true,
  textColor = 'text-[#f3e6c9]',
  className = '',
  subtext
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeMap = {
    sm: {
      badge: 'w-8 h-8',
      text: 'text-base',
      sub: 'text-[9px]'
    },
    md: {
      badge: 'w-10 h-10 sm:w-11 sm:h-11',
      text: 'text-lg',
      sub: 'text-[10px]'
    },
    lg: {
      badge: 'w-14 h-14',
      text: 'text-xl',
      sub: 'text-xs'
    },
    xl: {
      badge: 'w-20 h-20',
      text: 'text-2xl',
      sub: 'text-sm'
    }
  };

  const dim = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official circular black badge with 3D metallic gold "union" emblem */}
      <div
        className={`${dim.badge} relative rounded-full bg-[#121212] border border-[#D6B36A] shadow-[0_0_15px_rgba(214,179,106,0.25)] flex items-center justify-center p-1 overflow-hidden flex-shrink-0 group-hover:border-[#f3e6c9] group-hover:shadow-[0_0_20px_rgba(214,179,106,0.45)] transition-all`}
      >
        {/* Subtle radial inner glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(214,179,106,0.2),transparent_70%)] pointer-events-none"></div>

        {!imageError ? (
          <img
            src="/assets/union_logo.jpg"
            alt="UNION Logo"
            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
            onError={() => setImageError(true)}
          />
        ) : (
          /* High-res vector fallback of the exact 3D Gold Tubular 'union' logo */
          <svg
            viewBox="0 0 160 80"
            className="w-full h-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="goldTubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fae7b5" />
                <stop offset="25%" stopColor="#D6B36A" />
                <stop offset="50%" stopColor="#fff2cf" />
                <stop offset="75%" stopColor="#B99348" />
                <stop offset="100%" stopColor="#876725" />
              </linearGradient>
              <filter id="goldShine" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="1" stdDeviation="0.8" floodColor="#000" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Letter 'u' */}
            <path
              d="M 16 38 L 16 54 C 16 66 32 66 32 54 L 32 38"
              stroke="url(#goldTubeGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              filter="url(#goldShine)"
            />

            {/* Letter 'n' */}
            <path
              d="M 32 46 L 32 34 C 32 22 48 22 48 34 L 48 54"
              stroke="url(#goldTubeGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              filter="url(#goldShine)"
            />

            {/* Letter 'i' */}
            <line
              x1="62"
              y1="34"
              x2="62"
              y2="54"
              stroke="url(#goldTubeGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              filter="url(#goldShine)"
            />

            {/* Letter 'o' */}
            <circle
              cx="90"
              cy="44"
              r="16"
              stroke="url(#goldTubeGrad)"
              strokeWidth="6"
              filter="url(#goldShine)"
            />

            {/* Letter 'n' */}
            <path
              d="M 120 54 L 120 34 C 120 22 144 22 144 34 L 144 54"
              stroke="url(#goldTubeGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              filter="url(#goldShine)"
            />
          </svg>
        )}
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="leading-tight">
          <span
            className={`font-serif tracking-[0.18em] ${dim.text} font-bold ${textColor} block uppercase transition-colors`}
          >
            UNIONSVC
          </span>
          {subtext ? (
            <span className={`text-[10px] tracking-widest text-[#D6B36A] uppercase block ${dim.sub}`}>
              {subtext}
            </span>
          ) : (
            <span className={`tracking-widest text-[#D6B36A] uppercase block ${dim.sub}`}>
              Logistics & Tech
            </span>
          )}
        </div>
      )}
    </div>
  );
};
