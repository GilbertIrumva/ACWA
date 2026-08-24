import React from 'react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import Link from 'next/link';
import {
  ShieldCheck,
  Target,
  Eye,
  CheckCircle2,
  Users,
  HeartHandshake,
  Compass,
  ArrowRight,
  Lock,
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

  const aboutPhotos = [
    { src: '/IMG-20251129-WA0027.jpg', title: 'ACWA Executive Committee & Field Team', caption: 'Grassroots leaders and community organizers in Kakuma Camp.' },
    { src: '/IMG_20260113_180100_323.jpg', title: 'Peace Dialogue & Reconciliation', caption: 'Fostering inter-community harmony between host villages and refugee camp zones.' },
    { src: '/IMG_20260223_081540_318.jpg', title: 'Educational Support Distribution', caption: 'Direct distribution of learning materials and scholastic packages to vulnerable children.' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Editorial Header Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden py-20 sm:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/IMG-20251129-WA0027.jpg"
            alt="ACWA leadership and field team in Kakuma"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/65 z-10" />
        </div>

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-6 text-left">
            <span className="text-[#4CAF50] font-bold text-xs uppercase tracking-[3px] block">
              ABOUT ARISE COMMUNITY WELFARE ACCESS
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Rooted in Community. Driven by Dignity & Self-Reliance.
            </h1>

            <div className="border-l-4 border-[#4CAF50] pl-6 my-4">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-normal">
                ACWA is a Community Based Organization established in 2024 and registered under the Community Groups Registration Act No. 30 of 2021 in Kenya (Reg. No. 30 of 2021), operating in Kakuma Refugee Camp and Turkana host areas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission Grid with Visual Image Column */}
      <section className="bg-white dark:bg-[#042F20]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Vision & Mission Text Cards */}
            <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
              <div className="bg-[#1B5E20] text-white p-8 sm:p-10 rounded-none space-y-4 shadow-md">
                <div className="w-12 h-12 rounded-none bg-white text-[#1B5E20] flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#1B5E20]" />
                </div>
                <span className="text-xs font-bold text-[#4CAF50] uppercase tracking-[2.5px] block">OUR VISION</span>
                <h2 className="font-serif font-extrabold text-3xl text-white">A Self-Reliant & Peaceful Society</h2>
                <p className="text-white/90 leading-relaxed text-base">
                  To cultivate self-reliant, peaceful, and empowered communities where every individual enjoys dignity, equal access to quality education, sustainable food security, health awareness, and rights protection.
                </p>
              </div>

              <div className="bg-[#F9FAFB] dark:bg-[#064E3B]/40 text-gray-900 dark:text-white p-8 sm:p-10 rounded-none border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-none bg-[#2E7D32] text-white flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold text-[#2E7D32] dark:text-[#4CAF50] uppercase tracking-[2.5px] block">OUR MISSION</span>
                <h2 className="font-serif font-extrabold text-3xl text-gray-900 dark:text-white">Community-Led Transformation</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                  To work directly alongside refugees and host communities in Kenya through grassroots peacebuilding, educational support, child welfare safeguards, climate-resilient livelihoods, and health promotion.
                </p>
              </div>
            </div>

            {/* Featured Visual Image Side Card */}
            <div className="lg:col-span-5 relative group overflow-hidden border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] min-h-[400px]">
              <img
                src="/IMG_20260113_180100_323.jpg"
                alt="ACWA community peace dialogue in Kakuma"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                <span className="text-xs font-bold text-[#4CAF50] uppercase tracking-widest block">FIELD IDENTITY</span>
                <p className="font-serif font-bold text-xl leading-tight">
                  Grassroots action driven directly by refugee and host community members in Kakuma.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About ACWA Photo Gallery */}
      <section className="py-20 bg-[#F9FAFB] dark:bg-[#042F20] transition-colors duration-200">
        <Container>
          <SectionHeading
            badge="OUR PEOPLE & FIELD ACTION"
            title="ACWA in Kakuma Refugee Camp"
            subtitle="Real field photographs showing our team, peace meetings, and educational distribution drives."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-[#064E3B]/40 rounded-none border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] overflow-hidden shadow-sm hover:shadow-md transition-all p-4 space-y-4"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-lg text-gray-900 dark:text-white">{photo.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white dark:bg-[#042F20] transition-colors duration-200">
        <Container>
          <SectionHeading
            badge="OUR CORE VALUES"
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
                  className="bg-[#F9FAFB] dark:bg-[#064E3B]/40 p-8 rounded-none border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] space-y-4 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-none bg-[#2E7D32] text-white flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif font-extrabold text-2xl text-gray-900 dark:text-white">{value.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Strategic Objectives */}
      <section className="bg-[#1B5E20] text-white py-20 sm:py-28 transition-colors duration-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#4CAF50] font-bold text-xs uppercase tracking-[3px] block">
                STRATEGIC DIRECTION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
                Our Organizational Objectives
              </h2>
              <p className="text-base text-white/90 leading-relaxed">
                ACWA operates with clear, targeted objectives designed to build community self-sufficiency, social cohesion, and grassroots peace. Registered under the Community Groups Registration Act No. 30 of 2021 in Kenya.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {objectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 p-5 rounded-none border border-white/20 flex items-start space-x-4 hover:bg-white/15 transition-colors"
                >
                  <div className="w-8 h-8 rounded-none bg-[#4CAF50] text-white flex items-center justify-center font-extrabold text-sm shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-base text-white font-medium leading-normal">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* How ACWA Works & Communities Served */}
      <section className="py-16 bg-white dark:bg-[#042F20]">
        <Container>
          <div className="bg-[#F9FAFB] dark:bg-[#064E3B]/40 p-8 sm:p-12 rounded-none border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-none bg-[#2E7D32] text-white flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white">How ACWA Works</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                We conduct participatory community needs assessments, form local peace & welfare committees, and execute projects directly with community members.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-none bg-[#2E7D32] text-white flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white">Communities Served</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Refugee residents across Kakuma camp zones, Turkana host communities, orphans, youth groups, women-headed households, and persons with disabilities.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-none bg-[#2E7D32] text-white flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white">Partnership Approach</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                We welcome collaborative programming, co-funding, and technical exchange with international NGOs, faith groups, and government offices.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/partner-with-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-extrabold text-base rounded-none transition-colors shadow-md group"
            >
              <span>Partner With ACWA Today</span>
              <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
