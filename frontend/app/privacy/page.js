import React from 'react';
import Container from '../../components/ui/Container';

export const metadata = {
  title: 'Privacy Policy | ACWA Kenya',
  description: 'Privacy Policy for ARISE COMMUNITY WELFARE ACCESS (ACWA).',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container size="small">
        <div className="space-y-8 bg-[#F0FDF4] p-8 sm:p-12 rounded-3xl border border-[#16A34A]/15 shadow-sm">
          <span className="text-xs font-bold text-[#2E7D32] uppercase tracking-wider block">Legal Governance</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#171A17]">Privacy Policy</h1>
          <p className="text-xs text-[#4A5550]">Last Updated: January 2025</p>

          <div className="prose prose-sm text-[#4A5550] space-y-4 leading-relaxed">
            <h2 className="font-serif font-bold text-xl text-[#171A17] pt-4">1. Data Protection Commitment</h2>
            <p>
              ARISE COMMUNITY WELFARE ACCESS (ACWA) respects your privacy and is committed to protecting your personal data in accordance with the Data Protection Act of Kenya and international data protection standards.
            </p>

            <h2 className="font-serif font-bold text-xl text-[#171A17] pt-4">2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide when submitting partnership inquiries, contact messages, or donations. This includes your name, email address, phone number, and organization name.
            </p>

            <h2 className="font-serif font-bold text-xl text-[#171A17] pt-4">3. How Information Is Used</h2>
            <p>
              We use collected information solely to process partnership requests, respond to community inquiries, issue donation receipts, and send organizational field updates. We do not sell or rent personal information to third parties.
            </p>

            <h2 className="font-serif font-bold text-xl text-[#171A17] pt-4">4. Payment Security</h2>
            <p>
              All online donation transactions are processed through encrypted server-side payment gateways. ACWA never stores raw payment card numbers or sensitive banking credentials on public servers.
            </p>

            <h2 className="font-serif font-bold text-xl text-[#171A17] pt-4">5. Contact Data Officer</h2>
            <p>
              For questions regarding our privacy practices or to request data removal, please email <a href="mailto:arisecwel.acces@gmail.com" className="text-[#16A34A] font-semibold underline">arisecwel.acces@gmail.com</a>.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
