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
    'ACWA is a registered Community Based Organization in Kenya (Reg. No. DSD/23/124/02/152725) empowering refugees and host communities in Kakuma through peacebuilding, education, child protection, livelihoods, and health.',
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
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: 'ARISE COMMUNITY WELFARE ACCESS (ACWA)',
    description:
      'Building peaceful, empowered and self-reliant refugee and host communities in Kakuma, Turkana County, Kenya.',
    url: 'https://acwakenya.org',
    siteName: 'ACWA Kenya',
    images: [
      {
        url: '/ACWA Executive Committee & Field Team.jpg',
        width: 1200,
        height: 630,
        alt: 'ACWA Leadership and Field Team in Kakuma',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARISE COMMUNITY WELFARE ACCESS (ACWA)',
    description:
      'Building peaceful, empowered and self-reliant refugee and host communities in Kakuma, Turkana County, Kenya.',
    images: ['/ACWA Executive Committee & Field Team.jpg'],
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
