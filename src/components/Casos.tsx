'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

const casos = [
  {
    tipo: 'Coordinación operativa',
    titulo: 'De seguimiento manual disperso a visibilidad operativa centralizada.',
    contexto: 'Empresa de servicios con proyectos personalizados, múltiples proveedores y entregas en paralelo.',
    problema:
      'Cada área manejaba su propia versión de la información en planillas separadas. Sin visibilidad consolidada, el seguimiento dependía de personas específicas y los errores se acumulaban entre etapas.',
    solucion:
      'Diseñé un sistema centralizado de gestión operativa: seguimiento de proyectos, control de proveedores y costos, alertas automáticas por estado y reporte periódico para la dirección. Una sola fuente de información para todo el equipo.',
    metricas: [
      { valor: '1', label: 'Sistema centralizado de información' },
      { valor: '−40%', label: 'Horas de seguimiento manual' },
      { valor: 'Alta', label: 'Trazabilidad operativa' },
    ],
  },
  {
    tipo: 'Pipeline y reporting',
    titulo: 'Visibilidad en tiempo real sobre procesos activos y resultados del equipo.',
    contexto: 'Empresa de servicios profesionales con alto volumen de procesos simultáneos y reporte periódico a clientes.',
    problema:
      'Los reportes se preparaban manualmente y llegaban tarde para la toma de decisiones. No había visibilidad centralizada del estado de cada proceso ni métricas de rendimiento del equipo.',
    solucion:
      'Implementé un sistema de seguimiento con dashboards por estado, métricas de proceso y reportes automáticos para clientes y dirección. Migración progresiva sin interrumpir la operación diaria.',
    metricas: [
      { valor: '−70%', label: 'Tiempo en preparar reportes' },
      { valor: 'Automático', label: 'Reporting a clientes' },
      { valor: '1', label: 'Fuente de verdad para el equipo' },
    ],
  },
  {
    tipo: 'Consolidación de información',
    titulo: 'Reportes automáticos y visibilidad operativa donde antes había dispersión.',
    contexto: 'Empresa con múltiples áreas de gestión que operaban de forma aislada, sin consolidación de datos.',
    problema:
      'Los reportes de gestión se armaban a mano, con información incompleta y con demora. No había visibilidad cruzada entre áreas y las decisiones dependían de datos desactualizados.',
    solucion:
      'Diseñé un sistema de consolidación automática de información operativa y financiera. Dashboard ejecutivo con indicadores clave, reportes automáticos periódicos y eliminación de carga manual recurrente.',
    metricas: [
      { valor: 'Semanal', label: 'Reporting sin intervención manual' },
      { valor: 'Unificada', label: 'Visibilidad sobre el negocio' },
      { valor: 'Menor', label: 'Dependencia de personas clave' },
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
                key={c.tipo}
                onClick={() => setActive(i)}
                className={`font-inter text-sm px-4 py-2 rounded-sm transition-colors ${
                  active === i
                    ? 'bg-tinta-100 text-crema-100'
                    : 'text-tinta-400 border border-crema-300 hover:border-tinta-400'
                }`}
              >
                {c.tipo}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Contenido */}
        <div key={active} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Narrativa */}
          <div>
            <p className="font-inter text-xs text-tinta-500 uppercase tracking-label mb-4">
              {caso.contexto}
            </p>
            <h2 className="font-fraunces text-2xl md:text-3xl text-tinta-100 leading-tight mb-8">
              {caso.titulo}
            </h2>
            <div className="space-y-1 mb-6">
              <p className="font-inter text-xs text-tinta-500 uppercase tracking-label">El problema</p>
            </div>
            <p className="font-inter text-base text-tinta-400 leading-relaxed mb-8">
              {caso.problema}
            </p>
            <div className="space-y-1 mb-4">
              <p className="font-inter text-xs text-tinta-500 uppercase tracking-label">La solución</p>
            </div>
            <p className="font-inter text-base text-tinta-400 leading-relaxed">
              {caso.solucion}
            </p>
          </div>

          {/* Métricas + CTA */}
          <div>
            <div className="grid grid-cols-3 gap-px bg-crema-300 mb-8">
              {caso.metricas.map((m) => (
                <div key={m.label} className="bg-crema-200 p-6 text-center">
                  <p className="font-fraunces text-2xl md:text-3xl text-ocre mb-2 leading-tight">{m.valor}</p>
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
