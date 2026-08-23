'use client';

import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { Camera } from 'lucide-react';

const REEL_IMAGES = [
  { src: '/home.jpg', caption: 'ACWA Community Gathering in Kakuma' },
  { src: '/get in touch.jpg', caption: 'ACWA Community Engagement & Outreach' },
  { src: '/peace building and .jpg', caption: 'Peacebuilding & Dialogue Session' },
  { src: '/education.jpg', caption: 'Child Education & Learning Support' },
  { src: '/child protection.jpg', caption: 'Child Welfare & Protection Program' },
  { src: '/livelihood.jpg', caption: 'Permaculture & Sustainable Livelihoods' },
  { src: '/Impact.jpg', caption: 'Community Impact & Verification' },
  { src: '/_MG_2558.jpg', caption: 'Peace Dialogue Circle' },
  { src: '/_MG_2567.jpg', caption: 'Classroom & Literacy Support' },
  { src: '/_MG_2602.jpg', caption: 'Agricultural & Food Security' },
  { src: '/IMG_20251022_132118_086.jpg', caption: 'Community Hygiene & Health Awareness' },
  { src: '/IMG_20251022_133340_696.jpg', caption: 'Refugee & Host Community Empowerment' },
  { src: '/IMG_20251124_172345_679.jpg', caption: 'Youth Skills & Livelihood Workshops' },
  { src: '/IMG-20251129-WA0027.jpg', caption: 'Field Team & Community Leaders' },
  { src: '/IMG_20260113_180100_323.jpg', caption: 'Community Peace Dialogue Forum' },
  { src: '/IMG_20260223_081540_318.jpg', caption: 'Educational Support Distribution' },
  { src: '/IMG_20260619_180345_290.jpg', caption: 'Community Health Outreach' },
  { src: '/IMG-20260701-WA0234.jpg', caption: 'Peace & Unity Community Event' },
  { src: '/IMG_20260717_180300_038.jpg', caption: 'Child Support & Education Drive' },
  { src: '/IMG_20260717_181346_545.jpg', caption: 'Field Verification & Project Monitoring' },
  { src: '/IMG_20260814_185031_400.jpg', caption: 'Youth Sports & Cohesion Activities' },
  { src: '/IMG_20260815_175111_257.jpg', caption: 'Community Development Initiative' }
];

export default function PhotoReel() {
  return (
    <section className="py-16 md:py-24 bg-[#F0FDF4] dark:bg-[#042F20] overflow-hidden border-y border-[#16A34A]/10 dark:border-emerald-800/30 transition-colors duration-200">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <SectionHeading
            badge="ACWA Field Action"
            title="Real Moments From Kakuma"
            subtitle="Authentic photographs documenting our community peacebuilding, education, livelihoods, and protection work on the ground in Turkana County, Kenya."
          />
          <div className="mt-4 sm:mt-0 flex items-center space-x-2 text-xs font-semibold text-[#16A34A] bg-[#D5EBD9] px-3.5 py-2 rounded-full border border-[#16A34A]/20 shrink-0">
            <Camera className="w-4 h-4 text-[#16A34A]" />
            <span>22 Real Field Photos</span>
          </div>
        </div>
      </Container>

      {/* Horizontal Scrolling Photo Reel */}
      <div className="relative w-full overflow-x-auto pb-4 pt-2 no-scrollbar px-4 sm:px-8">
        <div className="flex space-x-5 min-w-max">
          {REEL_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="group relative w-72 sm:w-80 h-96 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#16A34A]/15 bg-[#16A34A] shrink-0"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#DCFCE7] bg-[#16A34A]/80 px-2.5 py-1 rounded-full backdrop-blur-sm mb-2 inline-block">
                  Field Photo #{idx + 1}
                </span>
                <p className="font-serif font-semibold text-sm leading-snug text-white">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
