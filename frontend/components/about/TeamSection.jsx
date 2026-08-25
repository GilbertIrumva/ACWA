'use client';

import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Mail, Linkedin, Building2, Users } from 'lucide-react';

const EXECUTIVE_TEAM = [
  {
    id: 'exec-1',
    category: 'Executive Team',
    name: 'Ombeni Masumbuko',
    role: 'Executive Director & Founder',
    image: '/IMG-20260701-WA0234.jpg',
    email: 'arisecwel.acces@gmail.com',
    linkedin: 'https://linkedin.com/in/ombeni-masumbuko',
  },
  {
    id: 'exec-2',
    category: 'Executive Team',
    name: 'Peacebuilding Coordinator',
    role: 'Head of Peacebuilding & Social Cohesion',
    image: '/IMG_20260113_180100_323.jpg',
    email: 'peacebuilding@acwakenya.org',
    linkedin: '#',
  },
  {
    id: 'exec-3',
    category: 'Executive Team',
    name: 'Education & Safeguarding Lead',
    role: 'Head of Education & Child Protection',
    image: '/education.jpg',
    email: 'education@acwakenya.org',
    linkedin: '#',
  },
  {
    id: 'exec-4',
    category: 'Executive Team',
    name: 'Permaculture & Agronomy Lead',
    role: 'Head of Livelihoods & Dryland Farming',
    image: '/livelihood.jpg',
    email: 'livelihoods@acwakenya.org',
    linkedin: '#',
  },
  {
    id: 'exec-5',
    category: 'Executive Team',
    name: 'Community Health & MHPSS Lead',
    role: 'Health & Sanitation Coordinator',
    image: '/IMG_20260815_175111_257.jpg',
    email: 'health@acwakenya.org',
    linkedin: '#',
  },
  {
    id: 'exec-6',
    category: 'Executive Team',
    name: 'Finance & Operations Manager',
    role: 'Finance & Compliance Officer',
    image: '/Impact.jpg',
    email: 'finance@acwakenya.org',
    linkedin: '#',
  },
];

const BOARD_MEMBERS = [
  {
    id: 'board-1',
    category: 'Board of Directors',
    name: 'Board Chairperson',
    role: 'Chairperson of the Board of Directors',
    image: '/_MG_2558.jpg',
    email: 'board@acwakenya.org',
    linkedin: '#',
  },
  {
    id: 'board-2',
    category: 'Board of Directors',
    name: 'Board Vice-Chairperson',
    role: 'Vice-Chairperson & Legal Advisor',
    image: '/_MG_2567.jpg',
    email: 'board.legal@acwakenya.org',
    linkedin: '#',
  },
  {
    id: 'board-3',
    category: 'Board of Directors',
    name: 'Board Treasurer & Audit Chair',
    role: 'Treasurer & Financial Governance Chair',
    image: '/_MG_2602.jpg',
    email: 'board.treasurer@acwakenya.org',
    linkedin: '#',
  },
  {
    id: 'board-4',
    category: 'Board of Directors',
    name: 'Ombeni Masumbuko',
    role: 'Ex-Officio Board Member & Founder',
    image: '/IMG-20260701-WA0234.jpg',
    email: 'arisecwel.acces@gmail.com',
    linkedin: 'https://linkedin.com/in/ombeni-masumbuko',
  },
  {
    id: 'board-5',
    category: 'Board of Directors',
    name: 'Partnerships & Donor Relations Director',
    role: 'Board Trustee for Resource Mobilization',
    image: '/IMG_20260717_180300_038.jpg',
    email: 'partnerships@acwakenya.org',
    linkedin: '#',
  },
  {
    id: 'board-6',
    category: 'Board of Directors',
    name: 'Community Representation Trustee',
    role: 'Refugee & Host Community Trustee',
    image: '/IMG_20260717_181346_545.jpg',
    email: 'community.trustee@acwakenya.org',
    linkedin: '#',
  },
];

