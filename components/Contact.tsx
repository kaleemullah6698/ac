'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

// Note: metadata must be in a server component — see contact/page.tsx wrapper below

const CONTACT_INFO = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.2 12.1a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Call Us',
    value: '+966 50 000 0000',
    href: 'tel:+966500000000',
    sub: 'Available 24/7',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '+966 50 000 0000',
    href: 'https://wa.me/966500000000',
    sub: 'Fastest response',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Jeddah, Saudi Arabia',
    href: 'https://maps.google.com/?q=Jeddah+Saudi+Arabia',
    sub: 'Serving all districts',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Working Hours',
    value: '24/7 — All Days',
    href: null,
    sub: 'Including public holidays',
  },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'flex-start' }}>
      {/* Contact info panel */}
      <div>
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Contact AC Pro Jeddah</h2>
        <div className="divider" />
        <p style={{ color: 'var(--gray-600)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
          For the fastest response, use WhatsApp. For non-urgent enquiries, fill in the form and we will get back to you within a few hours.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {CONTACT_INFO.map((item) => (
            <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                width: '3rem', height: '3rem', flexShrink: 0,
                background: 'rgba(34,197,94,0.1)', borderRadius: '0.625rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--green)',
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>{item.label}</div>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--navy)', textDecoration: 'none' }}>
                    {item.value}
                  </a>
                ) : (
                  <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--navy)' }}>{item.value}</span>
                )}
                <div style={{ fontSize: '0.8125rem', color: 'var(--gray-400)', marginTop: '0.1rem' }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div style={{ width: '100%', height: '220px', background: 'var(--gray-100)', borderRadius: '0.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', border: '1px solid var(--border)' }}>
          <svg width="36" height="36" fill="none" stroke="var(--gray-400)" strokeWidth={1.5} viewBox="0 0 24 24">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <span style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>Jeddah, Saudi Arabia</span>
          <a href="https://maps.google.com/?q=Jeddah+Saudi+Arabia" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}>
            Open Google Maps
          </a>
        </div>
      </div>

      {/* Contact form */}
      <div style={{ background: 'var(--gray-soft)', borderRadius: '1rem', padding: '2.5rem', border: '1px solid var(--border)' }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <div style={{ width: '4rem', height: '4rem', background: 'rgba(34,197,94,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <svg width="28" height="28" fill="none" stroke="var(--green)" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h3 style={{ color: 'var(--navy)', fontSize: '1.375rem', fontWeight: 800, marginBottom: '0.75rem' }}>Message Received!</h3>
            <p style={{ color: 'var(--gray-500)', lineHeight: 1.7, marginBottom: '1.5rem' }}>Thank you for contacting AC Pro Jeddah. We will get back to you within a few hours. For immediate help, please WhatsApp us directly.</p>
            <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="btn-primary" id="contact-followup-whatsapp">
              WhatsApp for Faster Response
            </a>
          </div>
        ) : (
          <>
            <h3 style={{ color: 'var(--navy)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>Send Us a Message</h3>
            <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem', marginBottom: '1.75rem' }}>We respond to all enquiries within a few hours.</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }} noValidate>
              <div>
                <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--slate)', marginBottom: '0.375rem' }}>Full Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.9375rem', outline: 'none', background: 'white', color: 'var(--slate)', transition: 'border-color 0.2s' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--navy)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>
              <div>
                <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--slate)', marginBottom: '0.375rem' }}>Phone / WhatsApp Number *</label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  placeholder="+966 5X XXX XXXX"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.9375rem', outline: 'none', background: 'white', color: 'var(--slate)', transition: 'border-color 0.2s' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--navy)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>
              <div>
                <label htmlFor="contact-service" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--slate)', marginBottom: '0.375rem' }}>Service Required</label>
                <select
                  id="contact-service"
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.9375rem', outline: 'none', background: 'white', color: form.service ? 'var(--slate)' : 'var(--gray-400)', transition: 'border-color 0.2s', appearance: 'none' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--navy)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <option value="">Select a service...</option>
                  <option value="ac-repair">AC Repair</option>
                  <option value="fridge-repair">Refrigerator / Fridge Repair</option>
                  <option value="ac-installation">AC Installation</option>
                  <option value="ac-maintenance">AC Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--slate)', marginBottom: '0.375rem' }}>Describe Your Issue</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Describe your AC or fridge problem, your district in Jeddah, and the best time for a visit..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.9375rem', outline: 'none', background: 'white', color: 'var(--slate)', resize: 'vertical', minHeight: '110px', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--navy)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>
              <button
                type="submit"
                id="contact-submit"
                className="btn-primary"
                disabled={loading}
                style={{ fontSize: '1rem', padding: '0.875rem', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              <p style={{ fontSize: '0.78rem', color: 'var(--gray-400)', textAlign: 'center' }}>
                For immediate service, WhatsApp us directly — it&apos;s faster.
              </p>
            </form>
          </>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}