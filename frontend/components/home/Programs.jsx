import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { ArrowRight, Handshake, ShieldCheck, HeartHandshake, Sprout, Activity } from 'lucide-react';

export default function Programs() {
  const programsList = [
    {
      id: 'peacebuilding',
      slug: 'peacebuilding',
      title: 'Peacebuilding & Dialogue',
      badge: 'Social Cohesion',
      icon: Handshake,
      description:
        'Facilitating grassroots community peace dialogues, conflict resolution training, peace awareness, and structured youth engagement between refugee and host communities.',
      image: '/peace building and .jpg',
      href: '/programs/peacebuilding',
    },
    {
      id: 'education',
      slug: 'education',
      title: 'Education Support',
      badge: 'Youth & Literacy',
      icon: ShieldCheck,
      description:
        'Providing school support for vulnerable children, remedial classes, learning materials distribution, and functional English courses for adults.',
      image: '/education.jpg',
      href: '/programs/education',
    },
    {
      id: 'child-protection',
      slug: 'child-protection',
      title: 'Child Protection & Welfare',
      badge: 'Child Welfare',
      icon: HeartHandshake,
      description:
        'Safeguarding children through rights awareness campaigns, targeted support for vulnerable orphans, psychosocial care, and child-safe community spaces.',
      image: '/child protection.jpg',
      href: '/programs/child-protection',
    },
    {
      id: 'livelihoods',
      slug: 'livelihoods',
      title: 'Livelihood Empowerment',
      badge: 'Self-Reliance',
      icon: Sprout,
      description:
        'Building sustainable self-reliance through vocational training, permaculture farming, poultry rearing, and small business support for women & youth.',
      image: '/livelihood.jpg',
      href: '/programs/livelihoods',
    },
    {
      id: 'community-health',
      slug: 'community-health',
      title: 'Community Health & Awareness',
      badge: 'Health & Hygiene',
      icon: Activity,
      description:
        'Conducting sanitation campaigns, mental health support sessions, nutrition guidance, and preventive health awareness across Kakuma camps.',
      image: '/Impact.jpg',
      href: '/programs/community-health',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F0FDF4] dark:bg-[#042F20] transition-colors duration-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="Core Program Pillars"
            title="Holistic Interventions for Long-Term Self-Reliance"
            subtitle="We implement multi-faceted community programs designed to tackle immediate vulnerability while building enduring capacity."
          />
          <div className="shrink-0">
            <Button href="/programs" variant="outline">
              View All Program Specs
            </Button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsList.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="group bg-[#D5EBD9] dark:bg-[#064E3B]/90 rounded-3xl overflow-hidden border border-[#16A34A]/15 dark:border-emerald-700/40 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#16A34A]">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16A34A]/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-[#F0FDF4]/90 dark:bg-[#042F20]/90 backdrop-blur-sm text-[#16A34A] dark:text-[#22C55E] text-xs font-semibold px-3 py-1 rounded-full border border-[#16A34A]/10">
                      {program.badge}
                    </span>
                  </div>

                  {/* Content body */}
                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex items-center space-x-2 text-[#A8875A] dark:text-[#D87532]">
                      <Icon className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-wider">ACWA Program</span>
                    </div>

                    <h3 className="font-serif font-bold text-2xl text-[#171A17] dark:text-[#F0FDF4] group-hover:text-[#16A34A] dark:group-hover:text-[#22C55E] transition-colors">
                      {program.title}
                    </h3>

                    <p className="text-sm text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Footer link */}
                <div className="px-6 pb-6 pt-2 sm:px-8 sm:pb-8">
                  <Link
                    href={program.href}
                    className="inline-flex items-center text-sm font-semibold text-[#16A34A] dark:text-[#22C55E] group-hover:text-[#D87532] transition-colors"
                  >
                    <span>Read Full Program Details</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
