import React from 'react';
import Container from '../../components/ui/Container';

export const metadata = {
  title: 'Terms of Use | ACWA Kenya',
  description: 'Terms of Use for ARISE COMMUNITY WELFARE ACCESS (ACWA).',
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container size="small">
        <div className="space-y-8 bg-[#F0FDF4] p-8 sm:p-12 rounded-3xl border border-[#16A34A]/15 shadow-sm">
          <span className="text-xs font-bold text-[#2E7D32] uppercase tracking-wider block">Legal Governance</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#171A17]">Terms of Use</h1>
          <p className="text-xs text-[#4A5550]">Last Updated: January 2025</p>

          <div className="prose prose-sm text-[#4A5550] space-y-4 leading-relaxed">
            <h2 className="font-serif font-bold text-xl text-[#171A17] pt-4">1. Organization Governance</h2>
            <p>
              ARISE COMMUNITY WELFARE ACCESS (ACWA) is established under the laws of Kenya and registered under the Community Groups Registration Act No. 30 of 2021 (Reg. No. 30 of 2021 in 2025). By using this website, you agree to comply with these terms.
            </p>

            <h2 className="font-serif font-bold text-xl text-[#171A17] pt-4">2. Intellectual Property & Photography</h2>
            <p>
              All community stories, field photographs, and organizational materials published on this website are the property of ACWA or licensed partners. They are provided for informational and non-commercial purposes.
            </p>

            <h2 className="font-serif font-bold text-xl text-[#171A17] pt-4">3. Use of Donation Funds</h2>
            <p>
              Donations contributed through this website are allocated toward ACWA field programs in peacebuilding, education support, child welfare, permaculture, and community health in Turkana County, Kenya.
            </p>

            <h2 className="font-serif font-bold text-xl text-[#171A17] pt-4">4. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the Republic of Kenya.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
