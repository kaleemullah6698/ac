import { 
  WrenchScrewdriverIcon, 
  PlusCircleIcon, 
  CubeIcon, 
  ClipboardDocumentCheckIcon 
} from '@heroicons/react/24/outline'
import Link from 'next/link'

interface Service {
  title: string
  description: string
  icon: React.ElementType
  href: string
  cta: string
}

const services: Service[] = [
  {
    title: 'AC Repair',
    description: 'Expert air conditioner repair services in Jeddah. We fix all brands and models with same-day service available.',
    icon: WrenchScrewdriverIcon,
    href: '#contact',
    cta: 'Book AC Repair',
  },
  {
    title: 'AC Installation',
    description: 'Professional AC installation services for homes and businesses. We ensure proper setup for optimal cooling performance.',
    icon: PlusCircleIcon,
    href: '#contact',
    cta: 'Get Installation Quote',
  },
  {
    title: 'Refrigerator Repair',
    description: 'Fast refrigerator repair services in Jeddah. Our technicians diagnose and fix all refrigerator problems quickly.',
    icon: CubeIcon,
    href: '#contact',
    cta: 'Schedule Fridge Repair',
  },
  {
    title: 'Maintenance',
    description: 'Regular AC and refrigerator maintenance to prevent breakdowns and extend equipment life. Affordable service plans available.',
    icon: ClipboardDocumentCheckIcon,
    href: '#contact',
    cta: 'Book Maintenance',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="section-title">Our Professional Services</h2>
          <p className="section-subtitle">
            We provide comprehensive AC and refrigerator repair services across Jeddah, 
            ensuring your appliances work perfectly when you need them most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 lg:p-8"
            >
              <div className="bg-navy-50 rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-navy-900" />
              </div>
              
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <Link
                href={service.href}
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                {service.cta}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}