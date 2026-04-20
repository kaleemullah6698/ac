import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'AC Maintenance in Jeddah: How Often, What\'s Included & Cost Guide',
  description: 'Complete AC maintenance guide for Jeddah. Learn how often to service your AC, what\'s included, costs in SAR, and when you need professional maintenance. Expert advice for Saudi Arabia\'s climate.',
  keywords: ['AC maintenance cost Jeddah', 'how often ac service', 'ac maintenance guide', 'hvac preventative maintenance', 'air conditioner tune up', 'ac filter cleaning', 'ac maintenance services', 'ac maintenance jeddah', 'ac service plan jeddah'],
  openGraph: {
    title: 'AC Maintenance in Jeddah: How Often, What\'s Included & Cost Guide',
    description: 'Everything Jeddah homeowners need to know about AC maintenance: frequency, cost, what\'s included, and when to call a pro.',
    url: 'https://acprojeddah.sa/blog/ac-maintenance-guide',
  },
  alternates: { canonical: 'https://acprojeddah.sa/blog/ac-maintenance-guide' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AC Maintenance in Jeddah: How Often, What\'s Included & Cost Guide',
  description: 'Complete guide to AC maintenance for Jeddah homeowners covering frequency, cost, and what to expect.',
  author: { '@type': 'Organization', name: 'AC Pro Jeddah' },
  publisher: { '@type': 'Organization', name: 'AC Pro Jeddah' },
  datePublished: '2026-04-20',
  dateModified: '2026-04-20',
  mainEntityOfPage: 'https://acprojeddah.sa/blog/ac-maintenance-guide',
};

