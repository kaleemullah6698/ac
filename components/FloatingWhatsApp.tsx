'use client'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/966123456789"
      className="fixed bottom-24 right-6 z-40 lg:bottom-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group hidden lg:block"
      aria-label="Contact on WhatsApp"
    >
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.101.101-.21.21-.09.417.12.206.53.874 1.139 1.416.784.698 1.445.914 1.65 1.015.206.101.325.086.447-.029.12-.115.52-.607.659-.815.139-.208.278-.173.477-.101.2.072 1.256.592 1.472.707.216.115.36.173.404.26.043.087.043.505-.101.91z"/>
        <path d="M12.002 2.003c-5.523 0-10 4.477-10 10 0 1.995.589 3.903 1.698 5.514L2 22l4.651-1.693A9.96 9.96 0 0012.002 22c5.523 0 10-4.477 10-10s-4.477-9.997-10-9.997z"/>
      </svg>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </span>
    </a>
  )
}