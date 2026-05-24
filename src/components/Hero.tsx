import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen bg-crema-100 flex items-center pt-[72px]">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center">

          {/* Texto */}
          <div className="max-w-2xl">
            <p className="font-inter text-xs text-tinta-500 tracking-label uppercase mb-8">
              Consultoría de Operaciones · Sistemas · Workflows
            </p>

            <h1 className="font-fraunces text-4xl md:text-6xl lg:text-7xl text-tinta-100 leading-[1.08] tracking-tight mb-4">
              Empresas que crecieron más rápido que sus procesos.
            </h1>

            <p className="font-fraunces text-xl md:text-2xl text-ocre font-light leading-snug mb-8">
              Eso se puede resolver.
            </p>

            <p className="font-inter text-base md:text-lg text-tinta-400 leading-relaxed max-w-xl mb-10">
              Trabajo con founders y equipos operativos para ordenar la operación, conectar la
              información y construir sistemas que le dan visibilidad real al negocio.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <a
                href="https://calendar.app.google/qdLJ6dHvgA4e8zSXA"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm font-medium bg-tinta-100 text-crema-100 px-7 py-3.5 rounded-sm hover:bg-ocre transition-colors text-center w-full sm:w-auto"
              >
                Hablemos de tu operación
              </a>
              <a
                href="#como-trabajo"
                className="font-inter text-sm text-tinta-400 hover:text-tinta-100 transition-colors flex items-center gap-1.5"
              >
                Ver cómo trabajo <span className="text-tinta-500">↓</span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="w-4 h-px bg-tinta-400 opacity-40"></div>
              <p className="font-inter text-xs text-tinta-500">
                7 años en operaciones globales · TheFork, TripAdvisor · 12 mercados
              </p>
            </div>
          </div>

          {/* Foto */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="w-64 h-64 xl:w-80 xl:h-80 rounded-full overflow-hidden ring-1 ring-crema-300">
              <Image
                src="/charlymosse.jpg"
                alt="Charly Mosse"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

        </div>

        {/* Línea decorativa + scroll hint */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-6 mb-5">
            <div className="w-12 h-px bg-ocre"></div>
            <p className="font-inter text-xs text-tinta-500 tracking-label uppercase">
              Buenos Aires · Latam
            </p>
          </div>
          <div className="animate-bounce opacity-25 w-4">
            <svg viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2v20M2 16l6 6 6-6" stroke="#1A1815" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
