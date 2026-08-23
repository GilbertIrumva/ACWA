import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { ShieldCheck, Heart, Sparkles, Accessibility, Users, Sun } from 'lucide-react';

export default function TargetGroups() {
  const groups = [
    {
      icon: Users,
      title: 'Refugees & Host Communities',
      description:
        'Fostering shared social and economic initiatives between refugee camp residents and Turkana host communities.',
      tag: 'Social Cohesion',
    },
    {
      icon: Heart,
      title: 'Vulnerable Children',
      description:
        'Protecting orphans, displaced children, and out-of-school youth through welfare and educational support.',
      tag: 'Child Protection',
    },
    {
      icon: Sun,
      title: 'Women & Girls',
      description:
        'Advancing financial literacy, livelihood independence, health awareness, and leadership opportunities.',
      tag: 'Empowerment',
    },
    {
      icon: Sparkles,
      title: 'Youth Groups',
      description:
        'Channeling youth potential through peacebuilding ambassadors, vocational training, and athletic forums.',
      tag: 'Future Leaders',
    },
    {
      icon: Accessibility,
      title: 'Persons with Disabilities',
      description:
        'Ensuring equal access to community programs, assistive resources, and inclusive social protection.',
      tag: 'Inclusive Welfare',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F0FDF4] dark:bg-[#042F20] transition-colors duration-200">
      <Container>
        <SectionHeading
          badge="Who We Serve"
          title="Centering Human Dignity across Kakuma & Beyond"
          subtitle="Every ACWA initiative is designed alongside the communities we serve, honoring local culture, resilience, and potential."
          centered={true}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#D5EBD9] dark:bg-[#064E3B]/90 p-8 rounded-3xl border border-[#16A34A]/15 dark:border-emerald-700/40 hover:border-[#16A34A] dark:hover:border-emerald-500 transition-all space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#A8875A]" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#16A34A] dark:text-[#22C55E] bg-[#16A34A]/10 dark:bg-[#22C55E]/20 px-3 py-1 rounded-full border border-[#16A34A]/15 dark:border-emerald-600/30">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-[#171A17] dark:text-[#F0FDF4]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#16A34A]/10 dark:border-emerald-800/40 flex items-center space-x-2 text-xs text-[#16A34A] dark:text-[#22C55E] font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#A8875A] dark:text-[#D87532]" />
                  <span>Dignified & Inclusive Action</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
