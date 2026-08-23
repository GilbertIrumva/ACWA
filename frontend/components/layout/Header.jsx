'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';
import Container from '../ui/Container';
import MobileNavigation from './MobileNavigation';
import ThemeToggle from '../ui/ThemeToggle';
import { Menu, Heart } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Impact', href: '/impact' },
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
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F0FDF4]/95 dark:bg-[#042F20]/95 backdrop-blur-md shadow-sm border-b border-[#16A34A]/10 dark:border-emerald-800/30 py-3'
          : 'bg-[#F0FDF4] dark:bg-[#042F20] border-b border-[#16A34A]/10 dark:border-emerald-800/30 py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            prefetch={true}
            className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-xl p-1"
          >
            <img
              src="/logo.jpg"
              alt="ACWA Logo"
              className="w-11 h-11 rounded-2xl object-cover shadow-sm border border-[#16A34A]/20"
            />
            <div>
              <span className="font-serif font-bold text-xl text-[#16A34A] dark:text-[#22C55E] block leading-none tracking-tight">
                ACWA
              </span>
              <span className="text-[10px] text-[#A8875A] dark:text-[#D87532] font-semibold uppercase tracking-widest block mt-1">
                Arise Community Welfare Access
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-75 ease-out active:scale-95 ${
                    isActive
                      ? 'bg-[#16A34A] text-[#F0FDF4]'
                      : 'text-[#171A17] dark:text-[#F0FDF4] hover:text-[#16A34A] dark:hover:text-[#22C55E] hover:bg-[#D5EBD9] dark:hover:bg-[#064E3B]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA, Theme Toggle & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />

            <Button href="/donate" variant="orange" size="md" className="hidden sm:inline-flex shadow-sm">
              <Heart className="w-4 h-4 mr-2 fill-white" />
              Donate
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-full text-[#16A34A] dark:text-[#22C55E] bg-[#D5EBD9] dark:bg-[#064E3B] hover:bg-[#DCFCE7] active:scale-90 lg:hidden focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition-all duration-75"
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
