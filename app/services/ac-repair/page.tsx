import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'AC Repair in Jeddah | Same-Day Air Conditioner Repair Service',
  description: 'Professional AC repair service in Jeddah. We fix all AC brands — Samsung, LG, Gree, Carrier, Daikin and more. Same-day service, 24/7 emergency support. Call now!',
  keywords: ['AC repair Jeddah', 'air conditioner repair Jeddah', 'split AC repair Jeddah', 'AC service Jeddah', 'AC technician Jeddah', 'emergency AC repair Jeddah'],
  openGraph: {
    title: 'AC Repair in Jeddah | Same-Day Air Conditioner Repair Service',
    description: 'Expert AC repair in Jeddah. All brands, same-day service, 24/7 availability.',
    url: 'https://acprojeddah.sa/services/ac-repair',
  },
  alternates: { canonical: 'https://acprojeddah.sa/services/ac-repair' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AC Repair in Jeddah',
  provider: {
    '@type': 'LocalBusiness',
    name: 'AC Pro Jeddah',
    telephone: '+966500000000',
    address: { '@type': 'PostalAddress', addressLocality: 'Jeddah', addressCountry: 'SA' },
  },
  areaServed: { '@type': 'City', name: 'Jeddah' },
  description: 'Professional AC repair service in Jeddah, Saudi Arabia. All brands and models serviced. Same-day emergency response.',
  serviceType: 'AC Repair',
};

const AC_FAQS = [
  { question: 'How quickly can you repair my AC in Jeddah?', answer: 'We offer same-day AC repair across all Jeddah districts. A technician is typically dispatched within 30–60 minutes of your call.' },
  { question: 'Which AC brands do you repair in Jeddah?', answer: 'We repair all brands including Samsung, LG, Gree, Midea, Carrier, York, Daikin, Panasonic, Haier, Hisense, Toshiba, and all other brands available in Saudi Arabia.' },
  { question: 'What are the most common AC problems you fix?', answer: 'Common issues include no cooling or weak cooling, AC not turning on, refrigerant gas leaks, noisy compressor, water leaking, ice forming on coils, and electrical faults.' },
  { question: 'Do you offer AC gas refill services in Jeddah?', answer: 'Yes. We perform refrigerant (freon) gas refills for all AC types. We also detect and fix the root cause of gas leaks before refilling.' },
  { question: 'Is emergency 24/7 AC repair available in Jeddah?', answer: 'Absolutely. We operate 24 hours a day, 7 days a week including weekends and Saudi public holidays.' },
];

const PROBLEMS = [
  { icon: '❄️', title: 'No Cooling / Weak Cooling', desc: 'Low refrigerant, dirty coils, or compressor fault' },
  { icon: '💧', title: 'Water Leaking Inside', desc: 'Blocked drain pipe or evaporator ice buildup' },
  { icon: '🔊', title: 'Strange Noises', desc: 'Loose parts, worn bearings, or fan blade issue' },
  { icon: '⚡', title: 'AC Won\'t Turn On', desc: 'Electrical fault, PCB failure, or capacitor problem' },
  { icon: '🌡️', title: 'AC Runs But No Cold Air', desc: 'Gas leak, dirty filter, or expansion valve fault' },
  { icon: '📡', title: 'Remote / Control Issues', desc: 'PCB board failure or sensor malfunction' },
];

export default function ACRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <Link href="/services/ac-repair" style={{ color: 'var(--green)', fontSize: '0.85rem', textDecoration: 'none' }}>AC Repair</Link>
          </div>
          <div style={{ maxWidth: '700px' }}>
            <span className="section-label">AC Repair Service</span>
            <h1 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4.5vw, 2.875rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.1 }}>
              AC Repair in Jeddah —<br />
              <span style={{ color: 'var(--green)' }}>Fast, Reliable, Same-Day</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '2.25rem', maxWidth: '580px' }}>
              Expert air conditioner repair for all brands and models in Jeddah. Our certified technicians diagnose and fix the problem right — the first time.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="https://wa.me/966500000000?text=I%20need%20AC%20repair%20in%20Jeddah" target="_blank" rel="noopener noreferrer" className="btn-primary" id="ac-repair-whatsapp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp for Fast Repair
              </a>
              <a href="tel:+966500000000" className="btn-outline-white" id="ac-repair-call">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.2 12.1a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problems we solve */}
      <section className="section-padding" style={{ background: 'var(--white)' }}>
        <div className="container-custom">
          <span className="section-label">Common AC Problems</span>
          <h2 className="section-title">AC Issues We Fix in Jeddah</h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
            Our expert technicians in Jeddah diagnose and repair all types of AC faults — quickly and correctly the first time.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {PROBLEMS.map((p) => (
              <div key={p.title} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.25rem 1.5rem' }}>
                <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding" style={{ background: 'var(--gray-soft)' }}>
        <div className="container-custom">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Our AC Repair Process in Jeddah</h2>
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            {[
              { step: '01', title: 'Contact Us', desc: 'WhatsApp or call us. We confirm your address and send a technician immediately.' },
              { step: '02', title: 'Diagnosis', desc: 'Our technician performs a full AC diagnosis and explains the problem clearly.' },
              { step: '03', title: 'Get a Quote', desc: 'You receive a transparent fixed price before any work begins — no surprises.' },
              { step: '04', title: 'Repair & Test', desc: 'We fix the issue with genuine parts and test the AC thoroughly before leaving.' },
            ].map((s) => (
              <div key={s.step} style={{ textAlign: 'center', padding: '1.75rem 1.25rem' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--green)', marginBottom: '0.5rem', lineHeight: 1 }}>{s.step}</div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ faqs={AC_FAQS} title="AC Repair Questions — Jeddah" />
      <CTASection title="Need AC Repair in Jeddah?" subtitle="Fast same-day service available. WhatsApp us for the quickest response — our technician will be at your door within the hour." />
    </>
  );
}
