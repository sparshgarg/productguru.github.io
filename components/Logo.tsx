import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
      <linearGradient id="logoGrad2" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    {/* Background */}
    <rect width="100" height="100" rx="22" fill="#0a0a14" />
    {/* Turban body */}
    <path d="M50 12 C30 12 16 26 16 40 L84 40 C84 26 70 12 50 12Z" fill="url(#logoGrad)" />
    {/* Turban ridges */}
    <path d="M18 34 Q50 27 82 34" stroke="rgba(0,0,0,0.25)" strokeWidth="2" fill="none" />
    <path d="M16 40 Q50 32 84 40" stroke="rgba(0,0,0,0.25)" strokeWidth="2" fill="none" />
    {/* Turban top jewel */}
    <path d="M50 8 L46 15 L54 15 Z" fill="url(#logoGrad2)" />
    <circle cx="50" cy="8" r="3" fill="#22d3ee" />
    {/* Circuit dots on turban */}
    <circle cx="32" cy="26" r="2" fill="rgba(255,255,255,0.35)" />
    <circle cx="50" cy="21" r="2" fill="rgba(255,255,255,0.35)" />
    <circle cx="68" cy="26" r="2" fill="rgba(255,255,255,0.35)" />
    <line x1="34" y1="26" x2="48" y2="21" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <line x1="52" y1="21" x2="66" y2="26" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    {/* Face */}
    <ellipse cx="50" cy="57" rx="17" ry="19" fill="url(#logoGrad)" opacity="0.85" />
    {/* Eyes */}
    <ellipse cx="44" cy="53" rx="2.5" ry="3" fill="#0a0a14" />
    <ellipse cx="56" cy="53" rx="2.5" ry="3" fill="#0a0a14" />
    {/* Mustache */}
    <path d="M43 62 Q46.5 65.5 50 63 Q53.5 65.5 57 62" stroke="#0a0a14" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Beard */}
    <path d="M38 65 Q40 74 50 76 Q60 74 62 65" fill="url(#logoGrad)" opacity="0.6" />
    {/* Shoulders */}
    <path d="M22 92 Q28 72 50 70 Q72 72 78 92" fill="url(#logoGrad)" opacity="0.75" />
  </svg>
);

export default Logo;
