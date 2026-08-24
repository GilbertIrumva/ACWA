'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '../ui/Container';
import MobileNavigation from './MobileNavigation';
import ThemeToggle from '../ui/ThemeToggle';
import { Menu, Heart } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'What We Do', href: '/programs' },
  { name: 'Our Impact', href: '/impact' },
  { name: 'Stories', href: '/stories' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBgClass = scrolled
    ? 'bg-white/95 dark:bg-[#042F20]/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-emerald-800/30 py-3'
    : 'bg-white dark:bg-[#042F20] border-b border-gray-100 dark:border-emerald-800/30 py-4';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            prefetch={true}
            className="flex items-center space-x-3 group focus:outline-none rounded-lg p-1"
          >
            <img
              src="/logo.jpg"
              alt="ACWA Logo"
              className="w-11 h-11 rounded-lg object-cover shadow-sm border border-emerald-600/30"
            />
            <div>
              <span className="font-serif font-extrabold text-2xl tracking-tight block leading-none text-[#2E7D32] dark:text-[#4CAF50]">
                ACWA
              </span>
              <span className="text-[11px] font-semibold tracking-wider block mt-1 text-gray-500 dark:text-gray-300">
                Arise Community Welfare Access
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  className={`py-1 text-base font-semibold transition-all duration-150 relative ${
                    isActive
                      ? 'text-[#2E7D32] dark:text-[#4CAF50] border-b-2 border-[#2E7D32] dark:border-[#4CAF50]'
                      : 'text-gray-900 dark:text-white hover:text-[#2E7D32] dark:hover:text-[#4CAF50] hover:border-b-2 hover:border-[#2E7D32] dark:hover:border-[#4CAF50]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <Link
              href="/donate"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-base rounded-none transition-colors shadow-md group"
            >
              <Heart className="w-4 h-4 mr-2 fill-white group-hover:scale-110 transition-transform" />
              <span>Donate</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-none lg:hidden focus:outline-none text-gray-900 dark:text-white bg-gray-100 dark:bg-emerald-900/40"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
      />
    </header>
  );
}
