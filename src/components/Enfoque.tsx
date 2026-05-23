import FadeIn from './FadeIn'

const principios = [
  {
    numero: '01',
    titulo: 'Entender antes de automatizar',
    descripcion:
      'Primero el problema operativo real. La herramienta viene después, no al revés.',
  },
  {
    numero: '02',
    titulo: 'Pienso y construyo',
    descripcion:
      'No solo recomiendo: diseño el sistema y lo dejo funcionando en tu operación.',
  },
  {
    numero: '03',
    titulo: 'Simple y mantenible',
    descripcion:
      'Sistemas que tu equipo pueda usar y mantener sin depender de mí ni de nadie.',
  },
  {
    numero: '04',
    titulo: 'AI con criterio',
    descripcion:
      'La uso donde aporta valor real, no como buzzword de venta. Mide o no va.',
  },
]

export default function Enfoque() {
  return (
    <section id="enfoque" className="bg-crema-200 py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="font-inter text-xs text-tinta-400 tracking-label uppercase mb-16">
            Enfoque
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {principios.map((p, i) => (
            <FadeIn key={p.numero} delay={(i % 2 + 1) as 1 | 2}>
              <div className="flex gap-8">
                <span className="font-fraunces text-5xl text-crema-300 leading-none select-none flex-shrink-0">
                  {p.numero}
                </span>
                <div>
                  <h3 className="font-fraunces text-xl text-tinta-100 mb-3">{p.titulo}</h3>
                  <p className="font-inter text-base text-tinta-400 leading-relaxed">
                    {p.descripcion}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
