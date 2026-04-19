'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10 lg:h-12 lg:w-12 bg-navy-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="ml-3">
                <div className="text-sm lg:text-base font-bold text-navy-900 leading-tight">
                  Jeddah
                </div>
                <div className="text-xs lg:text-sm text-gray-600">
                  AC & Fridge Repair
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-navy-900 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-3">
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
              WhatsApp
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-navy-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-4 space-y-2">
                <a
                  href="tel:+966123456789"
                  className="btn-secondary w-full"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/966123456789"
                  className="btn-primary w-full"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}