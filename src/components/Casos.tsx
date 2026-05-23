'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

const casos = [
  {
    industria: 'Diseño de interiores',
    titulo: 'Visibilidad operativa para estudio con múltiples proyectos en paralelo.',
    contexto: 'Estudio con proyectos personalizados, coordinación de proveedores y seguimiento de entregas simultáneas.',
    problema:
      'La coordinación de proyectos dependía de planillas separadas que nadie podía mantener actualizadas al mismo tiempo. Proveedores, estados de entrega y costos vivían en lugares distintos.',
    solucion:
      'Centralicé toda la operación en un único lugar: seguimiento de proyectos, coordinación con proveedores y control de entregas con actualización automática de estados.',
    impacto:
      'El equipo dejó de coordinar por WhatsApp y pasó a tener visibilidad operativa completa desde un solo lugar.',
    metricas: [
      { valor: '1', label: 'Fuente única para toda la operación' },
      { valor: 'Auto', label: 'Actualización de estados por proyecto' },
      { valor: 'Menor', label: 'Dependencia de seguimiento manual' },
    ],
  },
  {
    industria: 'Búsqueda de talento',
    titulo: 'Seguimiento centralizado y reportes automáticos para equipo de selección ejecutiva.',
    contexto: 'Empresa de búsqueda con varios procesos activos, métricas de equipo y reporte periódico a clientes.',
    problema:
      'Los reportes para clientes se armaban manualmente cada semana, sin métricas consistentes ni visibilidad del proceso. Las decisiones dependían de lo que cada persona recordaba.',
    solucion:
      'Construí un seguimiento centralizado con métricas por etapa y reportes generados automáticamente desde la misma base de datos, sin intervención del equipo.',
    impacto:
      'El tiempo dedicado a preparar reportes se redujo un 60% y el equipo ganó visibilidad completa sobre cada proceso activo.',
    metricas: [
      { valor: '−60%', label: 'Tiempo en preparar reportes de clientes' },
      { valor: '1', label: 'Fuente de datos para todo el equipo' },
      { valor: 'Semanal', label: 'Reporte automático sin intervención' },
    ],
  },
  {
    industria: 'Gastronomía',
    titulo: 'Información operativa y financiera unificada para gestión gastronómica.',
    contexto: 'Operación con múltiples frentes de gestión, sin visibilidad consolidada sobre costos, ventas ni resultados.',
    problema:
      'Sin integración entre fuentes de información, cada área operaba con su propia versión de los datos y los reportes llegaban tarde o incompletos.',
    solucion:
      'Diseñé un esquema de consolidación con integración de fuentes externas y un seguimiento de gestión actualizado automáticamente para la dirección.',
    impacto:
      'La dirección pasó a tener información operativa y financiera unificada sin depender de armados manuales.',
    metricas: [
      { valor: 'Unificada', label: 'Información operativa y financiera' },
      { valor: 'Automático', label: 'Reporte de gestión' },
      { valor: 'Mayor', label: 'Visibilidad para tomar decisiones' },
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
            Tipos de trabajo
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

        {/* Contenido */}
        <div key={active} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Narrativa */}
          <div>
            <p className="font-inter text-xs text-tinta-500 uppercase tracking-label mb-5">
              {caso.contexto}
            </p>
            <h2 className="font-fraunces text-2xl md:text-3xl text-tinta-100 leading-tight mb-10">
              {caso.titulo}
            </h2>

            <div className="space-y-6">
              <div className="border-l border-crema-300 pl-5">
                <p className="font-inter text-xs text-tinta-500 uppercase tracking-label mb-2">
                  Problema
                </p>
                <p className="font-inter text-base text-tinta-400 leading-relaxed">
                  {caso.problema}
                </p>
              </div>
              <div className="border-l border-crema-300 pl-5">
                <p className="font-inter text-xs text-tinta-500 uppercase tracking-label mb-2">
                  Solución
                </p>
                <p className="font-inter text-base text-tinta-400 leading-relaxed">
                  {caso.solucion}
                </p>
              </div>
              <div className="border-l-2 border-ocre pl-5">
                <p className="font-inter text-xs text-tinta-500 uppercase tracking-label mb-2">
                  Impacto
                </p>
                <p className="font-inter text-base text-tinta-200 leading-relaxed font-medium">
                  {caso.impacto}
                </p>
              </div>
            </div>
          </div>

          {/* Métricas + CTA */}
          <div>
            <div className="grid grid-cols-3 gap-px bg-crema-300 mb-8">
              {caso.metricas.map((m) => (
                <div key={m.label} className="bg-crema-200 p-6 text-center">
                  <p className="font-fraunces text-2xl md:text-3xl text-ocre mb-2 leading-tight">
                    {m.valor}
                  </p>
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
