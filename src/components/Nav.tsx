'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'Enfoque', href: '#enfoque' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Caso', href: '#caso' },
  { label: 'Sobre mí', href: '#sobre-mi' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-crema-100/90 backdrop-blur-md border-b border-crema-300'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <a
          href="#"
          className="font-fraunces text-tinta-100 text-lg font-medium tracking-tight hover:text-ocre transition-colors"
        >
          Charly Mosse
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-inter text-sm text-tinta-400 hover:text-tinta-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="font-inter text-sm bg-tinta-100 text-crema-100 px-4 py-2 rounded-sm hover:bg-tinta-200 transition-colors"
          >
            Agendar llamada
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-tinta-100 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className="block w-5 h-px bg-tinta-100 mb-1.5"></span>
          <span className="block w-5 h-px bg-tinta-100 mb-1.5"></span>
          <span className="block w-3 h-px bg-tinta-100"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-crema-100 border-t border-crema-300 px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-inter text-sm text-tinta-400 hover:text-tinta-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="font-inter text-sm bg-tinta-100 text-crema-100 px-4 py-2 rounded-sm text-center hover:bg-tinta-200 transition-colors mt-2"
          >
            Agendar llamada
          </a>
        </div>
      )}
    </header>
  )
}
