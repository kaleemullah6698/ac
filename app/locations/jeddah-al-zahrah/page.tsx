import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import { ServiceCard, ReviewCard } from '@/components/LocationCards';

export const metadata: Metadata = {
  title: 'AC Repair Al Zahrah Jeddah | Local AC Technicians — Same Day',
  description: 'Professional AC repair in Al Zahrah, Jeddah. Same-day service, certified local technicians. Split AC, central AC, all brands. Emergency service available 24/7 in Al Zahrah. Call now!',
  keywords: ['AC repair Al Zahrah Jeddah', 'air conditioner repair Al Zahrah', 'AC technician Al Zahrah', 'AC service Al Zahrah Jeddah', 'fridge repair Al Zahrah Jeddah'],
  openGraph: {
    title: 'AC Repair Al Zahrah Jeddah | Same-Day Local Service',
    description: 'Expert AC and refrigerator repair in Al Zahrah, Jeddah. Certified local technicians, fast response, all brands.',
    url: 'https://acprojeddah.sa/locations/jeddah-al-zahrah',
  },
  alternates: { canonical: 'https://acprojeddah.sa/locations/jeddah-al-zahrah' },
};

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AC Repair in Al Zahrah, Jeddah',
  provider: { '@type': 'LocalBusiness', name: 'AC Pro Jeddah', telephone: '+966500000000' },
  areaServed: { '@type': 'Place', name: 'Al Zahrah, Jeddah, Saudi Arabia' },
  description: 'Same-day AC and refrigerator repair service in Al Zahrah district, Southern Jeddah. All brands, certified technicians.',
};

const LOCAL_FAQS = [
  { question: 'How fast can you reach Al Zahrah for AC repair?', answer: 'Our technicians can reach any location in Al Zahrah within 30–45 minutes. We have service vehicles positioned in southern Jeddah for fast coverage of Al Zahrah, Al Safa, and Al Faisaliyah neighborhoods.' },
  { question: 'Do you repair central AC systems in Al Zahrah villas?', answer: 'Yes. Al Zahrah has many villa compounds with large central AC systems. Our technicians are certified to maintain and repair ducted and central AC units of all capacities and brands.' },
  { question: 'Is weekend AC repair available in Al Zahrah?', answer: 'Absolutely. We offer 24/7 AC repair in Al Zahrah including Fridays, Saturdays, and all Saudi public holidays. Weekend and holiday calls are handled at the same rate — no extra charges.' },
  { question: 'Do you service commercial ACs in Al Zahrah?', answer: 'Yes. We service commercial air conditioning systems for shops, restaurants, offices, and commercial buildings along Al Zahrah\'s main roads and commercial areas. Annual maintenance contracts are available.' },
];

const REVIEWS = [
  { name: 'Sultan Al-Harbi', location: 'Al Zahrah, Jeddah', text: 'My split AC stopped cooling completely in July. AC Pro Jeddah sent a technician to Al Zahrah within 40 minutes. Gas refill and coil cleaning — working perfectly now. Excellent service.', rating: 5 },
  { name: 'Noura Al-Ghamdi', location: 'Al Zahrah, Jeddah', text: 'We have a villa in Al Zahrah with 6 AC units. AC Pro Jeddah handles our annual maintenance contract. Every scheduled visit is on time, thorough, and professional. Highly recommend for Al Zahrah residents.', rating: 5 },
  { name: 'Ahmed Al-Dossari', location: 'Al Zahrah, Jeddah', text: 'Emergency fridge repair on a Friday evening in Al Zahrah. Technician arrived within an hour, fixed the compressor issue, and the price was very fair. Saved us from losing all our food.', rating: 5 },
];

