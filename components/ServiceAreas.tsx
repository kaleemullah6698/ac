import { MapPinIcon } from '@heroicons/react/24/solid'

const areas: string[] = [
  'Al Hamra',
  'Al Rawdah',
  'Al Naseem',
  'Al Salamah',
  'Al Andalus',
  'Al Faisaliyah',
  'Al Bawadi',
  'Al Mohammadiyah',
  'Al Murjan',
  'Al Khalidiyah',
  'Al Sharafiyah',
  'Al Baghdadiyah',
  'Al Aziziyah',
  'Al Rehab',
  'Al Safa',
  'Al Nahda',
  'Al Samer',
  'Al Manar',
  'Al Basateen',
  'Al Rabwah'
]

export default function ServiceAreas() {
  return (
    <section className="py-16 lg:py-24 bg-navy-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Areas We Serve in Jeddah</h2>
          <p className="section-subtitle">
            We provide fast, reliable AC and refrigerator repair services throughout 
            Jeddah. No matter where you are, our technicians are ready to help.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-8 lg:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {areas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-700 hover:text-navy-900 transition-colors group"
              >
                <MapPinIcon className="h-4 w-4 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm lg:text-base">{area}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              Don't see your area? Contact us - we likely serve your neighborhood too!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}