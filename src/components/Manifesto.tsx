import FadeIn from './FadeIn'

export default function Manifesto() {
  return (
    <section className="bg-crema-100 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="font-inter text-xs text-tinta-500 tracking-label uppercase mb-8">
              — El problema
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <p className="font-fraunces text-2xl md:text-3xl lg:text-4xl text-tinta-100 leading-[1.3] mb-8">
              Tu empresa creció, pero la operación no creció con ella. Seguís dependiendo de
              planillas desactualizadas, procesos que solo sabe hacer una persona y reportes
              que toman horas en armar.
            </p>
          </FadeIn>

          <FadeIn delay={2}>
            <p className="font-inter text-base md:text-lg text-tinta-300 leading-relaxed">
              La información está dispersa en mails, WhatsApps y Excels. Los procesos son
              informales. Cuando alguien falta, el trabajo se traba. Y no es falta de
              herramientas: es falta de sistema.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
