import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Handshake, Building2, Globe2, Landmark, HeartHandshake, ShieldAlert } from 'lucide-react';

export default function PartnershipCTA() {
  const partnerTypes = [
    { icon: Building2, label: 'Non-Governmental Organizations' },
    { icon: Landmark, label: 'Government Institutions' },
    { icon: Globe2, label: 'Humanitarian & Development Agencies' },
    { icon: HeartHandshake, label: 'Faith-Based Organizations' },
    { icon: Handshake, label: 'International Donors & Philanthropies' },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#16A34A] text-[#F0FDF4] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E] rounded-full blur-3xl opacity-40" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#22C55E] border border-[#A8875A]/40 text-[#D5EBD9] text-xs font-semibold uppercase tracking-wider">
              <Handshake className="w-4 h-4 text-[#A8875A]" />
              <span>Institutional Collaboration</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0FDF4] tracking-tight leading-tight">
              Stronger communities are built together.
            </h2>

            <p className="text-base sm:text-lg text-[#D5EBD9]/80 leading-relaxed font-normal">
              ACWA serves as an agile, trusted community partner on the ground in Kakuma Refugee Camp and host areas. We collaborate with international NGOs, humanitarian agencies, government bodies, and philanthropic networks to implement high-impact, transparent programs.
            </p>

            <div className="pt-2">
              <Button href="/partner-with-us" variant="orange" size="lg" className="shadow-lg">
                <Handshake className="w-5 h-5 mr-2" />
                Partner With ACWA
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#22C55E]/60 p-8 rounded-3xl border border-[#F0FDF4]/15 space-y-4">
            <h3 className="font-serif text-xl font-semibold text-[#F0FDF4]">
              Who We Partner With
            </h3>

            <div className="space-y-3">
              {partnerTypes.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-[#16A34A]/60 border border-[#F0FDF4]/10 text-xs sm:text-sm text-[#D5EBD9]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#A8875A]/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#A8875A]" />
                    </div>
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#F0FDF4]/10 text-xs text-[#D5EBD9]/70 flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4 text-[#A8875A] shrink-0" />
              <span>Full organizational compliance under Kenyan CBO registration laws.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
