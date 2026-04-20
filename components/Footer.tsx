'use client';

import Link from 'next/link';
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const SERVICES = [
  { href: '/services/ac-repair', label: 'AC Repair' },
  { href: '/services/fridge-repair', label: 'Fridge Repair' },
  { href: '/services/installation', label: 'AC Installation' },
  { href: '/services/ac-maintenance', label: 'AC Maintenance' },
];

const LOCATIONS = [
  { href: '/locations/jeddah-al-hamra', label: 'Al Hamra' },
  { href: '/locations/jeddah-al-rawdah', label: 'Al Rawdah' },
  { href: '/locations/jeddah-al-naseem', label: 'Al Naseem' },
  { href: '/locations/jeddah-al-zahrah', label: 'Al Zahrah' },
  { href: '/locations/jeddah-al-marwah', label: 'Al Marwah' },
];

const COMPANY = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/emergency-ac-repair', label: 'Emergency AC' },
];

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link href={href} className="footer-link">{label}</Link>
  </li>
);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer role="contentinfo" style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.8)' }}>
      <div className="container-custom" style={{ paddingTop: '2.75rem', paddingBottom: '1.75rem' }}>
        {/* Main grid */}
        <div className="footer-grid">
          {/* Brand col */}
          <div className="footer-brand-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
              <span style={{
                width: '2rem', height: '2rem', background: 'var(--green)', borderRadius: '0.4rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontWeight: 800, fontSize: '0.875rem',
              }}>AC</span>
              <span style={{ fontWeight: 800, fontSize: '1rem', color: 'white' }}>AC Pro Jeddah</span>
            </div>
            <p style={{ fontSize: '0.8125rem', lineHeight: 1.65, marginBottom: '1rem', color: 'rgba(255,255,255,0.55)', maxWidth: '260px' }}>
              Serving Jeddah with certified AC technicians since 2014. Same-day repair, transparent pricing.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="tel:+966500000000" className="footer-contact-link">
                <PhoneIcon style={{ width: 14, height: 14, flexShrink: 0 }} />
                +966 50 000 0000
              </a>
              <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="footer-contact-link" style={{ color: 'var(--green)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Chat
              </a>
              <span className="footer-contact-link" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <MapPinIcon style={{ width: 14, height: 14, flexShrink: 0 }} />
                Jeddah, Saudi Arabia
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-list">
              {SERVICES.map((s) => <FooterLink key={s.href} {...s} />)}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="footer-heading">Locations</h3>
            <ul className="footer-list">
              {LOCATIONS.map((l) => <FooterLink key={l.href} {...l} />)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-list">
              {COMPANY.map((c) => <FooterLink key={c.href} {...c} />)}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem', marginTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
          <p style={{ fontSize: '0.775rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            © {year} AC Pro Jeddah. All rights reserved.
          </p>
          <p style={{ fontSize: '0.775rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            AC Repair · Maintenance · Installation · Jeddah, KSA
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 2rem;
        }
        .footer-heading {
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.875rem;
        }
        .footer-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4375rem;
        }
        .footer-link {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 0.8125rem;
          transition: color 0.15s;
        }
        .footer-link:hover { color: white; }
        .footer-contact-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 0.8125rem;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.75rem;
          }
          .footer-brand-col { grid-column: span 2; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-brand-col { grid-column: span 1; }
        }
      `}</style>
    </footer>
  );
}