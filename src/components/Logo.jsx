import React from 'react';
import logoImg from '../assets/logo/logo.jpeg';

export default function Logo({ size = 'md', showTamil = true, light = false }) {
  const iconSizes = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-12 h-12 rounded-2xl',
  };

  return (
    <div className="flex items-center gap-3 select-none group">
      {/* Official App Logo Icon */}
      <div
        className={`${iconSizes[size]} overflow-hidden shadow-soft-purple shadow-primary/25 border border-outline-variant/40 flex items-center justify-center bg-white transition-transform duration-300 group-hover:scale-105 shrink-0`}
      >
        <img
          src={logoImg}
          alt="Antharangam (அந்தரங்கம்) Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Brand Name & Tamil Subtitle */}
      <div className="flex flex-col text-left">
        <span
          className={`font-extrabold tracking-tight ${
            size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'
          } ${light ? 'text-white' : 'text-on-surface'}`}
        >
          Antharangam
        </span>
        {showTamil && (
          <span
            className={`font-tamil font-medium text-xs tracking-normal -mt-0.5 ${
              light ? 'text-secondary-fixed' : 'text-secondary'
            }`}
          >
            அந்தரங்கம்
          </span>
        )}
      </div>
    </div>
  );
}
