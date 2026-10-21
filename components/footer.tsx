"use client"

import Image from "next/image"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-8">
        {/* Fila principal: Logo, Navegación y Redes Sociales */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 pb-5 md:pb-6 border-b border-white/10">
          {/* Logo más compacto y proporcionado */}
          <a
            href="#"
            onClick={scrollToTop}
            className="shrink-0"
            aria-label="El Banquete Gastronómico - Ir arriba"
          >
            <Image
              src="/Logos/LOGO BANQUETE1.png"
              alt="El Banquete Gastronómico"
              width={140}
              height={140}
              className="h-10 md:h-12 w-auto object-contain transition-opacity hover:opacity-90"
            />
          </a>

          {/* Navegación limpia */}
          <nav className="flex flex-wrap items-center justify-center gap-5 md:gap-8 font-sans text-xs tracking-wide-xl uppercase text-white/60">
            <a href="#nosotros" className="hover:text-white transition-colors duration-200">
              Nosotros
            </a>
            <a href="#eventos" className="hover:text-white transition-colors duration-200">
              Eventos
            </a>
            <a href="#menus" className="hover:text-white transition-colors duration-200">
              Menús
            </a>
            <a href="#contacto" className="hover:text-white transition-colors duration-200">
              Contacto
            </a>
          </nav>

          {/* Redes Sociales compactas y proporcionadas */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/banquetegastronomico/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              aria-label="Instagram de El Banquete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5491157826089"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              aria-label="WhatsApp de El Banquete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:contacto@elbanquete.com.ar"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              aria-label="Email de El Banquete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Barra inferior más compacta */}
        <div className="pt-5 flex flex-col md:flex-row items-center justify-between gap-3 font-sans text-xs text-white/40">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left">
            <p>© {new Date().getFullYear()} El Banquete Gastronómico. Todos los derechos reservados.</p>
            <span className="hidden sm:inline text-white/20">•</span>
            <p>
              Desarrollado por{" "}
              <span className="text-white/75 font-medium tracking-wide">
                TinaDigital
              </span>
            </p>
          </div>

          <div className="flex items-center gap-5">
            <span>Buenos Aires, Argentina</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Volver arriba"
            >
              <span>Volver arriba</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
