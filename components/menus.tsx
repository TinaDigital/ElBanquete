"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { CardSwap, Card, type CardSwapHandle } from "@/components/ui/card-swap"
import {
  MENUS_DATA,
  MENUS_LIST,
  CORPORATE_MENUS,
  type MenuData,
  type CorporateMenuItem,
} from "@/lib/menus-data"

export { MENUS_DATA, MENUS_LIST, type MenuData }

export default function Menus() {
  const isMobile = useIsMobile()
  const [selectedId, setSelectedId] = useState<string>(MENUS_LIST[0].id)
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0)
  const [isFading, setIsFading] = useState<boolean>(false)
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(
    MENUS_LIST[0].id
  )
  const [activeCorpIdx, setActiveCorpIdx] = useState<number>(0)
  const cardSwapRef = useRef<CardSwapHandle>(null)

  function handleSelectMenu(id: string) {
    if (id === selectedId) return
    setIsFading(true)
    setTimeout(() => {
      setSelectedId(id)
      setActivePhotoIdx(0)
      setIsFading(false)
    }, 140)
  }

  function handleToggleMobile(id: string) {
    setMobileExpandedId((prev) => (prev === id ? null : id))
  }

  const activeMenu = MENUS_DATA[selectedId] || MENUS_LIST[0]
  const whatsappMsg = `Hola, me gustaría consultar por la propuesta del menú "${activeMenu.title}" de El Banquete.`
  const whatsappUrl = `https://wa.me/5491157826089?text=${encodeURIComponent(whatsappMsg)}`

  const currentPhoto =
    activeMenu.images[activePhotoIdx] || activeMenu.images[0]

  // Pasos para la distribución 2 arriba y 2 abajo
  const step1 = activeMenu.steps.find((s) => s.step === "01")
  const step2 = activeMenu.steps.find((s) => s.step === "02")
  const step3 = activeMenu.steps.find((s) => s.step === "03")
  const step4 = activeMenu.steps.find((s) => s.step === "04")

  return (
    <section id="menus" className="py-14 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header editorial */}
        <div className="mb-8 md:mb-10">
          <p className="text-xs tracking-wide-xl uppercase text-muted-foreground mb-4 font-sans">
            Propuesta gastronómica
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
            Nuestras opciones
            <br />
            <em className="italic font-light">de menús.</em>
          </h2>
          <p className="mt-4 font-sans text-sm text-muted-foreground max-w-xl leading-relaxed">
            Una secuencia culinaria cronológica pensada para acompañar cada momento de
            tu celebración, desde la recepción hasta el trasnoche.
          </p>
        </div>

        {/* ─── Desktop: Altura fija unificada (600px) que NUNCA salta ni cambia de tamaño al alternar menús ─── */}
        <div className="hidden md:grid md:grid-cols-12 border border-border h-[600px] overflow-hidden">
          {/* 1. Selector Vertical Izquierdo (3 cols): 5 cajitas de altura idéntica */}
          <div className="col-span-3 border-r border-border flex flex-col h-full bg-card/25">
            {MENUS_LIST.map((m, idx) => {
              const isSelected = selectedId === m.id
              return (
                <button
                  key={m.id}
                  onClick={() => handleSelectMenu(m.id)}
                  className={`flex-1 w-full text-left px-6 lg:px-7 border-b border-border last:border-b-0 transition-all duration-200 group flex items-center justify-between gap-3 ${isSelected
                    ? "bg-foreground text-primary-foreground font-medium"
                    : "bg-background hover:bg-secondary/60 text-foreground"
                    }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-sans text-[11px] tracking-wider transition-colors ${isSelected ? "text-white/50" : "text-muted-foreground"
                        }`}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={`font-serif text-lg lg:text-xl transition-colors ${isSelected ? "text-white" : "text-foreground"
                        }`}
                    >
                      {m.title}
                    </span>
                  </div>

                  <span
                    className={`h-px transition-all duration-200 ${isSelected
                      ? "bg-white/60 w-5"
                      : "bg-border group-hover:bg-foreground/40 w-3 group-hover:w-4"
                      }`}
                  />
                </button>
              )
            })}
          </div>

          {/* 2. Detalle Cronológico Central (6 cols) - 2 arriba y 2 abajo, altura fija */}
          <div
            className={`col-span-6 p-7 lg:p-8 flex flex-col justify-between border-r border-border bg-background h-full transition-opacity duration-150 ${isFading ? "opacity-0" : "opacity-100"
              }`}
          >
            {/* Header del Menú */}
            <div>
              <p className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground mb-1">
                Propuesta · {activeMenu.tagline}
              </p>
              <h3 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                {activeMenu.title}
              </h3>
              <p className="font-sans text-xs text-muted-foreground italic border-l border-border pl-3 mt-2 leading-relaxed max-w-lg line-clamp-1">
                {activeMenu.highlight}
              </p>
            </div>

            {/* 4 Pasos: 2 Arriba y 2 Abajo */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 my-auto">
              {/* FILA 1 (Arriba - Izquierda): Paso 01 */}
              {step1 && (
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-[10px] tracking-wide-xl uppercase text-foreground/50 font-medium">
                    01 · {step1.label}
                  </span>
                  <h4 className="font-serif text-base lg:text-lg text-foreground leading-snug line-clamp-1">
                    {step1.title}
                  </h4>
                  <ul className="flex flex-col gap-1 pt-0.5">
                    {step1.highlights.slice(0, 2).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 font-sans text-xs text-foreground/75 leading-relaxed"
                      >
                        <span className="text-foreground/30 font-light select-none shrink-0">—</span>
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FILA 1 (Arriba - Derecha): Paso 02 */}
              {step2 && (
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-[10px] tracking-wide-xl uppercase text-foreground/50 font-medium">
                    02 · {step2.label}
                  </span>
                  <h4 className="font-serif text-base lg:text-lg text-foreground leading-snug line-clamp-1">
                    {step2.title}
                  </h4>
                  <ul className="flex flex-col gap-1 pt-0.5">
                    {step2.highlights.slice(0, 2).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 font-sans text-xs text-foreground/75 leading-relaxed"
                      >
                        <span className="text-foreground/30 font-light select-none shrink-0">—</span>
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FILA 2 (Abajo - Izquierda): Paso 03 */}
              {step3 && (
                <div className="flex flex-col gap-1 pt-3 border-t border-border/60">
                  <span className="font-sans text-[10px] tracking-wide-xl uppercase text-foreground/50 font-medium">
                    03 · {step3.label}
                  </span>
                  <h4 className="font-serif text-base lg:text-lg text-foreground leading-snug line-clamp-1">
                    {step3.title}
                  </h4>
                  <ul className="flex flex-col gap-1 pt-0.5">
                    {step3.highlights.slice(0, 2).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 font-sans text-xs text-foreground/75 leading-relaxed"
                      >
                        <span className="text-foreground/30 font-light select-none shrink-0">—</span>
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FILA 2 (Abajo - Derecha): Paso 04 (o Servicio de Gala) */}
              <div className="flex flex-col gap-1 pt-3 border-t border-border/60">
                {step4 ? (
                  <>
                    <span className="font-sans text-[10px] tracking-wide-xl uppercase text-foreground/50 font-medium">
                      04 · {step4.label}
                    </span>
                    <h4 className="font-serif text-base lg:text-lg text-foreground leading-snug line-clamp-1">
                      {step4.title}
                    </h4>
                    <ul className="flex flex-col gap-1 pt-0.5">
                      {step4.highlights.slice(0, 2).map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 font-sans text-xs text-foreground/75 leading-relaxed"
                        >
                          <span className="text-foreground/30 font-light select-none shrink-0">—</span>
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <span className="font-sans text-[10px] tracking-wide-xl uppercase text-foreground/50 font-medium">
                      04 · SERVICIO & GALA
                    </span>
                    <h4 className="font-serif text-base lg:text-lg text-foreground leading-snug line-clamp-1">
                      Estándar Integral
                    </h4>
                    <ul className="flex flex-col gap-1 pt-0.5">
                      <li className="flex items-start gap-2 font-sans text-xs text-foreground/75 leading-relaxed">
                        <span className="text-foreground/30 font-light select-none shrink-0">—</span>
                        <span className="line-clamp-1">Canilla libre x 8 hs continua</span>
                      </li>
                      <li className="flex items-start gap-2 font-sans text-xs text-foreground/75 leading-relaxed">
                        <span className="text-foreground/30 font-light select-none shrink-0">—</span>
                        <span className="line-clamp-1">Vajilla formal, mantelería y brigada</span>
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* Pie de Acciones Optimizado */}
            <div className="pt-4 border-t border-border grid grid-cols-2 gap-3">
              {/* Botón Ver PDF */}
              <a
                href={activeMenu.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary-outline flex items-center justify-center gap-2 py-3 px-4 text-center whitespace-nowrap text-[10px] tracking-wide-xl uppercase font-sans"
              >
                <span>Ver Carta en PDF</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* Botón WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary-dark flex items-center justify-center gap-2 py-3 px-4 text-center whitespace-nowrap text-[10px] tracking-wide-xl uppercase font-sans"
              >
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 3. Galería Fotográfica Hero (3 cols) - Altura fija idéntica */}
          <div
            className={`col-span-3 relative h-full bg-secondary/40 overflow-hidden group transition-opacity duration-150 ${isFading ? "opacity-0" : "opacity-100"
              }`}
          >
            <Image
              key={currentPhoto.src}
              src={currentPhoto.src}
              alt={`${activeMenu.title} - ${currentPhoto.caption}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, 300px"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

            {/* Switcher Foto 01 / Foto 02 */}
            {activeMenu.images.length > 1 && (
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-black/50 backdrop-blur-md p-1 border border-white/15">
                {activeMenu.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`px-2 py-0.5 font-sans text-[9px] tracking-wide-xl uppercase transition-all duration-200 ${activePhotoIdx === idx
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>
            )}

            {/* Epígrafe */}
            <div className="absolute bottom-6 left-5 right-5 text-white pointer-events-none">
              <p className="font-sans text-[9px] tracking-wide-xl uppercase text-white/60 mb-1">
                Registro Oficial
              </p>
              <p className="font-serif text-base leading-snug">
                {currentPhoto.caption}
              </p>
            </div>
          </div>
        </div>

        {/* ─── Mobile: Acordeón limpio ─── */}
        <div className="md:hidden border border-border flex flex-col">
          {MENUS_LIST.map((m, idx) => {
            const isExpanded = mobileExpandedId === m.id
            const itemWhatsappMsg = `Hola, me gustaría consultar por la propuesta del menú "${m.title}" de El Banquete.`
            const itemWhatsappUrl = `https://wa.me/5491157826089?text=${encodeURIComponent(
              itemWhatsappMsg
            )}`

            const mStep1 = m.steps.find((s) => s.step === "01")
            const mStep2 = m.steps.find((s) => s.step === "02")
            const mStep3 = m.steps.find((s) => s.step === "03")
            const mStep4 = m.steps.find((s) => s.step === "04")

            return (
              <div key={m.id} className="border-b last:border-b-0 border-border">
                {/* Botón Acordeón Móvil */}
                <button
                  onClick={() => handleToggleMobile(m.id)}
                  className={`w-full text-left px-5 py-5 flex items-center justify-between gap-4 transition-colors duration-200 ${isExpanded
                    ? "bg-foreground text-primary-foreground"
                    : "bg-background"
                    }`}
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-sans text-[10px] tracking-wide-xl ${isExpanded ? "text-white/50" : "text-muted-foreground"
                        }`}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={`font-serif text-xl ${isExpanded ? "text-white" : "text-foreground"
                        }`}
                    >
                      {m.title}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isExpanded
                      ? "rotate-180 text-white/60"
                      : "text-muted-foreground"
                      }`}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>

                {/* Contenido expandido móvil */}
                {isExpanded && (
                  <div className="bg-background border-t border-border p-5 space-y-6">
                    {/* Galería de 2 fotos */}
                    <div className="grid grid-cols-2 gap-2">
                      {m.images.map((img, i) => (
                        <div
                          key={i}
                          className="relative aspect-[4/3] overflow-hidden border border-border bg-secondary"
                        >
                          <Image
                            src={img.src}
                            alt={`${m.title} ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 200px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                          <p className="absolute bottom-1.5 left-2 right-2 text-[10px] text-white/90 font-serif line-clamp-1">
                            {img.caption}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Pasos en grilla 2 arriba y 2 abajo */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {mStep1 && (
                        <div className="flex flex-col gap-1">
                          <span className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground font-medium">
                            01 · {mStep1.label}
                          </span>
                          <h4 className="font-serif text-base text-foreground">
                            {mStep1.title}
                          </h4>
                          <ul className="flex flex-col gap-0.5 pt-0.5">
                            {mStep1.highlights.slice(0, 2).map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 font-sans text-xs text-foreground/75 leading-relaxed"
                              >
                                <span className="text-foreground/30 font-light select-none shrink-0">—</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {mStep2 && (
                        <div className="flex flex-col gap-1">
                          <span className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground font-medium">
                            02 · {mStep2.label}
                          </span>
                          <h4 className="font-serif text-base text-foreground">
                            {mStep2.title}
                          </h4>
                          <ul className="flex flex-col gap-0.5 pt-0.5">
                            {mStep2.highlights.slice(0, 2).map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 font-sans text-xs text-foreground/75 leading-relaxed"
                              >
                                <span className="text-foreground/30 font-light select-none shrink-0">—</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {mStep3 && (
                        <div className="flex flex-col gap-1 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/60">
                          <span className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground font-medium">
                            03 · {mStep3.label}
                          </span>
                          <h4 className="font-serif text-base text-foreground">
                            {mStep3.title}
                          </h4>
                          <ul className="flex flex-col gap-0.5 pt-0.5">
                            {mStep3.highlights.slice(0, 2).map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 font-sans text-xs text-foreground/75 leading-relaxed"
                              >
                                <span className="text-foreground/30 font-light select-none shrink-0">—</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-col gap-1 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/60">
                        {mStep4 ? (
                          <>
                            <span className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground font-medium">
                              04 · {mStep4.label}
                            </span>
                            <h4 className="font-serif text-base text-foreground">
                              {mStep4.title}
                            </h4>
                            <ul className="flex flex-col gap-0.5 pt-0.5">
                              {mStep4.highlights.slice(0, 2).map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 font-sans text-xs text-foreground/75 leading-relaxed"
                                >
                                  <span className="text-foreground/30 font-light select-none shrink-0">—</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <>
                            <span className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground font-medium">
                              04 · SERVICIO & GALA
                            </span>
                            <h4 className="font-serif text-base text-foreground">
                              Estándar Integral
                            </h4>
                            <ul className="flex flex-col gap-0.5 pt-0.5">
                              <li className="flex items-start gap-2 font-sans text-xs text-foreground/75 leading-relaxed">
                                <span className="text-foreground/30 font-light select-none shrink-0">—</span>
                                <span>Canilla libre x 8 hs continua</span>
                              </li>
                            </ul>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Acciones móviles */}
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={m.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary btn-primary-outline flex items-center justify-center gap-2 py-3 text-center text-[10px] tracking-wide-xl uppercase font-sans"
                      >
                        <span>Ver Carta en PDF</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4z"
                            clipRule="evenodd"
                          />
                          <path
                            fillRule="evenodd"
                            d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>

                      <a
                        href={itemWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary btn-primary-dark flex items-center justify-center py-3 text-center text-[10px] tracking-wide-xl uppercase font-sans"
                      >
                        Consultar WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>



        {/* Sección Corporativa: Formato split 2 columnas (Texto a la izquierda, Tarjetas 3D a la derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center lg:mt-20">
          {/* Columna Izquierda: Información Editorial y CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <p className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground mb-3 mt-10">
              Propuesta Empresas & Marcas
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-5">
              Formatos gastronómicos
              <br />
              <em className="italic font-light">a medida.</em>
            </h3>
            <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
              Cada propuesta puede personalizarse según el tipo de evento, cantidad de invitados, locación, duración y requerimientos de la empresa.
            </p>

            <div>
              <a
                href="https://wa.me/5491157826089?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20propuesta%20corporativa%20personalizada%20para%20mi%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary-dark py-3.5 px-7 text-xs font-sans tracking-wide-xl uppercase inline-flex items-center justify-center gap-2"
              >
                <span>Cotizar Evento Corporativo</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas 3D sin blur y Controles */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="w-full max-w-[340px] sm:max-w-md lg:max-w-xl h-[495px] md:h-[530px] flex items-center justify-center my-2">
              <CardSwap
                key={isMobile ? "corp-mob" : "corp-desk"}
                ref={cardSwapRef}
                width={isMobile ? 330 : 460}
                height={isMobile ? 450 : 440}
                cardDistance={isMobile ? 8 : 28}
                verticalDistance={isMobile ? 14 : 22}
                depth={isMobile ? 25 : 45}
                skewAmount={isMobile ? 1 : 2}
                visibleCards={isMobile ? 3 : 4}
                delay={4500}
                autoplay={true}
                pauseOnHover={true}
                draggable={true}
                speed={1.1}
                bounce={0.25}
                parallax={0.3}
                hoverSpread={0.07}
                dim={0}
                cardRadius={14}
                theme="light"
                onChange={(index) => setActiveCorpIdx(index)}
                className="h-full w-full"
              >
                {CORPORATE_MENUS.map((corp) => (
                  <Card
                    key={corp.num}
                    className="border border-border bg-card overflow-hidden flex flex-col justify-between shadow-2xl text-left"
                  >
                    {/* Cabecera con imagen real - 100% nítida, sin blur */}
                    <div className="relative h-[195px] md:h-[210px] w-full overflow-hidden bg-secondary shrink-0">
                      <Image
                        src={corp.image}
                        alt={corp.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 340px, 480px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                      <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between">
                        <span className="px-2.5 py-1 bg-black/75 text-white font-sans text-[10px] tracking-wide-xl uppercase">
                          {corp.num}
                        </span>
                        <span className="text-[10px] font-sans tracking-wide-xl uppercase text-white/90 font-medium">
                          {corp.tagline}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4">
                        <h4 className="font-serif text-2xl sm:text-3xl text-white leading-tight">
                          {corp.title}
                        </h4>
                      </div>
                    </div>

                    {/* Cuerpo de la tarjeta */}
                    <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-between bg-card">
                      <p className="font-sans text-xs sm:text-sm text-foreground/85 leading-relaxed">
                        {corp.description}
                      </p>

                      <div className="pt-3 mt-3 border-t border-border flex items-center justify-between">
                        <span className="font-sans text-[10px] tracking-wide-xl uppercase text-muted-foreground">
                          Servicio corporativo
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>

            {/* Controles y paginación con título interactivo */}
            <div className="flex flex-col items-center gap-2.5 mt-5">
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => cardSwapRef.current?.prev()}
                  aria-label="Formato anterior"
                  className="w-9 h-9 border border-border bg-background hover:bg-foreground hover:text-primary-foreground flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>

                {/* Dots / Indicadores de las 6 cartas */}
                <div className="flex items-center gap-1.5 px-2">
                  {CORPORATE_MENUS.map((corpItem, i) => (
                    <span
                      key={corpItem.num}
                      title={corpItem.title}
                      className={`h-1.5 transition-all duration-300 rounded-full ${activeCorpIdx === i
                        ? "w-7 bg-foreground"
                        : "w-1.5 bg-foreground/20"
                        }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => cardSwapRef.current?.next()}
                  aria-label="Siguiente formato"
                  className="w-9 h-9 border border-border bg-background hover:bg-foreground hover:text-primary-foreground flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Indicador de formato actual */}
              <p className="font-sans text-[11px] tracking-wide-xl uppercase text-muted-foreground">
                {CORPORATE_MENUS[activeCorpIdx]?.num} de 06 —{" "}
                <span className="text-foreground font-medium">
                  {CORPORATE_MENUS[activeCorpIdx]?.title}
                </span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
