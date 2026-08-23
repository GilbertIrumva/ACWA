import React from 'react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import { getImpactRecords } from '../../lib/sanity/queries';
import { ShieldCheck, CheckCircle2, Award, Heart, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Impact & Verification | ACWA Kenya',
  description:
    'ACWA impact methodology and qualitative verified achievements across Kakuma Refugee Camp and Turkana host communities.',
};

export default async function ImpactPage() {
  const impactRecords = await getImpactRecords();

  return (
    <div className="py-12 sm:py-20 space-y-16">
      <section className="relative overflow-hidden py-20 sm:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/Impact.jpg"
            alt="ACWA community impact and verification"
            className="w-full h-full object-cover object-center brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 z-10" />
        </div>

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#16A34A] border border-[#22C55E]/40 text-[#D5EBD9] text-xs font-semibold uppercase tracking-wider shadow-lg">
              <ShieldCheck className="w-4 h-4 text-[#D87532]" />
              <span>Verified Community Impact</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Honest Impact & Community Accountability
            </h1>
            <p className="text-lg text-[#D5EBD9] leading-relaxed font-normal">
              At ACWA, we never manufacture or exaggerate numbers. We publish qualitative milestones and verified metrics grounded in real community action.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionHeading
            badge="Verified Records"
            title="Grassroots Achievements & Progress Reports"
            subtitle="Explore our CMS-managed records documenting peace dialogues, education support, livelihoods, and youth mobilization."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactRecords.map((record) => (
              <div
                key={record._id}
                className="bg-[#F0FDF4] dark:bg-[#064E3B]/90 p-8 rounded-3xl border border-[#16A34A]/15 dark:border-emerald-700/40 shadow-md flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#A8875A] dark:text-[#D87532] uppercase tracking-wider bg-[#16A34A]/10 dark:bg-[#22C55E]/20 px-3 py-1 rounded-full border border-[#16A34A]/15 dark:border-emerald-600/30">
                      {record.program}
                    </span>
                    <span className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/80 font-semibold">{record.year}</span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-[#171A17] dark:text-[#F0FDF4]">{record.title}</h3>
                  <p className="text-sm text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed">{record.description}</p>
                </div>

                <div className="pt-4 border-t border-[#16A34A]/10 dark:border-emerald-800/40 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1.5 text-[#16A34A] dark:text-[#22C55E] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#A8875A] dark:text-[#D87532]" />
                    <span>Verified Milestone</span>
                  </div>
                  <span className="text-[#4A5550] dark:text-[#D5EBD9]/70">{record.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#D5EBD9] dark:bg-[#042F20] p-8 sm:p-12 rounded-3xl border border-[#16A34A]/15 dark:border-emerald-700/40 text-center max-w-3xl mx-auto space-y-4">
            <h3 className="font-serif font-bold text-2xl text-[#171A17] dark:text-[#F0FDF4]">Partner with ACWA to Expand Our Impact</h3>
            <p className="text-sm text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed">
              We welcome donor and NGO partnerships to scale our verified peacebuilding and permaculture initiatives in Kakuma.
            </p>
            <div className="pt-2">
              <Button href="/partner-with-us" variant="orange" size="md">
                <span>Become an Institutional Partner</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
