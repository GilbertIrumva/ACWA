import React from 'react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import DonationForm from '../../components/donations/DonationForm';
import { Heart, ShieldCheck, CheckCircle2, Lock, Sparkles, BookOpen, Sprout, Peace } from 'lucide-react';

export const metadata = {
  title: 'Donate to ACWA | Support Community Welfare in Kakuma',
  description:
    'Support ARISE COMMUNITY WELFARE ACCESS (ACWA). Direct contributions power peacebuilding, education, child welfare, and permaculture in Kakuma, Kenya.',
};

export default function DonatePage() {
  const impactTiers = [
    { amount: '$15', desc: 'Provides a complete scholastic kit (uniform, books, stationery) for a vulnerable child.' },
    { amount: '$30', desc: 'Funds seeds, tools, and water-harvesting supplies for a household permaculture plot.' },
    { amount: '$60', desc: 'Sponsors a community peace dialogue session for refugee and host leaders.' },
    { amount: '$120', desc: 'Provides remedial tutoring and English literacy supplies for a full month.' },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-16">
      <section className="relative overflow-hidden py-20 sm:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/IMG_20260223_081540_318.jpg"
            alt="Educational support distribution in Kakuma"
            className="w-full h-full object-cover object-center brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 z-10" />
        </div>

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#16A34A] border border-[#22C55E]/40 text-[#D5EBD9] text-xs font-semibold uppercase tracking-wider shadow-lg">
              <Heart className="w-4 h-4 text-[#DCFCE7] fill-[#DCFCE7]" />
              <span>Direct Community Impact</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Invest in Peace & Self-Reliance
            </h1>

            <p className="text-lg text-[#D5EBD9] leading-relaxed max-w-2xl">
              Your financial support goes directly into field operations in Kakuma Refugee Camp and Turkana host communities.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Donation Form */}
            <div className="lg:col-span-7">
              <DonationForm />
            </div>

            {/* Right Column: Impact Transparency */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#D5EBD9] dark:bg-[#064E3B]/90 p-8 rounded-3xl border border-[#16A34A]/15 dark:border-emerald-700/40 space-y-6">
                <h3 className="font-serif font-bold text-2xl text-[#171A17] dark:text-[#F0FDF4]">What Your Support Accomplishes</h3>

                <div className="space-y-4">
                  {impactTiers.map((tier, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#F0FDF4] dark:bg-[#042F20] border border-[#16A34A]/10 dark:border-emerald-700/30 flex items-start space-x-3">
                      <div className="px-3 py-1 bg-[#16A34A] text-[#F0FDF4] rounded-lg font-bold text-sm shrink-0 mt-0.5">
                        {tier.amount}
                      </div>
                      <p className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/85 leading-normal">{tier.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-6 rounded-3xl bg-[#F0FDF4] dark:bg-[#042F20] border border-[#16A34A]/15 dark:border-emerald-700/40 space-y-3 text-xs text-[#4A5550] dark:text-[#D5EBD9]/85">
                <div className="flex items-center space-x-2 text-[#16A34A] dark:text-[#22C55E] font-semibold text-sm">
                  <ShieldCheck className="w-5 h-5 text-[#22C55E] dark:text-[#22C55E]" />
                  <span>Financial Accountability Guarantee</span>
                </div>
                <p className="leading-relaxed">
                  ACWA is a registered CBO in Kenya (Reg. No. DSD/23/124/02/152725). All donations are processed through secure server-side adapters and audited for direct field allocation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
