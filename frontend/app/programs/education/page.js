import React from 'react';
import Container from '../../../components/ui/Container';
import SectionHeading from '../../../components/ui/SectionHeading';
import Button from '../../../components/ui/Button';
import { GraduationCap, BookOpen, UserCheck, Library, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Education Support | ACWA Programs',
  description:
    'ACWA Education program: School support, remedial tutoring, learning materials, and adult English literacy in Kakuma.',
};

export default function EducationProgramPage() {
  const activities = [
    { title: 'School Support & Supplies', desc: 'Providing uniforms, textbooks, exercise books, and stationery to vulnerable children in primary and secondary schools.' },
    { title: 'Remedial Classes', desc: 'Targeted academic support for displaced students needing help catching up with the national curriculum.' },
    { title: 'Adult English Literacy Courses', desc: 'Practical functional English classes helping adult refugees integrate, communicate, and access livelihood opportunities.' },
    { title: 'Learning Materials Distribution', desc: 'Equipping community study hubs with reference books and learning tools.' },
  ];

  return (
    <div className="py-12 space-y-16">
      <section className="bg-[#16A34A] dark:bg-[#064E3B] text-[#F0FDF4] py-16 sm:py-24 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#22C55E] dark:bg-[#042F20] border border-[#A8875A]/40 dark:border-emerald-600/40 text-[#D5EBD9] text-xs font-semibold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-[#A8875A] dark:text-[#D87532]" />
              <span>Program Specification</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Education Support & Literacy
            </h1>
            <p className="text-lg text-[#D5EBD9] leading-relaxed">
              Empowering children and adults through accessible, quality educational support and community literacy programs in Kakuma.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Program Impact"
                title="Removing Barriers to Learning for Vulnerable Children"
                subtitle="Education transforms lives. ACWA works directly with local schools and families to keep children enrolled and learning."
              />
              <p className="text-[#4A5550] dark:text-[#D5EBD9]/85 text-base leading-relaxed">
                Many refugee and host children face severe learning disruptions due to poverty, lack of school fees, and language barriers. Our educational support provides holistic academic backing from primary through adult literacy.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#16A34A]/15 dark:border-emerald-700/40">
                <img
                  src="/education.jpg"
                  alt="Children learning in school supported by ACWA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#D5EBD9] dark:bg-[#064E3B]/80 py-16 transition-colors duration-200">
        <Container>
          <SectionHeading badge="Key Activities" title="Education Interventions" centered={true} className="mb-12" />

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
              <span>Sponsor a Child&apos;s Education</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
