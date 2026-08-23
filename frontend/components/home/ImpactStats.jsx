import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { ShieldCheck, CheckCircle2, HeartHandshake, Sprout, GraduationCap, Users } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-[#16A34A] text-[#F0FDF4]">
      <Container>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <SectionHeading
            badge="Verified Impact Pillars"
            title="Measurable Action & Qualitative Integrity"
            subtitle="At ACWA, we prioritize authentic grassroots transformation over inflated statistics. Every program is grounded in verifiable community participation and dignity."
            centered={true}
            light={true}
          />
          
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#22C55E] border border-[#A8875A]/40 text-xs text-[#D5EBD9] mt-4">
            <ShieldCheck className="w-4 h-4 text-[#A8875A]" />
            <span>Data Transparency: Numerical metrics are validated and managed via Sanity CMS</span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualitativePillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#22C55E]/50 backdrop-blur-sm p-6 rounded-3xl border border-[#F0FDF4]/15 flex flex-col justify-between hover:bg-[#22C55E]/80 transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-[#A8875A] uppercase tracking-wider block mb-1">
                      {item.status}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-[#F0FDF4]">
                      {item.pillar}
                    </h3>
                  </div>

                  <p className="text-sm text-[#D5EBD9]/80 leading-relaxed">
                    {item.qualitative}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0FDF4]/10 flex items-center space-x-2 text-xs text-[#D5EBD9]">
                  <CheckCircle2 className="w-4 h-4 text-[#A8875A]" />
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
