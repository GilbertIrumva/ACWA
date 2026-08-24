import React from 'react';
import Container from '../../../components/ui/Container';
import SectionHeading from '../../../components/ui/SectionHeading';
import Button from '../../../components/ui/Button';
import { Handshake, MessageSquare, Users, Shield, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Peacebuilding & Dialogue | ACWA Programs',
  description:
    'ACWA Peacebuilding initiatives: Community peace dialogues, conflict resolution training, peace awareness, and youth engagement in Kakuma.',
};

export default function PeacebuildingProgramPage() {
  const activities = [
    { title: 'Community Peace Dialogues', desc: 'Facilitating regular structured forums between refugee elders and Turkana host community leaders.' },
    { title: 'Conflict Resolution Training', desc: 'Equipping grassroots leaders with non-violent communication, negotiation, and dispute mediation skills.' },
    { title: 'Peace Awareness Campaigns', desc: 'Organizing peace marches, cultural festivals, and community sports events promoting unity.' },
    { title: 'Youth Engagement for Peace', desc: 'Mobilizing youth peace ambassadors to prevent inter-ethnic friction and promote collaboration.' },
  ];

  return (
    <div className="py-12 space-y-16">
      <section className="bg-[#16A34A] dark:bg-[#064E3B] text-[#F0FDF4] py-16 sm:py-24 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#22C55E] dark:bg-[#042F20] border border-[#A8875A]/40 dark:border-emerald-600/40 text-[#D5EBD9] text-xs font-semibold uppercase tracking-wider">
              <Handshake className="w-4 h-4 text-[#A8875A] dark:text-[#D87532]" />
              <span>Program Specification</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Peacebuilding & Grassroots Dialogue
            </h1>
            <p className="text-lg text-[#D5EBD9] leading-relaxed">
              Fostering social cohesion, mutual respect, and peaceful co-existence between refugee populations and host communities in Kakuma, Turkana County, Kenya.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Program Approach"
                title="Building Lasting Bridges Across Diverse Communities"
                subtitle="Peace is the foundational prerequisite for all development. ACWA creates safe, structured spaces for ongoing dialogue."
              />
              <p className="text-[#4A5550] dark:text-[#D5EBD9]/85 text-base leading-relaxed">
                Kakuma is home to over 200,000 refugees from multiple countries alongside the host Turkana community. ACWA’s peacebuilding program addresses root causes of tension, including natural resource access and cultural misunderstandings.
              </p>

              <div className="p-6 rounded-2xl bg-[#D5EBD9] dark:bg-[#064E3B]/90 border border-[#16A34A]/15 dark:border-emerald-700/40 space-y-2">
                <span className="text-xs font-bold text-[#A8875A] dark:text-[#D87532] uppercase tracking-wider block">Target Beneficiaries</span>
                <p className="text-sm font-medium text-[#16A34A] dark:text-[#22C55E]">
                  Refugee leaders, village elders, youth groups, women peace committees, and local administration.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#16A34A]/15 dark:border-emerald-700/40">
                <img
                  src="/peace-building-and.jpg"
                  alt="Community peace dialogue"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#D5EBD9] dark:bg-[#064E3B]/80 py-16 transition-colors duration-200">
        <Container>
          <SectionHeading badge="Key Activities" title="Core Components of Our Peacebuilding Work" centered={true} className="mb-12" />

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
              <span>Partner on Peacebuilding Initiatives</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
