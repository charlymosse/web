import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Charly Mosse — Consultoría de Operaciones y Automatización',
  description:
    'Ayudo a founders de empresas que crecieron rápido a ordenar su operación con sistemas, datos y automatización. No vendo PowerPoints: construyo lo que diseño.',
  openGraph: {
    title: 'Charly Mosse — Consultoría de Operaciones y Automatización',
    description:
      'Ayudo a founders de empresas que crecieron rápido a ordenar su operación con sistemas, datos y automatización.',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
