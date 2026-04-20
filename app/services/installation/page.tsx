import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'AC Installation Jeddah | Professional Air Conditioner Installation Service',
  description: 'Professional AC installation in Jeddah for split, cassette, and ducted systems. Certified installers, competitive pricing, all brands. تركيب مكيفات جدة — Book your installation today!',
  keywords: ['AC installation Jeddah', 'air conditioner installation Jeddah', 'split AC installation Jeddah', 'central AC installation Jeddah', 'AC installer Jeddah', 'تركيب مكيفات جدة', 'ac installation near me', 'ducted ac installation'],
  openGraph: {
    title: 'AC Installation Jeddah | Professional Air Conditioner Installation',
    description: 'Expert AC installation for all types and brands in Jeddah. Certified installers, clean finish, competitive pricing. تركيب مكيفات جدة',
    url: 'https://acprojeddah.sa/services/installation',
  },
  alternates: { canonical: 'https://acprojeddah.sa/services/installation' },
};

const INSTALL_FAQS = [
  { question: 'How long does AC installation take in Jeddah?', answer: 'A standard split AC installation typically takes 2–4 hours. Central or ducted systems may take longer depending on the size of the property.' },
  { question: 'Do you supply the AC unit as well?', answer: 'We can advise on the best AC unit for your space and help source it, or we can install a unit you have already purchased. Both options are available.' },
  { question: 'Do you provide a warranty on installation work?', answer: 'Yes, all installation work is guaranteed. We also ensure the manufacturer warranty on the AC unit remains valid by following proper installation procedures.' },
  { question: 'What types of AC systems do you install in Jeddah?', answer: 'We install wall-mounted split units, ceiling cassette units, floor-standing units, and ducted central AC systems for both residential and commercial properties.' },
];

const INSTALL_TYPES = [
  {
    icon: '🏠',
    title: 'Split AC Installation',
    desc: 'Wall-mounted split unit installation for bedrooms, living rooms, and offices. Most popular residential option in Jeddah.',
    features: ['All major brands', 'Indoor + outdoor unit', 'Copper pipe & wiring', 'Full commissioning'],
  },
  {
    icon: '🏢',
    title: 'Cassette AC Installation',
    desc: 'Ceiling cassette units for larger spaces. Ideal for commercial spaces, open-plan offices, and shops in Jeddah.',
    features: ['4-way airflow', 'Ceiling integration', 'Commercial grade', 'Full setup included'],
  },
  {
    icon: '🌐',
    title: 'Ducted / Central AC',
    desc: 'Central air conditioning systems for villas, large residences, and commercial buildings in Jeddah.',
    features: ['Whole-home cooling', 'Hidden ductwork', 'Multi-zone control', 'Energy efficient'],
  },
];

export default function InstallationPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <Link href="/services/installation" style={{ color: 'var(--green)', fontSize: '0.85rem', textDecoration: 'none' }}>AC Installation</Link>
          </div>
          <div style={{ maxWidth: '700px' }}>
            <span className="section-label">AC Installation Service</span>
            <h1 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4.5vw, 2.875rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.1 }}>
              AC Installation in Jeddah —<br />
              <span style={{ color: 'var(--green)' }}>Clean, Precise &amp; Guaranteed</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '2.25rem', maxWidth: '580px' }}>
              Professional installation of split, cassette, and ducted AC systems across Jeddah. Expert pipework, electrical connections, and full commissioning — done right the first time.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="https://wa.me/966500000000?text=I%20need%20AC%20installation%20in%20Jeddah" target="_blank" rel="noopener noreferrer" className="btn-primary" id="install-whatsapp">
                Get Free Quote
              </a>
              <a href="tel:+966500000000" className="btn-outline-white" id="install-call">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.2 12.1a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Installation types */}
      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label">Installation Types</span>
          <h2 className="section-title">AC Systems We Install in Jeddah</h2>
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            {INSTALL_TYPES.map((t) => (
              <div key={t.title} className="card">
                <span style={{ fontSize: '2.25rem', display: 'block', marginBottom: '1rem' }}>{t.icon}</span>
                <h3 style={{ fontSize: '1.1875rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem' }}>{t.title}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>{t.desc}</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {t.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                      <svg width="14" height="14" fill="none" stroke="var(--green)" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us for installation */}
      <section className="section-padding" style={{ background: 'var(--gray-soft)' }}>
        <div className="container-custom">
          <span className="section-label">Our Promise</span>
          <h2 className="section-title">Why Choose Us for AC Installation in Jeddah?</h2>
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
            {[
              { icon: '🏆', title: 'Certified Installers', desc: 'Our engineers are trained and certified by leading AC manufacturers.' },
              { icon: '⚡', title: 'Fast Installation', desc: 'Most residential installations completed in a single day, often in half a day.' },
              { icon: '🧹', title: 'Clean Finish', desc: 'We leave your property exactly as we found it — spotlessly clean every time.' },
              { icon: '📋', title: 'Installation Certificate', desc: 'You receive a completion certificate and warranty documentation for every job.' },
            ].map((p) => (
              <div key={p.title} className="card" style={{ textAlign: 'center', padding: '1.75rem 1.25rem' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>{p.icon}</span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={INSTALL_FAQS} title="AC Installation Questions — Jeddah" />
      <CTASection title="Ready to Install Your AC in Jeddah?" subtitle="Get a free quote today. Our installation team covers all of Jeddah — WhatsApp us with your AC specifications and we'll reply within minutes." />
    </>
  );
}
