import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AC Repair & Installation Gallery — Work Portfolio',
  description: 'See our AC repair, installation, and maintenance work in Jeddah. Real photos from real jobs across all Jeddah districts. Professional workmanship by certified technicians.',
  keywords: ['AC repair work Jeddah', 'AC installation gallery', 'AC repair photos Jeddah', 'HVAC portfolio Jeddah'],
  openGraph: {
    title: 'AC Repair & Installation Gallery — AC Pro Jeddah',
    description: 'Browse our portfolio of AC repair, installation, and maintenance work across Jeddah.',
    url: 'https://acprojeddah.sa/gallery',
  },
  alternates: { canonical: 'https://acprojeddah.sa/gallery' },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
