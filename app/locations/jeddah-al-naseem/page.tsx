import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import { ServiceCard, ReviewCard } from '@/components/LocationCards';

export const metadata: Metadata = {
  title: 'AC Repair Al Naseem Jeddah | Refrigerator Repair Al Naseem',
  description: 'Professional AC and refrigerator repair in Al Naseem, East Jeddah. Same-day service, 24/7 emergency support. Certified technicians serving Al Naseem. Call now!',
  keywords: ['AC repair Al Naseem Jeddah', 'fridge repair Al Naseem Jeddah', 'AC technician Al Naseem', 'refrigerator repair Al Naseem Jeddah', 'east Jeddah AC repair'],
  openGraph: {
    title: 'AC Repair Al Naseem Jeddah | Same-Day Service',
    description: 'Expert AC and refrigerator repair in Al Naseem, East Jeddah. Same-day service, certified technicians.',
    url: 'https://acprojeddah.sa/locations/jeddah-al-naseem',
  },
  alternates: { canonical: 'https://acprojeddah.sa/locations/jeddah-al-naseem' },
};

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AC Repair in Al Naseem, East Jeddah',
  provider: { '@type': 'LocalBusiness', name: 'AC Pro Jeddah', telephone: '+966500000000' },
  areaServed: { '@type': 'Place', name: 'Al Naseem, East Jeddah, Saudi Arabia' },
  description: 'Same-day AC and refrigerator repair in Al Naseem, East Jeddah.',
};

const LOCAL_FAQS = [
  { question: 'Do you provide AC repair in Al Naseem, East Jeddah?', answer: 'Yes, Al Naseem is fully covered. Our technicians serve all parts of Al Naseem and the broader East Jeddah area.' },
  { question: 'Can you fix refrigerators in Al Naseem on the same day?', answer: 'Yes, same-day refrigerator repair is standard in Al Naseem. Call or WhatsApp us and we dispatch immediately.' },
  { question: 'Is AC installation available in Al Naseem?', answer: 'Absolutely. We install all types of AC systems in Al Naseem including split units, cassette ACs, and central/ducted systems.' },
];

const REVIEWS = [
  { name: 'Yousef Al-Naseem', location: 'Al Naseem, Jeddah', text: 'Called at 8am, technician arrived before 9:30am in Al Naseem. AC repaired and working perfectly. Excellent, fast service!', rating: 5 },
  { name: 'Aisha Al-Harbi', location: 'Al Naseem, Jeddah', text: 'Fridge repair in Al Naseem — very impressed. The technician fixed our LG fridge in under 2 hours. Reasonable price too.', rating: 5 },
  { name: 'Omar Al-Subaie', location: 'Al Naseem, Jeddah', text: 'Installed 2 AC units in my Al Naseem apartment. Professional team, clean work, finished on time. Would use again.', rating: 5 },
];

const SERVICES = [
  { href: '/services/ac-repair', title: 'AC Repair Al Naseem', desc: 'Expert AC repair in Al Naseem. All brands, all faults. Same-day response guaranteed.' },
  { href: '/services/fridge-repair', title: 'Fridge Repair Al Naseem', desc: 'Emergency fridge and refrigerator repair in Al Naseem. 24/7 service, all brands accepted.' },
  { href: '/services/installation', title: 'AC Installation Al Naseem', desc: 'Full AC installation service in Al Naseem. Residential and commercial projects.' },
];

export default function AlNaseemPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <section style={{ background: 'var(--navy)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'var(--green)', fontSize: '0.85rem' }}>Al Naseem, Jeddah</span>
          </div>
          <span className="section-label">Al Naseem — East Jeddah</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4.5vw, 2.875rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.1 }}>
            AC &amp; Fridge Repair in<br />
            <span style={{ color: 'var(--green)' }}>Al Naseem, Jeddah</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '2.25rem', maxWidth: '580px' }}>
            Reliable AC and refrigerator repair service covering all of Al Naseem, East Jeddah. Fast technician dispatch, 24/7 availability.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="https://wa.me/966500000000?text=I%20need%20AC%20repair%20in%20Al%20Naseem%2C%20Jeddah" target="_blank" rel="noopener noreferrer" className="btn-primary" id="naseem-whatsapp">WhatsApp — Fast Response</a>
            <a href="tel:+966500000000" className="btn-outline-white" id="naseem-call">Call Now</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label">Services in Al Naseem</span>
          <h2 className="section-title">AC &amp; Fridge Services in Al Naseem</h2>
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
            {SERVICES.map((s) => <ServiceCard key={s.href} {...s} />)}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--gray-soft)', padding: '3rem 0' }}>
        <div className="container-custom">
          <div style={{ width: '100%', height: '280px', background: 'var(--gray-200)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', flexDirection: 'column', gap: '0.75rem' }}>
            <svg width="40" height="40" fill="none" stroke="var(--gray-400)" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span style={{ color: 'var(--gray-400)', fontSize: '0.9rem' }}>Al Naseem, East Jeddah, Saudi Arabia</span>
            <a href="https://maps.google.com/?q=Al+Naseem+Jeddah" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>Open in Google Maps</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label">Al Naseem Reviews</span>
          <h2 className="section-title">What Al Naseem Customers Say</h2>
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
            {REVIEWS.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
      </section>

      <FAQ faqs={LOCAL_FAQS} title="AC Repair in Al Naseem — FAQ" />
      <CTASection title="Need AC Repair in Al Naseem, Jeddah?" subtitle="Full Al Naseem coverage available now. WhatsApp us for the fastest dispatch to your East Jeddah address." />
    </>
  );
}
