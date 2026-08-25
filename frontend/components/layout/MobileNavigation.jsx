'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import ThemeToggle from '../ui/ThemeToggle';
import { X, Heart, Phone, Mail, MapPin, ChevronDown, ChevronUp, ArrowRight, Handshake } from 'lucide-react';

export default function MobileNavigation({ isOpen, onClose, navLinks }) {
  const [mounted, setMounted] = useState(false);
  const [expandedKeys, setExpandedKeys] = useState(['about', 'programs']);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!isOpen || !mounted) return null;

  const drawerContent = (
    <div
      className="fixed inset-0 z-[999999] lg:hidden flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Drawer"
    >
      {/* High Z-Index Dark Overlay Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300 z-[999998]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Mobile Drawer Panel */}
      <div className="relative z-[999999] w-full max-w-xs sm:max-w-sm bg-white dark:bg-[#042F20] text-gray-900 dark:text-white shadow-2xl flex flex-col justify-between overflow-y-auto h-full p-5 sm:p-6 border-l border-gray-200 dark:border-emerald-800/40">
        <div className="space-y-6">
          {/* Top Header Row with Logo & Close Button */}
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-emerald-800/40 pb-4">
            <Link href="/" prefetch={true} onClick={onClose} className="flex items-center space-x-2.5">
              <img
                src="/logo.jpg"
                alt="ACWA Logo"
                className="w-10 h-10 object-contain bg-transparent border-0 shadow-none rounded-none shrink-0"
              />
              <div>
                <span className="font-serif font-extrabold text-xl text-[#2E7D32] dark:text-[#4CAF50] block leading-none">
                  ACWA
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-300 font-bold uppercase tracking-wider block mt-1">
                  Arise Community Welfare
                </span>
              </div>
            </Link>

            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <button
                type="button"
                onClick={onClose}
                className="p-2.5 text-gray-700 dark:text-white bg-gray-100 dark:bg-[#064E3B] hover:bg-[#2E7D32] hover:text-white dark:hover:bg-[#2E7D32] rounded-xl transition-all focus:outline-none shadow-sm"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links List */}
          <nav className="space-y-2">
            {navLinks.map((link) => {
              if (link.isDropdown && link.items) {
                const isExpanded = expandedKeys.includes(link.dropdownKey);

                return (
                  <div
                    key={link.name}
                    className="rounded-2xl border border-gray-200 dark:border-emerald-800/40 overflow-hidden bg-gray-50/50 dark:bg-[#064E3B]/30"
                  >
                    {/* Header bar of dropdown category */}
                    <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-[#064E3B]/60">
                      <Link
                        href={link.href}
                        prefetch={true}
                        onClick={onClose}
                        className="text-base font-extrabold text-gray-900 dark:text-white hover:text-[#2E7D32] dark:hover:text-[#4CAF50] flex items-center space-x-2"
                      >
                        <span>{link.name}</span>
                      </Link>

                      <button
                        type="button"
                        onClick={() => toggleDropdown(link.dropdownKey)}
                        className="p-2 text-[#2E7D32] dark:text-[#4CAF50] hover:bg-emerald-50 dark:hover:bg-emerald-900/40 rounded-lg transition-colors flex items-center space-x-1 text-xs font-bold"
                        aria-label={`Toggle ${link.name} sub-menu`}
                      >
                        <span className="text-[11px] uppercase tracking-wider">{isExpanded ? 'Hide' : 'Show'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Expandable Sub-items */}
                    {isExpanded && (
                      <div className="p-2 space-y-1 bg-gray-50 dark:bg-[#042F20] border-t border-gray-100 dark:border-emerald-800/30">
                        {/* Main Overview Link */}
                        <Link
                          href={link.href}
                          prefetch={true}
                          onClick={onClose}
                          className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-black text-[#2E7D32] dark:text-[#4CAF50] bg-emerald-50 dark:bg-[#064E3B]/80 hover:bg-[#2E7D32] hover:text-white transition-all"
                        >
                          <span>Explore Main {link.name} Page</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        {/* Sub-links */}
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            prefetch={true}
                            onClick={onClose}
                            className="block px-3 py-2.5 rounded-xl text-xs font-bold text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-[#064E3B] hover:text-[#2E7D32] dark:hover:text-[#4CAF50] transition-colors"
                          >
                            • {item.name}
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
                  className="px-4 py-3.5 rounded-2xl text-base font-extrabold text-gray-900 dark:text-white hover:bg-[#2E7D32] hover:text-white dark:hover:bg-[#2E7D32] border border-gray-200 dark:border-emerald-800/40 flex items-center justify-between transition-all bg-white dark:bg-[#064E3B]/60 shadow-sm"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50] group-hover:text-white" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Contact & Action Buttons */}
        <div className="pt-6 border-t border-gray-200 dark:border-emerald-800/40 space-y-3 mt-6">
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/donate"
              onClick={onClose}
              className="flex items-center justify-center px-4 py-3 bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-extrabold text-xs rounded-xl transition-colors shadow-md text-center"
            >
              <Heart className="w-4 h-4 mr-1.5 fill-white shrink-0" />
              <span>Donate</span>
            </Link>

            <Link
              href="/partner-with-us"
              onClick={onClose}
              className="flex items-center justify-center px-4 py-3 bg-[#042F20] dark:bg-[#064E3B] text-white hover:bg-[#2E7D32] font-extrabold text-xs rounded-xl border border-emerald-600/40 transition-colors text-center"
            >
              <Handshake className="w-4 h-4 mr-1.5 shrink-0 text-[#4CAF50]" />
              <span>Partner</span>
            </Link>
          </div>

          <div className="bg-gray-50 dark:bg-[#064E3B]/40 p-3.5 rounded-2xl border border-gray-200 dark:border-emerald-800/40 space-y-2 text-[11px] text-gray-600 dark:text-gray-300 font-medium">
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#2E7D32] dark:text-[#4CAF50] shrink-0" />
              <span className="truncate">Kakuma Refugee Camp, Turkana, Kenya</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#2E7D32] dark:text-[#4CAF50] shrink-0" />
              <span>+254 727236976</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#2E7D32] dark:text-[#4CAF50] shrink-0" />
              <span className="truncate">arisecwel.acces@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(drawerContent, document.body);
}
