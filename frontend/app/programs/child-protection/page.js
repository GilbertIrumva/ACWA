import React from 'react';
import Container from '../../../components/ui/Container';
import SectionHeading from '../../../components/ui/SectionHeading';
import Button from '../../../components/ui/Button';
import { HeartHandshake, ShieldCheck, Heart, Users, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Child Protection & Welfare | ACWA Programs',
  description:
    'ACWA Child Protection initiatives: Support for vulnerable children, child rights awareness, psychosocial care, and welfare safeguards.',
};

export default function ChildProtectionProgramPage() {
  const activities = [
    { title: 'Support for Vulnerable Children', desc: 'Direct welfare assistance, food support, clothing, and protection for orphans and vulnerable minors.' },
    { title: 'Child Rights Awareness', desc: 'Workshops engaging parents, elders, teachers, and guardians on child rights, abuse prevention, and safeguarding.' },
    { title: 'Psychosocial Care & Counseling', desc: 'Compassionate mental health and emotional support for traumatized or displaced children.' },
    { title: 'Safe Community Spaces', desc: 'Establishing protected, supportive spaces where children can learn, play, and grow safely.' },
  ];

  return (
    <div className="py-12 space-y-16">
      <section className="bg-[#16A34A] dark:bg-[#064E3B] text-[#F0FDF4] py-16 sm:py-24 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#22C55E] dark:bg-[#042F20] border border-[#A8875A]/40 dark:border-emerald-600/40 text-[#D5EBD9] text-xs font-semibold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-[#A8875A] dark:text-[#D87532]" />
              <span>Program Specification</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Child Protection & Social Welfare
            </h1>
            <p className="text-lg text-[#D5EBD9] leading-relaxed">
              Safeguarding every child’s right to safety, dignity, education, and emotional well-being across Kakuma refugee camps and host communities.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Child Safeguarding"
                title="Protecting the Most Vulnerable in Displaced Settings"
                subtitle="Children in refugee camps face heightened risks of neglect, child labor, and trauma. ACWA places child welfare at the heart of its mission."
              />
              <p className="text-[#4A5550] dark:text-[#D5EBD9]/85 text-base leading-relaxed">
                We work alongside local authorities, schools, and community leaders to create vigilant protection networks that identify vulnerable children early and provide comprehensive care.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#16A34A]/15 dark:border-emerald-700/40">
                <img
                  src="/child protection.jpg"
                  alt="Child protection and welfare initiative"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#D5EBD9] dark:bg-[#064E3B]/80 py-16 transition-colors duration-200">
        <Container>
          <SectionHeading badge="Key Activities" title="Child Protection Pillars" centered={true} className="mb-12" />

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
            <Button href="/donate" variant="orange" size="lg">
              <span>Support Child Welfare Initiatives</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
