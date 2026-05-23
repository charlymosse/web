import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import Enfoque from '@/components/Enfoque'
import Servicios from '@/components/Servicios'
import Caso from '@/components/Caso'
import Industrias from '@/components/Industrias'
import SobreMi from '@/components/SobreMi'
import Contacto from '@/components/Contacto'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Enfoque />
        <Servicios />
        <Caso />
        <Industrias />
        <SobreMi />
        <Contacto />
      </main>
    </>
  )
}