export default function ACMaintenanceGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'var(--green)', fontSize: '0.85rem' }}>Maintenance Guide</span>
          </div>
          <div style={{ maxWidth: '700px' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>April 2026</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>8 min read</span>
            </div>
            <h1 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4.5vw, 2.875rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Complete AC Maintenance Guide<br />
              <span style={{ color: 'var(--green)' }}>for Jeddah Homeowners</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.75, maxWidth: '580px' }}>
              How often should you service your AC in Jeddah? What does AC maintenance include? How much does it cost in SAR? This is the definitive guide for anyone living in Jeddah who wants to keep their air conditioner running efficiently and avoid expensive breakdowns.
            </p>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="section-padding">
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          {/* Intro */}
          <p style={{ color: 'var(--gray-600)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Living in Jeddah means your air conditioner works harder than almost anywhere else in the world. With temperatures reaching 48°C in summer, humidity levels exceeding 80% near the coast, and sand-laden air that clogs filters in weeks — your AC needs regular professional maintenance to survive.
          </p>
          <p style={{ color: 'var(--gray-600)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            This guide covers everything you need to know about AC maintenance in Jeddah: how often, what&apos;s included, what it costs, what you can do yourself, and when you need a professional HVAC technician. We&apos;ve based this on our experience servicing thousands of AC units across all Jeddah districts.
          </p>

          {/* Section 1 */}
          <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>How Often Should You Service Your AC in Jeddah?</h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '1rem' }}>
            The standard recommendation worldwide is AC service once per year. <strong>In Jeddah, this is not enough.</strong> Jeddah&apos;s combination of extreme heat, high humidity, and dusty air means your air conditioner needs professional maintenance at least <strong>twice per year</strong> — and ideally three times if you run it year-round (which most Jeddah residents do).
          </p>

          <div style={{ background: 'var(--gray-soft)', borderRadius: '0.75rem', padding: '1.5rem 2rem', marginBottom: '1.5rem', border: '1px solid var(--border)' }}>
            <h3 style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '1rem', marginBottom: '1rem' }}>Recommended AC Service Schedule for Jeddah</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {[
                { when: 'March – April', why: 'Pre-summer tune-up. Ensure full cooling capacity before extreme heat arrives.' },
                { when: 'July – August', why: 'Mid-summer check. Catch issues from heavy usage before they become failures.' },
                { when: 'October – November', why: 'Post-summer service. Clean, inspect, and prepare for the mild season.' },
              ].map((item) => (
                <div key={item.when} style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
                  <p style={{ fontWeight: 700, color: 'var(--green)', fontSize: '0.875rem', marginBottom: '0.375rem' }}>{item.when}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>{item.why}</p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            For commercial properties, offices, and restaurants in Jeddah, we recommend <strong>quarterly AC maintenance</strong> due to higher usage loads and the critical nature of cooling for business operations.
          </p>

          {/* Section 2 */}
          <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>What&apos;s Included in Professional AC Maintenance?</h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            A thorough AC maintenance service — whether for a split unit, window unit, or central system — should include the following steps. This is exactly what our AC maintenance technicians perform during every scheduled visit in Jeddah:
          </p>
          <ol style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {[
              { title: 'Air Filter Cleaning/Replacement', desc: 'Remove, wash or replace clogged filters. In Jeddah\'s dusty environment, this alone can improve cooling by 5–15%.' },
              { title: 'Evaporator Coil Cleaning', desc: 'Deep clean indoor coils to remove mold, dust, and biofilm that reduce heat absorption and cause bad smells.' },
              { title: 'Condenser Coil Cleaning', desc: 'Clean outdoor unit coils to ensure efficient heat rejection — critical when ambient temperature exceeds 45°C.' },
              { title: 'Refrigerant Level Check', desc: 'Verify correct gas charge. Low refrigerant means poor cooling and can damage the compressor long-term.' },
              { title: 'Drain Line Clearing', desc: 'Flush condensate drain to prevent water leaks, mold growth, and musty odors — a common Jeddah problem due to high humidity.' },
              { title: 'Electrical Inspection', desc: 'Tighten connections, test capacitors, verify amp draw. Prevents electrical failures and fire risk.' },
              { title: 'Thermostat Calibration', desc: 'Ensure temperature readings are accurate and the AC cycles correctly.' },
              { title: 'Full Performance Test', desc: 'Measure temperature differential (inlet vs outlet air). A healthy AC should deliver 8–12°C colder air than inlet.' },
            ].map((step) => (
              <li key={step.title} style={{ fontSize: '0.9375rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--navy)' }}>{step.title}:</strong> {step.desc}
              </li>
            ))}
          </ol>

          {/* Mid-article CTA */}
          <div style={{ background: 'var(--navy)', borderRadius: '0.75rem', padding: '1.5rem 2rem', marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <div>
              <p style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Want this done professionally?</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>Our AC maintenance plans start with a complete 8-point service.</p>
            </div>
            <a href="https://wa.me/966500000000?text=I%20want%20to%20book%20AC%20maintenance%20in%20Jeddah" target="_blank" rel="noopener noreferrer" className="btn-primary" id="blog-maint-cta-1" style={{ flexShrink: 0 }}>
              Get a Quote
            </a>
          </div>

          {/* Section 3 */}
          <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>AC Maintenance Cost in Jeddah (2026 Prices)</h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            AC maintenance costs in Jeddah vary based on the type of AC, number of units, and whether you choose individual visits or an annual maintenance contract (AMC). Here are typical price ranges:
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem', color: 'var(--navy)', fontWeight: 700 }}>Service Type</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem', color: 'var(--navy)', fontWeight: 700 }}>Price Range (SAR)</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem', color: 'var(--navy)', fontWeight: 700 }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Single split AC service', 'SAR 150 – 250', 'Filter cleaning, coil cleaning, gas check'],
                  ['Single central/ducted AC', 'SAR 250 – 450', 'More complex — includes duct inspection'],
                  ['Annual contract (split)', 'SAR 500 – 800/unit/year', '2–4 visits, priority service, repair discounts'],
                  ['Annual contract (central)', 'SAR 800 – 1,500/year', '3–4 visits, duct cleaning, full system service'],
                  ['Duct cleaning (add-on)', 'SAR 300 – 600', 'Recommended annually for central AC'],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.75rem', color: 'var(--navy)', fontWeight: 600 }}>{row[0]}</td>
                    <td style={{ padding: '0.75rem', color: 'var(--green)', fontWeight: 700 }}>{row[1]}</td>
                    <td style={{ padding: '0.75rem', color: 'var(--gray-500)' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            <strong>Pro tip:</strong> An annual maintenance contract almost always saves money compared to individual visits. You also get priority scheduling and discounted repair rates if something breaks. For Jeddah residents running AC 10+ months per year, an AMC is the most cost-effective option.
          </p>

          {/* Section 4 */}
          <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>DIY vs Professional AC Maintenance — What You Can Do Yourself</h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Some air conditioner maintenance tasks can be done yourself as a homeowner. Others require professional tools and expertise. Here&apos;s a clear breakdown:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.5rem', background: 'var(--gray-soft)', borderRadius: '0.75rem', borderTop: '3px solid var(--green)' }}>
              <h3 style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '1rem', marginBottom: '0.75rem' }}>✅ You Can Do This</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Clean or replace air filters (every 2–4 weeks)',
                  'Hose down outdoor unit exterior (monthly)',
                  'Clear debris around outdoor unit',
                  'Check thermostat settings and batteries',
                  'Ensure vents are open and unblocked',
                ].map((item) => (
                  <li key={item} style={{ fontSize: '0.875rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>{item}</li>
                ))}
              </ul>
            </div>
            <div style={{ padding: '1.5rem', background: 'var(--gray-soft)', borderRadius: '0.75rem', borderTop: '3px solid var(--navy)' }}>
              <h3 style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '1rem', marginBottom: '0.75rem' }}>🔧 Needs a Professional</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Evaporator and condenser coil deep cleaning',
                  'Refrigerant level check and top-up',
                  'Electrical connection inspection',
                  'Drain line flushing and clearing',
                  'Duct cleaning and leak inspection',
                  'Compressor and motor testing',
                ].map((item) => (
                  <li key={item} style={{ fontSize: '0.875rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>What Happens If You Skip AC Maintenance in Jeddah?</h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '1rem' }}>
            Skipping HVAC preventative maintenance in Jeddah is not like skipping it in a mild climate. The consequences are faster and more severe:
          </p>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {[
              'Energy consumption increases 15–25% (higher electricity bills)',
              'Cooling capacity drops significantly — AC runs constantly but room stays warm',
              'Refrigerant leaks go undetected, leading to compressor failure (SAR 2,000–5,000+ to replace)',
              'Mold growth in ducts and on coils — causes respiratory problems and bad smells',
              'AC lifespan reduced by 5–8 years (replacement cost: SAR 3,000–15,000+)',
              'Water leak damage to walls, ceilings, and furniture from blocked drains',
            ].map((item) => (
              <li key={item} style={{ fontSize: '0.9375rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            The math is simple: a SAR 500 annual maintenance contract prevents SAR 5,000+ in emergency repairs and extends your AC&apos;s life by years. In Jeddah&apos;s climate, AC maintenance is not a luxury — it&apos;s an investment that pays for itself many times over.
          </p>

          {/* Final CTA */}
          <div style={{ background: 'var(--green)', borderRadius: '0.75rem', padding: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ color: 'white', fontSize: '1.375rem', fontWeight: 800, marginBottom: '0.75rem' }}>Book Your AC Maintenance in Jeddah</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem', marginBottom: '1.5rem', maxWidth: '450px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Protect your AC investment. Our maintenance plans cover all brands and all Jeddah districts.
            </p>
            <Link href="/services/ac-maintenance" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: 'var(--navy)', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '1rem' }}>
              View AC Maintenance Plans →
            </Link>
          </div>

          {/* Related links */}
          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <h3 style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '1rem', marginBottom: '1rem' }}>Related Articles &amp; Services</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/services/ac-maintenance" style={{ color: 'var(--green)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>AC Maintenance Services in Jeddah →</Link>
              <Link href="/services/ac-repair" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>AC Repair in Jeddah →</Link>
              <Link href="/services/installation" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>AC Installation in Jeddah →</Link>
              <Link href="/blog/ac-not-cooling" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>AC Not Cooling? 7 Common Causes →</Link>
            </div>
          </div>
        </div>
      </article>

      <CTASection title="Ready to Protect Your AC Investment?" subtitle="Annual maintenance contracts with scheduled visits, priority service, and discounted repairs. WhatsApp us for a free quote." />
    </>
  );
}
