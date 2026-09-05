'use client';

import React from 'react';
import Container from '../ui/Container';
import { Shield, Sparkles, BookOpen, HeartHandshake } from 'lucide-react';

export default function BridgeSection() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#042F20] transition-colors duration-200 my-4">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1B5E20]/10 dark:bg-[#4CAF50]/20 text-[#2E7D32] dark:text-[#4CAF50] text-xs font-bold uppercase tracking-widest border border-[#2E7D32]/20 dark:border-[#4CAF50]/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#2E7D32] dark:text-[#4CAF50]" />
            <span>INTEGRATED COMMUNITY PATHWAYS</span>
          </div>

          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white leading-tight">
            How Peacebuilding Powers Educational Growth
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto font-normal">
            True transformation happens when safety and learning reinforce each other. By establishing peaceful dialogue between refugee camp zones and local host villages, ACWA creates the secure foundation required for children to attend school safely and for adult literacy programs to thrive.
          </p>

          {/* 3 Pillar Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
            <div className="bg-[#F9FAFB] dark:bg-[#064E3B]/50 p-6 rounded-2xl border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#2E7D32] text-white flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white leading-snug">
                Safe Learning Routes
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Inter-community peace agreements ensure children cross camp zones to school without fear of harassment or conflict.
              </p>
            </div>

            <div className="bg-[#F9FAFB] dark:bg-[#064E3B]/50 p-6 rounded-2xl border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#2E7D32] text-white flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white leading-snug">
                Joint Elder Advocacy
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Refugee and Turkana elders unite in peace committees to champion equal education access and school enrollment for all youth.
              </p>
            </div>

            <div className="bg-[#F9FAFB] dark:bg-[#064E3B]/50 p-6 rounded-2xl border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#2E7D32] text-white flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white leading-snug">
                Literacy for Harmony
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Functional literacy and language courses break down communication barriers between diverse ethnic communities in Kakuma.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
