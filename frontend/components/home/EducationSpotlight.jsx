import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { GraduationCap, BookOpen, UserCheck, Library, ArrowRight } from 'lucide-react';

export default function EducationSpotlight() {
  const initiatives = [
    {
      icon: BookOpen,
      title: 'School Support & Supplies',
      desc: 'Distributing essential learning materials, uniforms, and books to vulnerable children.',
    },
    {
      icon: GraduationCap,
      title: 'Remedial Classes',
      desc: 'Offering tailored tutoring for students falling behind due to language barriers.',
    },
    {
      icon: UserCheck,
      title: 'Adult English Literacy',
      desc: 'Providing practical English courses for adult refugees to enhance employment.',
    },
    {
      icon: Library,
      title: 'Community Learning Spaces',
      desc: 'Establishing safe, quiet spaces equipped with educational resources.',
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 my-6">
      {/* Background Image Behind Fonts */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Educational Support Distribution.jpg"
          alt="Educational Support Distribution by ACWA in Kakuma"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/45 z-10" />
      </div>

      <Container className="relative z-20">
        <div className="max-w-3xl space-y-6 text-white">
          {/* Badge Tag */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#16A34A] text-[#F0FDF4] text-xs font-semibold uppercase tracking-wider border border-[#22C55E]/40 shadow-md">
            <GraduationCap className="w-4 h-4 text-white" />
            <span>Program Spotlight • Education</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Unlocking Potential Through Inclusive Education & Literacy
          </h2>

          <p className="text-base sm:text-lg text-[#D5EBD9] leading-relaxed font-normal">
            Education is the single most powerful foundation for self-reliance. ACWA ensures that children and adults alike gain access to quality learning opportunities regardless of refugee or host status.
          </p>

          {/* Initiatives Grid Over Image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {initiatives.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-[#22C55E] text-[#F0FDF4] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-white">{item.title}</h3>
                  <p className="text-xs text-[#D5EBD9] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <Button href="/programs/education" variant="secondary" size="md" className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20">
              <span>Explore Education Initiatives</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
