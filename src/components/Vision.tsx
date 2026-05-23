import FadeIn from './FadeIn'

export default function Vision() {
  return (
    <section className="bg-crema-100 py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">

          <FadeIn>
            <p className="font-inter text-xs text-tinta-400 tracking-label uppercase mb-8">
              — De qué se trata
            </p>
            <p className="font-fraunces text-2xl md:text-3xl text-tinta-100 leading-[1.3]">
              Trabajo con empresas que sienten que su operación empezó a volverse más compleja
              de lo que sus procesos pueden sostener.
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <p className="font-inter text-base text-tinta-400 leading-relaxed mb-6">
              Mi foco no es agregar más tecnología. Es entender cómo opera tu empresa,
              identificar qué está generando fricción, y diseñar sistemas simples que el
              equipo pueda usar y mantener.
            </p>
            <p className="font-inter text-base text-tinta-400 leading-relaxed">
              La mayoría de los problemas operativos no necesitan una plataforma nueva.
              Necesitan orden, estructura y la información en el lugar correcto.
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
