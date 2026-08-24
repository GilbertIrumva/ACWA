import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Handshake, Users, MessageSquare, ArrowRight, Shield } from 'lucide-react';

export default function PeacebuildingSpotlight() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 my-6">
      {/* Background Image Behind Fonts */}
      <div className="absolute inset-0 z-0">
        <img
          src="/peace-building-and.jpg"
          alt="Community members participating in an ACWA peace dialogue in Kakuma"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/45 z-10" />
      </div>

      <Container className="relative z-20">
        <div className="max-w-3xl space-y-6 text-white">
          {/* Badge Tag */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#16A34A] text-[#F0FDF4] text-xs font-semibold uppercase tracking-wider border border-[#22C55E]/40 shadow-md">
            <Handshake className="w-4 h-4 text-[#D87532]" />
            <span>Program Spotlight • Peacebuilding</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Bridging Communities Through Peace Dialogues & Youth Engagement
          </h2>

          <p className="text-base sm:text-lg text-[#D5EBD9] leading-relaxed font-normal">
            In Kakuma, long-term stability depends on mutual trust between refugee communities from diverse nations and host Turkana communities. ACWA leads structured dialogue platforms that convert tension into collaborative development.
          </p>

          {/* Feature Grid Over Image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
              <div className="flex items-center space-x-2 text-[#22C55E] font-semibold text-base">
                <MessageSquare className="w-5 h-5 text-[#D87532]" />
                <span>Community Peace Dialogues</span>
              </div>
              <p className="text-xs sm:text-sm text-[#D5EBD9]">Regular inter-community forums addressing local resource management and dispute resolution.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
              <div className="flex items-center space-x-2 text-[#22C55E] font-semibold text-base">
                <Users className="w-5 h-5 text-[#D87532]" />
                <span>Youth Peace Ambassadors</span>
              </div>
              <p className="text-xs sm:text-sm text-[#D5EBD9]">Mobilizing young leaders to act as peace champions and mitigate inter-group conflicts.</p>
            </div>
          </div>

          <div className="pt-2">
            <Button href="/programs/peacebuilding" variant="primary" size="md" className="shadow-lg">
              <span>Learn More About Peacebuilding</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
