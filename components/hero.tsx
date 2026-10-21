export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] sm:h-screen sm:min-h-[600px] flex items-center sm:items-end overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover animate-hero-image"
        >
          <source src="/IMG_6462 (1).mp4" type="video/mp4" />
        </video>
        {/* Sophisticated multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 -translate-y-6 sm:translate-y-0 pb-0 sm:pb-16 md:pb-20 xl:pb-24 2xl:pb-[11vh] min-[1800px]:pb-[15vh] min-[2200px]:pb-[20vh] min-[2560px]:pb-[24vh] w-full">
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl 2xl:max-w-4xl min-[1800px]:max-w-5xl min-[2200px]:max-w-6xl">
          <p className="font-sans text-[11px] sm:text-xs min-[1800px]:text-sm min-[2200px]:text-base tracking-wide-xl uppercase text-white/50 mb-3 sm:mb-4 lg:mb-5 min-[1800px]:mb-6 min-[2200px]:mb-7 animate-hero-fade-up delay-200">
            Servicio Gastronómico · Buenos Aires
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[4rem] 2xl:text-[4.75rem] min-[1800px]:text-[5.5rem] min-[2200px]:text-[6.5rem] min-[2560px]:text-8xl text-white leading-[1.06] text-balance animate-hero-fade-up delay-400">
            Tu celebración,
            <br />
            <em className="italic font-light">nuestro sabor.</em>
          </h1>
          <p className="mt-3 sm:mt-4 lg:mt-6 min-[1800px]:mt-7 min-[2200px]:mt-8 font-sans text-xs sm:text-sm lg:text-base min-[1800px]:text-lg min-[2200px]:text-xl text-white/65 max-w-sm sm:max-w-md lg:max-w-lg min-[1800px]:max-w-xl min-[2200px]:max-w-2xl leading-relaxed animate-hero-fade-up delay-600">
            Un servicio gastronómico premium para eventos de todo tipo,
            en Espacio El Banquete o en la locación que elijas.
          </p>
          <div className="mt-6 sm:mt-8 lg:mt-10 min-[1800px]:mt-12 min-[2200px]:mt-14 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-5 min-[1800px]:gap-6 min-[2200px]:gap-7 animate-hero-fade-up delay-800">
            <a
              href="https://wa.me/5491157826089"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-primary-light w-full sm:w-auto justify-center text-center whitespace-normal sm:whitespace-nowrap text-xs sm:text-sm min-[1800px]:text-base min-[2200px]:text-lg py-3 sm:py-3.5 min-[1800px]:py-4 min-[2200px]:py-4.5 px-6 sm:px-7 min-[1800px]:px-9 min-[2200px]:px-10"
            >
              Consultar por WhatsApp
            </a>
            <a
              href="#menus"
              className="btn-text text-white/60 hover:text-white justify-center text-xs sm:text-sm min-[1800px]:text-base min-[2200px]:text-lg"
            >
              Ver menús
              <span className="btn-text-line" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-12 min-[1800px]:bottom-14 min-[1800px]:right-16 min-[2200px]:bottom-20 min-[2200px]:right-20 z-10 animate-hero-fade-in delay-1200">
        <div className="h-10 sm:h-14 min-[1800px]:h-20 min-[2200px]:h-24 w-px bg-white/20 animate-hero-line" />
      </div>
    </section>
  )
}
