import { StarIcon } from '@heroicons/react/24/solid'

interface Testimonial {
  name: string
  rating: number
  text: string
  location: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Ahmed Al-Ghamdi',
    rating: 5,
    text: 'Excellent service! My AC stopped working during the hottest day, and they came within an hour. Fixed it quickly at a fair price. Highly recommend!',
    location: 'Al Hamra, Jeddah',
  },
  {
    name: 'Fatima Hassan',
    rating: 5,
    text: 'Professional and honest technicians. They repaired my refrigerator instead of pushing for a replacement. Saved me thousands of riyals. Will definitely use again.',
    location: 'Al Rawdah, Jeddah',
  },
  {
    name: 'Mohammed Al-Otaibi',
    rating: 5,
    text: 'Called them for emergency AC repair at 2 AM. They arrived within 45 minutes and had it fixed by morning. Amazing service!',
    location: 'Al Naseem, Jeddah',
  },
  {
    name: 'Sarah Abdullah',
    rating: 5,
    text: 'Regular maintenance customer here. Their service plans are affordable and thorough. My ACs run perfectly all summer long.',
    location: 'Al Salamah, Jeddah',
  },
  {
    name: 'Khalid Al-Zahrani',
    rating: 5,
    text: 'Best AC installation service in Jeddah. They helped me choose the right unit and installed it perfectly. Very professional team.',
    location: 'Al Andalus, Jeddah',
  },
  {
    name: 'Nora Al-Juhani',
    rating: 5,
    text: 'Refrigerator repair was fast and affordable. The technician explained everything clearly and gave maintenance tips. Great experience!',
    location: 'Al Mohammadiyah, Jeddah',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Read what our satisfied customers 
            across Jeddah have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
            >
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-navy-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center text-gray-600 hover:text-navy-900 transition-colors"
          >
            <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read more reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}