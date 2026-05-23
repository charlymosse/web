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
    herramientas: ['SQL / MySQL', 'Dashboards custom', 'AI aplicada a procesos'],
  },
]

export default function Stack() {
  return (
    <section className="bg-crema-100 py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

          {/* Header */}
          <div>
            <FadeIn>
              <p className="font-inter text-xs text-tinta-400 tracking-label uppercase mb-6">
                Herramientas
              </p>
              <p className="font-fraunces text-2xl md:text-3xl text-tinta-100 leading-snug mb-6">
                Herramientas que potencian los sistemas.
              </p>
              <p className="font-inter text-sm text-tinta-400 leading-relaxed">
                No creo en implementar herramientas porque sí. Las herramientas son el medio.
                El objetivo es que la operación funcione mejor.
              </p>
            </FadeIn>
          </div>

          {/* Grid de categorías */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-crema-300">
            {categorias.map((cat, i) => (
              <FadeIn key={cat.nombre} delay={(i % 3 + 1) as 1 | 2 | 3}>
                <div className="bg-crema-100 p-8">
                  <p className="font-inter text-xs text-tinta-500 tracking-label uppercase mb-4">
                    {cat.nombre}
                  </p>
                  <ul className="space-y-2">
                    {cat.herramientas.map((h) => (
                      <li key={h} className="font-fraunces text-base text-tinta-100">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
