'use client';

import Link from 'next/link';

const AREAS = [
  { href: '/locations/jeddah-al-hamra', name: 'Al Hamra', description: 'North-West Jeddah' },
  { href: '/locations/jeddah-al-rawdah', name: 'Al Rawdah', description: 'Central Jeddah' },
  { href: '/locations/jeddah-al-naseem', name: 'Al Naseem', description: 'East Jeddah' },
  { name: 'Al Zahraa', description: 'North Jeddah', href: '#' },
  { name: 'Al Khalidiyya', description: 'Central Jeddah', href: '#' },
  { name: 'Al Balad', description: 'Old Town', href: '#' },
  { name: 'Obhur Al Janoubiyah', description: 'North Jeddah', href: '#' },
  { name: 'Ar Rawabi', description: 'East Jeddah', href: '#' },
  { name: 'Al Salamah', description: 'North Jeddah', href: '#' },
];

export default function ServiceAreas() {
  return (
    <section className="section-padding" style={{ background: 'var(--navy)' }} aria-labelledby="areas-heading">
      <div className="container-custom">
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="section-label">Coverage</span>
          <h2 id="areas-heading" style={{ color: 'white', fontSize: 'clamp(1.5rem, 3.5vw, 2.125rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
            Serving Every Corner of Jeddah
          </h2>
          <div className="divider" />
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: '560px', lineHeight: 1.7 }}>
            AC and refrigerator repair service across all Jeddah districts. Quick response, no extra travel charges.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.875rem', marginBottom: '2.5rem' }}>
          {AREAS.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              style={{
                display: 'flex', flexDirection: 'column', gap: '0.25rem',
                padding: '1rem 1.25rem', borderRadius: '0.625rem',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(34,197,94,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,197,94,0.35)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="12" height="12" fill="var(--green)" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span style={{ color: 'white', fontWeight: 700, fontSize: '0.9375rem' }}>{area.name}</span>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', paddingLeft: '1.25rem' }}>{area.description}</span>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ color: 'rgba(255,255,255,0.75)', margin: '0 0 1rem', fontSize: '0.9375rem' }}>
            Don&apos;t see your area? We cover <strong style={{ color: 'white' }}>all of Jeddah</strong> — just contact us and we&apos;ll confirm availability.
          </p>
          <a
            href="https://wa.me/966500000000?text=I%20need%20service%20in%20my%20area%20of%20Jeddah"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Check Your Area
          </a>
        </div>
      </div>
    </section>
  );
}