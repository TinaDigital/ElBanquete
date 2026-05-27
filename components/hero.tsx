import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Fotos/pauyjuampi-797.jpg"
          alt="El Banquete Gastronómico — celebración y catering"
          fill
          priority
          className="object-cover animate-hero-image"
        />
        {/* Sophisticated multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28 w-full">
        <div className="max-w-3xl">
          <p className="font-sans text-xs tracking-wide-xl uppercase text-white/45 mb-6 animate-hero-fade-up delay-200">
            Servicio Gastronómico · Buenos Aires
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight text-balance animate-hero-fade-up delay-400">
            Tu celebración,
            <br />
            <em className="italic font-light">nuestro sabor.</em>
          </h1>
          <p className="mt-6 font-sans text-base text-white/55 max-w-md leading-relaxed animate-hero-fade-up delay-600">
            Un servicio gastronómico premium para eventos de todo tipo,
            en Quinta Pepe Reina o en la locación que elijas.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 animate-hero-fade-up delay-800">
            <a
              href="https://wa.me/5491157826089"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-primary-light"
            >
              Consultar por WhatsApp
            </a>
            <a
              href="#menus"
              className="btn-text text-white/55 hover:text-white"
            >
              Ver menús
              <span className="btn-text-line" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-12 z-10 animate-hero-fade-in delay-1200">
        <div className="h-14 w-px bg-white/20 animate-hero-line" />
      </div>
    </section>
  )
}
