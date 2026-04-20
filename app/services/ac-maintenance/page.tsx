import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'AC Maintenance Jeddah — Certified Service & AMC Plans',
  description: 'Professional AC maintenance in Jeddah. Filter cleaning, gas check, coil inspection & duct cleaning. Annual contracts for homes & businesses. صيانة مكيفات جدة — WhatsApp for instant quote!',
  keywords: ['AC maintenance Jeddah', 'ac maintenance', 'air conditioner maintenance', 'AC maintenance services', 'duct cleaning Jeddah', 'hvac maintenance', 'annual AC maintenance contract Jeddah', 'AC filter cleaning Jeddah', 'صيانة مكيفات جدة'],
  openGraph: {
    title: 'AC Maintenance Services in Jeddah — Annual & Contract Plans',
    description: 'Complete AC maintenance in Jeddah. Filter cleaning, coil inspection, duct cleaning, gas check. Annual contracts available. WhatsApp for instant quote.',
    url: 'https://acprojeddah.sa/services/ac-maintenance',
  },
  alternates: { canonical: 'https://acprojeddah.sa/services/ac-maintenance' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AC Maintenance Services in Jeddah',
  provider: {
    '@type': 'LocalBusiness',
    name: 'AC Pro Jeddah',
    telephone: '+966500000000',
    address: { '@type': 'PostalAddress', addressLocality: 'Jeddah', addressCountry: 'SA' },
  },
  areaServed: { '@type': 'City', name: 'Jeddah' },
  description: 'Professional AC maintenance services in Jeddah. Filter cleaning, coil inspection, duct cleaning, refrigerant check. Annual maintenance contracts for residential and commercial properties.',
  serviceType: 'AC Maintenance',
  offers: {
    '@type': 'Offer',
    name: 'Annual Maintenance Contract',
    description: 'Comprehensive AC maintenance plan with scheduled visits, priority service, and discounts.',
    priceCurrency: 'SAR',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should AC be serviced in Jeddah?',
      acceptedAnswer: { '@type': 'Answer', text: 'In Jeddah\'s harsh climate, AC units should be serviced every 4–6 months. Units running year-round (as most do in Jeddah) need service at least twice per year — once before the peak summer months (March–April) and once after summer ends (October–November).' },
    },
    {
      '@type': 'Question',
      name: 'What is included in AC maintenance?',
      acceptedAnswer: { '@type': 'Answer', text: 'A full AC maintenance service includes: air filter cleaning or replacement, evaporator and condenser coil cleaning, refrigerant (gas) level check, drain line cleaning, electrical connection inspection, thermostat calibration, and a full performance test.' },
    },
    {
      '@type': 'Question',
      name: 'How much does AC maintenance cost in Jeddah?',
      acceptedAnswer: { '@type': 'Answer', text: 'Single-visit AC maintenance in Jeddah typically costs SAR 150–350 per unit depending on the AC type and condition. Annual maintenance contracts (AMC) covering 2–4 visits per year start from SAR 500 per unit annually, offering significant savings over individual visits.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer annual maintenance contracts (AMC) in Jeddah?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer flexible AMC plans for residential and commercial properties in Jeddah. Plans include scheduled maintenance visits, priority emergency response, discounted repair rates, and detailed service reports after every visit.' },
    },
  ],
};

