'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import { Heart, MapPin, Phone, Mail, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F4F6F8] dark:bg-[#021F15] text-gray-900 dark:text-white transition-colors duration-200 border-t border-gray-200 dark:border-emerald-900/40">
      {/* SIR Africa Style Newsletter Banner */}
      <div className="bg-[#1B5E20] text-white py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-[#4CAF50] font-bold text-xs uppercase tracking-[3px] block">
              STAY CONNECTED
            </span>
            <h3 className="font-serif font-extrabold text-2xl sm:text-3xl">
              Join Our Community Movement
            </h3>
            <p className="text-sm text-white/85 leading-relaxed">
              Get the latest updates on our grassroots impact, field stories, and opportunities to support refugees and host communities in Kakuma.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto pt-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 bg-white text-gray-900 text-sm focus:outline-none rounded-none border-0 font-sans placeholder:text-gray-400"
                required
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#2E7D32] hover:bg-[#155e24] text-white font-extrabold text-sm uppercase tracking-wider rounded-none transition-colors shrink-0 shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </div>

      {/* SIR Africa Main 4-Column Footer */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-300 dark:border-emerald-800/40">
            {/* Col 1: Organization Branding (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="/" className="flex items-center space-x-3 group">
                <img
                  src="/logo.jpg"
                  alt="ACWA Logo"
                  className="w-10 h-10 object-contain bg-transparent border-0 shadow-none rounded-none shrink-0"
                />
                <div>
                  <span className="font-serif font-extrabold text-2xl tracking-tight block leading-none text-[#2E7D32] dark:text-[#4CAF50]">
                    ACWA
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 block mt-1 tracking-wider uppercase">
                    Arise Community Welfare Access
                  </span>
                </div>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm">
                ARISE COMMUNITY WELFARE ACCESS (ACWA) is a community-based organization registered in Kenya under Act No. 30 of 2021 (Reg No. DSD/23/124/02/152725), dedicated to creating pathways to peace, education, livelihoods, and child protection in Kakuma Refugee Camp and Turkana County.
              </p>
            </div>

            {/* Col 2: Organization Navigation (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-serif font-bold text-lg text-gray-900 dark:text-white">
                Organization
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-[#2E7D32] dark:hover:text-[#4CAF50] hover:underline transition-colors">
                    About ACWA
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-[#2E7D32] dark:hover:text-[#4CAF50] hover:underline transition-colors">
                    What We Do & Programs
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="hover:text-[#2E7D32] dark:hover:text-[#4CAF50] hover:underline transition-colors">
                    Our Verified Impact
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="hover:text-[#2E7D32] dark:hover:text-[#4CAF50] hover:underline transition-colors">
                    Field Stories & News
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved" className="hover:text-[#2E7D32] dark:hover:text-[#4CAF50] hover:underline transition-colors">
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link href="/partner-with-us" className="hover:text-[#2E7D32] dark:hover:text-[#4CAF50] hover:underline transition-colors">
                    Partner With Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Contact Us (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-serif font-bold text-lg text-gray-900 dark:text-white">
                Contact Us
              </h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#2E7D32] dark:text-[#4CAF50] shrink-0 mt-0.5" />
                  <span>Kakuma Refugee Camp, Turkana County, Kenya</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#2E7D32] dark:text-[#4CAF50] shrink-0" />
                  <a href="tel:+254727236976" className="hover:text-[#2E7D32] dark:hover:text-[#4CAF50] hover:underline transition-colors font-medium">
                    +254 727236976
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#2E7D32] dark:text-[#4CAF50] shrink-0" />
                  <a href="mailto:arisecwel.acces@gmail.com" className="hover:text-[#2E7D32] dark:hover:text-[#4CAF50] hover:underline transition-colors truncate font-medium">
                    arisecwel.acces@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Action & Social (lg:col-span-2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-serif font-bold text-lg text-gray-900 dark:text-white">
                Follow Us
              </h4>
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <a href="#" aria-label="Facebook" className="p-2 bg-gray-200 dark:bg-emerald-900/40 hover:bg-[#2E7D32] hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Twitter" className="p-2 bg-gray-200 dark:bg-emerald-900/40 hover:bg-[#2E7D32] hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/arise-community-welfare-access-acwa-65a81635b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 bg-gray-200 dark:bg-emerald-900/40 hover:bg-[#2E7D32] hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Instagram" className="p-2 bg-gray-200 dark:bg-emerald-900/40 hover:bg-[#2E7D32] hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/donate"
                  className="w-full inline-flex items-center justify-center px-5 py-3 bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-sm uppercase tracking-wider rounded-none transition-colors shadow-md group"
                >
                  <Heart className="w-4 h-4 mr-2 fill-white group-hover:scale-110 transition-transform" />
                  <span>Donate</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar matching SIR Africa */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400 gap-4">
            <p>© {currentYear} ACWA (ARISE COMMUNITY WELFARE ACCESS). All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="hover:text-[#2E7D32] dark:hover:text-[#4CAF50] hover:underline transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#2E7D32] dark:hover:text-[#4CAF50] hover:underline transition-colors">
                Terms of Use
              </Link>
              <Link href="/contact" className="hover:text-[#2E7D32] dark:hover:text-[#4CAF50] hover:underline transition-colors">
                Contact Support
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
