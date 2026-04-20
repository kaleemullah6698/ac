import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ServiceAreas from '@/components/ServiceAreas';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'AC Repair & Maintenance in Jeddah — Available Now',
  description: 'Professional AC repair, maintenance and installation in Jeddah. Certified technicians, same-day service. Call now or WhatsApp for instant response. صيانة مكيفات جدة',
  keywords: ['AC repair Jeddah', 'ac repair jeddah', 'AC maintenance Jeddah', 'ac maintenance jeddah', 'air conditioner repair Jeddah', 'refrigerator repair Jeddah', 'emergency AC service Jeddah', 'AC installation Jeddah', 'hvac service', 'صيانة مكيفات جدة'],
  openGraph: {
    title: 'AC Repair & Maintenance in Jeddah — Available Now | AC Pro Jeddah',
    description: 'Professional AC repair, maintenance and installation in Jeddah. Certified technicians, same-day service across all districts.',
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