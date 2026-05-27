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
              Trabajamos tanto en <strong className="text-foreground font-normal">Quinta Pepe Reina</strong> como
              en cualquier espacio que elijas, llevando la misma calidad y atención al detalle
              a cada celebración.
            </p>

            <div className="mt-10 h-px bg-border w-24" />
            <p className="mt-6 font-serif text-xl italic text-foreground/40">
              Un servicio a la altura de tu evento.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[440px] md:h-[520px]">
            <Image
              src="/Fotos/IMG_0400.jpg"
              alt="El Banquete — preparación gastronómica"
              fill
              className="object-cover"
            />
            {/* Floating note */}
            <div className="absolute bottom-6 left-6 right-6 bg-background p-5">
              <p className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground mb-1">
                Nuestra sede
              </p>
              <p className="font-serif text-base text-foreground">
                Quinta Pepe Reina — Buenos Aires
              </p>
              <p className="font-sans text-xs text-muted-foreground mt-1">
                También operamos en cualquier locación
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
