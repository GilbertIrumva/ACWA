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
          className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
            light
              ? 'bg-[#F0FDF4]/15 text-[#D5EBD9] border border-[#F0FDF4]/30'
              : 'bg-[#16A34A]/10 dark:bg-[#10B981]/20 text-[#16A34A] dark:text-[#34D399] border border-[#16A34A]/20 dark:border-[#10B981]/30'
          }`}
        >
          {badge}
        </span>
      )}
      {title && (
        <h2
          className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4 ${
            light ? 'text-[#F0FDF4]' : 'text-[#171A17] dark:text-[#F0FDF4]'
          }`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`text-lg sm:text-xl font-normal leading-relaxed ${
            light ? 'text-[#D5EBD9]/80' : 'text-[#3C5245] dark:text-[#D5EBD9]/80'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
