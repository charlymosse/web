'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

const casos = [
  {
    industria: 'Diseño de interiores',
    titulo: 'Sistema centralizado de gestión operativa para estudio con múltiples proyectos en paralelo.',
    contexto: 'Estudio con proyectos personalizados, coordinación de proveedores y seguimiento de entregas simultáneas.',
    problema:
      'La operación dependía de planillas separadas que nadie mantenía del todo actualizadas. Proveedores, estados de entrega y costos vivían en documentos distintos, lo que generaba errores de coordinación y mucho tiempo de seguimiento manual.',
    solucion:
      'Diseñé e implementé un sistema centralizado de seguimiento operativo: estados automatizados por proyecto, control de proveedores con alertas, visibilidad de costos y entregas en tiempo real. Construido en Google Sheets con lógica de automatización vía Apps Script.',
    metricas: [
      { valor: '1', label: 'Sistema en lugar de múltiples planillas' },
      { valor: 'Auto', label: 'Actualización de estados por proyecto' },
      { valor: 'Menor', label: 'Dependencia de seguimiento manual' },
    ],
  },
  {
    industria: 'Búsqueda de talento',
    titulo: 'Dashboard operativo y reporting automático para equipo de selección ejecutiva.',
    contexto: 'Empresa de búsqueda con varios procesos activos, métricas de equipo y reporte periódico a clientes.',
    problema:
      'La información de los procesos estaba fragmentada. El reporte a clientes se armaba manualmente cada semana, sin métricas consistentes ni visibilidad del pipeline. Las decisiones dependían de lo que cada persona recordaba.',
    solucion:
      'Implementé un sistema de seguimiento centralizado: dashboard con estado de cada búsqueda, métricas por recruiter y etapa, y reportes automáticos para clientes generados desde la misma base de datos. Integración entre Google Sheets, SQL y Apps Script.',
    metricas: [
      { valor: '−60%', label: 'Tiempo en preparar reportes de clientes' },
      { valor: '1', label: 'Fuente de datos para todo el equipo' },
      { valor: 'Semanal', label: 'Reporting automático sin intervención' },
    ],
  },
  {
    industria: 'Gastronomía',
    titulo: 'Diseño de sistema de visibilidad operativa y financiera para operación gastronómica.',
    contexto: 'Operación gastronómica con múltiples frentes de gestión, sin visibilidad consolidada sobre costos, ventas ni inventario.',
    problema:
      'Los reportes de gestión se preparaban manualmente con información parcial. Sin integración entre sistemas, cada área operaba con su propia versión de los datos, lo que dificultaba la toma de decisiones.',
    solucion:
      'Diseño de sistema de consolidación de información operativa y financiera: integración con fuentes de datos externas vía API, dashboard ejecutivo con indicadores clave y reporting automático para la dirección.',
    metricas: [
      { valor: 'Unificada', label: 'Información operativa y financiera' },
      { valor: 'Automático', label: 'Reporting de gestión' },
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
            <h2 className="font-fraunces text-2xl md:text-3xl text-tinta-100 leading-tight mb-8">
              {caso.titulo}
            </h2>
            <p className="font-inter text-xs text-tinta-500 uppercase tracking-label mb-3">
              El problema
            </p>
            <p className="font-inter text-base text-tinta-400 leading-relaxed mb-8">
              {caso.problema}
            </p>
            <p className="font-inter text-xs text-tinta-500 uppercase tracking-label mb-3">
              La solución
            </p>
            <p className="font-inter text-base text-tinta-400 leading-relaxed">
              {caso.solucion}
            </p>
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
