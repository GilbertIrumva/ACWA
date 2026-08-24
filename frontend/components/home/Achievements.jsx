import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { Handshake, GraduationCap, Users, Sprout, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  const verifiedAchievements = [
    {
      icon: Handshake,
      title: 'Community Peace Dialogues',
      desc: 'Organized structured peace forums and conflict awareness sessions bringing together refugee elders and host community leaders in Kakuma.',
      badge: 'Social Harmony',
    },
    {
      icon: GraduationCap,
      title: 'Educational Assistance',
      desc: 'Provided scholastic support, learning tools, and remedial tutoring for vulnerable refugee and host children in local primary schools.',
      badge: 'Literacy & Access',
    },
    {
      icon: Users,
      title: 'Youth & Women Mobilization',
      desc: 'Mobilized community savings groups, women welfare networks, and youth sports/peace initiatives for active development participation.',
      badge: 'Community Welfare',
    },
    {
      icon: Sprout,
      title: 'Permaculture & Food Security',
      desc: 'Established demonstration permaculture garden plots utilizing dryland farming techniques for household nutrition and environmental stewardship.',
      badge: 'Sustainability',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#D5EBD9] dark:bg-[#064E3B]/80 border-y border-[#16A34A]/10 dark:border-emerald-800/30 transition-colors duration-200">
      <Container>
        <div className="max-w-3xl mb-16">
          <SectionHeading
            badge="Verified Milestones"
            title="Real Progress Built on Authentic Local Effort"
            subtitle="ACWA documents and publishes verified achievements directly through Sanity CMS, presenting honest community progress without exaggeration."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {verifiedAchievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F0FDF4] dark:bg-[#042F20] p-8 rounded-3xl border border-[#16A34A]/15 dark:border-emerald-700/40 shadow-sm space-y-4 hover:border-[#16A34A] dark:hover:border-emerald-500 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#16A34A]/10 dark:bg-[#22C55E]/20 text-[#16A34A] dark:text-[#22C55E] text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>{item.badge}</span>
                  </span>
                </div>

                <h3 className="font-serif font-bold text-2xl text-[#171A17] dark:text-[#F0FDF4]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
