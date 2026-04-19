import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: 'AC & Refrigerator Repair Jeddah | 24/7 Emergency Service',
    template: '%s | Jeddah AC Repair'
  },
  description: 'Professional AC repair, refrigerator repair, and maintenance services in Jeddah. Same-day service, certified technicians, affordable rates. Call now for emergency AC service in Jeddah.',
  keywords: 'AC repair Jeddah, refrigerator repair Jeddah, emergency AC service Jeddah, fridge technician Jeddah, air conditioner repair Jeddah, AC maintenance Jeddah',
  authors: [{ name: 'Jeddah AC Repair' }],
  creator: 'Jeddah AC Repair',
  publisher: 'Jeddah AC Repair',
  openGraph: {
    title: 'Professional AC & Refrigerator Repair Services in Jeddah',
    description: 'Fast, reliable, same-day AC and refrigerator repair services across Jeddah. 24/7 emergency service available.',
    url: 'https://jeddahacrepair.com',
    siteName: 'Jeddah AC Repair',
    locale: 'en_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AC & Refrigerator Repair Jeddah | 24/7 Service',
    description: 'Professional AC and refrigerator repair services in Jeddah. Same-day service available.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Jeddah AC Repair",
              "image": "https://jeddahacrepair.com/logo.png",
              "@id": "https://jeddahacrepair.com",
              "url": "https://jeddahacrepair.com",
              "telephone": "+966-12-345-6789",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "King Abdulaziz Road",
                "addressLocality": "Jeddah",
                "addressRegion": "Makkah",
                "postalCode": "22233",
                "addressCountry": "SA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 21.5433,
                "longitude": 39.1728
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              ],
              "priceRange": "SAR",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Jeddah"
                },
                {
                  "@type": "State",
                  "name": "Makkah"
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "AC Repair",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Jeddah AC Repair"
              },
              "areaServed": {
                "@type": "City",
                "name": "Jeddah"
              },
              "description": "Professional AC repair services in Jeddah with same-day service and certified technicians"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomBar />
      </body>
    </html>
  );
}