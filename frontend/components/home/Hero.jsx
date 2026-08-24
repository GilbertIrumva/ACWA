import React from 'react';
import Container from '../ui/Container';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
      {/* Full-Screen Background Image & Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/home.jpg"
          alt="ACWA community members engaging in dialogue in Kakuma"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65 z-10" />
      </div>

      <Container className="relative z-20">
        <div className="max-w-3xl text-left text-white space-y-6">
          {/* Headline in Lora Serif matching SIR Africa */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
            Building peaceful, empowered and self-reliant <span className="text-[#4CAF50] italic font-normal">communities.</span>
          </h1>

          {/* Subtitle with Left Green Border Accent matching SIR Africa */}
          <div className="border-l-4 border-[#4CAF50] pl-6 my-6">
            <p className="text-base sm:text-xl text-white/90 leading-relaxed font-normal max-w-2xl">
              ACWA works directly with refugees, host communities, vulnerable children, women, and youth through peacebuilding, education, livelihoods, child protection, and community welfare initiatives in Turkana County, Kenya.
            </p>
          </div>

          {/* SIR Africa Style Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none font-bold text-base text-white bg-[#1B5E20] hover:bg-[#2E7D32] transition-colors shadow-lg group"
            >
              <span>Invest in Potential</span>
              <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none font-bold text-base text-white border-2 border-white hover:bg-white/10 transition-colors group"
            >
              <span>What We Do</span>
              <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
