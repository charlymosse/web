import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Charly Mosse — Consultoría de Operaciones y Sistemas'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FDFBF7',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 100px',
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 52 }}>
          <div style={{ width: 40, height: 2, background: '#B5742A' }} />
          <span
            style={{
              fontFamily: 'serif',
              fontSize: 15,
              color: '#8B8478',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Consultoría de Operaciones · Buenos Aires
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: 'serif',
            fontSize: 80,
            fontWeight: 400,
            color: '#1A1815',
            lineHeight: 1.05,
            margin: '0 0 28px',
          }}
        >
          Charly Mosse
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'serif',
            fontSize: 32,
            color: '#B5742A',
            fontStyle: 'italic',
            margin: '0 0 16px',
            lineHeight: 1.3,
          }}
        >
          Empresas que crecieron más rápido que sus procesos.
        </p>
        <p
          style={{
            fontFamily: 'serif',
            fontSize: 28,
            color: '#6B645B',
            margin: 0,
          }}
        >
          Eso se puede resolver.
        </p>
      </div>
    ),
    { ...size }
  )
}
