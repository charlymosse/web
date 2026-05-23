export default function Hero() {
  return (
    <section className="min-h-screen bg-crema-100 flex items-center pt-[72px]">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Etiqueta */}
          <p className="font-inter text-xs text-tinta-400 tracking-label uppercase mb-10">
            Consultoría de Operaciones y Automatización
          </p>

          {/* Título principal */}
          <h1 className="font-fraunces text-4xl md:text-6xl lg:text-7xl text-tinta-100 leading-[1.08] tracking-tight mb-8">
            Convierto operaciones caóticas en{' '}
            <em className="text-ocre not-italic italic">sistemas que escalan.</em>
          </h1>

          {/* Bajada */}
          <p className="font-inter text-lg md:text-xl text-tinta-400 leading-relaxed max-w-xl mb-12">
            Ayudo a founders de empresas que crecieron rápido a ordenar su operación con sistemas,
            datos y automatización. No vendo PowerPoints: construyo lo que diseño.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendar.app.google/qdLJ6dHvgA4e8zSXA"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm font-medium bg-tinta-100 text-crema-100 px-7 py-3.5 rounded-sm hover:bg-ocre transition-colors text-center"
            >
              Agendar una llamada
            </a>
            <a
              href="#enfoque"
              className="font-inter text-sm font-medium text-tinta-100 border border-tinta-300 px-7 py-3.5 rounded-sm hover:border-tinta-100 transition-colors text-center"
            >
              Ver cómo trabajo
            </a>
          </div>
        </div>

        {/* Línea decorativa */}
        <div className="mt-24 md:mt-32 flex items-center gap-6">
          <div className="w-12 h-px bg-ocre"></div>
          <p className="font-inter text-xs text-tinta-500 tracking-label uppercase">
            Buenos Aires · Latam
          </p>
        </div>
      </div>
    </section>
  )
}
