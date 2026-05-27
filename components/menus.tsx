"use client"

import { useState } from "react"

const menus = [
  {
    name: "Criollo Clásico",
    tag: "Tradicional",
    highlight: "Asado a la cruz · Vacío a la leña · Pechito de cerdo · Pollo a las brasas",
    courses: ["Recepción", "Principal · Parrilla", "Guarnición", "Postre", "Mesa Dulce"],
  },
  {
    name: "Criollo Premium",
    tag: "Distinguido",
    highlight: "Costillar a la leña · Vacío al asador · Bondiola ahumada · Pollo oreganatto",
    courses: ["Recepción · Isla de fiambres", "Principal · Parrilla", "Ensaladas a elección", "Postre", "Mesa Dulce"],
  },
  {
    name: "Finger Food Clásico",
    tag: "Cóctel",
    highlight: "Pernil 15hs a fuego lento · Ravioles de ricota · Cazuela bandejeada",
    courses: ["Bocados fríos y calientes", "Principal", "Postre", "Mesa Dulce"],
  },
  {
    name: "Finger Food Gourmet",
    tag: "Alta cocina",
    highlight: "Gravlax de trucha · Arancini · Langostinos · Lomo y vegetales",
    courses: ["Bocados fríos y calientes", "Islas a elección × 3", "Postre", "Mesa Dulce", "Fin de fiesta"],
  },
  {
    name: "Formal al Plato",
    tag: "Premium",
    highlight: "Servicio de mesa completo para eventos de máxima distinción",
    courses: ["Entrada", "Principal", "Postre", "Mesa Dulce"],
  },
]

const included = [
  "Cristalería y vajilla",
  "Mantelería color a elección",
  "Personal de salón, cocina y maitre",
  "Canilla libre × 8hs",
]

function DetailPanel({ menu }: { menu: typeof menus[0] }) {
  return (
    <div className="p-6 md:p-10 flex flex-col gap-8 h-full">
      <div>
        <p className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground mb-2">
          {menu.tag}
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
          {menu.name}
        </h3>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed border-l-2 border-border pl-4 italic mb-6">
          {menu.highlight}
        </p>
        <div className="flex flex-wrap gap-2">
          {menu.courses.map((c) => (
            <span
              key={c}
              className="font-sans text-[10px] tracking-wide-xl uppercase px-3 py-2 border border-border text-foreground/50"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-border flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground mb-3">
            Todos los menús incluyen
          </p>
          <ul className="flex flex-col gap-2">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3 font-sans text-xs text-foreground/60">
                <span className="h-px w-4 bg-foreground/20 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <a
          href="https://wa.me/5491157826089"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-primary-dark whitespace-nowrap flex-shrink-0"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  )
}

export default function Menus() {
  const [active, setActive] = useState(0)

  return (
    <section id="menus" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-wide-xl uppercase text-muted-foreground mb-4 font-sans">
            Propuesta gastronómica
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
            5 menús,
            <br />
            <em className="italic font-light">un solo estándar.</em>
          </h2>
        </div>

        {/* Desktop: sidebar + fixed-height panel */}
        <div className="hidden md:grid md:grid-cols-12 border border-border" style={{ minHeight: 480 }}>
          {/* Sidebar */}
          <div className="col-span-4 border-r border-border flex flex-col">
            {menus.map((m, i) => (
              <button
                key={m.name}
                onClick={() => setActive(i)}
                className={`w-full text-left px-6 py-5 flex items-center justify-between gap-4 border-b last:border-b-0 border-border transition-colors duration-200 flex-1 ${
                  active === i ? "bg-foreground" : "bg-background hover:bg-secondary"
                }`}
              >
                <div>
                  <p className={`font-sans text-[10px] tracking-wide-xl uppercase mb-1 ${active === i ? "text-white/40" : "text-muted-foreground"}`}>
                    {m.tag}
                  </p>
                  <p className={`font-serif text-lg ${active === i ? "text-white" : "text-foreground"}`}>
                    {m.name}
                  </p>
                </div>
                <span className={`h-px flex-1 max-w-[40px] ${active === i ? "bg-white/20" : "bg-border"}`} />
              </button>
            ))}
          </div>

          {/* Detail panel — fixed height, no jump */}
          <div className="col-span-8">
            <DetailPanel menu={menus[active]} />
          </div>
        </div>

        {/* Mobile: accordion — detail expands inline below each item */}
        <div className="md:hidden border border-border">
          {menus.map((m, i) => (
            <div key={m.name} className="border-b last:border-b-0 border-border">
              <button
                onClick={() => setActive(active === i ? -1 : i)}
                className={`w-full text-left px-5 py-5 flex items-center justify-between gap-4 transition-colors duration-200 ${
                  active === i ? "bg-foreground" : "bg-background"
                }`}
                aria-expanded={active === i}
              >
                <div>
                  <p className={`font-sans text-[10px] tracking-wide-xl uppercase mb-1 ${active === i ? "text-white/40" : "text-muted-foreground"}`}>
                    {m.tag}
                  </p>
                  <p className={`font-serif text-xl ${active === i ? "text-white" : "text-foreground"}`}>
                    {m.name}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${active === i ? "rotate-180 text-white/40" : "text-muted-foreground"}`}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Inline detail — expands below the button */}
              {active === i && (
                <div className="bg-background border-t border-border">
                  <DetailPanel menu={m} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
