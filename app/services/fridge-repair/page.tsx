import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Refrigerator Repair Jeddah | Fridge Technician — Same Day Service',
  description: 'Professional refrigerator and fridge repair in Jeddah. We fix all brands including Samsung, LG, Bosch, and more. Same-day service, 24/7 emergency support. Call now!',
  keywords: ['refrigerator repair Jeddah', 'fridge repair Jeddah', 'fridge technician Jeddah', 'Samsung fridge repair Jeddah', 'LG fridge repair Jeddah', 'freezer repair Jeddah', 'emergency fridge repair Jeddah'],
  openGraph: {
    title: 'Refrigerator Repair Jeddah | Fridge Technician — Same Day Service',
    description: 'Expert fridge and refrigerator repair in Jeddah. All brands, same-day service, 24/7 emergency.',
    url: 'https://acprojeddah.sa/services/fridge-repair',
  },
  alternates: { canonical: 'https://acprojeddah.sa/services/fridge-repair' },
};

const FRIDGE_FAQS = [
  { question: 'Do you provide emergency fridge repair in Jeddah?', answer: 'Yes, we provide 24/7 emergency refrigerator repair anywhere in Jeddah. We understand that fridge failure means food spoilage, so we prioritize emergency calls.' },
  { question: 'Which refrigerator brands do you repair in Jeddah?', answer: 'We repair all brands including Samsung, LG, Bosch, Siemens, Hitachi, Toshiba, Whirlpool, Daewoo, Haier, and all other brands sold in Saudi Arabia.' },
  { question: 'My fridge is not cooling — what could be wrong?', answer: 'Common causes include low refrigerant gas, faulty compressor, thermostat failure, dirty condenser coils, or a worn door seal. Our technician will diagnose the exact issue.' },
  { question: 'Can you repair a freezer that stopped working?', answer: 'Yes, we repair both refrigerators and standalone freezer units. Freezer issues such as ice buildup, no freezing, or temperature fluctuations are all within our expertise.' },
  { question: 'How much does fridge repair cost in Jeddah?', answer: 'Cost depends on the fault type and required parts. We provide a transparent quote before starting any work so you always know the price upfront.' },
];

const FRIDGE_PROBLEMS = [
  { icon: '🧊', title: 'Not Cooling / No Cold Air', desc: 'Refrigerant leak, faulty compressor, or thermostat issue' },
  { icon: '❄️', title: 'Freezer Stopped Freezing', desc: 'Defrost heater failure or sealed system fault' },
  { icon: '💧', title: 'Water Leaking Inside', desc: 'Blocked defrost drain or damaged door seal' },
  { icon: '🔊', title: 'Loud Unusual Noise', desc: 'Compressor issue or ice buildup on fan' },
  { icon: '💡', title: 'Interior Light Not Working', desc: 'Door switch or bulb/LED failure' },
  { icon: '⚡', title: 'Fridge Won\'t Power On', desc: 'Electrical fault, PCB failure, or power issue' },
];

export default function FridgeRepairPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <Link href="/services/fridge-repair" style={{ color: 'var(--green)', fontSize: '0.85rem', textDecoration: 'none' }}>Fridge Repair</Link>
          </div>
          <div style={{ maxWidth: '700px' }}>
            <span className="section-label">Refrigerator Repair</span>
            <h1 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4.5vw, 2.875rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Refrigerator Repair in Jeddah —<br />
              <span style={{ color: 'var(--green)' }}>All Brands, Same Day</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '2.25rem', maxWidth: '580px' }}>
              Expert fridge and freezer repair for all brands in Jeddah. Emergency same-day service available — save your food and your money.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="https://wa.me/966500000000?text=I%20need%20refrigerator%20repair%20in%20Jeddah" target="_blank" rel="noopener noreferrer" className="btn-primary" id="fridge-repair-whatsapp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Emergency WhatsApp
              </a>
              <a href="tel:+966500000000" className="btn-outline-white" id="fridge-repair-call">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.2 12.1a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problems section */}
      <section className="section-padding" style={{ background: 'var(--white)' }}>
        <div className="container-custom">
          <span className="section-label">What We Fix</span>
          <h2 className="section-title">Fridge Problems We Repair in Jeddah</h2>
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
            {FRIDGE_PROBLEMS.map((p) => (
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

      {/* Brands */}
      <section className="section-padding" style={{ background: 'var(--gray-soft)' }}>
        <div className="container-custom">
          <span className="section-label">Brands We Service</span>
          <h2 className="section-title">All Refrigerator Brands Repaired</h2>
          <div className="divider" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
            {['Samsung', 'LG', 'Bosch', 'Siemens', 'Hitachi', 'Toshiba', 'Whirlpool', 'Daewoo', 'Haier', 'Hisense', 'Panasonic', 'Sharp', 'Beko', 'Candy', 'Zanussi'].map((brand) => (
              <span key={brand} style={{ padding: '0.5rem 1rem', background: 'white', border: '1px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate)' }}>
                {brand}
              </span>
            ))}
            <span style={{ padding: '0.5rem 1rem', background: 'var(--navy)', border: '1px solid var(--navy)', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'white' }}>
              + All Other Brands
            </span>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ faqs={FRIDGE_FAQS} title="Fridge Repair Questions — Jeddah" />
      <CTASection title="Fridge Not Working in Jeddah?" subtitle="Don't let your food spoil. Our emergency repair team is standing by — WhatsApp us now for the fastest response in Jeddah." />
    </>
  );
}
