'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import {
  ArrowRight,
  Handshake,
  ShieldCheck,
  HeartHandshake,
  Sprout,
  Activity,
  ChevronDown,
  ChevronUp,
  Filter,
  Layers,
  CheckCircle2,
  Users
} from 'lucide-react';

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
  const [selectedProgramSlug, setSelectedProgramSlug] = useState('all');
  const [openAccordionSlugs, setOpenAccordionSlugs] = useState(() =>
    PROGRAMS_DATA.map((p) => p.slug)
  );

  const toggleAccordion = (slug) => {
    setOpenAccordionSlugs((prev) =>
      prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]
    );
  };

  const expandAll = () => {
    setOpenAccordionSlugs(PROGRAMS_DATA.map((p) => p.slug));
  };

  const collapseAll = () => {
    setOpenAccordionSlugs([]);
  };

  const filteredPrograms =
    selectedProgramSlug === 'all'
      ? PROGRAMS_DATA
      : PROGRAMS_DATA.filter((p) => p.slug === selectedProgramSlug);

  return (
    <div className="py-12 sm:py-20 space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/peace-building-and.jpg"
            alt="ACWA community initiatives in Kakuma"
            className="w-full h-full object-cover object-center brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40 z-10" />
        </div>

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-xs font-bold text-[#DCFCE7] uppercase tracking-wider block bg-[#16A34A] px-4 py-1.5 rounded-full w-max border border-[#22C55E]/40 shadow-sm">
              What We Do • ACWA Program Pillars
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
              Community-Led Interventions in Kakuma
            </h1>
            <p className="text-lg text-[#D5EBD9] leading-relaxed">
              Explore each of our five core program pillars using the program dropdown controls below to inspect our key activities, target groups, and impact.
            </p>
          </div>
        </Container>
      </section>

      {/* Program Selector & Dropdown Controls */}
      <section className="pt-4">
        <Container>
          <div className="bg-[#F0FDF4] dark:bg-[#042F20] p-6 sm:p-8 rounded-3xl border border-[#16A34A]/20 dark:border-emerald-800/40 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-[#16A34A] dark:text-[#22C55E]">
                  <Layers className="w-5 h-5" />
                  <span className="text-xs font-extrabold uppercase tracking-wider">Program Navigator</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#171A17] dark:text-white">
                  Select or Browse Program Pillars
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Dropdown Select */}
                <div className="relative min-w-[240px]">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-[#16A34A] dark:text-[#22C55E]">
                    <Filter className="w-4 h-4" />
                  </div>
                  <select
                    value={selectedProgramSlug}
                    onChange={(e) => {
                      setSelectedProgramSlug(e.target.value);
                      if (e.target.value !== 'all' && !openAccordionSlugs.includes(e.target.value)) {
                        setOpenAccordionSlugs((prev) => [...prev, e.target.value]);
                      }
                    }}
                    className="w-full pl-9 pr-8 py-3 bg-white dark:bg-[#064E3B] text-gray-900 dark:text-white text-sm font-semibold rounded-2xl border border-[#16A34A]/30 focus:outline-none focus:ring-2 focus:ring-[#16A34A] shadow-sm appearance-none cursor-pointer"
                    aria-label="Select Program"
                  >
                    <option value="all">View All Programs (5)</option>
                    {PROGRAMS_DATA.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-300">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Expand / Collapse All */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={expandAll}
                    type="button"
                    className="px-3.5 py-2.5 bg-white dark:bg-[#064E3B] text-[#16A34A] dark:text-[#22C55E] hover:bg-[#DCFCE7]/60 dark:hover:bg-emerald-800/60 text-xs font-bold rounded-xl border border-[#16A34A]/20 transition-colors"
                  >
                    Expand All
                  </button>
                  <button
                    onClick={collapseAll}
                    type="button"
                    className="px-3.5 py-2.5 bg-white dark:bg-[#064E3B] text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-emerald-900/60 text-xs font-bold rounded-xl border border-gray-200 dark:border-emerald-800/40 transition-colors"
                  >
                    Collapse All
                  </button>
                </div>
              </div>
            </div>

            {/* Horizontal Navlinks Bar */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-2 border-t border-[#16A34A]/15 dark:border-emerald-800/40">
              <button
                type="button"
                onClick={() => setSelectedProgramSlug('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedProgramSlug === 'all'
                    ? 'bg-[#16A34A] text-white shadow-sm'
                    : 'bg-white dark:bg-[#064E3B] text-black dark:text-white hover:text-[#16A34A] dark:hover:text-[#22C55E] border border-gray-200 dark:border-emerald-800/40'
                }`}
              >
                All Programs (5)
              </button>
              {PROGRAMS_DATA.map((p) => {
                const isSelected = selectedProgramSlug === p.slug;
                return (
                  <button
                    key={p.slug}
                    type="button"
                    onClick={() => {
                      setSelectedProgramSlug(p.slug);
                      if (!openAccordionSlugs.includes(p.slug)) {
                        setOpenAccordionSlugs((prev) => [...prev, p.slug]);
                      }
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap inline-block transition-all ${
                      isSelected
                        ? 'bg-[#16A34A] text-white shadow-sm'
                        : 'bg-white dark:bg-[#064E3B] text-black dark:text-white hover:text-[#16A34A] dark:hover:text-[#22C55E] border border-gray-200 dark:border-emerald-800/40'
                    }`}
                  >
                    <span>{p.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Program Accordion Dropdowns List */}
      <section>
        <Container>
          <div className="space-y-6">
            {filteredPrograms.map((program) => {
              const Icon = program.icon;
              const isOpen = openAccordionSlugs.includes(program.slug);

              return (
                <div
                  key={program.slug}
                  id={program.slug}
                  className={`rounded-3xl border transition-all duration-300 shadow-sm overflow-hidden ${
                    isOpen
                      ? 'bg-[#F0FDF4] dark:bg-[#042F20] border-[#16A34A]/30 dark:border-emerald-700/60 shadow-md'
                      : 'bg-white dark:bg-[#064E3B]/60 border-gray-200 dark:border-emerald-900/60 hover:border-[#16A34A]/40'
                  }`}
                >
                  {/* Dropdown Card Header (Clickable Accordion Bar) */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(program.slug)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between text-left focus:outline-none group transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-4 sm:space-x-6 pr-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#DCFCE7] dark:bg-[#16A34A]/20 flex items-center justify-center text-[#16A34A] dark:text-[#22C55E] shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-3 flex-wrap gap-y-1">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-[#16A34A] dark:text-[#22C55E]">
                            {program.category}
                          </span>
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#16A34A]/10 text-[#16A34A] dark:bg-emerald-800/40 dark:text-[#22C55E]">
                            Program Dropdown
                          </span>
                        </div>
                        <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#171A17] dark:text-[#F0FDF4]">
                          {program.title}
                        </h3>
                        {!isOpen && (
                          <p className="text-sm text-[#4A5550] dark:text-[#D5EBD9]/80 line-clamp-1 hidden sm:block">
                            {program.shortDescription}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 shrink-0">
                      <span className="hidden md:inline-block text-xs font-bold text-[#16A34A] dark:text-[#22C55E] bg-[#DCFCE7] dark:bg-[#16A34A]/20 px-3 py-1.5 rounded-xl">
                        {isOpen ? 'Close Details' : 'View Program'}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#16A34A]/10 dark:bg-emerald-800/40 flex items-center justify-center text-[#16A34A] dark:text-[#22C55E]">
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </div>
                  </button>

                  {/* Dropdown Body Content (Revealed on Open) */}
                  {isOpen && (
                    <div className="px-6 pb-8 sm:px-8 sm:pb-10 pt-2 border-t border-[#16A34A]/15 dark:border-emerald-800/40 transition-all duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                        <div className="lg:col-span-7 space-y-6">
                          <p className="text-base sm:text-lg text-[#4A5550] dark:text-[#D5EBD9] leading-relaxed">
                            {program.shortDescription}
                          </p>

                          {/* Key Activities List */}
                          <div className="space-y-3 bg-white dark:bg-[#064E3B] p-5 sm:p-6 rounded-2xl border border-[#16A34A]/15 dark:border-emerald-700/30">
                            <h4 className="text-xs font-extrabold text-[#16A34A] dark:text-[#22C55E] uppercase tracking-wider flex items-center space-x-2">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Key Program Activities:</span>
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#4A5550] dark:text-[#D5EBD9]">
                              {program.activities.map((act, actIdx) => (
                                <li key={actIdx} className="flex items-start space-x-2">
                                  <span className="w-2 h-2 rounded-full bg-[#16A34A] dark:bg-[#22C55E] mt-1.5 shrink-0" />
                                  <span>{act}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Target Beneficiaries */}
                          <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#16A34A] dark:text-[#22C55E] bg-[#DCFCE7]/60 dark:bg-emerald-900/40 p-4 rounded-xl border border-[#16A34A]/10">
                            <Users className="w-4 h-4 shrink-0 text-[#16A34A]" />
                            <div>
                              <strong className="font-bold text-[#16A34A] dark:text-emerald-300">Target Beneficiaries: </strong>
                              <span>{program.beneficiaries}</span>
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="pt-2 flex items-center space-x-4">
                            <Button href={`/programs/${program.slug}`} variant="primary" size="md">
                              <span>Full {program.title} Page</span>
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>

                        {/* Program Image */}
                        <div className="lg:col-span-5 relative">
                          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#16A34A] shadow-md border border-[#16A34A]/20">
                            <img
                              src={program.image}
                              alt={program.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                              <span className="text-xs font-bold uppercase tracking-wider bg-[#16A34A]/90 px-3 py-1 rounded-lg backdrop-blur-sm">
                                {program.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
