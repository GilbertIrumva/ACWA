import React from 'react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import {
  ShieldCheck,
  Target,
  Eye,
  CheckCircle2,
  Users,
  HeartHandshake,
  Compass,
  ArrowRight,
  Award,
  Sparkles,
  Lock,
  Layers,
  Lightbulb,
} from 'lucide-react';

export const metadata = {
  title: 'About ACWA | Vision, Mission & Core Values',
  description:
    'Learn about ARISE COMMUNITY WELFARE ACCESS (ACWA), a registered CBO in Kenya working with refugees and host communities in Kakuma.',
};

export default function AboutPage() {
  const coreValues = [
    { name: 'Integrity', icon: ShieldCheck, desc: 'Upholding strict ethical standards, honesty, and moral courage in all community dealings.' },
    { name: 'Accountability', icon: Lock, desc: 'Taking full ownership of project outcomes and maintaining responsible stewardship of funds.' },
    { name: 'Transparency', icon: Eye, desc: 'Open communication with beneficiaries, government authorities, and development partners.' },
    { name: 'Teamwork', icon: Users, desc: 'Uniting refugee leaders and host community members into cohesive problem-solving teams.' },
    { name: 'Collaboration', icon: HeartHandshake, desc: 'Partnering with schools, local CBOs, NGOs, and humanitarian agencies for shared impact.' },
    { name: 'Innovation', icon: Lightbulb, desc: 'Adapting sustainable solutions like permaculture and community dialogue in arid conditions.' },
  ];

  const objectives = [
    'Promote peacebuilding and conflict resolution between refugees and host communities.',
    'Support vulnerable children, women, youth, and persons with disabilities.',
    'Improve access to education and community welfare services.',
    'Empower communities through livelihoods, permaculture, and vocational skills development.',
    'Strengthen awareness of health protection, hygiene, and human rights.',
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Editorial Header Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/IMG-20251129-WA0027.jpg"
            alt="ACWA leadership and field team in Kakuma"
            className="w-full h-full object-cover object-center brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 z-10" />
        </div>

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#16A34A] border border-[#22C55E]/40 text-[#F0FDF4] text-xs font-semibold uppercase tracking-wider shadow-lg">
              <Sparkles className="w-4 h-4 text-[#D87532]" />
              <span>About ARISE COMMUNITY WELFARE ACCESS</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Rooted in Community. Driven by Dignity & Self-Reliance.
            </h1>

            <p className="text-lg sm:text-xl text-[#D5EBD9] leading-relaxed max-w-2xl font-normal">
              ACWA is a Community Based Organization established in 2024 and officially registered under the Community Groups Registration Act No. 30 of 2021 in Kenya in 2025 (Reg. No. 30 of 2021). Operating in Kakuma Refugee Camp and host areas of Turkana County.
            </p>
          </div>
        </Container>
      </section>

      {/* Vision & Mission Grid */}
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#16A34A] dark:bg-[#064E3B] text-[#F0FDF4] p-8 sm:p-10 rounded-3xl space-y-4 border border-[#16A34A] dark:border-emerald-700/40 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center shadow-md">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-[#A8875A] dark:text-[#D87532] uppercase tracking-wider block">Our Vision</span>
              <h2 className="font-serif font-bold text-3xl text-[#F0FDF4]">A Self-Reliant & Peaceful Society</h2>
              <p className="text-[#D5EBD9]/80 leading-relaxed text-base">
                To cultivate self-reliant, peaceful, and empowered communities where every individual enjoys dignity, equal access to quality education, sustainable food security, health awareness, and rights protection.
              </p>
            </div>

            <div className="bg-[#D5EBD9] dark:bg-[#064E3B]/90 text-[#171A17] dark:text-[#F0FDF4] p-8 sm:p-10 rounded-3xl space-y-4 border border-[#16A34A]/15 dark:border-emerald-700/40 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center shadow-md">
                <Target className="w-7 h-7 text-[#A8875A]" />
              </div>
              <span className="text-xs font-bold text-[#16A34A] dark:text-[#22C55E] uppercase tracking-wider block">Our Mission</span>
              <h2 className="font-serif font-bold text-3xl text-[#171A17] dark:text-[#F0FDF4]">Community-Led Transformation</h2>
              <p className="text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed text-base">
                To work directly alongside refugees and host communities in Kenya through grassroots peacebuilding, educational support, child welfare safeguards, climate-resilient livelihoods, and health promotion.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#F0FDF4] dark:bg-[#042F20] transition-colors duration-200">
        <Container>
          <SectionHeading
            badge="Our Core Values"
            title="The Guiding Principles Behind Every Action"
            subtitle="Our values dictate how we interact with community members, manage resources, and partner with institutions."
            centered={true}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#D5EBD9] dark:bg-[#064E3B]/90 p-6 sm:p-8 rounded-3xl border border-[#16A34A]/15 dark:border-emerald-700/40 space-y-4 hover:border-[#16A34A] dark:hover:border-emerald-500 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#A8875A]" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#171A17] dark:text-[#F0FDF4]">{value.name}</h3>
                  <p className="text-sm text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Strategic Objectives */}
      <section className="bg-[#16A34A] dark:bg-[#064E3B] text-[#F0FDF4] py-16 sm:py-24 transition-colors duration-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                badge="Strategic Direction"
                title="Our Organizational Objectives"
                subtitle="ACWA operates with clear, targeted objectives designed to build community self-sufficiency and peace."
                light={true}
              />
              <p className="text-sm text-[#D5EBD9]/80 leading-relaxed">
                Registered under the Community Groups Registration Act No. 30 of 2021 in Kenya (2025), ACWA aligns its goals with national development priorities and humanitarian standards.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {objectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="bg-[#22C55E]/60 dark:bg-[#042F20]/70 p-5 rounded-2xl border border-[#F0FDF4]/15 flex items-start space-x-4 hover:bg-[#22C55E] dark:hover:bg-[#042F20] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#A8875A] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-base text-[#F0FDF4] font-medium leading-normal">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* How ACWA Works & Communities Served */}
      <section className="py-10">
        <Container>
          <div className="bg-[#D5EBD9] dark:bg-[#064E3B]/90 p-8 sm:p-12 rounded-3xl border border-[#16A34A]/15 dark:border-emerald-700/40 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#A8875A]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#171A17] dark:text-[#F0FDF4]">How ACWA Works</h3>
              <p className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed">
                We conduct participatory community needs assessments, form local peace & welfare committees, and execute projects directly with community members.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center">
                <Users className="w-5 h-5 text-[#A8875A]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#171A17] dark:text-[#F0FDF4]">Communities Served</h3>
              <p className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed">
                Refugee residents across Kakuma camp zones, Turkana host communities, orphans, youth groups, women-headed households, and persons with disabilities.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-[#A8875A]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#171A17] dark:text-[#F0FDF4]">Partnership Approach</h3>
              <p className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed">
                We welcome collaborative programming, co-funding, and technical exchange with international NGOs, faith groups, and government offices.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button href="/partner-with-us" variant="orange" size="lg">
              <span>Partner With ACWA Today</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
