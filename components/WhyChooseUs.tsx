import { 
  ClockIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  PhoneIcon,
  UserGroupIcon,
  WrenchIcon
} from '@heroicons/react/24/outline'

interface Reason {
  title: string
  description: string
  icon: React.ElementType
}

const reasons: Reason[] = [
  {
    title: 'Fast Response Time',
    description: 'We arrive within 60 minutes for emergency calls. Same-day service guaranteed for all repairs.',
    icon: ClockIcon,
  },
  {
    title: 'Certified Technicians',
    description: 'All our technicians are licensed, insured, and undergo regular training on latest technologies.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent pricing with no hidden fees. Free estimates before any work begins.',
    icon: CurrencyDollarIcon,
  },
  {
    title: '24/7 Emergency Service',
    description: 'AC broke at midnight? Refrigerator stopped cooling? We are available round the clock.',
    icon: PhoneIcon,
  },
  {
    title: 'Experienced Team',
    description: 'Over 10 years of experience serving Jeddah residents and businesses.',
    icon: UserGroupIcon,
  },
  {
    title: 'Quality Parts',
    description: 'We use only genuine, high-quality replacement parts for lasting repairs.',
    icon: WrenchIcon,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Experience the difference with Jeddah&apos;s most trusted AC and refrigerator 
            repair service. Here&apos;s why customers choose us again and again.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-green-100 rounded-xl w-12 h-12 flex items-center justify-center">
                  <reason.icon className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Get Your AC or Refrigerator Fixed?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us now for fast, reliable service. Our technicians are standing by 
            to help you with any repair or maintenance need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+966123456789"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-navy-900 bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call Now
            </a>
            <a
              href="https://wa.me/966123456789"
              className="btn-primary"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}