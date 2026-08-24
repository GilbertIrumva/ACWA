'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';
import { X, Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function MobileNavigation({ isOpen, onClose, navLinks }) {
  // Prevent scrolling when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#171A17]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#F0FDF4] dark:bg-[#042F20] shadow-2xl flex flex-col justify-between overflow-y-auto p-6 sm:p-8">
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-[#16A34A]/10 dark:border-emerald-800/30 pb-5">
            <Link href="/" prefetch={true} onClick={onClose} className="flex items-center space-x-2">
              <img
                src="/logo.jpg"
                alt="ACWA Logo"
                className="w-10 h-10 rounded-xl object-cover shadow-sm border border-[#16A34A]/20"
              />
              <div>
                <span className="font-serif font-bold text-lg text-[#16A34A] dark:text-[#22C55E] block leading-none">
                  ACWA
                </span>
                <span className="text-[10px] text-[#A8875A] dark:text-[#D87532] font-medium uppercase tracking-widest block mt-0.5">
                  Kenya CBO
                </span>
              </div>
            </Link>
            
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={onClose}
                className="p-2.5 rounded-full text-[#16A34A] dark:text-[#22C55E] hover:bg-[#D5EBD9] dark:hover:bg-[#064E3B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="mt-8 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                prefetch={true}
                onClick={onClose}
                className="px-4 py-3 rounded-2xl text-lg font-medium text-[#171A17] dark:text-[#F0FDF4] hover:bg-[#D5EBD9] dark:hover:bg-[#064E3B] hover:text-[#16A34A] dark:hover:text-[#22C55E] active:bg-[#C2E3C7] active:scale-[0.98] transition-all duration-75 ease-out flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#A8875A] dark:text-[#D87532] text-sm font-normal">→</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom CTA & Info */}
        <div className="mt-8 pt-6 border-t border-[#16A34A]/10 space-y-4">
          <Button href="/donate" variant="orange" size="lg" className="w-full shadow-md" onClick={onClose}>
            <Heart className="w-5 h-5 mr-2 fill-white" />
            Donate to ACWA
          </Button>

          <div className="bg-[#D5EBD9] p-4 rounded-2xl space-y-2 text-xs text-[#3C5245]">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-white shrink-0" />
              <span>Kakuma Refugee Camp, Turkana, Kenya</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-white shrink-0" />
              <span>+254 727236976</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-white shrink-0" />
              <span className="truncate">arisecwel.acces@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
