import { Presentation } from '../components/About/Presentation'
import { Seo } from '../components/Seo'

function about() {
  return (
    <>
      <Seo title="Benjamín García - Sobre mí" description="Soy estudiante de Ingeniería en Informática y desarrollador web; Actualmente me encuentro enfocado en poder perfeccionar mis habilidades como Frontend Developer, sin embargo me divierto igual desarrollando actividades en otras áreas como Backend o Bases de datos." />
      <Presentation />
    </>
  )
}

export default about