import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import StructuredData from '../components/seo/StructuredData';
import { ThemeProvider } from '../components/providers/ThemeProvider';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://acwakenya.org'),
  title: {
    default: 'ARISE COMMUNITY WELFARE ACCESS (ACWA) | Kenya CBO',
    template: '%s | ACWA Kenya',
  },
  description:
    'ACWA is a Community Based Organization (Reg. No. 30 of 2021) in Kenya working with refugees and host communities through peacebuilding, education, child protection, livelihoods, and health.',
  keywords: [
    'ACWA',
    'Arise Community Welfare Access',
    'Kakuma Refugee Camp',
    'Kenya CBO',
    'peacebuilding Kenya',
    'refugee empowerment',
    'child protection Kakuma',
    'permaculture Turkana',
    'community development Kenya',
  ],
  authors: [{ name: 'ACWA Organization' }],
  creator: 'ACWA',
  publisher: 'ARISE COMMUNITY WELFARE ACCESS',
  openGraph: {
    title: 'ARISE COMMUNITY WELFARE ACCESS (ACWA)',
    description:
      'Building peaceful, empowered and self-reliant refugee and host communities in Kakuma, Turkana County, Kenya.',
    url: 'https://acwakenya.org',
    siteName: 'ACWA Kenya',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARISE COMMUNITY WELFARE ACCESS (ACWA)',
    description:
      'Building peaceful, empowered and self-reliant refugee and host communities in Kakuma, Turkana County, Kenya.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#16A34A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className="bg-[#F0FDF4] dark:bg-[#042F20] text-[#171A17] dark:text-[#F0FDF4] antialiased flex flex-col min-h-screen transition-colors duration-200">
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
