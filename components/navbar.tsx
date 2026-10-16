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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white border-border shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* Top gradient for readability only when transparent */}
      {!scrolled && !mobileOpen && (
        <div className="absolute inset-0 hero-gradient-top pointer-events-none" />
      )}

      <nav className="relative max-w-7xl mx-auto px-6 md:px-12 h-24 md:h-28 grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Desktop nav — izquierda */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link text-xs tracking-wide-xl uppercase transition-colors duration-300 ${
                  scrolled
                    ? "text-foreground/60 hover:text-foreground"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle — izquierda en mobile */}
        <button
          className={`md:hidden justify-self-start p-2 -ml-2 transition-colors duration-300 ${
            scrolled || mobileOpen ? "text-foreground" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>

        {/* Logo — centro (versión original restaurada) */}
        <a href="#" className="flex items-center justify-center" onClick={() => setMobileOpen(false)}>
          <Image
            src={scrolled || mobileOpen ? "/Logos/LOGO BANQUETE3.png" : "/Logos/LOGO BANQUETE1.png"}
            alt="El Banquete Gastronómico"
            width={240}
            height={240}
            priority
            className="h-20 md:h-24 w-auto object-contain transition-all duration-500"
          />
        </a>

        {/* CTA — derecha */}
        <div className="flex items-center justify-end gap-10">
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.slice(2).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link text-xs tracking-wide-xl uppercase transition-colors duration-300 ${
                    scrolled
                      ? "text-foreground/60 hover:text-foreground"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5491157826089"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex ${
              scrolled ? "navbar-cta navbar-cta-solid" : "navbar-cta navbar-cta-glass"
            }`}
          >
            Consultar
          </a>

          {/* Spacer to keep logo perfectly centered on mobile */}
          <div className="w-8 md:hidden" aria-hidden="true" />
        </div>
      </nav>

      {/* Mobile menu dropdown — Solo nombres con decoración de la marca */}
      <div
        className={`md:hidden bg-white border-b border-border shadow-md transition-all duration-300 ease-out overflow-hidden ${
          mobileOpen
            ? "max-h-[420px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 pt-7 pb-8 flex flex-col items-center text-center">
          {/* Enlaces con solo los nombres y detalle decorativo inspirado en el logo */}
          <nav className="flex flex-col items-center gap-5 w-full">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="group py-1 flex flex-col items-center"
              >
                <span className="font-sans text-xs tracking-[0.32em] uppercase text-foreground/85 group-hover:text-foreground active:text-foreground font-medium transition-colors">
                  {link.label}
                </span>

                {/* Detalle decorativo: líneas finas con rombo central (como en el logo) */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="h-px w-5 bg-border group-hover:w-9 group-hover:bg-foreground/50 transition-all duration-300" />
                  <span className="text-[6px] text-foreground/30 group-hover:text-foreground/70 transition-colors duration-300">
                    ◆
                  </span>
                  <span className="h-px w-5 bg-border group-hover:w-9 group-hover:bg-foreground/50 transition-all duration-300" />
                </div>
              </a>
            ))}
          </nav>

          {/* Botón de acción WhatsApp */}
          <a
            href="https://wa.me/5491157826089"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-6 btn-primary btn-primary-dark w-full max-w-xs justify-center py-3 text-center text-[10px] tracking-wide-xl uppercase font-sans"
          >
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </header>
  )
}
