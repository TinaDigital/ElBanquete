"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Eventos", href: "#eventos" },
  { label: "Menús", href: "#menus" },
  { label: "Contacto", href: "#contacto" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-200 ${scrolled
        ? "bg-background/95 border-border shadow-[0_1px_20px_rgba(0,0,0,0.04)] backdrop-blur-md"
        : "bg-transparent border-transparent"
        }`}
    >
      {/* Top gradient for readability when header is transparent */}
      {!scrolled && (
        <div className="absolute inset-0 hero-gradient-top pointer-events-none" />
      )}

      <nav className="relative max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 relative">
          <Image
            src="/Logos/LOGO BANQUETE1.png"
            alt="El Banquete Gastronómico"
            width={160}
            height={160}
            priority
            className="h-16 md:h-20 w-auto object-contain transition-all duration-500"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link text-xs tracking-wide-xl uppercase transition-colors duration-300 ${scrolled
                  ? "text-foreground/60 hover:text-foreground"
                  : "text-white/70 hover:text-white"
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/5491157826089"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-flex ${scrolled ? "navbar-cta navbar-cta-solid" : "navbar-cta navbar-cta-glass"
            }`}
        >
          Consultar
        </a>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"
            }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-background border-t border-border overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="nav-link text-sm tracking-wide-xl uppercase text-foreground/70 hover:text-foreground transition-colors w-fit"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5491157826089"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 btn-primary btn-primary-dark w-full justify-center text-center whitespace-normal"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
