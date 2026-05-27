import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Image
            src="/Logos/LogoBanquete-blancopng.png"
            alt="El Banquete Gastronómico"
            width={160}
            height={160}
            className="h-20 md:h-24 w-auto object-contain"
          />
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {[
              { label: "Nosotros", href: "#nosotros" },
              { label: "Eventos", href: "#eventos" },
              { label: "Menús", href: "#menus" },
              { label: "Contacto", href: "#contacto" },
              { label: "Instagram", href: "https://www.instagram.com/banquetegastronomico/" },
              { label: "WhatsApp", href: "https://wa.me/5491157826089" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-xs tracking-wide-xl uppercase text-white/30 hover:text-white transition-colors duration-300 font-sans"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t border-white/10 pt-8">
          <p className="font-sans text-xs text-white/20">
            © {new Date().getFullYear()} El Banquete Gastronómico. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-white/20">Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  )
}
