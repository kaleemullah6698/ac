import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | AC Pro Jeddah',
  description: 'The page you are looking for could not be found. Return to the AC Pro Jeddah homepage to find AC repair and refrigerator repair services in Jeddah.',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section style={{ background: 'var(--gray-soft)', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container-custom" style={{ textAlign: 'center', padding: '5rem 1.25rem' }}>
        <div style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--navy)', opacity: 0.08, lineHeight: 1, marginBottom: '-1.5rem' }}>404</div>
        <div style={{ width: '4rem', height: '4rem', background: 'rgba(34,197,94,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <svg width="26" height="26" fill="none" stroke="var(--green)" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
        </div>
        <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--gray-500)', fontSize: '1rem', maxWidth: '420px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          The page you were looking for does not exist. Let&apos;s get you back to finding the AC or fridge repair you need.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/" className="btn-primary">Back to Homepage</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
          <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}
