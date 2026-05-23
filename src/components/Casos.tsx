'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

const casos = [
  {
    industria: 'Diseño e interiorismo',
    titulo: 'De seis planillas dispersas a un sistema operativo centralizado.',
    parrafos: [
      'La empresa gestionaba proyectos, proveedores, costos y entregas en planillas separadas que nadie mantenía actualizadas. Cada consulta requería revisar múltiples fuentes.',
      'Diseñé e implementé un sistema centralizado de gestión operativa: seguimiento de proyectos en tiempo real, control de proveedores y costos integrado, y reportes automáticos para la dirección.',
    ],
    metricas: [
      { valor: '−70%', label: 'Seguimiento manual' },
      { valor: '6→1', label: 'Fuentes de datos' },
      { valor: '+15h', label: 'Recuperadas por semana' },
    ],
  },
  {
    industria: 'Recruiting ejecutivo',
    titulo: 'De planillas dispersas a un sistema operativo unificado.',
    parrafos: [
      'Diseñé y construí el sistema interno de gestión de búsquedas: pipeline de candidatos, métricas de proceso, reporting automático para clientes y dashboards ejecutivos. Migración progresiva sin frenar la operación del día a día.',
      'Hoy el equipo opera sobre una única fuente de verdad, con visibilidad en tiempo real del estado de cada búsqueda. Los reportes que antes tomaban horas se generan solos.',
    ],
    metricas: [
      { valor: '−85%', label: 'Tiempo de reporting' },
      { valor: '12+', label: 'Procesos automatizados' },
      { valor: '1', label: 'Fuente única de verdad' },
    ],
  },
  {
    industria: 'Gastronomía',
    titulo: 'Visibilidad en tiempo real sobre costos, stock y ventas por sucursal.',
    parrafos: [
      'La empresa operaba tres sucursales sin visibilidad consolidada de costos, stock ni ventas. Los reportes se armaban a mano cada semana y llegaban tarde para tomar decisiones.',
      'Implementé un sistema de control integrado por sucursal: carga unificada, conciliación automática y un dashboard ejecutivo con los indicadores clave del negocio actualizado diariamente.',
    ],
    metricas: [
      { valor: '−80%', label: 'Tiempo de reportes' },
      { valor: '3', label: 'Sucursales integradas' },
      { valor: 'Diario', label: 'Reporting automático' },
    ],
  },
]

export default function Casos() {
  const [active, setActive] = useState(0)
  const caso = casos[active]

  return (
    <section id="caso" className="bg-crema-200 py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="font-inter text-xs text-tinta-400 tracking-label uppercase mb-12">
            Casos de estudio
          </p>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={1}>
          <div className="flex flex-wrap gap-2 mb-14">
            {casos.map((c, i) => (
              <button
                key={c.industria}
                onClick={() => setActive(i)}
                className={`font-inter text-sm px-4 py-2 rounded-sm transition-colors ${
                  active === i
                    ? 'bg-tinta-100 text-crema-100'
                    : 'text-tinta-400 border border-crema-300 hover:border-tinta-400'
                }`}
              >
                {c.industria}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Contenido del caso */}
        <div
          key={active}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Narrativa */}
          <div>
            <h2 className="font-fraunces text-2xl md:text-3xl text-tinta-100 leading-tight mb-8">
              {caso.titulo}
            </h2>
            {caso.parrafos.map((p, i) => (
              <p key={i} className="font-inter text-base text-tinta-400 leading-relaxed mb-6 last:mb-0">
                {p}
              </p>
            ))}
          </div>

          {/* Métricas + CTA */}
          <div>
            <div className="grid grid-cols-3 gap-px bg-crema-300 mb-8">
              {caso.metricas.map((m) => (
                <div key={m.label} className="bg-crema-200 p-6 text-center">
                  <p className="font-fraunces text-3xl md:text-4xl text-ocre mb-2">{m.valor}</p>
                  <p className="font-inter text-xs text-tinta-400 leading-snug">{m.label}</p>
                </div>
              ))}
            </div>
            <a
              href="#contacto"
              className="font-inter text-sm text-tinta-100 hover:text-ocre transition-colors flex items-center gap-2"
            >
              Hablemos de tu caso{' '}
              <span aria-hidden="true" className="text-ocre">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
