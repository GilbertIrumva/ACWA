import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { Users, Handshake, HeartHandshake, Compass } from 'lucide-react';

export default function Intro() {
  const pillars = [
    {
      icon: Users,
      title: 'Community-Driven Leadership',
      description:
        'We design and execute programs directly alongside village elders, women leaders, youth representatives, and refugee community advocates.',
    },
    {
      icon: Handshake,
      title: 'Cross-Community Collaboration',
      description:
        'Building enduring bridges of trust, social cohesion, and joint economic activities between refugee populations and host communities in Turkana.',
    },
    {
      icon: HeartHandshake,
      title: 'Dignity & Welfare First',
      description:
        'Ensuring child protection, food security, and skills development are delivered with total respect for human dignity and culture.',
    },
    {
      icon: Compass,
      title: 'Sustainable Pathways',
      description:
        'Focusing on long-term self-reliance through permaculture, vocational education, and grassroots conflict resolution mechanisms.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#D5EBD9] dark:bg-[#064E3B]/80 border-y border-[#16A34A]/10 dark:border-emerald-800/30 transition-colors duration-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Summary */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              badge="About Our Approach"
              title="Community-led action. Sustainable change."
              subtitle="ACWA is built on the conviction that lasting transformation comes from within communities when local voices are empowered and supported."
            />
            
            <p className="text-[#4A5550] dark:text-[#D5EBD9]/90 text-base leading-relaxed">
              Established in 2024 and officially registered under Kenya’s Community Groups Registration Act No. 30 of 2021 in 2025, ARISE COMMUNITY WELFARE ACCESS (ACWA) mobilizes grassroots resources and international partnerships to address vulnerable conditions in Kakuma Refugee Camp and host areas.
            </p>

            <div className="p-5 rounded-2xl bg-[#F0FDF4] dark:bg-[#042F20] border border-[#16A34A]/15 dark:border-emerald-700/40 space-y-2">
              <span className="text-xs font-bold text-[#A8875A] dark:text-[#D87532] uppercase tracking-wider block">
                Who We Collaborate With
              </span>
              <p className="text-sm font-medium text-[#16A34A] dark:text-[#22C55E]">
                Local Leaders • Primary & Secondary Schools • Youth Organizations • Women’s Savings Groups • Humanitarian Agencies
              </p>
            </div>
          </div>

          {/* Right Column: 4 Principle Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F0FDF4] dark:bg-[#042F20] p-6 rounded-3xl border border-[#16A34A]/10 dark:border-emerald-700/30 shadow-sm hover:shadow-md transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#D5EBD9]" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-[#171A17] dark:text-[#F0FDF4]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4A5550] dark:text-[#D5EBD9]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
