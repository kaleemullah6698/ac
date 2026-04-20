'use client';

import Link from 'next/link';

const REASONS = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Fast Response Time',
    description: 'We arrive within 60–90 minutes anywhere in Jeddah. Same-day repair is our standard, not our exception.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Certified Technicians',
    description: 'Every technician is factory-trained, licensed, and background-checked. We only send experts to your home.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: 'Transparent Pricing',
    description: 'You get a fixed quote before we start. No surprise fees, no hidden charges. Honest pricing you can trust.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 014.2 12.1a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1.5h3a2 2 0 012 1.72A12.84 12.84 0 007.81 6a2 2 0 01-.45 2.11L7 9.91a16 16 0 006 6l.87-.87a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    title: '24/7 Emergency Support',
    description: 'AC failure at midnight? Fridge stops in the morning? We are available around the clock, 365 days a year.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Service Guarantee',
    description: 'Every repair comes with a written service guarantee. If the issue recurs within 30 days, we return at no extra cost.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Jeddah-Wide Coverage',
    description: 'We serve every district in Jeddah — Al Hamra, Al Rawdah, Al Naseem, and all surrounding areas. No extra travel charges.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding" style={{ background: 'var(--gray-soft)' }} aria-labelledby="why-heading">
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left copy */}
          <div>
            <span className="section-label">Why AC Pro Jeddah</span>
            <h2 id="why-heading" className="section-title">The Most Trusted Repair Service in Jeddah</h2>
            <div className="divider" />
            <p style={{ color: 'var(--gray-600)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              With over 10 years serving Jeddah households and businesses, we have built a reputation for speed, honesty, and quality that no other local service can match.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                '10+ years experience in Jeddah',
                '5,000+ successful repairs completed',
                'All AC and refrigerator brands covered',
                'Genuine OEM parts used',
              ].map((point) => (
                <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <svg width="18" height="18" fill="none" stroke="var(--green)" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
                  <span style={{ color: 'var(--gray-700)', fontSize: '0.9375rem', fontWeight: 500 }}>{point}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Get Free Quote
              </a>
              <Link href="/about" className="btn-outline">
                About Us
              </Link>
            </div>
          </div>

          {/* Right grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {REASONS.map((r) => (
              <div key={r.title} style={{
                background: 'white', border: '1px solid var(--border)',
                borderRadius: '0.75rem', padding: '1.25rem',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(11,31,59,0.09)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
              >
                <div style={{ color: 'var(--green)', marginBottom: '0.75rem' }}>{r.icon}</div>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{r.title}</h3>
                <p style={{ fontSize: '0.825rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #why-heading { font-size: 1.75rem; }
        }
        @media (max-width: 768px) {
          section[aria-labelledby="why-heading"] .container-custom > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}