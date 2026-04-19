'use client'

import { useState } from 'react'
import { PhoneIcon, MapPinIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

interface FormData {
  name: string
  phone: string
  message: string
  service: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: '',
    service: 'AC Repair'
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', phone: '', message: '', service: 'AC Repair' })
    alert('Thank you! We will contact you shortly.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Need AC or refrigerator repair in Jeddah? Contact us today for fast, 
            reliable service. We're available 24/7 for emergencies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <PhoneIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-navy-900">Phone</div>
                    <a href="tel:+966123456789" className="text-gray-600 hover:text-green-600">
                      +966 12 345 6789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <EnvelopeIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-navy-900">Email</div>
                    <a href="mailto:info@jeddahacrepair.com" className="text-gray-600 hover:text-green-600">
                      info@jeddahacrepair.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ClockIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-navy-900">Hours</div>
                    <div className="text-gray-600">24/7 Emergency Service</div>
                    <div className="text-sm text-gray-500">Available all days</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPinIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-navy-900">Location</div>
                    <div className="text-gray-600">Jeddah, Saudi Arabia</div>
                    <div className="text-sm text-gray-500">Serving all areas</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
              <h3 className="text-lg font-bold text-navy-900 mb-3">
                Prefer WhatsApp?
              </h3>
              <p className="text-gray-600 mb-4">
                Send us a message on WhatsApp for quick assistance and service booking.
              </p>
              <a
                href="https://wa.me/966123456789"
                className="btn-primary w-full"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                    placeholder="05X XXX XXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                  >
                    <option value="AC Repair">AC Repair</option>
                    <option value="AC Installation">AC Installation</option>
                    <option value="Refrigerator Repair">Refrigerator Repair</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Emergency Service">Emergency Service</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition resize-none"
                    placeholder="Tell us about your issue..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  We'll respond within 15 minutes during business hours
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-gray-100 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPinIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600">Google Maps Embed Placeholder</p>
              <p className="text-sm text-gray-500">Service Area: Jeddah, Saudi Arabia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}