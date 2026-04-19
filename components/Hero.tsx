import { PhoneIcon, ClockIcon } from '@heroicons/react/24/solid'
import { CheckCircleIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy-50 via-white to-navy-50">
      <div className="container-custom py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ClockIcon className="h-4 w-4" />
              24/7 Emergency Service Available
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
              Professional{' '}
              <span className="text-green-600">AC & Refrigerator</span>
              <br />
              Repair Services in Jeddah
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Fast, reliable, same-day service across Jeddah. Certified technicians 
              ready to fix your AC and refrigerator problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="tel:+966123456789"
                className="btn-secondary"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call Now
              </a>
              <a
                href="https://wa.me/966123456789"
                className="btn-primary"
              >
                WhatsApp Now
              </a>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">Same Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">Certified Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">Affordable Rates</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/10 to-transparent rounded-3xl" />
              <div className="w-full h-full bg-navy-100 rounded-3xl flex items-center justify-center">
                <WrenchScrewdriverIcon className="h-32 w-32 text-navy-600" />
                <p className="absolute bottom-4 left-4 text-sm text-gray-600">
                  Image placeholder - Technician repairing AC unit
                </p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 rounded-full p-3">
                  <ClockIcon className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy-900">500+</div>
                  <div className="text-sm text-gray-600">Repairs Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}