import React from 'react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import PartnershipForm from '../../components/forms/PartnershipForm';
import { Handshake, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Partner With ACWA | Institutional Collaboration',
  description:
    'ACWA welcomes partnerships with NGOs, donors, government institutions, and humanitarian agencies in Kakuma, Kenya.',
};

export default function PartnerWithUsPage() {
  const stakeholderGallery = [
    { src: '/IMG-20251129-WA0027.jpg', title: 'Field Team & Community Leaders', caption: 'ACWA executive committee and village leaders reviewing project goals.' },
    { src: '/IMG_20260223_081540_318.jpg', title: 'Educational Support Distribution', caption: 'Joint distribution of learning materials and scholastic packages.' },
    { src: '/get-in-touch.jpg', title: 'Stakeholder Consultation', caption: 'Engaging local government and institutional partners in Turkana.' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Editorial Hero Header */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden py-20 sm:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/IMG_20251124_172345_679.jpg"
            alt="ACWA community partnerships and youth workshops in Kakuma"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/65 z-10" />
        </div>

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-6 text-left">
            <span className="text-[#4CAF50] font-bold text-xs uppercase tracking-[3px] block">
              INSTITUTIONAL COLLABORATION
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Stronger Communities Are Built Together
            </h1>
            <div className="border-l-4 border-[#4CAF50] pl-6 my-4">
              <p className="text-lg text-white/90 leading-relaxed font-normal">
                ARISE COMMUNITY WELFARE ACCESS (ACWA) offers deep local roots, community trust, and agile field execution across Kakuma Refugee Camp and Turkana host villages.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Partnership Inquiry & Why Partner Grid */}
      <section className="bg-white dark:bg-[#042F20]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: What ACWA Offers */}
            <div className="lg:col-span-5 space-y-8">
              <SectionHeading
                badge="WHY PARTNER WITH ACWA"
                title="Your Reliable Local Execution Partner in Kakuma"
                subtitle="We bridge international humanitarian objectives with authentic grassroots implementation."
              />

              <div className="space-y-4">
                <div className="p-6 bg-[#F9FAFB] dark:bg-[#064E3B]/40 border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] space-y-2">
                  <div className="flex items-center space-x-2 text-[#2E7D32] dark:text-[#4CAF50] font-bold text-base">
                    <ShieldCheck className="w-5 h-5 text-[#2E7D32] dark:text-[#4CAF50]" />
                    <span>Legal Compliance</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    Registered under the Community Groups Registration Act No. 30 of 2021 in Kenya (2025). Full statutory compliance and local accountability.
                  </p>
                </div>

                <div className="p-6 bg-[#F9FAFB] dark:bg-[#064E3B]/40 border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] space-y-2">
                  <div className="flex items-center space-x-2 text-[#2E7D32] dark:text-[#4CAF50] font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 text-[#2E7D32] dark:text-[#4CAF50]" />
                    <span>Dual Community Focus</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    Proven track record working simultaneously with refugee camp residents and Turkana host communities to ensure peaceful co-existence.
                  </p>
                </div>

                <div className="p-6 bg-[#F9FAFB] dark:bg-[#064E3B]/40 border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] space-y-2">
                  <div className="flex items-center space-x-2 text-[#2E7D32] dark:text-[#4CAF50] font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 text-[#2E7D32] dark:text-[#4CAF50]" />
                    <span>Financial Stewardship</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    Strict financial reporting, zero tolerance for corruption, and transparent resource utilization verified by community committees.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Partnership Inquiry Form */}
            <div className="lg:col-span-7">
              <PartnershipForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Stakeholder Field Action Photo Gallery */}
      <section className="py-20 bg-[#F9FAFB] dark:bg-[#042F20] transition-colors duration-200">
        <Container>
          <SectionHeading
            badge="STAKEHOLDER ENGAGEMENT IN PICTURES"
            title="Partnership & Field Coordination"
            subtitle="Documenting collaboration with local leaders, schools, and institutional supporters."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stakeholderGallery.map((photo, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-[#064E3B]/40 rounded-none border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] overflow-hidden shadow-sm hover:shadow-md transition-all p-4 space-y-4"
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
                  <h4 className="font-serif font-bold text-lg text-gray-900 dark:text-white">{photo.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
