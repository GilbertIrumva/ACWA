import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
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
      image: '/Peace Dialogue & Reconciliation.jpg',
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
      image: '/Educational Support Distribution.jpg',
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
      image: '/child-protection.jpg',
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
    <section className="py-20 md:py-28 bg-[#F9FAFB] dark:bg-[#042F20] transition-colors duration-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="WHAT WE DO"
            title="Holistic Interventions for Long-Term Self-Reliance"
            subtitle="We implement multi-faceted community programs designed to tackle immediate vulnerability while building enduring capacity."
          />
          <div className="shrink-0">
            <Link
              href="/programs"
              className="inline-flex items-center px-6 py-3 border-2 border-[#2E7D32] text-[#2E7D32] dark:text-[#4CAF50] dark:border-[#4CAF50] font-bold text-sm hover:bg-[#2E7D32] hover:text-white transition-colors"
            >
              <span>View All Programs</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Programs Grid with SIR Africa Card Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsList.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="group bg-white dark:bg-[#064E3B]/40 rounded-none border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-[#1B5E20] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      {program.badge}
                    </span>
                  </div>

                  {/* Content body */}
                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex items-center space-x-2 text-[#2E7D32] dark:text-[#4CAF50]">
                      <Icon className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50]" />
                      <span className="text-xs font-bold uppercase tracking-widest">ACWA Initiative</span>
                    </div>

                    <h3 className="font-serif font-bold text-2xl text-gray-900 dark:text-white group-hover:text-[#2E7D32] dark:group-hover:text-[#4CAF50] transition-colors">
                      {program.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Footer link */}
                <div className="px-6 pb-6 pt-2 sm:px-8 sm:pb-8">
                  <Link
                    href={program.href}
                    className="inline-flex items-center text-sm font-bold text-[#2E7D32] dark:text-[#4CAF50] hover:text-[#1B5E20] transition-colors"
                  >
                    <span>Read Program Details</span>
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
