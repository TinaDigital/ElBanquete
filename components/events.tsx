"use client"

import Image from "next/image"

const rowOne = [
  { src: "/Fotos/36a95199-260e-4376-a8db-1863647f4670.jpg", alt: "Detalle gastronómico — El Banquete", aspectRatio: 3024 / 4032 },
  { src: "/Fotos/292.jpg", alt: "Celebración especial — El Banquete Gastronómico", aspectRatio: 5440 / 3631 },
  { src: "/Fotos/681b5c51-6c7f-4df4-a49b-522954f61d2b.jpg", alt: "Banquete premium — El Banquete Gastronómico", aspectRatio: 3024 / 4032 },
  { src: "/Fotos/52284eb1-c9fd-4d0f-a7f2-c02ef04cb717.jpg", alt: "Servicio exclusivo — El Banquete", aspectRatio: 1280 / 853 },
  { src: "/Fotos/fingerfood-01.jpeg", alt: "Finger food — El Banquete", aspectRatio: 3024 / 4032 },
  { src: "/Fotos/postre-02.jpeg", alt: "Postres de autor — El Banquete Gastronómico", aspectRatio: 3024 / 4032 },
  { src: "/Fotos/sushi-01.jpeg", alt: "Sushi y rolls — El Banquete", aspectRatio: 3024 / 4032 },
  { src: "/Fotos/recepcion-01.jpeg", alt: "Recepción de lujo — El Banquete Gastronómico", aspectRatio: 3024 / 4032 },
  { src: "/Fotos/postre-03.jpeg", alt: "Cheesecake premium — El Banquete", aspectRatio: 3024 / 4032 },
]


const rowTwo = [
  { src: "/Fotos/26431c47-a5f9-446e-8bfe-8ab0a05a9df8.jpg", alt: "Cocina premium — El Banquete", aspectRatio: 1280 / 853 },
  { src: "/Fotos/b6096c4a-eb94-4958-ab75-3807233970cb.jpg", alt: "Brindis de boda — El Banquete Gastronómico", aspectRatio: 3024 / 4032 },
  { src: "/Fotos/fiambres.jpg", alt: "Plato de autor — El Banquete", aspectRatio: 1280 / 853 },
  { src: "/Fotos/c9c2f2b7-c284-471b-91e0-76a703dffe90.jpg", alt: "Detalle de mesa — El Banquete Gastronómico", aspectRatio: 1280 / 853 },
  { src: "/Fotos/IMG_1881.jpg", alt: "Cocktail y bar — El Banquete", aspectRatio: 3024 / 4032 },
  { src: "/Fotos/IMG_9515.jpg", alt: "Preparación gourmet — El Banquete", aspectRatio: 5472 / 3648 },
  { src: "/Fotos/papas-01.jpeg", alt: "Banquete de autor — El Banquete Gastronómico", aspectRatio: 3024 / 4032 },
  { src: "/Fotos/nueva2.jpeg", alt: "Recepción de lujo — El Banquete Gastronómico", aspectRatio: 1280 / 853 },
  { src: "/Fotos/nueva1.jpeg", alt: "Recepción de lujo — El Banquete Gastronómico", aspectRatio: 3024 / 4032 },
]

