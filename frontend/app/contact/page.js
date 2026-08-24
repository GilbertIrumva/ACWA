import React from 'react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import ContactForm from '../../components/forms/ContactForm';
import Button from '../../components/ui/Button';
import { MapPin, Phone, Mail, User, ShieldCheck, Heart, Handshake, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | ACWA Kakuma, Kenya',
  description:
    'Get in touch with ARISE COMMUNITY WELFARE ACCESS (ACWA) in Kakuma Refugee Camp, Turkana County, Kenya.',
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      <section className="relative overflow-hidden py-20 sm:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/get-in-touch.jpg"
            alt="ACWA field team and community engagement in Kakuma"
            className="w-full h-full object-cover object-center brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 z-10" />
        </div>

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-xs font-bold text-[#D87532] uppercase tracking-wider block bg-[#16A34A] px-3.5 py-1.5 rounded-full w-max border border-[#22C55E]/40">
              Official Contact & Location
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
              Get in Touch with ACWA
            </h1>
            <p className="text-lg text-[#D5EBD9] leading-relaxed">
              We welcome inquiries from community members, volunteers, donors, and potential institutional partners.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Official Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                badge="Headquarters"
                title="Kakuma Refugee Camp Field Office"
                subtitle="Turkana County, Kenya"
              />

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-[#F0FDF4] dark:bg-[#064E3B]/90 border border-[#16A34A]/15 dark:border-emerald-700/40 shadow-sm space-y-2">
                  <div className="flex items-center space-x-3 text-[#16A34A] dark:text-[#22C55E]">
                    <div className="w-10 h-10 rounded-xl bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center">
                      <User className="w-5 h-5 text-[#A8875A] dark:text-[#D87532]" />
                    </div>
                    <div>
                      <span className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/80 block font-medium">Contact Person</span>
                      <strong className="text-base text-[#171A17] dark:text-[#F0FDF4] font-semibold">OMBENI MASUMBUKO</strong>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#F0FDF4] dark:bg-[#064E3B]/90 border border-[#16A34A]/15 dark:border-emerald-700/40 shadow-sm space-y-2">
                  <div className="flex items-center space-x-3 text-[#16A34A] dark:text-[#22C55E]">
                    <div className="w-10 h-10 rounded-xl bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#A8875A] dark:text-[#D87532]" />
                    </div>
                    <div>
                      <span className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/80 block font-medium">Primary Location</span>
                      <strong className="text-base text-[#171A17] dark:text-[#F0FDF4] font-semibold">Kakuma Refugee Camp, Turkana County, Kenya</strong>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#F0FDF4] dark:bg-[#064E3B]/90 border border-[#16A34A]/15 dark:border-emerald-700/40 shadow-sm space-y-2">
                  <div className="flex items-center space-x-3 text-[#16A34A] dark:text-[#22C55E]">
                    <div className="w-10 h-10 rounded-xl bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#A8875A] dark:text-[#D87532]" />
                    </div>
                    <div>
                      <span className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/80 block font-medium">Official Phone</span>
                      <a href="tel:+254727236976" className="text-base font-semibold text-[#16A34A] dark:text-[#22C55E] hover:underline">
                        +254 727236976
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#F0FDF4] dark:bg-[#064E3B]/90 border border-[#16A34A]/15 dark:border-emerald-700/40 shadow-sm space-y-2">
                  <div className="flex items-center space-x-3 text-[#16A34A] dark:text-[#22C55E]">
                    <div className="w-10 h-10 rounded-xl bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#A8875A] dark:text-[#D87532]" />
                    </div>
                    <div>
                      <span className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/80 block font-medium">Official Email</span>
                      <a href="mailto:arisecwel.acces@gmail.com" className="text-base font-semibold text-[#16A34A] dark:text-[#22C55E] hover:underline break-all">
                        arisecwel.acces@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regulatory status box */}
              <div className="p-6 rounded-2xl bg-[#16A34A] text-[#F0FDF4] space-y-2">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#A8875A] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Registration Credentials</span>
                </div>
                <p className="text-xs text-[#D5EBD9]/80 leading-relaxed">
                  Registered under the Community Groups Registration Act No. 30 of 2021 in Kenya (2025). Official Reg. No. 30 of 2021.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Map / Location Representation */}
      <section className="bg-[#D5EBD9] dark:bg-[#064E3B]/80 py-16 border-y border-[#16A34A]/10 dark:border-emerald-800/30 transition-colors duration-200">
        <Container>
          <div className="bg-[#F0FDF4] dark:bg-[#042F20] p-8 sm:p-12 rounded-3xl border border-[#16A34A]/15 dark:border-emerald-700/40 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-[#A8875A] dark:text-[#D87532] uppercase tracking-wider block">Field Operations Hub</span>
              <h3 className="font-serif font-bold text-3xl text-[#171A17] dark:text-[#F0FDF4]">Kakuma & Turkana West Sub-County</h3>
              <p className="text-sm text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed">
                ACWA operates across Kakuma Refugee Camp zones 1-4, Kalobeyei Integrated Settlement, and surrounding host villages in Turkana County, North Western Kenya.
              </p>
              <div className="flex items-center space-x-4 pt-2 text-xs text-[#16A34A] dark:text-[#22C55E] font-semibold">
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-[#A8875A] dark:text-[#D87532]" />
                  <span>Field Hours: Mon – Fri (8:00 AM – 5:00 PM EAT)</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-2xl bg-[#16A34A] dark:bg-[#064E3B] text-[#F0FDF4] space-y-4 text-center">
                <MapPin className="w-12 h-12 text-[#A8875A] dark:text-[#D87532] mx-auto" />
                <h4 className="font-serif font-bold text-xl text-[#F0FDF4]">Visiting or Coordinating in Kakuma?</h4>
                <p className="text-xs text-[#D5EBD9]/80 max-w-md mx-auto">
                  Prior coordination is required for field visits. Please reach out via email or phone before visiting our camp office.
                </p>
                <div className="pt-2">
                  <Button href="mailto:arisecwel.acces@gmail.com" variant="orange" size="sm">
                    Email Leadership Directly
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Dual CTA Strip */}
      <section>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-[#16A34A] dark:bg-[#064E3B] text-[#F0FDF4] p-8 rounded-3xl space-y-4 border border-[#16A34A] dark:border-emerald-700/40 text-center sm:text-left">
              <Handshake className="w-10 h-10 text-[#A8875A] dark:text-[#D87532]" />
              <h3 className="font-serif font-bold text-2xl text-[#F0FDF4]">Institutional Partnerships</h3>
              <p className="text-xs text-[#D5EBD9]/80 leading-relaxed">
                Looking to partner with an experienced, compliant local CBO in Turkana County?
              </p>
              <Button href="/partner-with-us" variant="orange" size="sm">
                Partner With ACWA
              </Button>
            </div>

            <div className="bg-[#D5EBD9] dark:bg-[#064E3B]/90 text-[#171A17] dark:text-[#F0FDF4] p-8 rounded-3xl space-y-4 border border-[#16A34A]/15 dark:border-emerald-700/40 text-center sm:text-left">
              <Heart className="w-10 h-10 text-[#D87532]" />
              <h3 className="font-serif font-bold text-2xl text-[#171A17] dark:text-[#F0FDF4]">Support Our Programs</h3>
              <p className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed">
                Directly fund peacebuilding, scholastic supplies, and permaculture gardens.
              </p>
              <Button href="/donate" variant="primary" size="sm">
                Donate to ACWA
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
