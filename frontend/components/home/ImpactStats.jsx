import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { CheckCircle2, HeartHandshake, Sprout, GraduationCap, Users } from 'lucide-react';

export default function ImpactStats() {
  const qualitativePillars = [
    {
      icon: Users,
      pillar: 'Host & Refugee Communities',
      qualitative: 'Fostering peaceful co-existence and inclusive social dialogue across Kakuma camps and host villages.',
      status: 'Active Engagement',
    },
    {
      icon: GraduationCap,
      pillar: 'Vulnerable Children',
      qualitative: 'Providing essential educational assistance, learning materials, and protective community environments.',
      status: 'Ongoing Support',
    },
    {
      icon: HeartHandshake,
      pillar: 'Women & Youth',
      qualitative: 'Mobilizing grassroots groups for capacity building, leadership development, and collective welfare.',
      status: 'Capacity Mobilized',
    },
    {
      icon: Sprout,
      pillar: 'Permaculture & Livelihoods',
      qualitative: 'Promoting sustainable agriculture, poultry farming, and climate-resilient food production.',
      status: 'Project Highlight',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#042F20] transition-colors duration-200">
      <Container>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <SectionHeading
            badge="OUR IMPACT"
            title="Measurable Action & Qualitative Integrity"
            subtitle="At ACWA, we prioritize authentic grassroots transformation over inflated statistics. Every program is grounded in verifiable community participation and dignity."
            centered={true}
          />
        </div>

        {/* 4 Pillars Grid with SIR Africa Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualitativePillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F9FAFB] dark:bg-[#064E3B]/40 p-8 rounded-none border-t-4 border-[#2E7D32] flex flex-col justify-between shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-none bg-[#2E7D32] text-white flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-[#2E7D32] dark:text-[#4CAF50] uppercase tracking-widest block mb-1">
                      {item.status}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white">
                      {item.pillar}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.qualitative}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200 dark:border-emerald-800/40 flex items-center space-x-2 text-xs font-bold text-[#2E7D32] dark:text-[#4CAF50]">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50]" />
                  <span>Grassroots Action Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
