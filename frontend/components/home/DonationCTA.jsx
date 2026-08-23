import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Heart, ShieldCheck, ArrowRight } from 'lucide-react';

export default function DonationCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#D5EBD9] dark:bg-[#064E3B]/80 border-t border-[#16A34A]/10 dark:border-emerald-800/30 transition-colors duration-200">
      <Container>
        <div className="bg-[#F0FDF4] dark:bg-[#042F20] p-8 sm:p-12 md:p-16 rounded-3xl border border-[#16A34A]/15 dark:border-emerald-700/40 shadow-xl text-center max-w-4xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center mx-auto shadow-md">
            <Heart className="w-8 h-8 fill-white" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#171A17] dark:text-[#F0FDF4] tracking-tight leading-tight">
            Help communities build a more peaceful and sustainable future.
          </h2>

          <p className="text-base sm:text-lg text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed max-w-2xl mx-auto">
            Your generous contribution directly funds educational materials for vulnerable children, permaculture seeds for community gardens, and peaceful dialogue forums in Kakuma Refugee Camp.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/donate" variant="orange" size="lg" className="w-full sm:w-auto shadow-lg">
              <Heart className="w-5 h-5 mr-2 fill-white" />
              Support Our Work
            </Button>
            <Button href="/get-involved" variant="secondary" size="lg" className="w-full sm:w-auto">
              <span>Ways to Get Involved</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="pt-6 border-t border-[#16A34A]/10 dark:border-emerald-800/40 flex flex-wrap items-center justify-center gap-6 text-xs text-[#4A5550] dark:text-[#D5EBD9]/80">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#16A34A] dark:text-[#22C55E]" />
              <span>100% Direct Program Impact</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#16A34A] dark:text-[#22C55E]" />
              <span>Financial Accountability</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#16A34A] dark:text-[#22C55E]" />
              <span>Secure Payment Gateway</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
