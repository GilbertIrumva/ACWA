'use client';

import React from 'react';
import { useTheme } from '../providers/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

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
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-150 ease-out active:scale-90 select-none touch-manipulation border ${
        isDark
          ? 'bg-[#064E3B] border-[#10B981]/40 text-[#F0FDF4] hover:bg-[#047857] shadow-md'
          : 'bg-[#D5EBD9] border-[#16A34A]/30 text-[#16A34A] hover:bg-[#16A34A] hover:text-[#F0FDF4] shadow-sm'
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#FACC15] animate-spin-once" />
      ) : (
        <Moon className="w-4 h-4 text-[#16A34A]" />
      )}
    </button>
  );
}
