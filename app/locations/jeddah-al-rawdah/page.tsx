import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import { ServiceCard, ReviewCard } from '@/components/LocationCards';

export const metadata: Metadata = {
  title: 'AC Repair Al Rawdah Jeddah | Refrigerator Repair Al Rawdah',
  description: 'Professional AC and refrigerator repair in Al Rawdah, Jeddah. Same-day service, certified technicians. Covering Al Rawdah and central Jeddah areas. Call now!',
  keywords: ['AC repair Al Rawdah Jeddah', 'fridge repair Al Rawdah Jeddah', 'AC technician Al Rawdah', 'refrigerator repair Al Rawdah Jeddah'],
  openGraph: {
    title: 'AC Repair Al Rawdah Jeddah | Same-Day Service',
    description: 'Expert AC and refrigerator repair in Al Rawdah, Jeddah. Certified technicians, fast response.',
    url: 'https://acprojeddah.sa/locations/jeddah-al-rawdah',
  },
  alternates: { canonical: 'https://acprojeddah.sa/locations/jeddah-al-rawdah' },
};

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AC Repair in Al Rawdah, Jeddah',
  provider: { '@type': 'LocalBusiness', name: 'AC Pro Jeddah', telephone: '+966500000000' },
  areaServed: { '@type': 'Place', name: 'Al Rawdah, Jeddah, Saudi Arabia' },
  description: 'Same-day AC and refrigerator repair service in Al Rawdah, Central Jeddah.',
};

const LOCAL_FAQS = [
  { question: 'Do you provide AC repair in Al Rawdah, Jeddah?', answer: 'Yes, Al Rawdah is fully covered. We can dispatch a technician to any address in Al Rawdah within 45–60 minutes of your call.' },
  { question: 'Is fridge repair available in Al Rawdah?', answer: 'Yes. We provide same-day refrigerator and freezer repair throughout Al Rawdah and the central Jeddah area.' },
  { question: 'Do you offer maintenance contracts for Al Rawdah residents?', answer: 'Yes, we offer seasonal AC maintenance and annual service contracts for homes and businesses in Al Rawdah.' },
];

const REVIEWS = [
  { name: 'Waleed Al-Shihri', location: 'Al Rawdah, Jeddah', text: 'Fast AC repair in Al Rawdah — had the technician at my door within an hour. Professional and efficient, 10/10.', rating: 5 },
  { name: 'Mona Al-Zahrani', location: 'Al Rawdah, Jeddah', text: 'Brilliant service. My Samsung fridge was fixed in Al Rawdah within the same day. The technician explained everything clearly.', rating: 5 },
  { name: 'Faisal Al-Qahtani', location: 'Al Rawdah, Jeddah', text: 'Called for AC gas refill in Al Rawdah. Arrived quickly, did the job cleanly, and the price was very fair. Will call again.', rating: 5 },
];

const SERVICES = [
  { href: '/services/ac-repair', title: 'AC Repair Al Rawdah', desc: 'Fast AC repair in Al Rawdah for all brands. Cooling issues, gas leaks, electrical faults — all fixed.' },
  { href: '/services/fridge-repair', title: 'Fridge Repair Al Rawdah', desc: 'Same-day refrigerator repair in Al Rawdah. Emergency service available around the clock.' },
  { href: '/services/installation', title: 'AC Installation Al Rawdah', desc: 'Professional AC installation in Al Rawdah. Split units, cassette, and central systems.' },
];

export default function AlRawdahPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <section style={{ background: 'var(--navy)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'var(--green)', fontSize: '0.85rem' }}>Al Rawdah, Jeddah</span>
          </div>
          <span className="section-label">Al Rawdah — Central Jeddah</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4.5vw, 2.875rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.1 }}>
            AC &amp; Fridge Repair in<br />
            <span style={{ color: 'var(--green)' }}>Al Rawdah, Jeddah</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '2.25rem', maxWidth: '580px' }}>
            Trusted AC and refrigerator repair in Al Rawdah, central Jeddah. Same-day dispatch, certified techs, fair pricing.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="https://wa.me/966500000000?text=I%20need%20AC%20repair%20in%20Al%20Rawdah%2C%20Jeddah" target="_blank" rel="noopener noreferrer" className="btn-primary" id="rawdah-whatsapp">WhatsApp — Fast Response</a>
            <a href="tel:+966500000000" className="btn-outline-white" id="rawdah-call">Call Now</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label">Services in Al Rawdah</span>
          <h2 className="section-title">AC &amp; Fridge Services in Al Rawdah</h2>
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
            <span style={{ color: 'var(--gray-400)', fontSize: '0.9rem' }}>Al Rawdah, Central Jeddah, Saudi Arabia</span>
            <a href="https://maps.google.com/?q=Al+Rawdah+Jeddah" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>Open in Google Maps</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label">Al Rawdah Reviews</span>
          <h2 className="section-title">What Al Rawdah Customers Say</h2>
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
            {REVIEWS.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
      </section>

      <FAQ faqs={LOCAL_FAQS} title="AC Repair in Al Rawdah — FAQ" />
      <CTASection title="Need AC Repair in Al Rawdah, Jeddah?" subtitle="Al Rawdah coverage is always available. WhatsApp or call us and our nearest technician will be at your door fast." />
    </>
  );
}