const MAINTENANCE_FAQS = [
  { question: 'I skipped AC maintenance for 2 years in Jeddah — is my unit ruined?', answer: 'Not necessarily ruined, but it\'s likely running at 60–70% efficiency. After 2 years without service in Jeddah\'s dusty, humid climate, expect clogged coils, low gas, and high electricity bills. We see this a lot — book a deep service visit and we\'ll assess the damage. Most units recover well after a thorough cleaning and gas top-up.' },
  { question: 'Is it worth paying for an annual AC maintenance contract or should I just call when something breaks?', answer: 'In Jeddah\'s climate, waiting until something breaks almost always costs more. A compressor replacement alone runs SAR 2,000–5,000. An AMC covering 2–4 visits per year starts from SAR 500 and catches problems early. Most of our AMC clients save 40–60% vs reactive repair costs over 3 years.' },
  { question: 'My AC smells musty after I turn it on — is that dangerous?', answer: 'That musty smell is mold and bacteria growing on your evaporator coil and in the drain pan. It\'s common in Jeddah due to high humidity. It\'s not immediately dangerous but can trigger allergies and respiratory issues over time. A professional coil cleaning and drain flush eliminates it in one visit.' },
  { question: 'How much does a full AC maintenance visit actually cost in Jeddah?', answer: 'Single-visit maintenance costs SAR 150–350 per unit depending on AC type and condition. Annual maintenance contracts covering 2–4 visits start from SAR 500/unit/year — significantly cheaper per visit. We give you a fixed quote before starting, no surprises.' },
  { question: 'Do I really need duct cleaning or is that just an upsell?', answer: 'In Jeddah — yes, it\'s genuinely important. Sand, dust, and humidity create buildup inside ducts that reduces airflow by 20–30% and circulates allergens. We recommend duct cleaning once per year for central AC systems. It\'s included in our Premium AMC plan or available as a standalone service.' },
  { question: 'Can you service older AC units or do you only work on new ones?', answer: 'We service everything — from 15-year-old window units to brand new inverter splits. Our technicians carry parts for older models too. If your unit is beyond economical repair, we\'ll tell you honestly and can advise on a cost-effective replacement.' },
];

const CHECKLIST_ICONS: Record<string, React.ReactNode> = {
  filter: <svg width="22" height="22" fill="none" stroke="var(--green)" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"/></svg>,
  coil: <svg width="22" height="22" fill="none" stroke="var(--green)" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/></svg>,
  gas: <svg width="22" height="22" fill="none" stroke="var(--green)" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"/><path d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"/></svg>,
  drain: <svg width="22" height="22" fill="none" stroke="var(--green)" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/></svg>,
  elec: <svg width="22" height="22" fill="none" stroke="var(--green)" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>,
  duct: <svg width="22" height="22" fill="none" stroke="var(--green)" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>,
};

const CHECKLIST = [
  { iconKey: 'filter', title: 'Filter Cleaning & Replacement', desc: 'Remove dust, dirt, and allergens. Replace clogged filters for better airflow and air quality in your Jeddah home.' },
  { iconKey: 'coil', title: 'Evaporator & Condenser Coil Cleaning', desc: 'Deep clean coils to restore peak cooling efficiency. Critical in Jeddah\'s dusty environment where coils clog faster.' },
  { iconKey: 'gas', title: 'Refrigerant Level Check', desc: 'Inspect gas levels and check for leaks. Low refrigerant is the #1 cause of poor cooling in Jeddah summers.' },
  { iconKey: 'drain', title: 'Drain Line Cleaning', desc: 'Clear condensate drain pipes to prevent water leaks and mold growth — a common problem in Jeddah\'s humidity.' },
  { iconKey: 'elec', title: 'Electrical System Inspection', desc: 'Check wiring, capacitors, contactors, and connections. Prevent electrical faults before they cause breakdowns.' },
  { iconKey: 'duct', title: 'Duct Inspection & Cleaning', desc: 'Inspect air ducts for leaks, dust buildup, and blockages. Clean ducts improve airflow and indoor air quality in Jeddah.' },
];

const WARNING_SIGNS = [
  { text: 'AC cools slower than it used to' },
  { text: 'Electricity bills rising unexpectedly' },
  { text: 'Water dripping from your AC unit' },
  { text: 'Musty or unpleasant smell from vents' },
  { text: 'Unusual rattling or buzzing sounds' },
  { text: 'Ice forming on the AC coils or pipes' },
];

const AMC_PLANS = [
  {
    name: 'Basic Plan',
    visits: '2 visits/year',
    ideal: 'Single AC units in apartments',
    features: ['Filter cleaning & replacement', 'Coil cleaning', 'Gas level check', 'Performance test', 'Service report'],
  },
  {
    name: 'Standard Plan',
    visits: '3 visits/year',
    ideal: 'Homes with 2–4 AC units',
    features: ['Everything in Basic', 'Drain line cleaning', 'Electrical inspection', 'Priority scheduling', '10% discount on repairs'],
    popular: true,
  },
  {
    name: 'Premium Plan',
    visits: '4 visits/year',
    ideal: 'Villas & commercial properties',
    features: ['Everything in Standard', 'Full duct cleaning', 'Thermostat calibration', 'Same-day emergency response', '20% discount on repairs'],
  },
];

