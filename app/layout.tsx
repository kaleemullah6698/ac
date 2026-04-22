import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileBottomBar from '@/components/MobileBottomBar';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://acprojeddah.sa'),
  title: {
    default: 'AC Repair Jeddah | Professional AC & Refrigerator Repair Services — AC Pro Jeddah',
    template: '%s | AC Pro Jeddah',
  },
  description: 'Expert AC repair, refrigerator repair, and AC installation services in Jeddah, Saudi Arabia. Same-day service, certified technicians, 24/7 emergency support. Call now!',
  keywords: ['AC repair Jeddah', 'air conditioner repair Jeddah', 'refrigerator repair Jeddah', 'fridge repair Jeddah', 'AC installation Jeddah', 'emergency AC service Jeddah', 'فني مكيفات جدة', 'صيانة ثلاجات جدة'],
  authors: [{ name: 'AC Pro Jeddah' }],
  creator: 'AC Pro Jeddah',
  publisher: 'AC Pro Jeddah',
  formatDetection: { telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://acprojeddah.sa',
    siteName: 'AC Pro Jeddah',
    title: 'AC Repair Jeddah | Professional AC & Refrigerator Repair Services',
    description: 'Expert AC and refrigerator repair services in Jeddah. Same-day service, certified technicians, 24/7 emergency support. Serving all Jeddah districts.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AC Pro Jeddah - Professional AC & Refrigerator Repair Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AC Repair Jeddah | Professional AC & Refrigerator Repair Services',
    description: 'Expert AC and refrigerator repair services in Jeddah. Same-day service, certified technicians, 24/7 emergency support.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://acprojeddah.sa',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://acprojeddah.sa',
  name: 'AC Pro Jeddah',
  description: 'Professional AC repair, refrigerator repair, and AC installation services in Jeddah, Saudi Arabia.',
  url: 'https://acprojeddah.sa',
  telephone: '+966500000000',
  priceRange: '$$',
  currenciesAccepted: 'SAR',
  paymentAccepted: 'Cash, Bank Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al Hamra District',
    addressLocality: 'Jeddah',
    addressRegion: 'Makkah Province',
    addressCountry: 'SA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.4858,
    longitude: 39.1925,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: {
    '@type': 'City',
    name: 'Jeddah',
  },
  serviceType: ['AC Repair', 'Refrigerator Repair', 'AC Installation', 'AC Maintenance'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '200',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://wa.me/966500000000',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
        <a href="#main-content" style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomBar />
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}