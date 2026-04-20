import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AC Tips & Guides for Jeddah | Blog',
  description: 'Expert AC tips, troubleshooting guides, and maintenance advice for Jeddah homeowners. Learn how to keep your air conditioner running efficiently in Saudi Arabia\'s climate.',
  keywords: ['AC tips Jeddah', 'AC blog', 'air conditioner guide Jeddah', 'AC maintenance tips', 'HVAC advice Saudi Arabia'],
  openGraph: {
    title: 'AC Tips & Guides for Jeddah | AC Pro Jeddah Blog',
    description: 'Expert AC troubleshooting, maintenance guides, and cost advice for Jeddah homeowners.',
    url: 'https://acprojeddah.sa/blog',
  },
  alternates: { canonical: 'https://acprojeddah.sa/blog' },
};

const BLOG_POSTS = [
  {
    slug: '/blog/ac-not-cooling',
    title: 'AC Not Cooling? 7 Common Causes & What to Do in Jeddah',
    excerpt: 'Your AC is running but not blowing cold air? This is the most common AC problem in Jeddah. Learn the 7 likely causes — and when to call a technician.',
    date: 'April 2026',
    readTime: '6 min read',
    category: 'Troubleshooting',
  },
  {
    slug: '/blog/ac-maintenance-guide',
    title: 'Complete AC Maintenance Guide for Jeddah Homeowners',
    excerpt: 'How often should you service your AC in Jeddah? What\'s included? How much does it cost? Everything you need to know about keeping your AC in peak condition.',
    date: 'April 2026',
    readTime: '8 min read',
    category: 'Maintenance',
  },
];

export default function BlogIndexPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative', textAlign: 'center' }}>
          <span className="section-label">AC Pro Jeddah Blog</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4.5vw, 2.875rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>
            AC Tips &amp; Guides for<br />
            <span style={{ color: 'var(--green)' }}>Jeddah Homeowners</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Expert advice on AC troubleshooting, maintenance, and energy savings — written specifically for Jeddah&apos;s unique climate.
          </p>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={post.slug}
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: 'white', border: '1px solid var(--border)', borderRadius: '0.75rem', overflow: 'hidden', transition: 'box-shadow 0.2s, transform 0.2s' }}
              >
                {/* Placeholder image */}
                <div style={{ width: '100%', height: '200px', background: 'linear-gradient(135deg, var(--navy) 0%, #1E3A5F 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <span style={{ fontSize: '3rem', opacity: 0.3 }}>❄️</span>
                  <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--green)', color: 'white', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.25rem 0.75rem', borderRadius: '999px' }}>
                    {post.category}
                  </span>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--gray-400)' }}>{post.date}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--gray-400)' }}>·</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--gray-400)' }}>{post.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: '1.1875rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{post.title}</h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', lineHeight: 1.65, marginBottom: '1.25rem' }}>{post.excerpt}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: 'var(--green)', fontWeight: 700, fontSize: '0.875rem' }}>
                    Read article
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: '4rem 0' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.375rem, 3vw, 1.875rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Need Professional Help?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Our articles help you understand the problem — but if you need it fixed, our technicians are standing by.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/services/ac-repair" className="btn-primary" style={{ padding: '0.875rem 2rem' }}>AC Repair Services →</Link>
            <Link href="/services/ac-maintenance" className="btn-outline-white" style={{ padding: '0.875rem 2rem' }}>AC Maintenance Plans →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
