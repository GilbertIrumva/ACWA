'use client';

import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Link from 'next/link';
import { ArrowRight, Camera } from 'lucide-react';

const FEATURED_FIELD_PHOTOS = [
  { src: encodeURI('/Peace Dialogue & Reconciliation.jpg'), title: 'Peace Dialogue Circle', badge: 'Peacebuilding', caption: 'Refugee and host community elders in conflict resolution dialogue.' },
  { src: '/education.jpg', title: 'Classroom & Literacy Support', badge: 'Education', caption: 'Providing essential scholastic kits and tutoring for children.' },
  { src: encodeURI('/Agriculture.jpg'), title: 'Agricultural & Food Security', badge: 'Livelihoods', caption: 'Permaculture plots producing climate-resilient crops in Kakuma.' },
  { src: encodeURI('/Social cohension.jpg'), title: 'Community Peace Forum', badge: 'Social Cohesion', caption: 'Structured inter-community reconciliation gathering.' },
  { src: encodeURI('/child support driv.jpg'), title: 'Child Support Drive', badge: 'Child Protection', caption: 'Safeguarding vulnerable orphans and providing learning materials.' },
  { src: encodeURI('/youth Actions.jpg'), title: 'Youth Sports & Cohesion', badge: 'Youth Action', caption: 'Mobilizing youth across camp zones through sports and leadership.' },
];

export default function PhotoReel() {
  return (
    <section className="py-20 md:py-28 bg-[#F9FAFB] dark:bg-[#042F20] transition-colors duration-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="FIELD ACTION GALLERY"
            title="Real Moments From Kakuma"
            subtitle="Authentic photographs documenting our grassroots peacebuilding, education, livelihoods, and child protection work on the ground in Turkana County, Kenya."
          />
          <div className="shrink-0">
            <Link
              href="/stories"
              className="inline-flex items-center px-6 py-3 border-2 border-[#2E7D32] text-[#2E7D32] dark:text-[#4CAF50] dark:border-[#4CAF50] font-bold text-sm hover:bg-[#2E7D32] hover:text-white transition-colors"
            >
              <Camera className="w-4 h-4 mr-2" />
              <span>Explore All Field Stories</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* 6 Curated Featured Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_FIELD_PHOTOS.map((img, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-[#064E3B]/40 rounded-none border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div>
                <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute top-4 left-4 bg-[#1B5E20] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {img.badge}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white group-hover:text-[#2E7D32] dark:group-hover:text-[#4CAF50] transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {img.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
