'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '../ui/Container';
import MobileNavigation from './MobileNavigation';
import ThemeToggle from '../ui/ThemeToggle';
import {
  Menu,
  Heart,
  ChevronDown,
  Handshake,
  ShieldCheck,
  HeartHandshake,
  Sprout,
  Activity,
  Layers,
  Users,
  Eye,
} from 'lucide-react';

const ABOUT_ITEMS = [
  { name: 'About ACWA Hub', href: '/about', icon: Users, desc: 'Overview of ACWA identity & history' },
  { name: 'Our Team & Leadership', href: '/about#team', icon: ShieldCheck, desc: 'Grassroots leaders & field coordinators' },
  { name: 'Vision & Mission', href: '/about#vision-mission', icon: Eye, desc: 'Self-reliance & community transformation' },
  { name: 'Core Values', href: '/about#core-values', icon: HeartHandshake, desc: 'Integrity, transparency, teamwork & dignity' },
];

const PROGRAM_ITEMS = [
  { name: 'All Programs Hub', href: '/programs', icon: Layers, desc: 'Overview of all 5 program pillars' },
  { name: 'Peacebuilding & Dialogue', href: '/programs/peacebuilding', icon: Handshake, desc: 'Conflict resolution & peace forums' },
  { name: 'Education Support', href: '/programs/education', icon: ShieldCheck, desc: 'Scholarships & literacy classes' },
  { name: 'Child Protection & Welfare', href: '/programs/child-protection', icon: HeartHandshake, desc: 'Orphan welfare & safe spaces' },
  { name: 'Livelihoods & Permaculture', href: '/programs/livelihoods', icon: Sprout, desc: 'Farming, poultry & craft skills' },
  { name: 'Community Health & Awareness', href: '/programs/community-health', icon: Activity, desc: 'MHPSS & health education' },
];

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about', isDropdown: true, dropdownKey: 'about', title: 'About ACWA', items: ABOUT_ITEMS },
  { name: 'What We Do', href: '/programs', isDropdown: true, dropdownKey: 'programs', title: 'ACWA Program Pillars', items: PROGRAM_ITEMS },
  { name: 'Our Impact', href: '/impact' },
  { name: 'Stories', href: '/stories' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
              className="w-11 h-11 object-contain bg-transparent border-0 shadow-none rounded-none shrink-0"
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
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 relative" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              if (link.isDropdown) {
                const isOpen = activeDropdown === link.dropdownKey;

                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(link.dropdownKey)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      prefetch={true}
                      className={`py-1 text-base font-semibold inline-flex items-center space-x-1 transition-all duration-150 relative ${
                        isActive
                          ? 'text-[#2E7D32] dark:text-[#4CAF50] border-b-2 border-[#2E7D32] dark:border-[#4CAF50]'
                          : 'text-gray-900 dark:text-white hover:text-[#2E7D32] dark:hover:text-[#4CAF50] hover:border-b-2 hover:border-[#2E7D32] dark:hover:border-[#4CAF50]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Horizontal Dropdown Sub-Nav Bar */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-[#042F20] rounded-2xl shadow-xl border border-gray-100 dark:border-emerald-800/40 px-6 py-3 transition-all duration-200 z-50 ${
                        isOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="flex items-center space-x-6 whitespace-nowrap">
                        {link.items.map((item) => {
                          const isItemActive = pathname === item.href;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              prefetch={true}
                              onClick={() => setActiveDropdown(null)}
                              className={`py-1 text-sm font-bold inline-block transition-all duration-150 relative ${
                                isItemActive
                                  ? 'text-[#2E7D32] dark:text-[#4CAF50] border-b-2 border-[#2E7D32] dark:border-[#4CAF50]'
                                  : 'text-black dark:text-white hover:text-[#2E7D32] dark:hover:text-[#4CAF50] hover:border-b-2 hover:border-[#2E7D32] dark:hover:border-[#4CAF50]'
                              }`}
                            >
                              <span>{item.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

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
