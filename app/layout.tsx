import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Catering para casamientos y eventos en Buenos Aires | El Banquete Gastronómico',
  description:
    'El Banquete Gastronómico ofrece servicio de catering premium para casamientos, eventos corporativos y fiestas privadas en Buenos Aires. Atención personalizada, menús a medida y experiencias gastronómicas únicas en Quinta Pepe Reina y otras locaciones.',
  keywords: [
    'catering para casamientos',
    'eventos corporativos Buenos Aires',
    'fiestas privadas',
    'quinta para casamientos',
    'alquiler de quinta Buenos Aires',
    'servicio gastronómico',
    'catering Buenos Aires',
    'El Banquete Gastronómico',
    'Quinta Pepe Reina',
  ],
  openGraph: {
    title: 'El Banquete Gastronómico | Catering Premium Buenos Aires',
    description:
      'Servicio gastronómico de alto nivel para casamientos, eventos corporativos y fiestas privadas en Buenos Aires.',
    type: 'website',
    locale: 'es_AR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
