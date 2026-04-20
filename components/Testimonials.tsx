const REVIEWS = [
  {
    name: 'Mohammed Al-Zahrani',
    location: 'Al Hamra, Jeddah',
    rating: 5,
    date: 'March 2025',
    text: 'Outstanding service! My AC stopped working at 11pm and their technician arrived within 90 minutes. Fixed the compressor issue quickly and professionally. Highly recommend.',
  },
  {
    name: 'Sarah Al-Ghamdi',
    location: 'Al Rawdah, Jeddah',
    rating: 5,
    date: 'February 2025',
    text: 'Excellent fridge repair service. The technician diagnosed the problem fast and had the parts ready. My refrigerator works perfectly now. Fair pricing too!',
  },
  {
    name: 'Khalid Bin Yousef',
    location: 'Al Naseem, Jeddah',
    rating: 5,
    date: 'April 2025',
    text: 'Had 3 AC units installed at my villa. The team was professional, clean, and efficient. Finished the entire job in one day with no mess left behind. Worth every riyal.',
  },
  {
    name: 'Fatima Al-Otaibi',
    location: 'North Jeddah',
    rating: 5,
    date: 'January 2025',
    text: 'My Samsung fridge had a cooling issue for weeks. Called AC Pro Jeddah and they fixed it the same afternoon. Technician was polite, knowledgeable, and fast.',
  },
  {
    name: 'Ahmed Al-Shehri',
    location: 'South Jeddah',
    rating: 5,
    date: 'March 2025',
    text: 'Best AC repair in Jeddah, period. Called them at 2pm, technician was here by 4pm, job done by 5pm. Gas refill + cleaning done at a very reasonable price.',
  },
  {
    name: 'Nora Al-Qahtani',
    location: 'Al Khalidiyya, Jeddah',
    rating: 5,
    date: 'April 2025',
    text: 'Trustworthy and reliable. They gave an honest repair quote before starting. No hidden fees, no surprise charges. I will use them for all future maintenance.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ background: 'var(--gray-soft)' }} aria-labelledby="reviews-heading">
      <div className="container-custom">
        <div style={{ marginBottom: '3rem' }}>
          <span className="section-label">Customer Reviews</span>
          <h2 id="reviews-heading" className="section-title">Trusted by Hundreds Across Jeddah</h2>
          <div className="divider" />
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="stars" style={{ fontSize: '1.25rem' }}>★★★★★</span>
              <span style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--navy)' }}>4.9</span>
            </div>
            <span style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>Based on 200+ verified reviews from Jeddah customers</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem' }}>
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              style={{
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: '0.75rem',
                padding: '1.625rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.875rem' }}>
                <StarRating rating={r.rating} />
                <span style={{ fontSize: '0.78rem', color: 'var(--gray-400)', whiteSpace: 'nowrap' }}>{r.date}</span>
              </div>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.25rem', fontStyle: 'italic' }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '2.25rem', height: '2.25rem', borderRadius: '50%',
                  background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0,
                }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy)' }}>{r.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gray-400)' }}>{r.location}</div>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--green)"><path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"/></svg>
                  <span style={{ fontSize: '0.73rem', color: 'var(--green)', fontWeight: 600 }}>Verified</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}