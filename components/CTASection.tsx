'use client';

import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function CTASection({
  title = 'Need AC or Fridge Repair in Jeddah?',
  subtitle = 'Same-day service available. Our certified technicians are ready to help — call now or send us a WhatsApp message.',
  dark = true,
}: CTASectionProps) {
  return (
    <section
      style={{
        background: dark ? 'var(--navy)' : 'var(--gray-soft)',
        padding: '4.5rem 0',
      }}
    >
      <div className="container-custom" style={{ textAlign: 'center' }}>
        <h2 style={{ color: dark ? 'white' : 'var(--navy)', fontSize: 'clamp(1.5rem, 3.5vw, 2.125rem)', fontWeight: 800, marginBottom: '1rem' }}>
          {title}
        </h2>
        <p style={{ color: dark ? 'rgba(255,255,255,0.7)' : 'var(--gray-500)', fontSize: '1.0625rem', maxWidth: '560px', margin: '0 auto 2.25rem', lineHeight: 1.7 }}>
          {subtitle}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <a
            href="https://wa.me/966500000000?text=Hello%2C%20I%20need%20AC%20repair%20in%20Jeddah"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            id="cta-whatsapp"
            style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us Now
          </a>
          <a
            href="tel:+966500000000"
            id="cta-call"
            className={dark ? 'btn-outline-white' : 'btn-outline'}
            style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.2 12.1a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call Now
          </a>
          <Link
            href="/contact"
            id="cta-contact"
            style={{ display: 'inline-flex', alignItems: 'center', color: dark ? 'rgba(255,255,255,0.6)' : 'var(--gray-500)', fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px', padding: '0.875rem 1rem' }}
          >
            Or fill out our contact form →
          </Link>
        </div>
      </div>
    </section>
  );
}
