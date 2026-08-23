import React from 'react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
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
      variant: 'orange',
    },
    {
      icon: Handshake,
      title: 'Institutional Partnerships',
      badge: 'Strategic Collaboration',
      desc: 'We collaborate with international NGOs, humanitarian agencies, faith groups, and donors on co-funded community programs.',
      ctaText: 'Partner With ACWA',
      ctaHref: '/partner-with-us',
      variant: 'primary',
    },
    {
      icon: Users,
      title: 'Community Volunteering',
      badge: 'Skills & Mentorship',
      desc: 'Share your expertise in education tutoring, permaculture design, health promotion, or grant writing with our field team.',
      ctaText: 'Volunteer Inquiry',
      ctaHref: '/contact',
      variant: 'secondary',
    },
    {
      icon: Sprout,
      title: 'Sponsor a Permaculture Garden',
      badge: 'Food Security',
      desc: 'Fund drought-resilient community seed gardens that provide daily nutrition for vulnerable refugee and host families.',
      ctaText: 'Support Agriculture',
      ctaHref: '/programs/livelihoods',
      variant: 'secondary',
    },
    {
      icon: Share2,
      title: 'Amplify ACWA Stories',
      badge: 'Advocacy & Awareness',
      desc: 'Help raise awareness for grassroots refugee self-reliance by sharing our field dispatches with your networks and community.',
      ctaText: 'Explore Stories',
      ctaHref: '/stories',
      variant: 'outline',
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-16">
      <section className="relative overflow-hidden py-20 sm:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/IMG-20260701-WA0234.jpg"
            alt="Peace and community unity in Kakuma"
            className="w-full h-full object-cover object-center brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 z-10" />
        </div>

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-xs font-bold text-[#D87532] uppercase tracking-wider block bg-[#16A34A] px-3.5 py-1.5 rounded-full w-max border border-[#22C55E]/40">
              Action Pathways
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
              Stand Alongside Communities in Kakuma
            </h1>
            <p className="text-lg text-[#D5EBD9] leading-relaxed">
              Whether you are an individual supporter, philanthropist, or institutional partner, there are clear, transparent ways to drive sustainable change with ACWA.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pathways.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F0FDF4] dark:bg-[#064E3B]/90 p-8 rounded-3xl border border-[#16A34A]/15 dark:border-emerald-700/40 shadow-md flex flex-col justify-between space-y-6 hover:shadow-xl transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#A8875A]" />
                      </div>
                      <span className="text-xs font-semibold text-[#16A34A] dark:text-[#22C55E] bg-[#16A34A]/10 dark:bg-[#22C55E]/20 px-3 py-1 rounded-full border border-[#16A34A]/15 dark:border-emerald-600/30">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-2xl text-[#171A17] dark:text-[#F0FDF4]">{item.title}</h3>
                    <p className="text-sm text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed">{item.desc}</p>
                  </div>

                  <div>
                    <Button href={item.ctaHref} variant={item.variant} size="md" className="w-full">
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
