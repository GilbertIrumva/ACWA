import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#16A34A] dark:bg-[#064E3B] text-[#F0FDF4] py-8 border-t border-[#22C55E] dark:border-emerald-800/40 transition-colors duration-200">
      <Container>
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-6 border-b border-[#22C55E]/40 dark:border-emerald-700/40 items-start">
          {/* Col 1: Brand & Reg */}
          <div className="md:col-span-1 space-y-3">
            <Link href="/" className="flex items-center space-x-2.5 group inline-block">
              <img
                src="/logo.jpg"
                alt="ACWA Logo"
                className="w-8 h-8 rounded-xl object-cover shadow-sm bg-white p-0.5"
              />
              <span className="font-serif font-bold text-xl text-[#F0FDF4] tracking-tight">
                ACWA
              </span>
            </Link>
            <p className="text-[#D5EBD9]/85 text-xs leading-relaxed">
              Arise Community Welfare Access (Reg. No. 30 of 2021). Empowering refugee and host communities in Kakuma, Kenya.
            </p>
            <Button href="/donate" variant="orange" size="sm" className="!py-1.5 !px-3 !text-xs !min-h-[32px]">
              <Heart className="w-3.5 h-3.5 mr-1.5 fill-white" />
              Donate
            </Button>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-[11px] font-bold text-[#A8875A] uppercase tracking-wider mb-2.5">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-[#D5EBD9]/85">
              <li><Link href="/" className="hover:text-[#F0FDF4] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#F0FDF4] transition-colors">About ACWA</Link></li>
              <li><Link href="/programs" className="hover:text-[#F0FDF4] transition-colors">Our Programs</Link></li>
              <li><Link href="/impact" className="hover:text-[#F0FDF4] transition-colors">Impact & Verification</Link></li>
              <li><Link href="/stories" className="hover:text-[#F0FDF4] transition-colors">Stories & Field News</Link></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="text-[11px] font-bold text-[#A8875A] uppercase tracking-wider mb-2.5">
              Programs
            </h4>
            <ul className="space-y-1.5 text-xs text-[#D5EBD9]/85">
              <li><Link href="/programs/peacebuilding" className="hover:text-[#F0FDF4] transition-colors">Peacebuilding</Link></li>
              <li><Link href="/programs/education" className="hover:text-[#F0FDF4] transition-colors">Education Support</Link></li>
              <li><Link href="/programs/child-protection" className="hover:text-[#F0FDF4] transition-colors">Child Protection</Link></li>
              <li><Link href="/programs/livelihoods" className="hover:text-[#F0FDF4] transition-colors">Livelihoods</Link></li>
              <li><Link href="/programs/community-health" className="hover:text-[#F0FDF4] transition-colors">Community Health</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-[11px] font-bold text-[#A8875A] uppercase tracking-wider mb-2.5">
              Contact Us
            </h4>
            <ul className="space-y-2 text-xs text-[#D5EBD9]/85">
              <li className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#A8875A] shrink-0" />
                <span>Kakuma Refugee Camp, Kenya</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#A8875A] shrink-0" />
                <a href="tel:+254727236976" className="hover:text-[#F0FDF4] transition-colors">+254 727236976</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#A8875A] shrink-0" />
                <a href="mailto:arisecwel.acces@gmail.com" className="hover:text-[#F0FDF4] transition-colors truncate">arisecwel.acces@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Compact Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#D5EBD9]/70 gap-2">
          <p>© {currentYear} ACWA (ARISE COMMUNITY WELFARE ACCESS). All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="/partner-with-us" className="hover:text-[#F0FDF4] transition-colors">Partner With Us</Link>
            <Link href="/privacy" className="hover:text-[#F0FDF4] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#F0FDF4] transition-colors">Terms of Use</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
