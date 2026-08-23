import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Sprout, Briefcase, Award, ArrowRight, Wheat, Store } from 'lucide-react';

export default function LivelihoodsSpotlight() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 my-6">
      {/* Background Image Behind Fonts */}
      <div className="absolute inset-0 z-0">
        <img
          src="/livelihood.jpg"
          alt="Permaculture and sustainable farming initiative in Kakuma supported by ACWA"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/45 z-10" />
      </div>

      <Container className="relative z-20">
        <div className="max-w-3xl space-y-6 text-white">
          {/* Badge Tag */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#16A34A] text-[#F0FDF4] text-xs font-semibold uppercase tracking-wider border border-[#22C55E]/40 shadow-md">
            <Sprout className="w-4 h-4 text-[#D87532]" />
            <span>Program Spotlight • Livelihoods</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Fostering Economic Dignity, Agriculture & Climate Resilience
          </h2>

          <p className="text-base sm:text-lg text-[#D5EBD9] leading-relaxed font-normal">
            Self-reliance requires practical skills and economic opportunity. ACWA trains community members in regenerative agriculture, livestock management, and small business enterprises tailored to arid environments.
          </p>

          {/* Features Grid Over Image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
              <div className="flex items-center space-x-2 text-[#22C55E] font-semibold text-base">
                <Wheat className="w-5 h-5 text-[#D87532]" />
                <span>Permaculture & Poultry</span>
              </div>
              <p className="text-xs sm:text-sm text-[#D5EBD9]">Water-efficient crop techniques and small-scale poultry farming for household nutrition.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
              <div className="flex items-center space-x-2 text-[#22C55E] font-semibold text-base">
                <Store className="w-5 h-5 text-[#D87532]" />
                <span>Small Business & Vocational</span>
              </div>
              <p className="text-xs sm:text-sm text-[#D5EBD9]">Micro-enterprise training, bookkeeping, and vocational craft skills for women & youth.</p>
            </div>
          </div>

          <div className="pt-2">
            <Button href="/programs/livelihoods" variant="orange" size="md" className="shadow-lg">
              <span>Discover Permaculture & Livelihoods</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
