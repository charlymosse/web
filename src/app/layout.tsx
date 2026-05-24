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
  metadataBase: new URL('https://charlymosse.com.ar'),
  title: 'Charly Mosse — Consultoría de Operaciones y Sistemas',
  description:
    'Trabajo con founders y equipos operativos para ordenar la operación, conectar la información y construir sistemas que le dan visibilidad real al negocio.',
  openGraph: {
    title: 'Charly Mosse — Consultoría de Operaciones y Sistemas',
    description:
      'Trabajo con founders y equipos operativos para ordenar la operación, conectar la información y construir sistemas que le dan visibilidad real al negocio.',
    locale: 'es_AR',
    type: 'website',
    url: 'https://charlymosse.com.ar',
    siteName: 'Charly Mosse',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charly Mosse — Consultoría de Operaciones y Sistemas',
    description: 'Empresas que crecieron más rápido que sus procesos. Eso se puede resolver.',
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
