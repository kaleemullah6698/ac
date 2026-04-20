import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Emergency AC Repair Jeddah — 24/7 Same-Day Service',
  description: 'Emergency AC repair in Jeddah available 24/7. Same-day service, immediate dispatch. Your AC broke? Call now or WhatsApp for fastest response. Emergency air conditioner repair Jeddah.',
  keywords: ['emergency AC repair Jeddah', 'emergency ac repair near me', 'emergency ac service', '24 hour ac repair', 'same day ac repair Jeddah', 'emergency hvac', 'ac repair today Jeddah', '24/7 AC repair Jeddah'],
  openGraph: {
    title: 'Emergency AC Repair Jeddah — 24/7 Same-Day Service',
    description: 'AC broken? Emergency repair available NOW across all Jeddah districts. Call or WhatsApp for immediate technician dispatch.',
    url: 'https://acprojeddah.sa/emergency-ac-repair',
  },
  alternates: { canonical: 'https://acprojeddah.sa/emergency-ac-repair' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Emergency AC Repair in Jeddah',
  provider: {
    '@type': 'LocalBusiness',
    name: 'AC Pro Jeddah',
    telephone: '+966500000000',
    address: { '@type': 'PostalAddress', addressLocality: 'Jeddah', addressCountry: 'SA' },
  },
  areaServed: { '@type': 'City', name: 'Jeddah' },
  description: '24/7 emergency AC repair service in Jeddah. Same-day dispatch, all brands, all districts.',
  serviceType: 'Emergency AC Repair',
  availableChannel: {
    '@type': 'ServiceChannel',
    servicePhone: '+966500000000',
    availableLanguage: ['English', 'Arabic'],
  },
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
};

const EMERGENCIES = [
  { title: 'AC Stopped Completely', desc: 'Total failure in Jeddah summer heat — we dispatch within 30 minutes' },
  { title: 'AC Blowing Hot Air', desc: 'Compressor or gas issue — same-day diagnosis and repair' },
  { title: 'Major Water Leak', desc: 'Flooding from AC unit — emergency technician to stop damage immediately' },
  { title: 'Electrical Fault / Sparking', desc: 'Safety hazard — turn off AC and call us immediately' },
  { title: 'AC Frozen / Ice Buildup', desc: 'Severe gas leak or airflow blockage — needs immediate attention' },
  { title: 'Loud Bang or Grinding', desc: 'Compressor or motor failure — stop running, call for emergency repair' },
];

export default function EmergencyACRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero — Urgency focused */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'radial-gradient(circle at 30% 40%, #EF4444 0%, transparent 50%), radial-gradient(circle at 80% 60%, #F59E0B 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative', textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
          {/* Urgency badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '999px', padding: '0.375rem 1rem', marginBottom: '2rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444', display: 'inline-block', flexShrink: 0, animation: 'pulse 1.5s ease-in-out infinite' }} />
            <span style={{ color: '#FCA5A5', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              EMERGENCY SERVICE · AVAILABLE NOW
            </span>
          </div>

          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.1 }}>
            Emergency AC Repair in Jeddah<br />
            <span style={{ color: '#F59E0B' }}>24/7 Immediate Response</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(1rem, 2.2vw, 1.125rem)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 2.5rem' }}>
            Your AC broke down? Don&apos;t suffer in Jeddah&apos;s heat. Our emergency AC technicians are standing by — we dispatch to your location within 30 minutes. Available 24 hours, 7 days a week, including holidays.
          </p>

          {/* Large CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
            <a href="https://wa.me/966500000000?text=URGENT%20-%20I%20need%20emergency%20AC%20repair%20in%20Jeddah%20NOW" target="_blank" rel="noopener noreferrer" className="btn-primary" id="emergency-whatsapp" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem', width: '100%', maxWidth: '400px', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp — Fastest Response
            </a>
            <a href="tel:+966500000000" id="emergency-call" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '1.125rem', padding: '1rem 2.5rem', width: '100%', maxWidth: '400px', background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '0.5rem', color: 'white', fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s' }}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.2 12.1a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              Call Now — +966 50 000 0000
            </a>
          </div>

          {/* Trust strip */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            {[
              { text: '30-Min Dispatch' },
              { text: '24/7 Available' },
              { text: 'All Brands' },
              { text: 'All Jeddah Districts' },
            ].map((badge) => (
              <div key={badge.text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="16" height="16" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth={2} viewBox="0 0 24 24"><path d="M4.5 12.75l6 6 9-13.5"/></svg>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', fontWeight: 600 }}>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pulse animation */}
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.3); }
          }
        `}</style>
      </section>

      {/* Emergency situations */}
      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label">Emergency Situations</span>
          <h2 className="section-title">AC Emergencies We Handle in Jeddah</h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            When your air conditioner fails in Jeddah&apos;s extreme heat, every minute counts. Our emergency AC repair team handles all urgent situations — same day, every day.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {EMERGENCIES.map((e) => (
              <div key={e.title} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.25rem 1.5rem', borderLeft: '3px solid #F59E0B' }}>
                <svg width="20" height="20" fill="none" stroke="#F59E0B" strokeWidth={1.5} viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>{e.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works - Emergency process */}
      <section className="section-padding" style={{ background: 'var(--gray-soft)' }}>
        <div className="container-custom">
          <span className="section-label">Emergency Process</span>
          <h2 className="section-title">How Emergency AC Repair Works in Jeddah</h2>
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            {[
              { step: '01', title: 'Call or WhatsApp', desc: 'Contact us immediately. Describe the issue briefly — we prioritize based on urgency.' },
              { step: '02', title: 'Instant Dispatch', desc: 'We dispatch our nearest available technician to your location within 30 minutes.' },
              { step: '03', title: 'On-Site Diagnosis', desc: 'Technician diagnoses the problem and gives you a transparent, fixed-price quote.' },
              { step: '04', title: 'Same-Day Fix', desc: 'We repair your AC on the spot. Our vans carry common parts for all major brands.' },
            ].map((s) => (
              <div key={s.step} style={{ textAlign: 'center', padding: '1.75rem 1.25rem' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F59E0B', marginBottom: '0.5rem', lineHeight: 1 }}>{s.step}</div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section style={{ background: '#F59E0B', padding: '3rem 0' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--navy)', fontSize: 'clamp(1.375rem, 3vw, 1.875rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
            Don&apos;t Wait — Your AC Won&apos;t Fix Itself
          </h2>
          <p style={{ color: 'rgba(11,31,59,0.7)', fontSize: '1rem', marginBottom: '1.5rem', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
            The longer you wait, the worse it gets. Emergency AC repair in Jeddah is one WhatsApp message away.
          </p>
          <a href="https://wa.me/966500000000?text=EMERGENCY%20AC%20REPAIR%20NEEDED%20IN%20JEDDAH" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--navy)', color: 'white', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '1rem' }} id="emergency-mid-cta">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Get Emergency Help Now
          </a>
        </div>
      </section>

      {/* Lean internal links — per brief: Homepage + AC Repair only */}
      <section style={{ padding: '2.5rem 0' }}>
        <div className="container-custom" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          <Link href="/" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>← Back to Homepage</Link>
          <Link href="/services/ac-repair" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>AC Repair Services in Jeddah →</Link>
        </div>
      </section>

      <CTASection title="Emergency AC Repair in Jeddah — Available Right Now" subtitle="24/7 same-day emergency AC service. Our technician is ready to dispatch. WhatsApp is the fastest way to reach us." />
    </>
  );
}
