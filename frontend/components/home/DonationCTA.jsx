import React from 'react';
import Container from '../ui/Container';
import Link from 'next/link';
import { Heart, ShieldCheck, ArrowRight } from 'lucide-react';

export default function DonationCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#1B5E20] text-white transition-colors duration-200">
      <Container>
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <span className="text-[#4CAF50] font-bold text-xs uppercase tracking-[3px] block">
            MAKE A DIFFERENCE TODAY
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Help communities build a more peaceful and sustainable future.
          </h2>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            Your contribution directly funds educational materials for vulnerable children, permaculture seeds for community gardens, and peaceful dialogue forums in Kakuma Refugee Camp.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-[#1B5E20] font-extrabold text-base rounded-none hover:bg-gray-100 transition-colors shadow-lg group"
            >
              <Heart className="w-5 h-5 mr-2.5 text-[#1B5E20] fill-[#1B5E20]" />
              <span>Invest in Potential</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/get-involved"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-base rounded-none hover:bg-white/10 transition-colors"
            >
              <span>Get Involved</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 font-medium">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#4CAF50]" />
              <span>100% Direct Program Impact</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#4CAF50]" />
              <span>Financial Accountability</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#4CAF50]" />
              <span>Registered Kenya CBO</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
