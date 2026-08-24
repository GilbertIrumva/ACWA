import React from 'react';
import Container from '../ui/Container';
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
    <section className="py-20 md:py-28 bg-white dark:bg-[#042F20] transition-colors duration-200">
      <Container>
        {/* SIR Africa Style Centered Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <span className="text-[#2E7D32] dark:text-[#4CAF50] font-bold text-xs uppercase tracking-[3px] block">
            WHY ACWA? WHY NOW?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            We are a refugee and host community organization creating pathways for displaced people to learn, earn, and lead change.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto pt-2">
            Through education, digital inclusion, livelihoods, peacebuilding, child protection, and community welfare, we help refugees and host communities build sustainable futures with dignity and hope.
          </p>
        </div>

        {/* 4 Pillar Cards with SIR Africa Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F9FAFB] dark:bg-[#064E3B]/40 p-8 rounded-none border-t-4 border-[#2E7D32] shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-none bg-[#2E7D32] text-white flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
