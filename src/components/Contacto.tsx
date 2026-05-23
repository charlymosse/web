import FadeIn from './FadeIn'

export default function Contacto() {
  return (
    <section id="contacto" className="bg-tinta-100">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
        <div className="max-w-2xl">
          <FadeIn>
            <h2 className="font-fraunces text-3xl md:text-5xl text-crema-100 leading-[1.2] mb-8">
              Si sentís que tu operación está atada con alambre,{' '}
              <em className="text-ocre italic">hablemos 30 minutos.</em>
            </h2>
          </FadeIn>

          <FadeIn delay={1}>
            <p className="font-inter text-base text-tinta-500 leading-relaxed mb-12">
              Llamada sin compromiso. Te cuento si puedo ayudarte y, si no, te oriento hacia
              quien sí.
            </p>
          </FadeIn>

          <FadeIn delay={2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendar.app.google/qdLJ6dHvgA4e8zSXA"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm font-medium bg-ocre text-crema-100 px-7 py-3.5 rounded-sm hover:bg-ocre-hover transition-colors text-center"
              >
                Agendar llamada
              </a>
              <a
                href="mailto:charly.mosse@gmail.com"
                className="font-inter text-sm font-medium text-crema-100 border border-tinta-300 px-7 py-3.5 rounded-sm hover:border-crema-300 transition-colors text-center"
              >
                charly.mosse@gmail.com
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-tinta-200">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-tinta-400">
            © 2026 Charly Mosse · Buenos Aires
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/charlymosse/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-xs text-tinta-400 hover:text-crema-100 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:charly.mosse@gmail.com"
              className="font-inter text-xs text-tinta-400 hover:text-crema-100 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}
