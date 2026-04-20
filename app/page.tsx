import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ServiceAreas from '@/components/ServiceAreas';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'AC Repair Jeddah | Fast AC & Refrigerator Repair — Same Day Service',
  description: 'Looking for AC repair in Jeddah? AC Pro Jeddah offers fast, reliable same-day AC and refrigerator repair. Certified technicians, 24/7 emergency service, all brands. Call now!',
  keywords: ['AC repair Jeddah', 'AC technician Jeddah', 'fridge repair Jeddah', 'refrigerator repair Jeddah', 'emergency AC service Jeddah', 'AC installation Jeddah', 'split AC repair Jeddah'],
  openGraph: {
    title: 'AC Repair Jeddah | Fast AC & Refrigerator Repair — Same Day Service',
    description: 'Fast, reliable AC and refrigerator repair services across all Jeddah districts. Certified technicians, 24/7 emergency support, transparent pricing.',
    url: 'https://acprojeddah.sa',
  },
  alternates: { canonical: 'https://acprojeddah.sa' },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <CTASection />
    </>
  );
}