export default function ACMaintenancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <Link href="/services/ac-maintenance" style={{ color: 'var(--green)', fontSize: '0.85rem', textDecoration: 'none' }}>AC Maintenance</Link>
          </div>
          <div style={{ maxWidth: '700px' }}>
            <span className="section-label">AC Maintenance Service</span>
            <h1 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4.5vw, 2.875rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.1 }}>
              AC Maintenance Services in Jeddah —<br />
              <span style={{ color: 'var(--green)' }}>Annual &amp; Contract Plans</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '2.25rem', maxWidth: '580px' }}>
              Keep your air conditioner running at peak performance with professional AC maintenance in Jeddah. Our certified technicians perform thorough inspections, filter cleaning, coil servicing, and refrigerant checks for all AC brands. Annual maintenance contracts available for homes and businesses across all Jeddah districts.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="https://wa.me/966500000000?text=I%20need%20AC%20maintenance%20in%20Jeddah" target="_blank" rel="noopener noreferrer" className="btn-primary" id="maintenance-whatsapp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Get Maintenance Quote
              </a>
              <a href="tel:+966500000000" className="btn-outline-white" id="maintenance-call">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.2 12.1a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding" style={{ background: 'var(--white)' }}>
        <div className="container-custom">
          <span className="section-label">What&apos;s Included</span>
          <h2 className="section-title">Complete AC Maintenance Checklist</h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
            Every AC maintenance visit in Jeddah includes a comprehensive 6-point inspection and service. Our air conditioner maintenance process ensures your system runs efficiently even during Jeddah&apos;s extreme summer temperatures.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {CHECKLIST.map((item) => (
              <div key={item.title} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.25rem 1.5rem' }}>
                <span style={{ flexShrink: 0, display: 'flex' }}>{CHECKLIST_ICONS[item.iconKey]}</span>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jeddah-specific advice */}
      <section className="section-padding" style={{ background: 'var(--gray-soft)' }}>
        <div className="container-custom">
          <span className="section-label">Jeddah Climate Advisory</span>
          <h2 className="section-title">How Often Should You Service Your AC in Jeddah?</h2>
          <div className="divider" />
          <div style={{ maxWidth: '700px' }}>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
              Jeddah&apos;s climate is uniquely demanding on air conditioning systems. With temperatures regularly exceeding 45°C in summer and humidity levels above 80% near the coast, your AC works harder and longer than in most other cities. This means <strong>AC maintenance in Jeddah is not optional — it&apos;s essential</strong>.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
              We recommend AC maintenance <strong>at least every 6 months</strong> for residential units in Jeddah. For commercial properties or buildings with heavy AC usage, quarterly HVAC maintenance is ideal. Schedule your first service in <strong>March–April</strong> before peak summer heat arrives, and a second in <strong>October–November</strong> after the cooling season ends.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: '1.75rem', fontSize: '0.9375rem' }}>
              Skipping regular air conditioner maintenance in Jeddah leads to higher electricity bills, reduced cooling capacity, refrigerant leaks, and premature compressor failure. An AC unit maintained on schedule lasts 5–8 years longer and uses up to 25% less energy than a neglected unit.
            </p>
            <a href="https://wa.me/966500000000?text=I%20want%20to%20schedule%20AC%20maintenance%20in%20Jeddah" target="_blank" rel="noopener noreferrer" className="btn-primary" id="maintenance-climate-cta">
              Schedule Your AC Maintenance Today
            </a>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label">Warning Signs</span>
          <h2 className="section-title">Signs Your AC Needs Maintenance Now</h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            If you notice any of these signs, your AC unit in Jeddah needs professional maintenance immediately. Don&apos;t wait — small issues become expensive repairs.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {WARNING_SIGNS.map((sign) => (
              <div key={sign.text} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '1rem 1.25rem', background: 'var(--gray-soft)', borderRadius: '0.625rem', border: '1px solid var(--border)' }}>
                <svg width="18" height="18" fill="none" stroke="var(--green)" strokeWidth={1.5} viewBox="0 0 24 24" style={{ flexShrink: 0 }}><path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg>
                <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--navy)' }}>{sign.text}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
            Experiencing any of these issues? Our AC maintenance technicians in Jeddah can diagnose and resolve the problem — often in a single visit. <Link href="/services/ac-repair" style={{ color: 'var(--green)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Need urgent AC repair instead?</Link>
          </p>
        </div>
      </section>

      {/* AMC Plans */}
      <section className="section-padding" style={{ background: 'var(--gray-soft)' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Maintenance Plans</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>AC Maintenance Plans &amp; Pricing in Jeddah</h2>
            <div className="divider" style={{ margin: '0.75rem auto 0' }} />
            <p className="section-subtitle" style={{ margin: '1rem auto 0', textAlign: 'center' }}>
              Save money with an Annual Maintenance Contract (AMC). Our AC maintenance plans cover all brands and AC types — split, cassette, and central/ducted systems across Jeddah.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem' }}>
            {AMC_PLANS.map((plan) => (
              <div key={plan.name} className="card" style={{ padding: '2rem 1.75rem', position: 'relative', border: plan.popular ? '2px solid var(--green)' : undefined }}>
                {plan.popular && (
                  <span style={{ position: 'absolute', top: '-0.75rem', left: '50%', transform: 'translateX(-50%)', background: 'var(--green)', color: 'white', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.875rem', borderRadius: '999px' }}>Most Popular</span>
                )}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.375rem' }}>{plan.name}</h3>
                <p style={{ color: 'var(--green)', fontWeight: 700, fontSize: '0.9375rem', marginBottom: '0.25rem' }}>{plan.visits}</p>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>Ideal for: {plan.ideal}</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                      <svg width="14" height="14" fill="none" stroke="var(--green)" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/966500000000?text=I%20want%20to%20know%20about%20the%20AC%20maintenance%20plan%20in%20Jeddah" target="_blank" rel="noopener noreferrer" className={plan.popular ? 'btn-primary' : 'btn-outline'} style={{ width: '100%', justifyContent: 'center' }} id={`amc-${plan.name.toLowerCase().replace(' ', '-')}`}>
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label">All Brands Covered</span>
          <h2 className="section-title">AC Brands We Maintain in Jeddah</h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
            Our HVAC maintenance technicians are trained to service every major air conditioner brand available in Saudi Arabia.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {['Samsung', 'LG', 'Carrier', 'Gree', 'Midea', 'Daikin', 'York', 'Panasonic', 'Haier', 'Hisense', 'Toshiba', 'O General', 'Trane', 'Mitsubishi'].map((brand) => (
              <span key={brand} style={{ padding: '0.5rem 1rem', background: 'var(--gray-soft)', border: '1px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate)' }}>
                {brand}
              </span>
            ))}
            <span style={{ padding: '0.5rem 1rem', background: 'var(--navy)', border: '1px solid var(--navy)', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'white' }}>
              + All Other Brands
            </span>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section style={{ background: 'var(--gray-soft)', padding: '3rem 0' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <span className="section-label">Coverage</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>AC Maintenance Across All Jeddah Districts</h2>
          <div className="divider" style={{ margin: '0.75rem auto 1.5rem' }} />
          <p style={{ color: 'var(--gray-500)', fontSize: '0.9375rem', maxWidth: '560px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Our AC maintenance services cover every district in Jeddah. Book your scheduled maintenance visit today.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {[
              { href: '/locations/jeddah-al-hamra', label: 'Al Hamra' },
              { href: '/locations/jeddah-al-rawdah', label: 'Al Rawdah' },
              { href: '/locations/jeddah-al-naseem', label: 'Al Naseem' },
              { href: '/locations/jeddah-al-zahrah', label: 'Al Zahrah' },
              { href: '/locations/jeddah-al-marwah', label: 'Al Marwah' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ padding: '0.5rem 1.25rem', background: 'white', border: '1px solid var(--border)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--navy)', textDecoration: 'none' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section style={{ padding: '2.5rem 0' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/services/ac-repair" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>AC Repair in Jeddah →</Link>
            <Link href="/services/installation" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>AC Installation in Jeddah →</Link>
            <Link href="/emergency-ac-repair" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Emergency AC Repair →</Link>
            <Link href="/blog/ac-maintenance-guide" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>AC Maintenance Guide →</Link>
          </div>
        </div>
      </section>

      <FAQ faqs={MAINTENANCE_FAQS} title="AC Maintenance Questions — Jeddah" />
      <CTASection title="Ready to Book AC Maintenance in Jeddah?" subtitle="Protect your investment. Schedule your AC maintenance today — WhatsApp us for a free quote on single visits or annual maintenance contracts." />
    </>
  );
}