function GalleryRow({
  photos,
  direction,
  height,
  duration,
}: {
  photos: typeof rowOne
  direction: "left" | "right"
  height: string
  duration: string
}) {
  const doubled = [...photos, ...photos]

  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      <div
        className="flex gap-3 absolute top-0 left-0 h-full will-change-transform"
        style={{
          animation: `marquee-${direction} ${duration} linear infinite`,
          width: "max-content",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      >
        {doubled.map((photo, i) => (
          <div
            key={i}
            className="relative flex-none h-full overflow-hidden group"
            style={{ aspectRatio: photo.aspectRatio }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 80vw, 700px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Events() {
  return (
    <section id="eventos" className="py-14 md:py-20 bg-secondary/40 border-y border-border/60 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 md:mb-10">
        <p className="text-xs tracking-wide-xl uppercase text-muted-foreground mb-4 font-sans">
          Nuestros eventos
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
          Cada evento, <em className="italic font-light">una experiencia única.</em>
        </h2>
      </div>

      {/* Row 1 — moves left */}
      <GalleryRow
        photos={rowOne}
        direction="left"
        height="clamp(220px, 32vw, 520px)"
        duration="55s"
      />

      {/* Thin gap between rows */}
      <div className="h-3" />

      {/* Row 2 — moves right */}
      <GalleryRow
        photos={rowTwo}
        direction="right"
        height="clamp(160px, 24vw, 400px)"
        duration="45s"
      />

      {/* 2 Tipos de Eventos — Abajo de la galería, espaciados, compactos y con efecto hover */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Tarjeta 1: Sociales */}
          <div className="group relative p-7 md:p-9 border border-border/80 bg-background hover:bg-background/90 hover:border-foreground/30 shadow-xs transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground font-medium group-hover:text-foreground/80 transition-colors duration-200">
                  01 · Celebraciones
                </span>
                <span className="font-sans text-[10px] tracking-wide-xl uppercase text-foreground/40 font-medium">
                  Sociales
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight mb-3">
                Eventos Sociales
              </h3>
              <p className="font-sans text-xs md:text-sm text-muted-foreground leading-relaxed">
                Bodas, aniversarios, cumpleaños de 15 y celebraciones íntimas. Cuidamos cada detalle de la gastronomía y el servicio para que anfitriones e invitados solo se dediquen a disfrutar.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-x-5 gap-y-2 font-sans text-xs text-foreground/75">
              <span className="flex items-center gap-1.5 transition-colors duration-200 group-hover:text-foreground">
                <span className="text-foreground/30 font-light select-none group-hover:text-foreground/60 transition-colors duration-200">—</span> Bodas & casamientos
              </span>
              <span className="flex items-center gap-1.5 transition-colors duration-200 group-hover:text-foreground">
                <span className="text-foreground/30 font-light select-none group-hover:text-foreground/60 transition-colors duration-200">—</span> Cumpleaños & 15
              </span>
              <span className="flex items-center gap-1.5 transition-colors duration-200 group-hover:text-foreground">
                <span className="text-foreground/30 font-light select-none group-hover:text-foreground/60 transition-colors duration-200">—</span> Encuentros privados
              </span>
            </div>
          </div>

          {/* Tarjeta 2: Corporativos */}
          <div className="group relative p-7 md:p-9 border border-border/80 bg-background hover:bg-background/90 hover:border-foreground/30 shadow-xs transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground font-medium group-hover:text-foreground/80 transition-colors duration-200">
                  02 · Empresas & Marcas
                </span>
                <span className="font-sans text-[10px] tracking-wide-xl uppercase text-foreground/40 font-medium">
                  Corporativos
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight mb-3">
                Eventos Corporativos
              </h3>
              <p className="font-sans text-xs md:text-sm text-muted-foreground leading-relaxed">
                Lanzamientos de producto, fiestas de fin de año, cocktails y jornadas de trabajo. Puntualidad milimétrica, logística integral y un estándar profesional que potencia la imagen de tu empresa.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-x-5 gap-y-2 font-sans text-xs text-foreground/75">
              <span className="flex items-center gap-1.5 transition-colors duration-200 group-hover:text-foreground">
                <span className="text-foreground/30 font-light select-none group-hover:text-foreground/60 transition-colors duration-200">—</span> Fiestas de fin de año
              </span>
              <span className="flex items-center gap-1.5 transition-colors duration-200 group-hover:text-foreground">
                <span className="text-foreground/30 font-light select-none group-hover:text-foreground/60 transition-colors duration-200">—</span> Lanzamientos de marca
              </span>
              <span className="flex items-center gap-1.5 transition-colors duration-200 group-hover:text-foreground">
                <span className="text-foreground/30 font-light select-none group-hover:text-foreground/60 transition-colors duration-200">—</span> Cocktails & networking
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
