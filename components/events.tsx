"use client"

import Image from "next/image"

const rowOne = [
  { src: "/Fotos/162958c0-4131-4be3-865b-16abc401f2f2.jpg", alt: "Evento de gala — El Banquete Gastronómico", aspectRatio: 1280 / 853 },
  { src: "/Fotos/36a95199-260e-4376-a8db-1863647f4670.jpg", alt: "Detalle gastronómico — El Banquete", aspectRatio: 3024 / 4032 },
  { src: "/Fotos/292.jpg", alt: "Celebración especial — El Banquete Gastronómico", aspectRatio: 5440 / 3631 },
  { src: "/Fotos/3abac21d-d23f-4438-be45-98cd73dfd5b1.jpg", alt: "Plato gourmet — El Banquete", aspectRatio: 1280 / 853 },
  { src: "/Fotos/681b5c51-6c7f-4df4-a49b-522954f61d2b.jpg", alt: "Banquete premium — El Banquete Gastronómico", aspectRatio: 3024 / 4032 },
  { src: "/Fotos/52284eb1-c9fd-4d0f-a7f2-c02ef04cb717.jpg", alt: "Servicio exclusivo — El Banquete", aspectRatio: 1280 / 853 },
  { src: "/Fotos/IMG_0400.jpg", alt: "Mesa principal — El Banquete Gastronómico", aspectRatio: 3600 / 2400 },
  { src: "/Fotos/pauyjuampi-797.jpg", alt: "Recepción al aire libre — El Banquete", aspectRatio: 3600 / 2403 },
]

const rowTwo = [
  { src: "/Fotos/26431c47-a5f9-446e-8bfe-8ab0a05a9df8.jpg", alt: "Cocina premium — El Banquete", aspectRatio: 1280 / 853 },
  { src: "/Fotos/b6096c4a-eb94-4958-ab75-3807233970cb.jpg", alt: "Brindis de boda — El Banquete Gastronómico", aspectRatio: 3024 / 4032 },
  { src: "/Fotos/b6f899dd-1b58-4455-a645-6f40c159f411.jpg", alt: "Plato de autor — El Banquete", aspectRatio: 1280 / 853 },
  { src: "/Fotos/c9c2f2b7-c284-471b-91e0-76a703dffe90.jpg", alt: "Detalle de mesa — El Banquete Gastronómico", aspectRatio: 1280 / 853 },
  { src: "/Fotos/IMG_1881.jpg", alt: "Cocktail y bar — El Banquete", aspectRatio: 3024 / 4032 },
  { src: "/Fotos/IMG_9515.jpg", alt: "Preparación gourmet — El Banquete", aspectRatio: 5472 / 3648 },
  { src: "/Fotos/pauyjuampi-800.jpg", alt: "Celebración y alegría — El Banquete", aspectRatio: 3600 / 2403 },
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
        className="flex gap-3 absolute top-0 left-0 h-full"
        style={{
          animation: `marquee-${direction} ${duration} linear infinite`,
          width: "max-content",
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
    <section id="eventos" className="py-20 md:py-32 bg-background overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14">
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
    </section>
  )
}
