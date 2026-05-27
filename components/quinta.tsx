import Image from "next/image"

export default function Quinta() {
  return (
    <section id="quinta" className="bg-background">
      {/* Full-bleed image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=900&width=1920"
          alt="Quinta Pepe Reina — salón y jardines"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-xs tracking-wide-xl uppercase text-white/50 font-sans mb-4">
              Nuestra sede
            </p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white text-balance">
              Quinta Pepe Reina
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed text-balance">
              El espacio propio donde gastronomía y ambiente se fusionan para crear
              eventos de alta categoría.
            </p>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed font-sans">
              También llevamos nuestro servicio a la locación que elijas.
            </p>
            <a
              href="https://wa.me/5491157826089"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 btn-primary btn-primary-outline"
            >
              Consultar disponibilidad
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
