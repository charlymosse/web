import FadeIn from './FadeIn'

const pasos = [
  {
    numero: '01',
    titulo: 'Diagnóstico',
    descripcion:
      'Entiendo cómo opera tu empresa: procesos, herramientas, flujos de información y cuellos de botella. Sin asumir, sin recomendar herramientas todavía.',
  },
  {
    numero: '02',
    titulo: 'Priorización',
    descripcion:
      'Identifico qué tiene más impacto con menos complejidad. El plan viene del negocio, no de la herramienta.',
  },
  {
    numero: '03',
    titulo: 'Diseño',
    descripcion:
      'Diseño la arquitectura: qué herramientas usar, cómo se conectan, cómo fluye la información y qué se automatiza.',
  },
  {
    numero: '04',
    titulo: 'Implementación',
    descripcion:
      'Construyo y dejo funcionando. No entrego un documento: entrego el sistema operando en tu empresa.',
  },
  {
    numero: '05',
    titulo: 'Adopción',
    descripcion:
      'Capacito al equipo y acompaño los primeros ciclos. Me voy cuando ya no me necesitan.',
  },
]

export default function ComoTrabajo() {
  return (
    <section id="como-trabajo" className="bg-crema-100 py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

          {/* Header */}
          <div>
            <FadeIn>
              <p className="font-inter text-xs text-tinta-400 tracking-label uppercase mb-6">
                Cómo trabajo
              </p>
              <p className="font-fraunces text-2xl md:text-3xl text-tinta-100 leading-snug">
                Un proceso claro, de diagnóstico a sistema funcionando.
              </p>
            </FadeIn>
          </div>

          {/* Pasos */}
          <div className="space-y-0 divide-y divide-crema-300">
            {pasos.map((paso, i) => (
              <FadeIn key={paso.numero} delay={(i % 3) as 0 | 1 | 2}>
                <div className="flex gap-8 py-8 first:pt-0 last:pb-0">
                  <span className="font-fraunces text-4xl text-crema-300 leading-none select-none flex-shrink-0 w-12">
                    {paso.numero}
                  </span>
                  <div>
                    <h3 className="font-fraunces text-lg text-tinta-100 mb-2">{paso.titulo}</h3>
                    <p className="font-inter text-sm text-tinta-400 leading-relaxed">
                      {paso.descripcion}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