const SERVICES = [
  { href: '/services/ac-repair', title: 'AC Repair in Al Zahrah', desc: 'Fast AC repair for all brands in Al Zahrah, Jeddah. Split AC, central AC, wall units — all cooling problems fixed same day.' },
  { href: '/services/fridge-repair', title: 'Fridge Repair in Al Zahrah', desc: 'Same-day refrigerator and freezer repair in Al Zahrah. Emergency service available around the clock for food emergencies.' },
  { href: '/services/installation', title: 'AC Installation in Al Zahrah', desc: 'Professional split and central AC installation for homes and businesses in Al Zahrah. Clean work, certified installers.' },
  { href: '/services/ac-maintenance', title: 'AC Maintenance in Al Zahrah', desc: 'Scheduled maintenance and AMC plans for Al Zahrah homes and villa compounds. Protect your AC investment year-round.' },
];

export default function AlZahrahPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <section style={{ background: 'var(--navy)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'var(--green)', fontSize: '0.85rem' }}>Al Zahrah, Jeddah</span>
          </div>
          <span className="section-label">Al Zahrah — Southern Jeddah</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4.5vw, 2.875rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.1 }}>
            AC Repair in Al Zahrah, Jeddah —<br />
            <span style={{ color: 'var(--green)' }}>Local Technicians, Same Day</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '2.25rem', maxWidth: '580px' }}>
            Professional AC repair and maintenance in Al Zahrah, one of southern Jeddah&apos;s most established residential districts. From the villa compounds along Prince Sultan Road to the apartments near Al Zahrah Commercial Center, our local technicians cover all of Al Zahrah with same-day service. Whether your split AC stopped cooling or your central system needs a full inspection — we are your trusted AC service provider in Al Zahrah, Jeddah.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="https://wa.me/966500000000?text=I%20need%20AC%20repair%20in%20Al%20Zahrah%2C%20Jeddah" target="_blank" rel="noopener noreferrer" className="btn-primary" id="zahrah-whatsapp">WhatsApp — Fast Response</a>
            <a href="tel:+966500000000" className="btn-outline-white" id="zahrah-call">Call Now</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label">Services in Al Zahrah</span>
          <h2 className="section-title">AC &amp; Fridge Services in Al Zahrah, Jeddah</h2>
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
          <h2 className="section-title">Why Local Matters for AC Repair in Al Zahrah</h2>
          <div className="divider" />
          <div style={{ maxWidth: '700px' }}>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
              Al Zahrah is a diverse district spanning residential villas, apartment complexes, and commercial properties. When your AC breaks in Al Zahrah&apos;s summer heat, you need a technician who is already nearby — not one driving across the city from north Jeddah.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
              Our service team includes technicians positioned in southern Jeddah who can reach any address in Al Zahrah within 30–45 minutes. We are familiar with the common AC configurations in Al Zahrah homes — from the large central ducted systems in villa compounds to the split units in the residential towers along King Fahd Road.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
              Being local means faster response times, lower costs (no long drive charges), and technicians who already know the common HVAC issues affecting Al Zahrah properties.
            </p>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ background: 'var(--white)', padding: '3rem 0' }}>
        <div className="container-custom">
          <div style={{ width: '100%', height: '280px', background: 'var(--gray-200)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', flexDirection: 'column', gap: '0.75rem' }}>
            <svg width="40" height="40" fill="none" stroke="var(--gray-400)" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span style={{ color: 'var(--gray-400)', fontSize: '0.9rem' }}>Al Zahrah, Southern Jeddah, Saudi Arabia</span>
            <a href="https://maps.google.com/?q=Al+Zahrah+Jeddah" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>Open in Google Maps</a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label">Al Zahrah Reviews</span>
          <h2 className="section-title">What Al Zahrah Customers Say</h2>
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
            {REVIEWS.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
      </section>

      <FAQ faqs={LOCAL_FAQS} title="AC Repair in Al Zahrah — FAQ" />
      <CTASection title="Need AC Repair in Al Zahrah, Jeddah?" subtitle="Al Zahrah is fully covered 24/7. WhatsApp or call us now and our nearest technician will be at your door within 30 minutes." />
    </>
  );
}
