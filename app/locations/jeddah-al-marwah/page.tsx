import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import { ServiceCard, ReviewCard } from '@/components/LocationCards';

export const metadata: Metadata = {
  title: 'AC Repair Al Marwah Jeddah | Local AC Technicians — Fast Service',
  description: 'Professional AC repair in Al Marwah, Jeddah. Fast same-day service by local certified technicians. All AC brands repaired. Emergency 24/7 service available. Call or WhatsApp now!',
  keywords: ['AC repair Al Marwah Jeddah', 'air conditioner repair Al Marwah', 'AC technician Al Marwah', 'AC service Al Marwah Jeddah', 'fridge repair Al Marwah Jeddah'],
  openGraph: {
    title: 'AC Repair Al Marwah Jeddah | Fast Local Service',
    description: 'Expert AC and refrigerator repair in Al Marwah, Jeddah. Local technicians, same-day dispatch, all brands serviced.',
    url: 'https://acprojeddah.sa/locations/jeddah-al-marwah',
  },
  alternates: { canonical: 'https://acprojeddah.sa/locations/jeddah-al-marwah' },
};

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AC Repair in Al Marwah, Jeddah',
  provider: { '@type': 'LocalBusiness', name: 'AC Pro Jeddah', telephone: '+966500000000' },
  areaServed: { '@type': 'Place', name: 'Al Marwah, Jeddah, Saudi Arabia' },
  description: 'Same-day AC and refrigerator repair service in Al Marwah district, Central Jeddah. All brands, certified technicians.',
};

const LOCAL_FAQS = [
  { question: 'How quickly can you arrive in Al Marwah for AC repair?', answer: 'We typically reach Al Marwah locations within 25–40 minutes. Our central Jeddah team covers Al Marwah, Al Sharafiyah, and neighboring areas with priority dispatch for emergency calls.' },
  { question: 'Do you work with older AC units in Al Marwah apartments?', answer: 'Absolutely. Many buildings in Al Marwah have older window ACs and split units. Our technicians carry parts for older models and can service, repair, or advise on replacement for aging units — all major brands covered.' },
  { question: 'Can you install new AC in Al Marwah?', answer: 'Yes. We offer professional AC installation in Al Marwah for both new construction and replacements. We install split units, ceiling cassette units, and can coordinate central AC installations for larger properties.' },
  { question: 'Is there extra charge for Al Marwah service?', answer: 'No. Al Marwah is within our core Jeddah service area. There are no transport surcharges or extra fees. You pay only for the repair work, with a transparent quote given before work begins.' },
];

const REVIEWS = [
  { name: 'Bandar Al-Otaibi', location: 'Al Marwah, Jeddah', text: 'Called for emergency AC repair in Al Marwah at 10pm. Technician arrived by 10:35pm. Turned out to be a PCB issue — replaced on the spot with genuine part. Outstanding after-hours service.', rating: 5 },
  { name: 'Sara Al-Mutairi', location: 'Al Marwah, Jeddah', text: 'Our LG fridge started making strange noises. AC Pro Jeddah diagnosed the fan motor issue in Al Marwah and had the replacement done in under an hour. Very professional and clean work.', rating: 5 },
  { name: 'Khalid Al-Anazi', location: 'Al Marwah, Jeddah', text: 'Booked an annual maintenance contract for my 3-bedroom apartment in Al Marwah. Two visits so far — always on time, always thorough. The AC is running better than when it was new. Great value.', rating: 5 },
];

const SERVICES = [
  { href: '/services/ac-repair', title: 'AC Repair in Al Marwah', desc: 'Expert air conditioner repair in Al Marwah for all brands and models. Split AC, window units, central systems — all cooling issues resolved.' },
  { href: '/services/fridge-repair', title: 'Fridge Repair in Al Marwah', desc: 'Same-day refrigerator repair in Al Marwah, Jeddah. Samsung, LG, Bosch, and all other brands. 24/7 emergency available.' },
  { href: '/services/installation', title: 'AC Installation in Al Marwah', desc: 'New AC installation for apartments, homes, and offices in Al Marwah. Professional pipework, wiring, and commissioning.' },
  { href: '/services/ac-maintenance', title: 'AC Maintenance in Al Marwah', desc: 'Scheduled AC servicing and annual contracts for Al Marwah residents. Keep your AC efficient through Jeddah\'s demanding climate.' },
];

