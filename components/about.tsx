import Image from "next/image"

export default function About() {
  return (
    <section id="nosotros" className="py-24 md:py-36 bg-background">
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
            <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-xs p-5 border border-border shadow-xs">
              <p className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground mb-1.5">
                Nuestra sede
              </p>
              <p className="font-serif text-base md:text-lg text-foreground leading-snug">
                Tenemos una hectárea propia a disposición del evento que quieras realizar
              </p>
              <div className="mt-3.5 pt-3 border-t border-border flex items-center justify-between">
                <a
                  href="https://maps.app.goo.gl/zYM3LsBvBpJQYtKv9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans text-foreground hover:opacity-75 transition-opacity font-medium"
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
                  <span className="text-[11px] text-muted-foreground">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