export default function TeamSection() {
  const [activeCategory, setActiveCategory] = useState('ALL'); // 'ALL' | 'EXEC' | 'BOARD'

  const allMembers = [...EXECUTIVE_TEAM, ...BOARD_MEMBERS];

  const displayedMembers =
    activeCategory === 'EXEC'
      ? EXECUTIVE_TEAM
      : activeCategory === 'BOARD'
      ? BOARD_MEMBERS
      : allMembers;

  return (
    <section id="team" className="py-16 sm:py-24 bg-[#F9FAFB] dark:bg-[#042F20] border-t border-gray-200 dark:border-emerald-800/30 transition-colors scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="OUR LEADERSHIP"
          title="ACWA Organizational Team & Board of Directors"
          subtitle="Governed by an independent Board of Directors and led on the ground by dedicated refugee & host community leaders in Kakuma."
          centered={true}
        />

        {/* SIR Africa Style Category Switcher Bar */}
        <div className="bg-white dark:bg-[#064E3B] p-4 sm:p-6 rounded-3xl border border-gray-200 dark:border-emerald-800/40 shadow-sm flex items-center justify-center">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 max-w-full">
            <button
              type="button"
              onClick={() => setActiveCategory('ALL')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === 'ALL'
                  ? 'bg-[#2E7D32] text-white shadow-md'
                  : 'bg-[#F9FAFB] dark:bg-[#042F20] text-black dark:text-white hover:text-[#2E7D32] border border-gray-200 dark:border-emerald-800/30'
              }`}
            >
              All Leadership ({allMembers.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('EXEC')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap inline-flex items-center space-x-2 transition-all ${
                activeCategory === 'EXEC'
                  ? 'bg-[#2E7D32] text-white shadow-md'
                  : 'bg-[#F9FAFB] dark:bg-[#042F20] text-black dark:text-white hover:text-[#2E7D32] border border-gray-200 dark:border-emerald-800/30'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Executive Team ({EXECUTIVE_TEAM.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('BOARD')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap inline-flex items-center space-x-2 transition-all ${
                activeCategory === 'BOARD'
                  ? 'bg-[#2E7D32] text-white shadow-md'
                  : 'bg-[#F9FAFB] dark:bg-[#042F20] text-black dark:text-white hover:text-[#2E7D32] border border-gray-200 dark:border-emerald-800/30'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Board of Directors ({BOARD_MEMBERS.length})</span>
            </button>
          </div>
        </div>

        {/* Clean Professional Cards Grid (SIR Africa / UN Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedMembers.map((member) => {
            const isBoard = member.category === 'Board of Directors';

            return (
              <div
                key={member.id}
                className="group bg-white dark:bg-[#064E3B]/60 rounded-3xl border border-gray-200 dark:border-emerald-800/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Portrait Photo Container */}
                <div className="relative aspect-[4/4] sm:aspect-[4/4.5] overflow-hidden bg-gray-100 dark:bg-emerald-950">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      e.currentTarget.src = '/logo.jpg';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex items-center space-x-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2.5 bg-white/90 hover:bg-white text-[#2E7D32] rounded-full shadow-md transition-colors"
                        title={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a
                        href={member.linkedin || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-full shadow-md transition-colors"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Category Badge overlay */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md backdrop-blur-md ${
                      isBoard
                        ? 'bg-[#042F20]/90 text-[#22C55E] border border-emerald-500/40'
                        : 'bg-[#2E7D32]/90 text-white border border-emerald-400/40'
                    }`}>
                      {member.category}
                    </span>
                  </div>
                </div>

                {/* Card Body: Name & Role */}
                <div className="p-6 space-y-3 text-center bg-white dark:bg-[#064E3B]/40 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h4 className="font-serif font-extrabold text-xl text-gray-900 dark:text-white group-hover:text-[#2E7D32] dark:group-hover:text-[#4CAF50] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs font-bold text-[#2E7D32] dark:text-[#4CAF50] uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>

                  {/* Contact Links Bar */}
                  <div className="pt-3 flex items-center justify-center space-x-3 border-t border-gray-100 dark:border-emerald-800/40 text-xs font-bold">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-black dark:text-white hover:text-[#2E7D32] dark:hover:text-[#4CAF50] inline-flex items-center space-x-1.5 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#2E7D32] dark:text-[#4CAF50]" />
                      <span>Contact</span>
                    </a>
                    <span className="text-gray-300 dark:text-emerald-800">•</span>
                    <a
                      href={member.linkedin || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A66C2] dark:text-[#3882F6] hover:underline inline-flex items-center space-x-1.5 transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
