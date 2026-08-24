import React from 'react';
import Link from 'next/link';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import { ArrowRight, Handshake, ShieldCheck, HeartHandshake, Sprout, Activity } from 'lucide-react';

export const metadata = {
  title: 'Our Programs | ACWA Kenya',
  description:
    'Explore ACWA program areas in Peacebuilding, Education Support, Child Protection, Livelihoods, and Community Health in Kakuma.',
};

const PROGRAMS_DATA = [
  {
    slug: 'peacebuilding',
    title: 'Peacebuilding & Dialogue',
    category: 'Social Cohesion',
    icon: Handshake,
    shortDescription:
      'Grassroots peace dialogues, conflict resolution training, youth ambassadors, and joint refugee-host forums.',
    activities: [
      'Community peace dialogues in Kakuma camp zones & host villages',
      'Conflict resolution & mediation training for elders and leaders',
      'Peace awareness campaigns during cultural & sporting events',
      'Youth engagement for peace and social cohesion',
    ],
    beneficiaries: 'Refugee elders, host community leaders, youth groups',
    image: '/peace-building-and.jpg',
  },
  {
    slug: 'education',
    title: 'Education Support',
    category: 'Literacy & Learning',
    icon: ShieldCheck,
    shortDescription:
      'School support for vulnerable children, remedial tutoring, learning kits distribution, and adult English literacy.',
    activities: [
      'School support and scholastic kits for vulnerable children',
      'Remedial classes for struggling primary & secondary students',
      'Functional English courses for adult refugees',
      'Distribution of books and learning materials',
    ],
    beneficiaries: 'School children, out-of-school youth, adult refugees',
    image: '/education.jpg',
  },
  {
    slug: 'child-protection',
    title: 'Child Protection & Welfare',
    category: 'Child Safeguarding',
    icon: HeartHandshake,
    shortDescription:
      'Support for vulnerable orphans, child rights awareness campaigns, psychosocial care, and safe community spaces.',
    activities: [
      'Support & welfare assistance for orphans and vulnerable children',
      'Child rights awareness workshops with community leaders',
      'Psychosocial support & counseling sessions',
      'Creation of safe, protective child environments',
    ],
    beneficiaries: 'Vulnerable children, orphans, child-headed households',
    image: '/child-protection.jpg',
  },
  {
    slug: 'livelihoods',
    title: 'Livelihoods & Permaculture',
    category: 'Self-Reliance',
    icon: Sprout,
    shortDescription:
      'Permaculture farming, poultry management, vocational craft training, and small business support for self-reliance.',
    activities: [
      'Permaculture project: water-efficient crop farming & soil regeneration',
      'Vocational skills training & craft production',
      'Small business mentorship and bookkeeping training',
      'Poultry farming & micro-livestock initiatives',
    ],
    beneficiaries: 'Women groups, youth entrepreneurs, refugee households',
    image: '/livelihood.jpg',
  },
  {
    slug: 'community-health',
    title: 'Community Health & Awareness',
    category: 'Health & Sanitation',
    icon: Activity,
    shortDescription:
      'Hygiene campaigns, mental health psychosocial support, nutrition education, and disease prevention awareness.',
    activities: [
      'Hygiene and sanitation campaigns across camp zones',
      'Mental health and psychosocial support (MHPSS) workshops',
      'Nutrition guidance for pregnant women and mothers',
      'Preventive health education & clean water awareness',
    ],
    beneficiaries: 'Women, mothers, vulnerable families across Kakuma',
    image: '/Impact.jpg',
  },
];

export default function ProgramsHubPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      <section className="relative overflow-hidden py-20 sm:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/peace-building-and.jpg"
            alt="ACWA community initiatives in Kakuma"
            className="w-full h-full object-cover object-center brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 z-10" />
        </div>

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-xs font-bold text-[#D87532] uppercase tracking-wider block bg-[#16A34A] px-3.5 py-1.5 rounded-full w-max border border-[#22C55E]/40">
              ACWA Program Pillars
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
              Community-Led Interventions in Kakuma
            </h1>
            <p className="text-lg text-[#D5EBD9] leading-relaxed">
              We design and deliver five integrated program areas to address immediate humanitarian vulnerabilities and foster long-term community self-reliance.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="space-y-16">
            {PROGRAMS_DATA.map((program, idx) => {
              const Icon = program.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={program.slug}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-10 rounded-3xl bg-[#F0FDF4] dark:bg-[#064E3B]/90 border border-[#16A34A]/15 dark:border-emerald-700/40 shadow-md transition-colors duration-200`}
                >
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="flex items-center space-x-2 text-[#A8875A] dark:text-[#D87532]">
                      <Icon className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-wider">{program.category}</span>
                    </div>

                    <h2 className="font-serif font-bold text-3xl text-[#171A17] dark:text-[#F0FDF4]">{program.title}</h2>
                    <p className="text-base text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed">{program.shortDescription}</p>

                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold text-[#16A34A] dark:text-[#22C55E] uppercase tracking-wider">Key Activities:</h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#4A5550] dark:text-[#D5EBD9]/85">
                        {program.activities.map((act, actIdx) => (
                          <li key={actIdx} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D87532]" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button href={`/programs/${program.slug}`} variant="primary">
                        <span>Explore {program.title}</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>

                  <div className={`lg:col-span-6 relative ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#16A34A]">
                      <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#16A34A]/70 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
