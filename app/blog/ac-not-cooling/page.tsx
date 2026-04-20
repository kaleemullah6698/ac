import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'AC Not Cooling? 7 Common Causes & What to Do in Jeddah',
  description: 'Your AC is running but not cooling? Learn the 7 most common causes of AC not blowing cold air in Jeddah and when to call a professional technician. Expert advice from AC Pro Jeddah.',
  keywords: ['AC not cooling', 'home air conditioner not cooling', 'ac blowing warm air', 'ac running but not cooling', 'central ac not cooling', 'hvac not cooling', 'why is my AC not cold', 'AC not cooling Jeddah'],
  openGraph: {
    title: 'AC Not Cooling? 7 Common Causes & What to Do in Jeddah',
    description: 'Your AC is running but not blowing cold air? Here are the 7 most common causes and what you can do.',
    url: 'https://acprojeddah.sa/blog/ac-not-cooling',
  },
  alternates: { canonical: 'https://acprojeddah.sa/blog/ac-not-cooling' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AC Not Cooling? 7 Common Causes & What to Do in Jeddah',
  description: 'Expert guide on the 7 most common reasons your AC is not cooling in Jeddah and when to call a professional.',
  author: { '@type': 'Organization', name: 'AC Pro Jeddah' },
  publisher: { '@type': 'Organization', name: 'AC Pro Jeddah' },
  datePublished: '2026-04-20',
  dateModified: '2026-04-20',
  mainEntityOfPage: 'https://acprojeddah.sa/blog/ac-not-cooling',
};

const CAUSES = [
  {
    num: '1',
    title: 'Dirty or Clogged Air Filter',
    explanation: 'The most common and most overlooked cause. In Jeddah\'s dusty environment, AC filters clog faster than in other cities. A blocked filter restricts airflow, forcing your AC to work harder while producing less cooling. In severe cases, the evaporator coil can freeze from restricted airflow.',
    diy: 'Remove the front panel of your split AC and pull out the filter. If it\'s visibly covered in dust, wash it gently with water and mild soap, let it dry completely, and reinstall. Do this every 2–4 weeks during Jeddah\'s peak summer season.',
    pro: 'If cleaning the filter doesn\'t restore cooling, the problem is deeper. Our technicians will inspect the evaporator coil, check for ice buildup, and perform a complete diagnostic.',
  },
  {
    num: '2',
    title: 'Low Refrigerant (Gas Leak)',
    explanation: 'Refrigerant (commonly called "gas" or "freon") is what makes your AC blow cold air. If there\'s a leak, the refrigerant level drops over time and your AC gradually loses cooling power. This is extremely common in Jeddah because the intense heat cycle expands and contracts copper pipes, weakening joints over years of use.',
    diy: 'You cannot fix a gas leak yourself. Warning signs include: hissing sounds near the AC, ice forming on the pipes, and gradually weakening cooling over days or weeks.',
    pro: 'We locate and seal the leak first, then recharge the correct refrigerant type and amount. Simply refilling gas without fixing the leak means you\'ll face the same problem in weeks.',
  },
  {
    num: '3',
    title: 'Dirty Condenser Coil (Outdoor Unit)',
    explanation: 'The outdoor unit of your split AC has condenser coils that release heat from your home to the outside air. In Jeddah, dust, sand, and debris coat these coils, insulating them and preventing heat transfer. When the condenser can\'t release heat, your AC runs constantly but never cools properly.',
    diy: 'You can gently hose down the outdoor unit with water to remove surface dust. Make sure the AC is turned off first. Do not use a pressure washer — it can bend the delicate aluminum fins.',
    pro: 'If hosing doesn\'t help, the coils need professional chemical cleaning. Our technicians use specialized coil cleaners that restore full heat transfer capability without damaging the unit.',
  },
  {
    num: '4',
    title: 'Faulty Compressor',
    explanation: 'The compressor is the heart of your air conditioning system — it pressurizes the refrigerant to create cooling. Compressor failures are more common in Jeddah because units run for 14–18 hours daily during summer, pushing the compressor to its limits. Symptoms include the AC turning on but blowing room-temperature air, or the outdoor unit making unusual sounds.',
    diy: 'You cannot repair a compressor yourself. If your AC runs but produces zero cold air and the outdoor unit sounds different than normal, the compressor is the likely culprit.',
    pro: 'Compressor diagnostics require specialized equipment. We test compressor health with amp draw measurements and pressure readings. Depending on the AC age and compressor condition, we\'ll recommend repair or replacement.',
  },
  {
    num: '5',
    title: 'Thermostat or PCB Board Failure',
    explanation: 'Modern AC units rely on electronic control boards (PCBs) and temperature sensors to regulate cooling. Power surges — common in some Jeddah neighborhoods during peak summer load — can damage these boards, causing the AC to run but not regulate temperature correctly.',
    diy: 'Check your AC\'s temperature setting and mode. Ensure it\'s set to "Cool" (not "Fan Only") and the temperature is set below the current room temperature. Try turning the AC off for 5 minutes and restarting.',
    pro: 'If settings are correct and the AC still doesn\'t cool, the PCB or temperature sensor likely needs replacement. We carry OEM boards for Samsung, LG, Gree, Midea, and other common brands.',
  },
  {
    num: '6',
    title: 'Blocked or Leaking Air Ducts',
    explanation: 'For central AC systems common in Jeddah villas and commercial spaces, leaking or disconnected ducts can cause massive cooling loss. Studies show that duct leaks can waste 20–30% of conditioned air. If some rooms cool fine but others don\'t, duct issues are the primary suspect.',
    diy: 'Check visible duct joints for gaps, disconnections, or obvious damage. Ensure all registers (vents) are open and unobstructed by furniture or curtains.',
    pro: 'We perform duct pressure tests to locate leaks, seal joints with mastic or foil tape, and can clean ducts clogged with years of accumulated dust — a common issue in Jeddah\'s sandy environment.',
  },
  {
    num: '7',
    title: 'Undersized AC for the Room',
    explanation: 'An AC that\'s too small for your space will run non-stop without ever reaching the desired temperature — especially during Jeddah\'s peak summer when outdoor temperatures exceed 45°C. This is common when builders install the minimum capacity to save cost, or when rooms have been expanded or repurposed.',
    diy: 'A general rule for Jeddah: you need approximately 600 BTU per square foot for bedrooms and 800 BTU per square foot for living rooms with sun-facing windows. A 3×4 meter bedroom needs at least 1.5 tons (18,000 BTU).',
    pro: 'If your AC is undersized, we can advise on the correct replacement capacity and install a properly sized unit. We also inspect for secondary issues like poor insulation or air leaks that increase the cooling load.',
  },
];

