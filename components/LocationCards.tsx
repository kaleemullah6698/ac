'use client';

import Link from 'next/link';

interface ServiceCardProps {
  href: string;
  title: string;
  desc: string;
}

export function ServiceCard({ href, title, desc }: ServiceCardProps) {
  return (
    <Link
      href={href}
      style={{
        background: 'white',
        border: '1px solid var(--border)',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        transition: 'box-shadow 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(11,31,59,0.10)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLElement).style.transform = 'none';
      }}
    >
      <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', lineHeight: 1.65, flexGrow: 1 }}>{desc}</p>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: 'var(--navy)', fontWeight: 700, fontSize: '0.85rem', marginTop: '1rem' }}>
        Learn more
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </span>
    </Link>
  );
}

interface ReviewCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export function ReviewCard({ name, location, text, rating }: ReviewCardProps) {
  return (
    <div style={{ background: 'var(--gray-soft)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem' }}>
      <div style={{ color: '#F59E0B', marginBottom: '0.75rem' }}>{'★'.repeat(rating)}</div>
      <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1rem' }}>
        &ldquo;{text}&rdquo;
      </p>
      <span style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.875rem' }}>{name}</span>
      <span style={{ color: 'var(--gray-400)', fontSize: '0.8rem', display: 'block' }}>{location}</span>
    </div>
  );
}
