export default function Contact() {
  return (
    <section id="contacto" className="bg-background py-24 md:py-36 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="mb-16">
          <p className="font-sans text-xs tracking-wide-xl uppercase text-muted-foreground mb-5">
            Contacto
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight text-balance">
            ¿Tenés un evento<br />
            <em className="italic font-light">en mente?</em>
          </h2>
          <p className="mt-6 font-sans text-sm text-muted-foreground leading-relaxed max-w-sm">
            Contanos tu fecha, el espacio y la cantidad de personas. Te armamos una propuesta a medida.
          </p>
        </div>

        {/* Contact options */}
        <div className="flex flex-col divide-y divide-border">

          {/* WhatsApp — primary */}
          <a
            href="https://wa.me/5491157826089"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-row group flex items-center justify-between py-7 hover:bg-secondary -mx-6 px-6 md:-mx-12 md:px-12"
          >
            <div className="flex items-center gap-6">
              <span className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground w-20 shrink-0">
                WhatsApp
              </span>
              <span className="font-serif text-2xl md:text-3xl text-foreground">
                Reservá tu fecha
              </span>
            </div>
            <div className="flex items-center gap-3 shrink-0 ml-4">
              <span className="hidden md:block font-sans text-xs tracking-wide-xl uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Escribinos
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact-arrow w-5 h-5 text-muted-foreground group-hover:text-foreground" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:contacto@elbanquete.com.ar"
            className="contact-row group flex items-center justify-between py-7 hover:bg-secondary -mx-6 px-6 md:-mx-12 md:px-12"
          >
            <div className="flex items-center gap-6">
              <span className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground w-20 shrink-0">
                Email
              </span>
              <span className="font-serif text-2xl md:text-3xl text-foreground">
                contacto@elbanquete.com.ar
              </span>
            </div>
            <div className="flex items-center gap-3 shrink-0 ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact-arrow w-5 h-5 text-muted-foreground group-hover:text-foreground" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/banquetegastronomico/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-row group flex items-center justify-between py-7 hover:bg-secondary -mx-6 px-6 md:-mx-12 md:px-12"
          >
            <div className="flex items-center gap-6">
              <span className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground w-20 shrink-0">
                Instagram
              </span>
              <span className="font-serif text-2xl md:text-3xl text-foreground">
                @banquetegastronomico
              </span>
            </div>
            <div className="flex items-center gap-3 shrink-0 ml-4">
              <span className="hidden md:block font-sans text-xs tracking-wide-xl uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Ver trabajos
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact-arrow w-5 h-5 text-muted-foreground group-hover:text-foreground" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}