export default function ACNotCoolingBlogPage() {
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
            <span style={{ color: 'var(--green)', fontSize: '0.85rem' }}>AC Not Cooling</span>
          </div>
          <div style={{ maxWidth: '700px' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>April 2026</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>6 min read</span>
            </div>
            <h1 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4.5vw, 2.875rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.1 }}>
              AC Not Cooling?<br />
              <span style={{ color: 'var(--green)' }}>7 Common Causes &amp; What to Do</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.75, maxWidth: '580px' }}>
              Your air conditioner is running but not blowing cold air. In Jeddah&apos;s brutal summer heat, this is not just an inconvenience — it&apos;s an emergency. Here are the 7 most common reasons your home air conditioner is not cooling, and what you can do about each one.
            </p>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="section-padding">
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          {/* Intro */}
          <p style={{ color: 'var(--gray-600)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            When your AC stops cooling in Jeddah, every minute matters. The outside temperature can reach 48°C, and indoor temperatures rise dangerously fast without air conditioning. Before you panic, let&apos;s go through the most common causes — some you can fix yourself, and others require a professional AC technician.
          </p>
          <p style={{ color: 'var(--gray-600)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            We repair hundreds of &quot;AC not cooling&quot; calls every month across Jeddah. Based on our experience, here are the 7 causes ranked from most to least common — and what to do about each.
          </p>

          {/* Causes */}
          {CAUSES.map((cause, index) => (
            <div key={cause.num} style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: index < CAUSES.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem', display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                <span style={{ color: 'var(--green)', fontSize: '1.75rem', fontWeight: 900 }}>{cause.num}.</span>
                {cause.title}
              </h2>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                {cause.explanation}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ padding: '1.25rem', background: 'var(--gray-soft)', borderRadius: '0.625rem', borderLeft: '3px solid var(--green)' }}>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>✅ What You Can Try</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>{cause.diy}</p>
                </div>
                <div style={{ padding: '1.25rem', background: 'rgba(11,31,59,0.04)', borderRadius: '0.625rem', borderLeft: '3px solid var(--navy)' }}>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>🔧 When to Call a Pro</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>{cause.pro}</p>
                </div>
              </div>

              {/* Mid-article CTAs every 2-3 sections per brief */}
              {(index === 1 || index === 4) && (
                <div style={{ background: 'var(--navy)', borderRadius: '0.75rem', padding: '1.5rem 2rem', marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  <div>
                    <p style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Can&apos;t fix it yourself?</p>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>Our Jeddah technicians can diagnose and fix it — same day.</p>
                  </div>
                  <a href="https://wa.me/966500000000?text=My%20AC%20is%20not%20cooling%20in%20Jeddah.%20I%20need%20help." target="_blank" rel="noopener noreferrer" className="btn-primary" id={`blog-cta-${index}`} style={{ flexShrink: 0 }}>
                    WhatsApp Us Now
                  </a>
                </div>
              )}
            </div>
          ))}

          {/* Summary */}
          <div style={{ background: 'var(--gray-soft)', borderRadius: '0.75rem', padding: '2rem', marginBottom: '2rem', border: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>When to Call a Professional AC Technician in Jeddah</h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              If cleaning the filter and checking settings didn&apos;t solve the problem, you almost certainly need professional help. Gas leaks, compressor failures, PCB faults, and duct issues all require trained technicians with the right tools and genuine replacement parts.
            </p>
            <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.8 }}>
              At <strong>AC Pro Jeddah</strong>, we handle hundreds of &quot;AC not cooling&quot; calls every month. Our technicians carry parts for all major brands and can diagnose and fix most issues in a single visit. <Link href="/services/ac-repair" style={{ color: 'var(--green)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Learn more about our AC repair services in Jeddah</Link>.
            </p>
          </div>

          {/* Related links */}
          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <h3 style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '1rem', marginBottom: '1rem' }}>Related Articles &amp; Services</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/services/ac-repair" style={{ color: 'var(--green)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>AC Repair Services in Jeddah →</Link>
              <Link href="/emergency-ac-repair" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Emergency AC Repair — 24/7 →</Link>
              <Link href="/services/ac-maintenance" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>AC Maintenance Plans in Jeddah →</Link>
              <Link href="/blog/ac-maintenance-guide" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>AC Maintenance Guide for Jeddah Homeowners →</Link>
            </div>
          </div>
        </div>
      </article>

      <CTASection title="AC Still Not Cooling?" subtitle="Our technicians diagnose and fix AC cooling problems every day across Jeddah. WhatsApp us with a description of your issue for the fastest response." />
    </>
  );
}
