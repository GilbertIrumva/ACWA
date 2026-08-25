'use client';

import React from 'react';
import { useTheme } from '../providers/ThemeProvider';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme, mounted } = useTheme();

  // Avoid hydration mismatch by rendering a skeleton placeholder before mount
  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full bg-[#16A34A]/10 border border-[#16A34A]/20 ${className}`} />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ease-out active:scale-90 select-none touch-manipulation border ${
        isDark
          ? 'bg-[#064E3B] border-[#10B981]/40 text-[#F0FDF4] hover:bg-[#047857] shadow-md'
          : 'bg-[#D5EBD9] border-[#16A34A]/30 text-[#16A34A] hover:bg-[#16A34A] hover:text-[#F0FDF4] shadow-sm'
      } ${className}`}
    >
      {isDark ? (
        /* Custom SVG Sun Icon */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-amber-300 animate-spin-once"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        /* Custom SVG Moon Icon */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-[#16A34A]"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}
