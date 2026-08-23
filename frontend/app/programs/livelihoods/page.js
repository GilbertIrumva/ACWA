import React from 'react';
import Container from '../../../components/ui/Container';
import SectionHeading from '../../../components/ui/SectionHeading';
import Button from '../../../components/ui/Button';
import { Sprout, Briefcase, Award, Wheat, Store, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Livelihoods & Permaculture | ACWA Programs',
  description:
    'ACWA Livelihood initiatives: Vocational skills training, small business support, permaculture farming, poultry, and business training in Kakuma.',
};

export default function LivelihoodsProgramPage() {
  const activities = [
    { title: 'Permaculture & Dryland Farming', desc: 'Water-efficient food gardening, soil regeneration, and organic farming techniques adapted for Turkana’s arid climate.' },
    { title: 'Vocational Skills & Crafts', desc: 'Tailoring, weaving, carpentry, and handcraft training for youth and women seeking self-employment.' },
    { title: 'Poultry & Micro-Livestock', desc: 'Poultry management workshops, egg production, and small livestock distribution for household income.' },
    { title: 'Small Business & Financial Literacy', desc: 'Micro-business management, basic bookkeeping, savings group formation, and market linkage support.' },
  ];

  return (
    <div className="py-12 space-y-16">
      <section className="bg-[#16A34A] dark:bg-[#064E3B] text-[#F0FDF4] py-16 sm:py-24 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#22C55E] dark:bg-[#042F20] border border-[#A8875A]/40 dark:border-emerald-600/40 text-[#D5EBD9] text-xs font-semibold uppercase tracking-wider">
              <Sprout className="w-4 h-4 text-[#A8875A] dark:text-[#D87532]" />
              <span>Program Specification</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Livelihoods, Permaculture & Self-Reliance
            </h1>
            <p className="text-lg text-[#D5EBD9] leading-relaxed">
              Equipping community members with sustainable agricultural, vocational, and business skills to achieve economic independence.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Featured Achievement"
                title="The ACWA Permaculture Project"
                subtitle="Highland and dryland ecological design converting arid Kakuma soil into productive, green food forests."
              />
              <p className="text-[#4A5550] dark:text-[#D5EBD9]/85 text-base leading-relaxed">
                The ACWA Permaculture Project is one of our proudest verified achievements. By capturing rainwater and using organic composting, community gardens now yield fresh vegetables, improving nutrition and household savings.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#16A34A]/15 dark:border-emerald-700/40">
                <img
                  src="/livelihood.jpg"
                  alt="Permaculture farm in Kakuma supported by ACWA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#D5EBD9] dark:bg-[#064E3B]/80 py-16 transition-colors duration-200">
        <Container>
          <SectionHeading badge="Key Activities" title="Livelihood & Economic Support Pillars" centered={true} className="mb-12" />

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
            <Button href="/partner-with-us" variant="orange" size="lg">
              <span>Support Livelihood Projects</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
