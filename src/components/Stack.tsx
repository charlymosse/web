import FadeIn from './FadeIn'

const categorias = [
  {
    nombre: 'Automatización y workflows',
    herramientas: ['Apps Script', 'APIs REST', 'n8n / Zapier'],
  },
  {
    nombre: 'Información y visibilidad',
    herramientas: ['Google Sheets', 'Airtable', 'Looker Studio'],
  },
  {
    nombre: 'Sistemas y organización',
    herramientas: ['SQL / MySQL', 'Dashboards a medida', 'AI aplicada a procesos'],
  },
]

export default function Stack() {
  return (
    <section className="bg-crema-100 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-24 mb-14">
            <div>
              <p className="font-inter text-xs text-tinta-500 tracking-label uppercase mb-6">
                Herramientas
              </p>
              <p className="font-fraunces text-2xl md:text-3xl text-tinta-100 leading-snug">
                Herramientas que potencian los sistemas.
              </p>
            </div>
            <p className="font-inter text-sm text-tinta-400 leading-relaxed lg:pt-14">
              No creo en implementar herramientas porque sí. Las herramientas son el medio.
              El objetivo es que la operación funcione mejor, no que el stack sea más grande.
            </p>
          </div>
        </FadeIn>

        {/* Tabla editorial */}
        <div className="divide-y divide-crema-300">
          {categorias.map((cat, i) => (
            <FadeIn key={cat.nombre} delay={(i + 1) as 1 | 2 | 3}>
              <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-2 sm:gap-16 py-6 items-baseline">
                <p className="font-inter text-xs text-tinta-500 tracking-label uppercase">
                  {cat.nombre}
                </p>
                <p className="font-fraunces text-lg text-tinta-200 leading-relaxed">
                  {cat.herramientas.join(' · ')}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
