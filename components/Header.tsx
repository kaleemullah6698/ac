'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  {
    label: 'Services',
    children: [
      { href: '/services/ac-repair', label: 'AC Repair' },
      { href: '/services/fridge-repair', label: 'Fridge Repair' },
      { href: '/services/installation', label: 'Installation' },
    ],
  },
  {
    label: 'Locations',
    children: [
      { href: '/locations/jeddah-al-hamra', label: 'Al Hamra' },
      { href: '/locations/jeddah-al-rawdah', label: 'Al Rawdah' },
      { href: '/locations/jeddah-al-naseem', label: 'Al Naseem' },
    ],
  },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="header-sticky" role="banner">
      <div className="container-custom">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem', gap: '1.5rem' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none', flexShrink: 0 }}>
            <span style={{
              width: '2.25rem', height: '2.25rem',
              background: 'var(--navy)', borderRadius: '0.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontWeight: 800, fontSize: '1rem',
            }}>AC</span>
            <span style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--navy)', lineHeight: 1.1 }}>
              AC Pro<br />
              <span style={{ fontSize: '0.7rem', fontWeight: 500, color: 'var(--gray-500)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Jeddah Services</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'none' }} className="desktop-nav" aria-label="Main navigation">
            <ul style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', margin: 0, padding: 0, listStyle: 'none' }}>
              {NAV_LINKS.map((item) =>
                item.children ? (
                  <li key={item.label} style={{ position: 'relative' }}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}>
                    <button
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.25rem',
                        padding: '0.5rem 0.875rem', borderRadius: '0.375rem',
                        fontSize: '0.9375rem', fontWeight: 500, color: 'var(--slate)',
                        background: 'none', border: 'none', cursor: 'pointer',
                        transition: 'color 0.15s',
                      }}
                    >
                      {item.label}
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                    </button>
                    {activeDropdown === item.label && (
                      <ul style={{
                        position: 'absolute', top: '100%', left: 0,
                        background: 'white', border: '1px solid var(--border)',
                        borderRadius: '0.625rem', padding: '0.5rem', minWidth: '180px',
                        boxShadow: '0 8px 32px rgba(11,31,59,0.12)', zIndex: 100,
                        listStyle: 'none', margin: 0,
                      }}>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} style={{
                              display: 'block', padding: '0.625rem 0.875rem',
                              fontSize: '0.9rem', color: 'var(--slate)', textDecoration: 'none',
                              borderRadius: '0.375rem', transition: 'background 0.15s, color 0.15s',
                            }}
                              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--gray-soft)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--navy)'; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--slate)'; }}
                            >{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href!} style={{
                      display: 'block', padding: '0.5rem 0.875rem', borderRadius: '0.375rem',
                      fontSize: '0.9375rem', fontWeight: 500, color: 'var(--slate)', textDecoration: 'none',
                      transition: 'color 0.15s, background 0.15s',
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--navy)'; (e.currentTarget as HTMLAnchorElement).style.background = 'var(--gray-soft)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--slate)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                    >{item.label}</Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="desktop-cta" style={{ display: 'none', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <a href="tel:+966500000000" className="btn-outline" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.2 12.1a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              Call Now
            </a>
            <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            style={{
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              width: '2.5rem', height: '2.5rem', gap: '5px', background: 'none', border: 'none', cursor: 'pointer',
            }}
          >
            <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--navy)', borderRadius: '2px', transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--navy)', borderRadius: '2px', opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--navy)', borderRadius: '2px', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'white', borderTop: '1px solid var(--border)', padding: '1rem 1.25rem 1.5rem' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {NAV_LINKS.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-400)', padding: '0.75rem 0.5rem 0.25rem' }}>{item.label}</div>
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '0.625rem 0.875rem', fontSize: '0.9375rem', color: 'var(--slate)', textDecoration: 'none', borderRadius: '0.375rem' }}>{child.label}</Link>
                  ))}
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href!} onClick={() => setOpen(false)} style={{ display: 'block', padding: '0.75rem 0.875rem', fontSize: '1rem', fontWeight: 500, color: 'var(--navy)', textDecoration: 'none', borderRadius: '0.375rem' }}>{item.label}</Link>
                </li>
              )
            )}
          </ul>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            <a href="tel:+966500000000" className="btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.2 12.1a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              Call
            </a>
            <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .hamburger { display: none !important; }
        }
      `}</style>
    </header>
  );
}