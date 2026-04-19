import Link from 'next/link'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Jeddah AC Repair</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Professional AC and refrigerator repair services in Jeddah. 
              Available 24/7 for all your cooling needs.
            </p>
            <div className="space-y-2">
              <a href="tel:+966123456789" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors">
                <PhoneIcon className="h-5 w-5" />
                +966 12 345 6789
              </a>
              <a href="mailto:info@jeddahacrepair.com" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors">
                <EnvelopeIcon className="h-5 w-5" />
                info@jeddahacrepair.com
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPinIcon className="h-5 w-5 flex-shrink-0" />
                Jeddah, Saudi Arabia
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-green-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-green-400 transition-colors">
                  AC Repair Jeddah
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-green-400 transition-colors">
                  Refrigerator Repair Jeddah
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-green-400 transition-colors">
                  Emergency AC Service
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-green-400 transition-colors">
                  AC Installation
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-green-400 transition-colors">
                  AC Maintenance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Al Hamra</li>
              <li className="text-gray-300">Al Rawdah</li>
              <li className="text-gray-300">Al Naseem</li>
              <li className="text-gray-300">Al Salamah</li>
              <li className="text-gray-300">Al Andalus</li>
              <li>
                <Link href="#service-areas" className="text-green-400 hover:text-green-300">
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Jeddah AC Repair. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}