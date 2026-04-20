'use client';

import Link from 'next/link';

const SERVICES = [
  {
    href: '/services/ac-repair',
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1013 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/>
      </svg>
    ),
    title: 'AC Repair',
    description: 'Fast diagnosis and repair of all AC brands and models. Cooling issues, gas refills, compressor faults — we fix them all.',
    tags: ['Split Units', 'Central AC', 'Ducted Systems'],
  },
  {
    href: '/services/fridge-repair',
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="4" y="2" width="16" height="20" rx="2"/>
        <line x1="4" y1="10" x2="20" y2="10"/>
        <line x1="8" y1="14" x2="8" y2="18"/>
      </svg>
    ),
    title: 'Refrigerator Repair',
    description: 'Expert fridge and freezer repair for all brands. Ice maker faults, compressor issues, cooling failure — sorted same day.',
    tags: ['Samsung', 'LG', 'Bosch', 'All Brands'],
  },
  {
    href: '/services/installation',
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M20 12h2M2 12h2M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 3.93M12 20v2M12 2v2"/>
      </svg>
    ),
    title: 'AC Installation',
    description: 'Professional installation of split, cassette, and ducted AC systems. Precise pipework, clean finish, optimal performance.',
    tags: ['Residential', 'Commercial', 'Warranty'],
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding" style={{ background: 'var(--white)' }} aria-labelledby="services-heading">
      <div className="container-custom">
        <div style={{ marginBottom: '3rem' }}>
          <span className="section-label">What We Do</span>
          <h2 id="services-heading" className="section-title">Expert Repair &amp; Installation Services</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Comprehensive AC and refrigerator repair services across Jeddah. Licensed technicians. Genuine parts. Written guarantee on all work.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {SERVICES.map((service) => (
            <div key={service.href} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="service-icon-wrap" style={{ color: 'var(--green)' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--navy)' }}>
                {service.title}
              </h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.25rem', flexGrow: 1 }}>
                {service.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {service.tags.map((tag) => (
                  <span key={tag} style={{
                    display: 'inline-block', padding: '0.25rem 0.75rem',
                    background: 'var(--gray-soft)', color: 'var(--gray-600)',
                    fontSize: '0.78rem', fontWeight: 600, borderRadius: '999px',
                    border: '1px solid var(--border)',
                  }}>{tag}</span>
                ))}
              </div>
              <Link href={service.href} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                color: 'var(--navy)', fontWeight: 700, fontSize: '0.9rem',
                textDecoration: 'none', marginTop: 'auto',
              }}>
                Learn more
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
