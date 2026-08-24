import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = false,
  light = false,
  className = '',
}) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {badge && (
        <span
          className={`block text-xs font-bold tracking-[2.5px] uppercase mb-3 ${
            light ? 'text-[#4CAF50]' : 'text-[#2E7D32] dark:text-[#4CAF50]'
          }`}
        >
          {badge}
        </span>
      )}
      {title && (
        <h2
          className={`font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 ${
            light ? 'text-white' : 'text-gray-900 dark:text-white'
          }`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`text-lg sm:text-xl font-normal leading-relaxed ${
            light ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
