import FadeIn from './FadeIn'

const servicios = [
  {
    titulo: 'Diagnóstico operativo',
    descripcion:
      'Mapeo de procesos, identificación de cuellos de botella y plan priorizado de intervenciones. El punto de partida de todo.',
  },
  {
    titulo: 'Diseño e implementación de sistemas',
    descripcion:
      'Dashboards, planillas con lógica de negocio, integraciones entre herramientas y reporting automático. Lo construyo y lo dejo funcionando.',
  },
  {
    titulo: 'Automatización con AI',
    descripcion:
      'Apps Script, APIs y AI aplicada a procesos repetitivos. Foco en resultados medibles: menos errores, menos tiempo, menos dependencia.',
  },
  {
    titulo: 'Consultoría continua',
    descripcion:
      'Retainer mensual para equipos que ya tienen sistema en marcha y necesitan iterar, optimizar y sumar capacidades.',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="bg-crema-100 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="font-inter text-xs text-tinta-500 tracking-label uppercase mb-12">
            Servicios
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-crema-300">
          {servicios.map((s, i) => (
            <FadeIn key={s.titulo} delay={(i % 2 + 1) as 1 | 2}>
              <div className="bg-crema-100 p-8 md:p-10">
                <h3 className="font-fraunces text-xl text-tinta-100 mb-4">{s.titulo}</h3>
                <p className="font-inter text-sm text-tinta-400 leading-relaxed">{s.descripcion}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