export default function AlMarwahPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <section style={{ background: 'var(--navy)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'var(--green)', fontSize: '0.85rem' }}>Al Marwah, Jeddah</span>
          </div>
          <span className="section-label">Al Marwah — Central Jeddah</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4.5vw, 2.875rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.1 }}>
            AC Repair in Al Marwah, Jeddah —<br />
            <span style={{ color: 'var(--green)' }}>Fast Local Technicians</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '2.25rem', maxWidth: '580px' }}>
            Looking for AC repair in Al Marwah, Jeddah? You are in the right place. Al Marwah sits at the heart of central Jeddah, near the historic Al Balad district and Palestine Street — and our local technicians are positioned to reach you fast. Whether you live in the residential buildings along Madinah Road or the newer developments near Al Marwah Plaza, we provide same-day AC and refrigerator repair with certified technicians who know this neighborhood inside out.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="https://wa.me/966500000000?text=I%20need%20AC%20repair%20in%20Al%20Marwah%2C%20Jeddah" target="_blank" rel="noopener noreferrer" className="btn-primary" id="marwah-whatsapp">WhatsApp — Fast Response</a>
            <a href="tel:+966500000000" className="btn-outline-white" id="marwah-call">Call Now</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label">Services in Al Marwah</span>
          <h2 className="section-title">AC &amp; Fridge Services in Al Marwah, Jeddah</h2>
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
            {SERVICES.map((s) => <ServiceCard key={s.href} {...s} />)}
          </div>
        </div>
      </section>

      {/* Why local matters */}
      <section className="section-padding" style={{ background: 'var(--gray-soft)' }}>
        <div className="container-custom">
          <span className="section-label">Local Advantage</span>
          <h2 className="section-title">Why Choose Local AC Service in Al Marwah</h2>
          <div className="divider" />
          <div style={{ maxWidth: '700px' }}>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
              Al Marwah is one of central Jeddah&apos;s busiest mixed-use districts, home to residential apartments, small businesses, and commercial offices. Many of the buildings in Al Marwah were built in the 1990s and 2000s, which means AC units that are working harder than ever in Jeddah&apos;s increasingly hot summers.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
              Our central Jeddah technicians specialize in servicing the mixed AC setups common in Al Marwah — from older window units in established apartments to modern split systems in renovated properties. We understand the wiring configurations, building access logistics, and common failure points specific to this area.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
              Located next to Al Sharafiyah and a short drive from Al Balad, our Al Marwah service team provides the fastest possible response in central Jeddah. No waiting hours for a technician to cross the city — we are already nearby.
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ background: 'var(--white)', padding: '3rem 0' }}>
        <div className="container-custom">
          <div style={{ width: '100%', height: '280px', background: 'var(--gray-200)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', flexDirection: 'column', gap: '0.75rem' }}>
            <svg width="40" height="40" fill="none" stroke="var(--gray-400)" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span style={{ color: 'var(--gray-400)', fontSize: '0.9rem' }}>Al Marwah, Central Jeddah, Saudi Arabia</span>
            <a href="https://maps.google.com/?q=Al+Marwah+Jeddah" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>Open in Google Maps</a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label">Al Marwah Reviews</span>
          <h2 className="section-title">What Al Marwah Customers Say</h2>
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
            {REVIEWS.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
      </section>

      <FAQ faqs={LOCAL_FAQS} title="AC Repair in Al Marwah — FAQ" />
      <CTASection title="Need AC Repair in Al Marwah, Jeddah?" subtitle="Al Marwah is fully covered. Our central Jeddah team responds within 25–40 minutes. WhatsApp for the fastest service." />
    </>
  );
}
