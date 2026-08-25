'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from '../ui/ThemeToggle';
import { X, Heart, Phone, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

export default function MobileNavigation({ isOpen, onClose, navLinks }) {
  const [expandedKeys, setExpandedKeys] = useState([]);

  const toggleDropdown = (key) => {
    setExpandedKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

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
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white dark:bg-[#042F20] shadow-2xl flex flex-col justify-between overflow-y-auto p-6">
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-emerald-800/40 pb-4">
            <Link href="/" prefetch={true} onClick={onClose} className="flex items-center space-x-2">
              <img
                src="/logo.jpg"
                alt="ACWA Logo"
                className="w-9 h-9 object-contain bg-transparent border-0 shadow-none rounded-none shrink-0"
              />
              <div>
                <span className="font-serif font-extrabold text-xl text-[#2E7D32] dark:text-[#4CAF50] block leading-none">
                  ACWA
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider block mt-0.5">
                  Kenya CBO
                </span>
              </div>
            </Link>

            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-emerald-900/40 transition-colors focus:outline-none"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="mt-6 flex flex-col space-y-1">
            {navLinks.map((link) => {
              if (link.isDropdown && link.items) {
                const isExpanded = expandedKeys.includes(link.dropdownKey);

                return (
                  <div key={link.name} className="border-b border-gray-100 dark:border-emerald-950">
                    <div className="flex items-center justify-between px-4 py-3">
                      <Link
                        href={link.href}
                        prefetch={true}
                        onClick={onClose}
                        className="text-base font-bold text-gray-900 dark:text-white hover:text-[#2E7D32] dark:hover:text-[#4CAF50]"
                      >
                        {link.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(link.dropdownKey)}
                        className="p-1 text-[#2E7D32] dark:text-[#4CAF50]"
                        aria-label={`Toggle ${link.name} sub-menu`}
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>

                    {/* Sub links */}
                    {isExpanded && (
                      <div className="bg-gray-50 dark:bg-[#064E3B]/40 py-2 px-3 space-y-1 rounded-xl my-1 border border-gray-100 dark:border-emerald-800/40">
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            prefetch={true}
                            onClick={onClose}
                            className="block px-3 py-2 text-xs font-bold text-black dark:text-white hover:text-[#16A34A] dark:hover:text-[#22C55E]"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  onClick={onClose}
                  className="px-4 py-3 text-base font-bold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-[#064E3B] hover:text-[#2E7D32] dark:hover:text-[#4CAF50] border-b border-gray-100 dark:border-emerald-950 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#2E7D32] dark:text-[#4CAF50] font-normal">→</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom CTA & Info */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-emerald-800/40 space-y-4">
          <Link
            href="/donate"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-extrabold text-base rounded-none transition-colors shadow-md group"
          >
            <Heart className="w-5 h-5 mr-2 fill-white" />
            <span>Donate to ACWA</span>
          </Link>

          <div className="bg-gray-50 dark:bg-[#064E3B]/40 p-4 border border-gray-200 dark:border-emerald-800/40 space-y-2 text-xs text-gray-600 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50] shrink-0" />
              <span>Kakuma Refugee Camp, Turkana, Kenya</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50] shrink-0" />
              <span>+254 727236976</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50] shrink-0" />
              <span className="truncate">arisecwel.acces@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
