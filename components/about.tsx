import Image from "next/image"

export default function About() {
  return (
    <section id="nosotros" className="py-14 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs tracking-wide-xl uppercase text-muted-foreground mb-6 font-sans">
              Quiénes somos
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
              Cada evento es
              <br />
              <em className="italic font-light">irrepetible.</em>
            </h2>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed font-sans max-w-md">
              Somos un servicio gastronómico especializado en eventos sociales y corporativos.
              Trabajamos tanto en <strong className="text-foreground font-normal">Espacio El Banquete</strong> como
              en cualquier espacio que elijas, llevando la misma calidad y atención al detalle
              a cada celebración.
            </p>

            <div className="mt-10 h-px bg-border w-24" />
            <p className="mt-6 font-serif text-xl md:text-2xl text-foreground font-medium">
              Nuestro espacio
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[440px] md:h-[520px]">
            <Image
              src="/Fotos/quienes_somos.jpg"
              alt="El Banquete — preparación gastronómica"
              fill
              className="object-cover"
            />
            {/* Floating note */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-5 sm:left-5 sm:right-5 bg-background/95 backdrop-blur-xs p-3.5 sm:p-4 md:p-5 border border-border shadow-xs">
              <p className="font-sans text-[9px] sm:text-[10px] tracking-wide-xl uppercase text-muted-foreground mb-1 sm:mb-1.5">
                Nuestra sede
              </p>
              <p className="font-serif text-[13px] sm:text-sm md:text-base lg:text-lg text-foreground leading-snug">
                Tenemos una hectárea propia a disposición del evento que quieras realizar
              </p>
              <div className="mt-2.5 pt-2 sm:mt-3 sm:pt-2.5 md:mt-3.5 md:pt-3 border-t border-border flex items-center justify-between">
                <a
                  href="https://maps.app.goo.gl/zYM3LsBvBpJQYtKv9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-sans text-foreground hover:opacity-75 transition-opacity font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    className="w-3.5 h-3.5 text-foreground shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span>Ver en Google Maps</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 text-muted-foreground shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
