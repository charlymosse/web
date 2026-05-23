import FadeIn from './FadeIn'

const metricas = [
  { valor: '−85%', label: 'Tiempo de reporting' },
  { valor: '12+', label: 'Procesos automatizados' },
  { valor: '1', label: 'Fuente única de verdad' },
]

export default function Caso() {
  return (
    <section id="caso" className="bg-crema-200 py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="font-inter text-xs text-tinta-400 tracking-label uppercase mb-16">
            Caso de estudio
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Narrativa */}
          <div>
            <FadeIn delay={1}>
              <p className="font-inter text-xs text-tinta-500 uppercase tracking-label mb-4">
                Consultora de recruiting ejecutivo
              </p>
              <h2 className="font-fraunces text-2xl md:text-3xl text-tinta-100 leading-tight mb-8">
                De planillas dispersas a un sistema operativo unificado.
              </h2>
              <p className="font-inter text-base text-tinta-400 leading-relaxed mb-6">
                Diseñé y construí el sistema interno de gestión de búsquedas: pipeline de
                candidatos, métricas de proceso, reporting automático para clientes y dashboards
                ejecutivos. Migración progresiva sin frenar la operación del día a día.
              </p>
              <p className="font-inter text-base text-tinta-400 leading-relaxed">
                Hoy el equipo opera sobre una única fuente de verdad, con visibilidad en tiempo
                real del estado de cada búsqueda y reportes que antes tomaban horas se generan
                solos.
              </p>
            </FadeIn>
          </div>

          {/* Métricas + CTA */}
          <div>
            <div className="grid grid-cols-3 gap-px bg-crema-300 mb-8">
              {metricas.map((m, i) => (
                <FadeIn key={m.label} delay={(i + 1) as 1 | 2 | 3}>
                  <div className="bg-crema-200 p-6 text-center">
                    <p className="font-fraunces text-3xl md:text-4xl text-ocre mb-2">{m.valor}</p>
                    <p className="font-inter text-xs text-tinta-400 leading-snug">{m.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={4}>
              <a
                href="#contacto"
                className="font-inter text-sm text-tinta-100 hover:text-ocre transition-colors flex items-center gap-2"
              >
                Hablemos de tu caso{' '}
                <span aria-hidden="true" className="text-ocre">→</span>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
