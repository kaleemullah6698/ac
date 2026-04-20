import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import { ServiceCard, ReviewCard } from '@/components/LocationCards';

export const metadata: Metadata = {
  title: 'AC Repair Al Hamra Jeddah | Refrigerator Repair Al Hamra',
  description: 'Professional AC and refrigerator repair in Al Hamra, Jeddah. Same-day service, certified technicians. Serving Al Hamra and surrounding areas. Call now!',
  keywords: ['AC repair Al Hamra Jeddah', 'fridge repair Al Hamra Jeddah', 'AC technician Al Hamra', 'refrigerator repair Al Hamra Jeddah'],
  openGraph: {
    title: 'AC Repair Al Hamra Jeddah | Same-Day Service',
    description: 'Expert AC and refrigerator repair services in Al Hamra, Jeddah. Fast response, certified technicians.',
    url: 'https://acprojeddah.sa/locations/jeddah-al-hamra',
  },
  alternates: { canonical: 'https://acprojeddah.sa/locations/jeddah-al-hamra' },
};

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AC Repair in Al Hamra, Jeddah',
  provider: { '@type': 'LocalBusiness', name: 'AC Pro Jeddah', telephone: '+966500000000' },
  areaServed: { '@type': 'Place', name: 'Al Hamra, Jeddah, Saudi Arabia' },
  description: 'Same-day AC and refrigerator repair service in Al Hamra, Jeddah.',
};

const LOCAL_FAQS = [
  { question: 'Do you provide AC repair in Al Hamra, Jeddah?', answer: 'Yes, Al Hamra is one of our primary service areas. We have technicians stationed nearby and can reach most Al Hamra addresses within 30–45 minutes.' },
  { question: 'What services do you offer in Al Hamra?', answer: 'We offer AC repair, refrigerator repair, AC installation, and AC maintenance services throughout Al Hamra and the surrounding North-West Jeddah areas.' },
  { question: 'Is there an emergency AC service covering Al Hamra at night?', answer: 'Yes, our 24/7 emergency service covers Al Hamra. Whether it is 3am or a public holiday, we dispatch a technician to your address.' },
];

const REVIEWS = [
  { name: 'Ibrahim Al-Hamrawi', location: 'Al Hamra, Jeddah', text: 'Called them at 9pm when my AC died. Technician arrived within 45 minutes. Fixed and running by 11pm. Amazing Al Hamra service!', rating: 5 },
  { name: 'Reem Al-Zahrani', location: 'Al Hamra, Jeddah', text: 'Fridge repair in Al Hamra — very professional team. They diagnosed the issue in minutes and had it working same afternoon.', rating: 5 },
  { name: 'Sultan Al-Ghamdi', location: 'Al Hamra, Jeddah', text: 'Best AC service in Al Hamra. Quick, affordable, and the technician was very polite and knowledgeable. Highly recommend.', rating: 5 },
];

const SERVICES = [
  { href: '/services/ac-repair', title: 'AC Repair Al Hamra', desc: 'All AC brands and models repaired same day in Al Hamra. Gas refills, compressor faults, cooling issues.' },
  { href: '/services/fridge-repair', title: 'Fridge Repair Al Hamra', desc: 'Emergency refrigerator repair in Al Hamra. All brands accepted. Same-day diagnosis and fix.' },
  { href: '/services/installation', title: 'AC Installation Al Hamra', desc: 'Professional split and central AC installation in Al Hamra. Competitive pricing, clean finish.' },
];

export default function AlHamraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <section style={{ background: 'var(--navy)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'var(--green)', fontSize: '0.85rem' }}>Al Hamra, Jeddah</span>
          </div>
          <span className="section-label">Al Hamra — Jeddah</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4.5vw, 2.875rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.1 }}>
            AC &amp; Fridge Repair in<br />
            <span style={{ color: 'var(--green)' }}>Al Hamra, Jeddah</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '2.25rem', maxWidth: '580px' }}>
            Fast, same-day AC and refrigerator repair service in Al Hamra. Our technicians know the area and arrive quickly — usually within 30–45 minutes.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="https://wa.me/966500000000?text=I%20need%20AC%20repair%20in%20Al%20Hamra%2C%20Jeddah" target="_blank" rel="noopener noreferrer" className="btn-primary" id="alhamra-whatsapp">WhatsApp — Fast Response</a>
            <a href="tel:+966500000000" className="btn-outline-white" id="alhamra-call">Call Now</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label">Our Services in Al Hamra</span>
          <h2 className="section-title">What We Offer in Al Hamra, Jeddah</h2>
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
            <span style={{ color: 'var(--gray-400)', fontSize: '0.9rem' }}>Al Hamra District, Jeddah, Saudi Arabia</span>
            <a href="https://maps.google.com/?q=Al+Hamra+Jeddah" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>Open in Google Maps</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label">Al Hamra Reviews</span>
          <h2 className="section-title">What Al Hamra Customers Say</h2>
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
            {REVIEWS.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
      </section>

      <FAQ faqs={LOCAL_FAQS} title="AC Repair in Al Hamra — FAQ" />
      <CTASection title="Need AC Repair in Al Hamra, Jeddah?" subtitle="We cover all of Al Hamra. Fast dispatch, certified technicians, same-day service. WhatsApp us now for the quickest response." />
    </>
  );
}
