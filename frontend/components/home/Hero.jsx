import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ArrowRight, Heart, Shield, Users, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* Background Image Behind Fonts */}
      <div className="absolute inset-0 z-0">
        <img
          src="/home.jpg"
          alt="ACWA community members engaging in dialogue in Kakuma"
          className="w-full h-full object-cover object-center brightness-110 contrast-105"
        />
        {/* Lightened Gradient Overlay for optimal font readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 z-10" />
      </div>

      <Container className="relative z-20">
        <div className="max-w-3xl space-y-6 text-left text-white">
          {/* Pill Tag */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#16A34A] text-[#F0FDF4] text-xs font-semibold uppercase tracking-wider shadow-lg border border-[#22C55E]/40">
            <Sparkles className="w-4 h-4 text-[#D87532]" />
            <span>Registered CBO in Kenya • Kakuma Refugee Camp</span>
          </div>

          {/* Main Headline over image */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Building peaceful, empowered and self-reliant <span className="text-[#22C55E] italic font-normal">communities.</span>
          </h1>

          {/* Supporting Text over image */}
          <p className="text-lg sm:text-xl text-[#D5EBD9] leading-relaxed font-normal max-w-2xl">
            ACWA works directly with refugees, host communities, vulnerable children, women, and youth through peacebuilding, education, livelihoods, child protection, and community welfare initiatives in Turkana County, Kenya.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button href="/donate" variant="orange" size="lg" className="shadow-xl hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 mr-2.5 fill-white" />
              Support Our Work
            </Button>
            <Button href="/programs" variant="secondary" size="lg" className="group bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20">
              <span>Explore Our Programs</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Markers over image */}
          <div className="pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#D5EBD9]">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#16A34A] flex items-center justify-center text-white shrink-0 shadow-md">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-white font-semibold">Community-Led</strong>
                <span>Rooted in Kakuma</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#16A34A] flex items-center justify-center text-white shrink-0 shadow-md">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-white font-semibold">Inclusive Focus</strong>
                <span>Refugees & Hosts</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#16A34A] flex items-center justify-center text-white shrink-0 shadow-md">
                <Sparkles className="w-4 h-4 text-[#D87532]" />
              </div>
              <div>
                <strong className="block text-white font-semibold">Registered CBO</strong>
                <span>Act No. 30 of 2021</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
