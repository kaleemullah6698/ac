import { CheckBadgeIcon, UserGroupIcon, MapPinIcon } from '@heroicons/react/24/outline'

interface Stat {
  value: string
  label: string
  icon: React.ElementType
}

const stats: Stat[] = [
  { value: '10+', label: 'Years Experience', icon: CheckBadgeIcon },
  { value: '5000+', label: 'Happy Customers', icon: UserGroupIcon },
  { value: 'All Areas', label: 'Jeddah Coverage', icon: MapPinIcon },
]

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
              Trusted AC & Refrigerator Repair Experts in Jeddah
            </h2>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="leading-relaxed">
                With over a decade of experience serving the Jeddah community, 
                we've built our reputation on providing reliable, professional, 
                and affordable repair services for both residential and commercial clients.
              </p>
              <p className="leading-relaxed">
                Our team of certified technicians is dedicated to delivering 
                exceptional service with every visit. We understand the importance 
                of functioning AC and refrigeration systems in Jeddah's climate, 
                which is why we offer same-day service and 24/7 emergency repairs.
              </p>
              <p className="leading-relaxed">
                Whether you need emergency AC repair, refrigerator maintenance, 
                or a complete system installation, you can count on us for honest 
                advice, transparent pricing, and quality workmanship.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-navy-50 rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-navy-900" />
                  </div>
                  <div className="text-2xl font-bold text-navy-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-bl from-navy-900/10 to-transparent rounded-3xl" />
              <div className="w-full h-full bg-navy-100 rounded-3xl flex items-center justify-center">
                <UserGroupIcon className="h-32 w-32 text-navy-600" />
                <p className="absolute bottom-4 left-4 text-sm text-gray-600">
                  Image placeholder - Our team of technicians
                </p>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-green-600 text-white rounded-2xl shadow-xl p-6 hidden lg:block">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm">Emergency</div>
                <div className="text-sm">Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}