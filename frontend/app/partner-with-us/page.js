import React from 'react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import PartnershipForm from '../../components/forms/PartnershipForm';
import { Handshake, ShieldCheck, Building2, Globe2, Landmark, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Partner With ACWA | Institutional Collaboration',
  description:
    'ACWA welcomes partnerships with NGOs, donors, government institutions, and humanitarian agencies in Kakuma, Kenya.',
};

export default function PartnerWithUsPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      <section className="relative overflow-hidden py-20 sm:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/IMG_20251124_172345_679.jpg"
            alt="ACWA community partnerships and youth workshops in Kakuma"
            className="w-full h-full object-cover object-center brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 z-10" />
        </div>

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#16A34A] border border-[#22C55E]/40 text-[#D5EBD9] text-xs font-semibold uppercase tracking-wider shadow-lg">
              <Handshake className="w-4 h-4 text-[#D87532]" />
              <span>Institutional Collaboration</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Stronger Communities Are Built Together
            </h1>
            <p className="text-lg text-[#D5EBD9] leading-relaxed font-normal">
              ARISE COMMUNITY WELFARE ACCESS (ACWA) offers deep local roots, community trust, and agile field execution across Kakuma Refugee Camp and Turkana host villages.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: What ACWA Offers */}
            <div className="lg:col-span-5 space-y-8">
              <SectionHeading
                badge="Why Partner With ACWA"
                title="Your Reliable Local Execution Partner in Kakuma"
                subtitle="We bridge international humanitarian objectives with authentic grassroots implementation."
              />

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#D5EBD9] dark:bg-[#064E3B]/90 border border-[#16A34A]/15 dark:border-emerald-700/40 space-y-2">
                  <div className="flex items-center space-x-2 text-[#16A34A] dark:text-[#22C55E] font-semibold text-base">
                    <ShieldCheck className="w-5 h-5 text-[#A8875A] dark:text-[#D87532]" />
                    <span>Legal Compliance</span>
                  </div>
                  <p className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/85">
                    Registered under the Community Groups Registration Act No. 30 of 2021 in Kenya (2025). Full statutory compliance and local accountability.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#D5EBD9] dark:bg-[#064E3B]/90 border border-[#16A34A]/15 dark:border-emerald-700/40 space-y-2">
                  <div className="flex items-center space-x-2 text-[#16A34A] dark:text-[#22C55E] font-semibold text-base">
                    <CheckCircle2 className="w-5 h-5 text-[#A8875A] dark:text-[#D87532]" />
                    <span>Dual Community Focus</span>
                  </div>
                  <p className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/85">
                    Proven track record working simultaneously with refugee camp residents and Turkana host communities to ensure peaceful co-existence.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#D5EBD9] dark:bg-[#064E3B]/90 border border-[#16A34A]/15 dark:border-emerald-700/40 space-y-2">
                  <div className="flex items-center space-x-2 text-[#16A34A] dark:text-[#22C55E] font-semibold text-base">
                    <CheckCircle2 className="w-5 h-5 text-[#A8875A] dark:text-[#D87532]" />
                    <span>Financial Stewardship</span>
                  </div>
                  <p className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/85">
                    Strict financial reporting, zero tolerance for corruption, and transparent resource utilization verified by community committees.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Partnership Inquiry Form */}
            <div className="lg:col-span-7">
              <PartnershipForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
