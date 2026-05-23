import FadeIn from './FadeIn'

export default function Contacto() {
  return (
    <section id="contacto" className="bg-tinta-100">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="font-inter text-xs text-tinta-400 tracking-label uppercase mb-8">
              — Contacto
            </p>
            <h2 className="font-fraunces text-3xl md:text-4xl text-crema-100 leading-[1.25] mb-8">
              ¿Qué parte de tu operación todavía{' '}
              <em className="text-ocre italic">depende de que alguien lo recuerde?</em>
            </h2>
          </FadeIn>

          <FadeIn delay={1}>
            <p className="font-inter text-base text-tinta-500 leading-relaxed mb-3">
              Hablemos 30 minutos. Sin PowerPoints, sin propuestas genéricas.
            </p>
            <p className="font-inter text-sm text-tinta-500 leading-relaxed mb-10">
              Si no puedo ayudarte, te digo dónde buscar.
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
