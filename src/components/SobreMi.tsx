import Image from 'next/image'
import FadeIn from './FadeIn'

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-crema-200 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-start">

          {/* Foto */}
          <FadeIn>
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/charlymosse.jpg"
                alt="Charly Mosse"
                width={144}
                height={144}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Bio */}
          <div>
            <FadeIn delay={1}>
              <p className="font-inter text-xs text-tinta-500 tracking-label uppercase mb-8">
                — Sobre mí
              </p>
              <p className="font-fraunces text-2xl md:text-3xl text-tinta-100 leading-[1.3] mb-8">
                Soy Charly. Pasé años liderando operaciones a escala antes de trabajar de forma
                independiente.
              </p>
            </FadeIn>

            <FadeIn delay={2}>
              <p className="font-inter text-base text-tinta-300 leading-relaxed mb-6">
                Durante más de seis años lideré equipos de operaciones globales en TheFork
                (TripAdvisor): calidad, fraude, onboarding y administración en 12 mercados con
                equipos de más de 30 personas. Ahí diseñé procesos, automaticé workflows y
                construí sistemas de reporting que redujeron trabajo manual y mejoraron la
                visibilidad del negocio.
              </p>
              <p className="font-inter text-base text-tinta-400 leading-relaxed mb-10">
                Hoy aplico esa misma lógica como consultor independiente. Trabajo con founders y
                equipos operativos que necesitan lo que las empresas grandes ya tienen: sistemas
                que funcionan, datos centralizados y automatización que realmente ahorra tiempo.
                Desde Buenos Aires, con clientes en toda Latam.
              </p>
            </FadeIn>

            {/* Filosofía */}
            <FadeIn delay={3}>
              <div className="border-l-2 border-ocre pl-6">
                <p className="font-fraunces text-lg text-tinta-200 leading-relaxed italic">
                  "No creo en implementar herramientas porque sí. Creo en entender primero cómo
                  opera la empresa, detectar qué está trabando el trabajo, y diseñar sistemas
                  simples que el equipo pueda usar y mantener."
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
