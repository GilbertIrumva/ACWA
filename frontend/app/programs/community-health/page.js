import React from 'react';
import Container from '../../../components/ui/Container';
import SectionHeading from '../../../components/ui/SectionHeading';
import Button from '../../../components/ui/Button';
import { Activity, Heart, ShieldCheck, Smile, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Community Health & Awareness | ACWA Programs',
  description:
    'ACWA Community Health initiatives: Hygiene and sanitation campaigns, mental health support, nutrition education, and health education in Kakuma.',
};

export default function CommunityHealthProgramPage() {
  const activities = [
    { title: 'Hygiene & Sanitation Campaigns', desc: 'Community wash station setups, soap distribution, clean water awareness, and sanitation drives across camp blocks.' },
    { title: 'Mental Health & Psychosocial Support', desc: 'Support groups, trauma-informed listening sessions, and community mental health resilience workshops.' },
    { title: 'Nutrition & Maternal Health Education', desc: 'Guidance on infant feeding, maternal nutrition, and dietary diversity using permaculture harvest.' },
    { title: 'Preventive Health Awareness', desc: 'Educational sessions on malaria prevention, communicable disease control, and personal wellness.' },
  ];

  return (
    <div className="py-12 space-y-16">
      <section className="bg-[#16A34A] dark:bg-[#064E3B] text-[#F0FDF4] py-16 sm:py-24 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#22C55E] dark:bg-[#042F20] border border-[#22C55E]/40 dark:border-emerald-600/40 text-[#D5EBD9] text-xs font-semibold uppercase tracking-wider">
              <Activity className="w-4 h-4 text-[#22C55E] dark:text-[#22C55E]" />
              <span>Program Specification</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Community Health, Hygiene & Wellness
            </h1>
            <p className="text-lg text-[#D5EBD9] leading-relaxed">
              Promoting disease prevention, mental health resilience, clean sanitation, and nutrition across refugee and host communities.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Preventive Care"
                title="Building Resilient Health Infrastructure at Grassroots Level"
                subtitle="In densely populated refugee camps, health education and hygiene prevention save lives every single day."
              />
              <p className="text-[#4A5550] dark:text-[#D5EBD9]/85 text-base leading-relaxed">
                ACWA trains volunteer community health promoters who visit households, host hygiene workshops, and provide essential psychosocial support for families coping with displacement trauma.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#16A34A]/15 dark:border-emerald-700/40">
                <img
                  src="/IMG_20251022_132118_086.jpg"
                  alt="Community health and hygiene campaign"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#D5EBD9] dark:bg-[#064E3B]/80 py-16 transition-colors duration-200">
        <Container>
          <SectionHeading badge="Key Activities" title="Health Program Interventions" centered={true} className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((act, idx) => (
              <div key={idx} className="bg-[#F0FDF4] dark:bg-[#042F20] p-8 rounded-3xl border border-[#16A34A]/15 dark:border-emerald-700/40 space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#171A17] dark:text-[#F0FDF4]">{act.title}</h3>
                <p className="text-sm text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/partner-with-us" variant="primary" size="lg">
              <span>Partner on Health Campaigns</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
