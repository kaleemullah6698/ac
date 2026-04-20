import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About AC Pro Jeddah | Trusted AC & Refrigerator Repair Specialists',
  description: 'Learn about AC Pro Jeddah — Jeddah\'s most trusted AC and refrigerator repair company. 10+ years of experience, certified technicians, serving all Jeddah districts.',
  keywords: ['about AC repair company Jeddah', 'AC Pro Jeddah', 'trusted AC technician Jeddah', 'Jeddah HVAC company'],
  openGraph: {
    title: 'About AC Pro Jeddah | Trusted AC & Refrigerator Repair Specialists',
    description: '10+ years serving Jeddah. Certified technicians, 5000+ successful repairs. Discover why we are the most trusted AC repair company in Jeddah.',
    url: 'https://acprojeddah.sa/about',
  },
  alternates: { canonical: 'https://acprojeddah.sa/about' },
};

const STATS = [
  { value: '10+', label: 'Years in Jeddah' },
  { value: '5,000+', label: 'Repairs Completed' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '24/7', label: 'Service Hours' },
];

const TEAM_VALUES = [
  { icon: '🎯', title: 'Honesty First', desc: 'We diagnose accurately and quote fairly. We never recommend unnecessary parts or work.' },
  { icon: '⚡', title: 'Speed & Reliability', desc: 'We understand how critical AC and fridge failures are in Jeddah\'s heat. Fast response is not optional for us.' },
  { icon: '🌟', title: 'Quality Craftsmanship', desc: 'We use genuine OEM parts and follow manufacturer guidelines to ensure lasting, reliable repairs.' },
  { icon: '🤝', title: 'Long-Term Relationships', desc: 'Most of our business comes from repeat customers and referrals. We build trust, not just fix machines.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative', maxWidth: '700px' }}>
          <span className="section-label">About Us</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4.5vw, 2.875rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.1 }}>
            Jeddah&apos;s Most Trusted<br />
            <span style={{ color: 'var(--green)' }}>AC &amp; Fridge Repair Team</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.75, maxWidth: '580px' }}>
            For over 10 years, AC Pro Jeddah has been the name Jeddah families and businesses call when their air conditioner or refrigerator breaks down. We built our reputation on three things: speed, honesty, and quality.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--green)', padding: '2.5rem 0' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, color: 'white', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600, marginTop: '0.375rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Born and Built in Jeddah</h2>
              <div className="divider" />
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
                AC Pro Jeddah was founded over a decade ago by a team of HVAC engineers who saw a gap in Jeddah&apos;s home service market: customers were being overcharged, given vague diagnoses, and left waiting days for technicians. We set out to change that.
              </p>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
                Today, we are proud to be the go-to AC and refrigerator repair service across Jeddah — from Al Hamra to Al Naseem. Our team of 20+ certified technicians handles everything from simple gas refills to complex compressor replacements, always with the same commitment to honesty and quality.
              </p>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
                Every repair we carry out comes with a service guarantee, and we use only genuine OEM parts. We are available 24 hours a day, 7 days a week — because we know AC failure in Jeddah&apos;s heat does not wait for business hours.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '📍', title: 'Hometown Advantage', desc: 'We know every Jeddah district, traffic pattern, and building type. Our local knowledge means faster service.' },
                { icon: '🛠️', title: 'Fully Equipped Vans', desc: 'Our vehicles are stocked with the most common parts for all major brands — fixing more faults on the first visit.' },
                { icon: '🎓', title: 'Manufacturer-Certified', desc: 'Our technicians hold certifications from Samsung, LG, Gree, Carrier, and other leading brands.' },
                { icon: '📞', title: 'One Number for Everything', desc: 'One call or WhatsApp gets you AC repair, fridge repair, installation, or maintenance — no runaround.' },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: '1rem', padding: '1.25rem', background: 'var(--gray-soft)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.9375rem', marginBottom: '0.3rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            section .container-custom > div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: 'var(--gray-soft)' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Our Values</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>How We Do Business</h2>
            <div className="divider" style={{ margin: '0.75rem auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {TEAM_VALUES.map((v) => (
              <div key={v.title} className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <span style={{ fontSize: '2.25rem', display: 'block', marginBottom: '1rem' }}>{v.icon}</span>
                <h3 style={{ fontWeight: 800, color: 'var(--navy)', fontSize: '1.0625rem', marginBottom: '0.625rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas mention */}
      <section className="section-padding">
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <span className="section-label">Coverage</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Proudly Serving All of Jeddah</h2>
          <div className="divider" style={{ margin: '0.75rem auto 1.5rem' }} />
          <p style={{ color: 'var(--gray-500)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto 2rem', lineHeight: 1.75 }}>
            We cover every district of Jeddah including Al Hamra, Al Rawdah, Al Naseem, Al Khalidiyya, Al Zahraa, Al Balad, Obhur, Al Salamah, and all surrounding areas — with no extra travel charges.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2rem' }}>
            {[
              { href: '/locations/jeddah-al-hamra', label: 'Al Hamra' },
              { href: '/locations/jeddah-al-rawdah', label: 'Al Rawdah' },
              { href: '/locations/jeddah-al-naseem', label: 'Al Naseem' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ padding: '0.5rem 1.25rem', background: 'var(--gray-soft)', border: '1px solid var(--border)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--navy)', textDecoration: 'none' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Experience the AC Pro Difference?"
        subtitle="Join thousands of satisfied Jeddah customers. Contact us now for fast, honest, guaranteed service."
      />
    </>
  );
}
