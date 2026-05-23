import FadeIn from './FadeIn'

export default function Manifesto() {
  return (
    <section className="bg-crema-100 py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="font-inter text-xs text-tinta-400 tracking-label uppercase mb-10">
              — El problema
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <p className="font-fraunces text-2xl md:text-3xl lg:text-4xl text-tinta-100 leading-[1.3] mb-8">
              Tu empresa creció. Lo que antes funcionaba con tres planillas y buena memoria, ahora
              se cae cada vez que alguien se va de vacaciones.
            </p>
          </FadeIn>

          <FadeIn delay={2}>
            <p className="font-inter text-base md:text-lg text-tinta-400 leading-relaxed">
              Hay información dispersa en mails, WhatsApps y Excels. Nadie sabe del todo cómo se
              hace cada cosa. Sumás gente y el caos crece. Querés ordenar pero no tenés tiempo, y
              los consultores tradicionales te entregan diagnósticos lindos que después tenés que
              ejecutar vos.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
