import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import Vision from '@/components/Vision'
import ComoTrabajo from '@/components/ComoTrabajo'
import Casos from '@/components/Casos'
import Servicios from '@/components/Servicios'
import Stack from '@/components/Stack'
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
        <Vision />
        <ComoTrabajo />
        <Casos />
        <Servicios />
        <Stack />
        <Industrias />
        <SobreMi />
        <Contacto />
      </main>
    </>
  )
}
