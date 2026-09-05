'use client';

import React from 'react';
import SectionHeading from '../ui/SectionHeading';

const TEAM_MEMBERS = [
  {
    id: 'team-1',
    name: 'Lavie Museno',
    role: 'Founder',
    image: encodeURI('/FOUNDER LAVIE MUSENO .jpg'),
  },
  {
    id: 'team-2',
    name: 'Ombeni Masumbuko',
    role: 'Director',
    image: encodeURI('/DIRECTOR OMBENI MASUMBUKO .jpg'),
  },
  {
    id: 'team-3',
    name: 'Hawa Hamadi',
    role: 'Treasurer',
    image: encodeURI('/HAWA HAMADI  Treasure_.jpg'),
  },
  {
    id: 'team-4',
    name: 'Issa David',
    role: 'Secretary',
    image: encodeURI('/SECRETARY ISSA DAVID.jpg'),
  },
  {
    id: 'team-5',
    name: 'David Atanas Chris',
    role: 'Vice Secretary',
    image: encodeURI('/V. SECRETARY DAVID ATANAS CHRIS.jpg'),
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-16 sm:py-24 bg-[#F9FAFB] dark:bg-[#042F20] border-t border-gray-200 dark:border-emerald-800/30 transition-colors scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="OUR LEADERSHIP"
          title="Our Team"
          subtitle="Dedicated refugee and host community leadership guiding ACWA's vision, governance, and grassroots impact in Kakuma."
          centered={true}
        />

        <div className="flex flex-nowrap overflow-x-auto lg:grid lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 w-full pb-4 lg:pb-0 scrollbar-none">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="min-w-[150px] sm:min-w-[180px] lg:min-w-0 w-full group bg-white dark:bg-[#064E3B]/60 rounded-xl sm:rounded-2xl md:rounded-3xl border border-gray-200 dark:border-emerald-800/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col shrink-0 lg:shrink"
            >
              {/* Portrait Photo Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 dark:bg-emerald-950">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = '/logo.jpg';
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body: Role & Name */}
              <div className="p-3 sm:p-5 text-center space-y-1 sm:space-y-1.5 flex-1 flex flex-col justify-center bg-white dark:bg-[#064E3B]/40">
                <span className="text-[10px] sm:text-xs font-bold text-[#2E7D32] dark:text-[#4CAF50] uppercase tracking-wider block truncate">
                  {member.role}
                </span>
                <h3 className="font-serif font-extrabold text-xs sm:text-base md:text-lg text-gray-900 dark:text-white leading-snug">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

