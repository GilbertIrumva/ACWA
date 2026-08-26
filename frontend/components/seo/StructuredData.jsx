import React from 'react';

export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://acwakenya.org';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'ARISE COMMUNITY WELFARE ACCESS (ACWA)',
    alternateName: 'ACWA Kenya',
    url: baseUrl,
    logo: `${baseUrl}/logo.jpg`,
    description:
      'A Community Based Organization registered under Act No. 30 of 2021 in Kenya working with refugees and host communities through peacebuilding, education, child welfare, livelihoods, and health.',
    foundingDate: '2024',
    registrationDate: '2025',
    identifier: 'Reg. No. DSD/23/124/02/152725',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kakuma Refugee Camp',
      addressRegion: 'Turkana County',
      addressCountry: 'Kenya',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254727236976',
      contactType: 'Community Lead',
      name: 'OMBENI MASUMBUKO',
      email: 'arisecwel.acces@gmail.com',
    },
    sameAs: [
      'https://www.linkedin.com/in/arise-community-welfare-access-acwa-65a81635b/',
    ],
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Kakuma, Turkana County, Kenya',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ACWA Kenya',
    url: baseUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
