'use client';

import React from 'react';
import Container from '../ui/Container';
import { Sprout, Sparkles, BookMarked, Coins } from 'lucide-react';

export default function LivelihoodsBridgeSection() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#042F20] transition-colors duration-200 my-4">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1B5E20]/10 dark:bg-[#4CAF50]/20 text-[#2E7D32] dark:text-[#4CAF50] text-xs font-bold uppercase tracking-widest border border-[#2E7D32]/20 dark:border-[#4CAF50]/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#2E7D32] dark:text-[#4CAF50]" />
            <span>SUSTAINABLE SELF-RELIANCE PIPELINE</span>
          </div>

          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white leading-tight">
            Connecting Literacy & Vocational Farming for Lasting Impact
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto font-normal">
            Education provides foundational knowledge, while dryland farming and vocational skills provide the practical tools for survival. ACWA integrates classroom learning with hands-on permaculture training so families in Kakuma can grow their own nutrition, run small businesses, and achieve true economic dignity.
          </p>

          {/* 3 Synergy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
            <div className="bg-[#F9FAFB] dark:bg-[#064E3B]/50 p-6 rounded-2xl border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#2E7D32] text-white flex items-center justify-center">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white leading-snug">
                Agronomy & Permaculture Training
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Combining dryland farming theory with hands-on rainwater harvesting and soil regeneration at community demo plots.
              </p>
            </div>

            <div className="bg-[#F9FAFB] dark:bg-[#064E3B]/50 p-6 rounded-2xl border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#2E7D32] text-white flex items-center justify-center">
                <BookMarked className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white leading-snug">
                Youth Vocational Workshops
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Empowering out-of-school youth with practical craft, tailoring, and poultry management skills alongside basic literacy.
              </p>
            </div>

            <div className="bg-[#F9FAFB] dark:bg-[#064E3B]/50 p-6 rounded-2xl border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#2E7D32] text-white flex items-center justify-center">
                <Coins className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white leading-snug">
                Financial Literacy & Savings
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Training women and youth groups in bookkeeping, business management, and community micro-credit systems.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
