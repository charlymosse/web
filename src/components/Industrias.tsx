import FadeIn from './FadeIn'

const industrias = [
  'Diseño e interiorismo',
  'Gastronomía',
  'Recruiting',
  'Servicios profesionales',
  'Operaciones comerciales',
  'Equipos administrativos',
  'E-commerce',
]

export default function Industrias() {
  return (
    <section className="bg-crema-100 py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="font-inter text-xs text-tinta-400 tracking-label uppercase mb-16">
            Industrias
          </p>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="flex flex-wrap gap-3">
            {industrias.map((ind) => (
              <span
                key={ind}
                className="font-inter text-sm text-tinta-300 border border-crema-300 px-4 py-2 rounded-full"
              >
                {ind}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
