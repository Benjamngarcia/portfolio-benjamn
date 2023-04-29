import { Portfolio } from '../components/Portfolio/Portfolio'
import { Seo } from '../components/Seo'

function projects() {
  return (
    <>
      <Seo
        title="Benjamín García - Sobre mí"
        description="Página web para mostrar proyectos que he desarrollado durante mi carrera profesional y académica." />
      <Portfolio />
    </>
  )
}

export default projects