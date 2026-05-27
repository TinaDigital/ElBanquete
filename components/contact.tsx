import Image from "next/image"

export default function Contact() {
  return (
    <section id="contacto" className="bg-background py-24 md:py-36 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">

          {/* Left Column: Contact details and links */}
          <div className="md:col-span-6 lg:col-span-7">
            {/* Heading */}
            <div className="mb-12">
              <p className="font-sans text-xs tracking-wide-xl uppercase text-muted-foreground mb-5">
                Contacto
              </p>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight text-balance animate-hero-fade-up">
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
                className="contact-row group flex items-center justify-between py-7 hover:bg-secondary -mx-4 px-4 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <span className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground w-20 shrink-0">
                    WhatsApp
                  </span>
                  <span className="font-serif text-xl md:text-3xl text-foreground break-all">
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
                className="contact-row group flex items-center justify-between py-7 hover:bg-secondary -mx-4 px-4 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <span className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground w-20 shrink-0">
                    Email
                  </span>
                  <span className="font-serif text-xl md:text-3xl text-foreground break-all">
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
                className="contact-row group flex items-center justify-between py-7 hover:bg-secondary -mx-4 px-4 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <span className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground w-20 shrink-0">
                    Instagram
                  </span>
                  <span className="font-serif text-xl md:text-3xl text-foreground break-all">
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

          {/* Right Column: Premium overlapping image collage */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="relative w-full h-[400px] md:h-[550px] select-none overflow-hidden md:overflow-visible">

              {/* Photo 1: Large Center-Left (Catering Setup) */}
              <div className="absolute top-[10%] left-[5%] w-[55%] h-[60%] rotate-[-4deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-40 hover:shadow-2xl shadow-lg border-[6px] border-white bg-white">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/Fotos/IMG_1881.jpg"
                    alt="Celebración El Banquete"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 350px"
                  />
                </div>
              </div>

              {/* Photo 2: Top-Right (Wedding Toast) */}
              <div className="absolute top-[2%] right-[5%] w-[45%] h-[50%] rotate-[3deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-40 hover:shadow-2xl shadow-lg border-[6px] border-white bg-white">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/Fotos/b6096c4a-eb94-4958-ab75-3807233970cb.jpg"
                    alt="Brindis de boda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 40vw, 300px"
                  />
                </div>
              </div>

              {/* Photo 3: Bottom-Right (Wedding Celebration Couple) */}
              <div className="absolute bottom-[5%] right-[10%] w-[50%] h-[50%] rotate-[-2deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-40 hover:shadow-2xl shadow-lg border-[6px] border-white bg-white">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/Fotos/pauyjuampi-800.jpg"
                    alt="Pau y Juampi Boda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 350px"
                  />
                </div>
              </div>

              {/* Photo 4: Small Detail Bottom-Left (Gourmet Food) */}
              <div className="absolute bottom-[10%] left-[8%] w-[38%] h-[40%] rotate-[6deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-40 hover:shadow-2xl shadow-lg border-[6px] border-white bg-white">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/Fotos/3abac21d-d23f-4438-be45-98cd73dfd5b1.jpg"
                    alt="Gourmet detail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 35vw, 250px"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
