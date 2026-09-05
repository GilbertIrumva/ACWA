import React from 'react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import Link from 'next/link';
import { Heart, Handshake, Users, Share2, Sprout, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Get Involved | Support ACWA Kenya',
  description:
    'Discover meaningful ways to support ARISE COMMUNITY WELFARE ACCESS (ACWA) through donations, partnerships, volunteering, and advocacy.',
};

export default function GetInvolvedPage() {
  const pathways = [
    {
      icon: Heart,
      title: 'Make a Direct Contribution',
      badge: 'Immediate Impact',
      desc: 'Your donation directly funds scholastic packages for children, permaculture seeds, clean hygiene stations, and peace dialogues in Kakuma.',
      ctaText: 'Donate Now',
      ctaHref: '/donate',
    },
    {
      icon: Handshake,
      title: 'Institutional Partnerships',
      badge: 'Strategic Collaboration',
      desc: 'We collaborate with international NGOs, humanitarian agencies, faith groups, and donors on co-funded community programs.',
      ctaText: 'Partner With ACWA',
      ctaHref: '/partner-with-us',
    },
    {
      icon: Users,
      title: 'Community Volunteering',
      badge: 'Skills & Mentorship',
      desc: 'Share your expertise in education tutoring, permaculture design, health promotion, or grant writing with our field team.',
      ctaText: 'Volunteer Inquiry',
      ctaHref: '/contact',
    },
    {
      icon: Sprout,
      title: 'Sponsor a Permaculture Garden',
      badge: 'Food Security',
      desc: 'Fund drought-resilient community seed gardens that provide daily nutrition for vulnerable refugee and host families.',
      ctaText: 'Support Agriculture',
      ctaHref: '/programs/livelihoods',
    },
    {
      icon: Share2,
      title: 'Amplify ACWA Stories',
      badge: 'Advocacy & Awareness',
      desc: 'Help raise awareness for grassroots refugee self-reliance by sharing our field dispatches with your networks and community.',
      ctaText: 'Explore Stories',
      ctaHref: '/stories',
    },
  ];

  const communityGallery = [
    { src: encodeURI('/community mobilisation.jpg'), title: 'Refugee & Host Mobilization', caption: 'Joint community members engaging in local problem solving.' },
    { src: encodeURI('/youth Actions.jpg'), title: 'Youth Skills Workshop', caption: 'Practical vocational training and youth leadership sessions.' },
    { src: '/IMG-20260701-WA0234.jpg', title: 'Peace & Unity Festival', caption: 'Celebrating cross-community harmony in Turkana County.' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Editorial Hero Header */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden py-20 sm:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/IMG-20260701-WA0234.jpg"
            alt="Peace and community unity in Kakuma"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/65 z-10" />
        </div>

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-6 text-left">
            <span className="text-[#4CAF50] font-bold text-xs uppercase tracking-[3px] block">
              ACTION PATHWAYS
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Stand Alongside Communities in Kakuma
            </h1>
            <div className="border-l-4 border-[#4CAF50] pl-6 my-4">
              <p className="text-lg text-white/90 leading-relaxed font-normal">
                Whether you are an individual supporter, philanthropist, or institutional partner, there are clear, transparent ways to drive sustainable change with ACWA.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Pathways Grid */}
      <section className="bg-white dark:bg-[#042F20]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pathways.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F9FAFB] dark:bg-[#064E3B]/40 p-8 rounded-none border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-none bg-[#2E7D32] text-white flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-bold text-[#2E7D32] dark:text-[#4CAF50] uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-2xl text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>

                  <div>
                    <Link
                      href={item.ctaHref}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-sm rounded-none transition-colors shadow-sm group"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Community Action Photo Gallery */}
      <section className="py-20 bg-[#F9FAFB] dark:bg-[#042F20] transition-colors duration-200">
        <Container>
          <SectionHeading
            badge="COMMUNITY ACTION IN PICTURES"
            title="Grassroots Participation On The Ground"
            subtitle="Photographs documenting volunteer action, youth workshops, and social cohesion events."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityGallery.map((photo, idx) => (
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
    </div>
  );
}
