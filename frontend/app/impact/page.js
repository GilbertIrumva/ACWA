import React from 'react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import ImpactStats from '../../components/home/ImpactStats';
import Link from 'next/link';
import { getImpactRecords } from '../../lib/sanity/queries';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Impact & Verification | ACWA Kenya',
  description:
    'ACWA impact methodology and qualitative verified achievements across Kakuma Refugee Camp and Turkana host communities.',
};

export default async function ImpactPage() {
  const impactRecords = await getImpactRecords();

  const impactGallery = [
    { src: '/IMG_20260717_181346_545.jpg', title: 'Field Monitoring & Verification', caption: 'On-site inspections and qualitative data collection across Kakuma camp zones.' },
    { src: encodeURI('/community health.jpg'), title: 'Community Health Awareness', caption: 'Hygiene, sanitation, and health protection campaigns in local settlements.' },
    { src: encodeURI('/hygene actions.jpg'), title: 'Hygiene & Sanitation Actions', caption: 'Direct community hygiene demonstrations and preventive care drives.' },
    { src: encodeURI('/community mobilisation.jpg'), title: 'Community Mobilization', caption: 'Refugee and host community members participating in local development meetings.' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Editorial Hero Header */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden py-20 sm:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/Impact.jpg"
            alt="ACWA community impact and verification"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/65 z-10" />
        </div>

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-6 text-left">
            <span className="text-[#4CAF50] font-bold text-xs uppercase tracking-[3px] block">
              VERIFIED COMMUNITY IMPACT
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Honest Impact & Community Accountability
            </h1>
            <div className="border-l-4 border-[#4CAF50] pl-6 my-4">
              <p className="text-lg text-white/90 leading-relaxed font-normal">
                At ACWA, we never manufacture or exaggerate numbers. We publish qualitative milestones and verified metrics grounded in real community action.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Moved Impact Stats Section from Home Page */}
      <ImpactStats />

      {/* Verified Milestone Records */}
      <section className="bg-white dark:bg-[#042F20]">
        <Container>
          <SectionHeading
            badge="VERIFIED RECORDS"
            title="Grassroots Achievements & Progress Reports"
            subtitle="Explore our CMS-managed records documenting peace dialogues, education support, livelihoods, and youth mobilization."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactRecords.map((record) => (
              <div
                key={record._id}
                className="bg-[#F9FAFB] dark:bg-[#064E3B]/40 p-8 rounded-none border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#2E7D32] dark:text-[#4CAF50] uppercase tracking-widest">
                      {record.program}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{record.year}</span>
                  </div>

                  <h3 className="font-serif font-extrabold text-2xl text-gray-900 dark:text-white">{record.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{record.description}</p>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-emerald-800/40 flex items-center justify-between text-xs font-bold">
                  <div className="flex items-center space-x-1.5 text-[#2E7D32] dark:text-[#4CAF50]">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50]" />
                    <span>Verified Milestone</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">{record.location}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Field Action Verification Gallery Section */}
      <section className="py-20 bg-[#F9FAFB] dark:bg-[#042F20] transition-colors duration-200">
        <Container>
          <SectionHeading
            badge="FIELD ACTION EVIDENCE"
            title="Photographic Evidence From The Field"
            subtitle="Documenting ongoing inspections, health outreach campaigns, and community meetings."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactGallery.map((photo, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-[#064E3B]/40 rounded-none border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] overflow-hidden shadow-sm hover:shadow-md transition-all space-y-4 p-4"
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
                  <h4 className="font-serif font-bold text-base text-gray-900 dark:text-white">{photo.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#1B5E20] text-white p-8 sm:p-12 rounded-none text-center max-w-3xl mx-auto space-y-4 shadow-md">
            <h3 className="font-serif font-extrabold text-2xl text-white">Partner with ACWA to Expand Our Impact</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              We welcome donor and NGO partnerships to scale our verified peacebuilding, education, and permaculture initiatives in Kakuma.
            </p>
            <div className="pt-2">
              <Link
                href="/partner-with-us"
                className="inline-flex items-center px-7 py-3.5 bg-white text-[#1B5E20] hover:bg-gray-100 font-extrabold text-sm uppercase tracking-wider rounded-none transition-colors shadow-md group"
              >
                <span>Become an Institutional Partner</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
