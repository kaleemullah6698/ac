'use client';

import { useState } from 'react';
import Link from 'next/link';

const CATEGORIES = ['All', 'AC Repair', 'Installation', 'Maintenance'] as const;

const GALLERY_ITEMS = [
  // AC Repair Work
  { id: 1, category: 'AC Repair', title: 'Split AC Gas Refill — Al Hamra, Jeddah', alt: 'AC technician performing split AC gas refill in Al Hamra Jeddah home', placeholder: '🔧' },
  { id: 2, category: 'AC Repair', title: 'Central AC Compressor Repair — Villa', alt: 'AC Pro Jeddah technician repairing central AC compressor at villa in Jeddah', placeholder: '⚙️' },
  { id: 3, category: 'AC Repair', title: 'AC Water Leak Fix — Al Rawdah', alt: 'Fixing AC water leak in apartment in Al Rawdah Jeddah', placeholder: '💧' },
  { id: 4, category: 'AC Repair', title: 'PCB Board Replacement — Samsung', alt: 'Samsung air conditioner PCB board replacement in Jeddah', placeholder: '🔌' },
  { id: 5, category: 'AC Repair', title: 'AC Coil Cleaning — Commercial Unit', alt: 'Deep cleaning evaporator coil on commercial AC unit in Jeddah office', placeholder: '❄️' },
  { id: 6, category: 'AC Repair', title: 'Emergency AC Repair — Night Call', alt: 'Emergency AC repair service at night in Jeddah residential area', placeholder: '🌙' },
  // Installation Projects
  { id: 7, category: 'Installation', title: 'Split AC Installation — New Apartment', alt: 'New split AC installation in apartment in Al Naseem Jeddah', placeholder: '🏠' },
  { id: 8, category: 'Installation', title: 'Multi-Split System — Villa', alt: 'Multi-split AC system installation in Jeddah villa with clean copper pipework', placeholder: '🏢' },
  { id: 9, category: 'Installation', title: 'Cassette AC — Office Install', alt: 'Ceiling cassette AC installation in Jeddah commercial office space', placeholder: '📦' },
  { id: 10, category: 'Installation', title: 'Central AC Ductwork — New Build', alt: 'Central AC duct installation in new construction building in Jeddah', placeholder: '🌐' },
  { id: 11, category: 'Installation', title: 'Outdoor Unit Mounting — Rooftop', alt: 'Outdoor AC unit mounting on rooftop in Jeddah with proper brackets and drainage', placeholder: '📡' },
  { id: 12, category: 'Installation', title: 'Concealed Pipe Run — Clean Finish', alt: 'Concealed AC copper pipe installation with clean wall finish in Jeddah home', placeholder: '✨' },
  // Maintenance Work
  { id: 13, category: 'Maintenance', title: 'Filter Deep Clean — Residential', alt: 'AC filter cleaning during scheduled maintenance visit in Jeddah home', placeholder: '🧹' },
  { id: 14, category: 'Maintenance', title: 'Condenser Coil Wash — Outdoor', alt: 'High-pressure condenser coil cleaning on outdoor AC unit in Jeddah summer', placeholder: '💦' },
  { id: 15, category: 'Maintenance', title: 'Duct Cleaning — Central AC', alt: 'Professional duct cleaning for central AC system in Jeddah villa', placeholder: '🌀' },
  { id: 16, category: 'Maintenance', title: 'Gas Pressure Test — Annual Check', alt: 'Refrigerant pressure testing during annual AC maintenance in Jeddah', placeholder: '🌡️' },
  { id: 17, category: 'Maintenance', title: 'Electrical Inspection — Safety Check', alt: 'Electrical wiring inspection during AC maintenance service in Jeddah', placeholder: '⚡' },
  { id: 18, category: 'Maintenance', title: 'AMC Visit — Commercial Property', alt: 'Annual maintenance contract service visit at commercial property in Jeddah', placeholder: '📋' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');
  const [lightboxItem, setLightboxItem] = useState<typeof GALLERY_ITEMS[number] | null>(null);

  const filtered = activeCategory === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative', textAlign: 'center' }}>
          <span className="section-label">Our Work</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4.5vw, 2.875rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>
            AC Repair &amp; Installation<br />
            <span style={{ color: 'var(--green)' }}>Work Gallery — Jeddah</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            Real AC repair, installation, and maintenance work completed by our certified technicians across Jeddah. See the quality of our workmanship before you book.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section style={{ padding: '2rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container-custom" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--green)' : 'var(--border)',
                background: activeCategory === cat ? 'var(--green)' : 'white',
                color: activeCategory === cat ? 'white' : 'var(--navy)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat === 'All' ? 'All Work' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightboxItem(item)}
                style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: 0,
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
                aria-label={`View: ${item.title}`}
              >
                {/* Placeholder image area — replace with real images later */}
                <div
                  style={{
                    width: '100%',
                    height: '220px',
                    background: `linear-gradient(135deg, #0B1F3B 0%, #1E3A5F 50%, #0B1F3B 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                  role="img"
                  aria-label={item.alt}
                >
                  <span style={{ fontSize: '3rem', opacity: 0.4 }}>{item.placeholder}</span>
                  <span style={{
                    position: 'absolute', top: '0.75rem', left: '0.75rem',
                    background: 'rgba(34,197,94,0.9)', color: 'white',
                    fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em',
                    textTransform: 'uppercase', padding: '0.2rem 0.6rem', borderRadius: '999px',
                  }}>
                    {item.category}
                  </span>
                  <span style={{
                    position: 'absolute', bottom: '0.75rem', right: '0.75rem',
                    background: 'rgba(0,0,0,0.4)', color: 'white',
                    fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.5rem',
                    borderRadius: '0.375rem', backdropFilter: 'blur(4px)',
                  }}>
                    Click to view
                  </span>
                </div>
                <div style={{ padding: '1rem 1.25rem' }}>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--gray-400)' }}>AC Pro Jeddah</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {lightboxItem && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={() => setLightboxItem(null)}
        >
          <div
            style={{
              background: 'white', borderRadius: '0.75rem', maxWidth: '600px',
              width: '100%', overflow: 'hidden',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div
              style={{
                width: '100%', height: '350px',
                background: 'linear-gradient(135deg, #0B1F3B 0%, #1E3A5F 50%, #0B1F3B 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
              role="img"
              aria-label={lightboxItem.alt}
            >
              <span style={{ fontSize: '5rem', opacity: 0.3 }}>{lightboxItem.placeholder}</span>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{lightboxItem.category}</span>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem', marginTop: '0.375rem' }}>{lightboxItem.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>{lightboxItem.alt}</p>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
                <a href="https://wa.me/966500000000?text=I%20saw%20your%20gallery%20and%20need%20AC%20service%20in%20Jeddah" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.625rem 1.5rem' }}>
                  Book Similar Service
                </a>
                <button
                  onClick={() => setLightboxItem(null)}
                  style={{ padding: '0.625rem 1.25rem', background: 'var(--gray-soft)', border: '1px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.875rem', cursor: 'pointer', color: 'var(--gray-600)', fontWeight: 600 }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SEO content */}
      <section className="section-padding" style={{ background: 'var(--gray-soft)' }}>
        <div className="container-custom" style={{ maxWidth: '700px' }}>
          <h2 className="section-title">AC Repair Work in Jeddah — Our Portfolio</h2>
          <div className="divider" />
          <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Every photo in our gallery represents real AC repair, installation, and maintenance work completed by AC Pro Jeddah technicians across Jeddah districts including Al Hamra, Al Rawdah, Al Naseem, Al Zahrah, and Al Marwah. We take pride in clean, professional workmanship on every job.
          </p>
          <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            From emergency AC repair calls at midnight to full central AC installations in new villas, our portfolio showcases the range and quality of our air conditioning services in Jeddah. We handle all major AC brands including Samsung, LG, Carrier, Gree, Daikin, York, and Trane.
          </p>
          <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.8 }}>
            Want to see your AC working perfectly again? Browse our work and <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>WhatsApp us</a> to book the same quality service for your home or business in Jeddah.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
            <Link href="/services/ac-repair" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>AC Repair Services →</Link>
            <Link href="/services/installation" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>AC Installation →</Link>
            <Link href="/services/ac-maintenance" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>AC Maintenance →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.5rem, 3.5vw, 2.125rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Impressed by Our Work?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', maxWidth: '480px', margin: '0 auto 2.25rem', lineHeight: 1.7 }}>
            Get the same quality of AC service at your home or business in Jeddah. WhatsApp for the fastest booking.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <a href="https://wa.me/966500000000?text=I%20want%20to%20book%20AC%20service%20in%20Jeddah" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }} id="gallery-whatsapp">
              WhatsApp — Book Now
            </a>
            <a href="tel:+966500000000" className="btn-outline-white" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }} id="gallery-call">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
