import React from 'react';
import Container from '../ui/Container';
import Link from 'next/link';
import { Handshake, Building2, Globe2, Landmark, HeartHandshake, ShieldAlert, ArrowRight } from 'lucide-react';

export default function PartnershipCTA() {
  const partnerTypes = [
    { icon: Building2, label: 'Non-Governmental Organizations' },
    { icon: Landmark, label: 'Government Institutions' },
    { icon: Globe2, label: 'Humanitarian & Development Agencies' },
    { icon: HeartHandshake, label: 'Faith-Based Organizations' },
    { icon: Handshake, label: 'International Donors & Philanthropies' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#042F20] transition-colors duration-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#2E7D32] dark:text-[#4CAF50] font-bold text-xs uppercase tracking-[3px] block">
              INSTITUTIONAL COLLABORATION
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
              Stronger communities are built together.
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              ACWA serves as an agile, trusted community partner on the ground in Kakuma Refugee Camp and host areas. We collaborate with international NGOs, humanitarian agencies, government bodies, and philanthropic networks to implement high-impact, transparent programs.
            </p>

            <div className="pt-2">
              <Link
                href="/partner-with-us"
                className="inline-flex items-center px-7 py-3.5 bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-base rounded-none transition-colors shadow-md group"
              >
                <Handshake className="w-5 h-5 mr-2" />
                <span>Partner With ACWA</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#F9FAFB] dark:bg-[#064E3B]/40 p-8 rounded-none border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] space-y-4">
            <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
              Who We Partner With
            </h3>

            <div className="space-y-3">
              {partnerTypes.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 p-3.5 bg-white dark:bg-[#042F20] border border-gray-200 dark:border-emerald-800/40 text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-semibold"
                  >
                    <div className="w-8 h-8 rounded-none bg-[#2E7D32] text-white flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-emerald-800/40 text-xs text-gray-500 dark:text-gray-400 flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50] shrink-0" />
              <span>Full organizational compliance under Kenyan CBO registration laws.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
