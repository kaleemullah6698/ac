'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    question: 'How fast is AC repair in Jeddah?',
    answer: 'We offer same-day AC repair service across all Jeddah districts. In most cases, our technician arrives within 60–90 minutes of your call. For urgent or emergency situations, we prioritize your request.',
  },
  {
    question: 'Do you provide emergency fridge repair in Jeddah?',
    answer: 'Yes! We provide 24/7 emergency refrigerator and fridge repair services in Jeddah. Food spoilage is urgent — contact us via WhatsApp or phone and we will dispatch a technician as fast as possible.',
  },
  {
    question: 'What areas in Jeddah do you serve?',
    answer: 'We serve all districts of Jeddah including Al Hamra, Al Rawdah, Al Naseem, Al Khalidiyya, Al Zahraa, North Jeddah, South Jeddah, and surrounding areas. No location in Jeddah is too far.',
  },
  {
    question: 'Which AC brands do you repair?',
    answer: 'Our technicians are certified to repair all major AC brands including Samsung, LG, Gree, Midea, Carrier, York, Daikin, Haier, Hisense, Panasonic, and all other brands available in Saudi Arabia.',
  },
  {
    question: 'How much does AC repair cost in Jeddah?',
    answer: 'Repair costs depend on the type of fault and required parts. We provide a transparent diagnostic assessment before any work begins — no surprise charges. Call us for a quick estimate.',
  },
  {
    question: 'Do you offer a warranty on repairs?',
    answer: 'Yes. All our repair work comes with a service guarantee. Parts replaced carry manufacturer warranties. We stand behind every job we do, so you have complete peace of mind.',
  },
  {
    question: 'Can you install a new AC unit in Jeddah?',
    answer: 'Absolutely. We offer professional AC installation services for split units, cassette units, and central/ducted systems. We handle everything from supply to installation to commissioning.',
  },
];

interface FAQProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({ faqs = DEFAULT_FAQS, title, subtitle }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding" style={{ background: 'var(--white)' }} aria-labelledby="faq-heading">
      <div className="container-custom">
        <div style={{ marginBottom: '3rem', maxWidth: '700px' }}>
          <span className="section-label">FAQ</span>
          <h2 id="faq-heading" className="section-title">{title ?? 'Frequently Asked Questions'}</h2>
          <div className="divider" />
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>

        <div style={{ maxWidth: '800px' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                id={`faq-q-${i}`}
                aria-controls={`faq-a-${i}`}
              >
                <span>{faq.question}</span>
                <span style={{
                  width: '1.75rem', height: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '50%', background: openIndex === i ? 'var(--navy)' : 'var(--gray-100)',
                  flexShrink: 0, transition: 'background 0.2s',
                }}>
                  <svg width="14" height="14" fill="none" stroke={openIndex === i ? 'white' : 'var(--gray-600)'} strokeWidth={2.5} viewBox="0 0 24 24" style={{ transition: 'transform 0.2s', transform: openIndex === i ? 'rotate(180deg)' : 'none' }}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
