'use client';

import Link from 'next/link';

const SERVICES = [
  { href: '/services/ac-repair', label: 'AC Repair' },
  { href: '/services/fridge-repair', label: 'Fridge Repair' },
  { href: '/services/installation', label: 'AC Installation' },
];

const LOCATIONS = [
  { href: '/locations/jeddah-al-hamra', label: 'Al Hamra, Jeddah' },
  { href: '/locations/jeddah-al-rawdah', label: 'Al Rawdah, Jeddah' },
  { href: '/locations/jeddah-al-naseem', label: 'Al Naseem, Jeddah' },
];

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer role="contentinfo" style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.8)' }}>
      <div className="container-custom" style={{ paddingTop: '4rem', paddingBottom: '2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
              <span style={{
                width: '2.25rem', height: '2.25rem', background: 'var(--green)', borderRadius: '0.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontWeight: 800, fontSize: '1rem',
              }}>AC</span>
              <span style={{ fontWeight: 800, fontSize: '1.125rem', color: 'white' }}>AC Pro Jeddah</span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem', color: 'rgba(255,255,255,0.65)' }}>
              Trusted AC &amp; refrigerator repair specialists serving all districts of Jeddah, Saudi Arabia. Same-day service, certified technicians.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <a href="tel:+966500000000" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.2 12.1a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                +966 50 000 0000
              </a>
              <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--green)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Chat
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Jeddah, Saudi Arabia
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ color: 'white', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Services</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'white'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'}
                  >{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 style={{ color: 'white', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Service Areas</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {LOCATIONS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'white'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: 'white', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'white'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(34,197,94,0.12)', borderRadius: '0.625rem', border: '1px solid rgba(34,197,94,0.25)' }}>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--green)' }}>Available 24/7</strong><br/>
                Emergency repair service<br/>for AC &amp; Refrigerators
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.8375rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
            © {year} AC Pro Jeddah. All rights reserved. Serving Jeddah, Saudi Arabia.
          </p>
          <p style={{ fontSize: '0.8375rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            AC Repair · Fridge Repair · Installation · Maintenance
          </p>
        </div>
      </div>
    </footer>
  );
}