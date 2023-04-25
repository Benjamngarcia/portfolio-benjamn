import {
  Box,
  Grid,
  Typography,
} from '@mui/material'
import ProjectsCard from './ProjectsCard'

export const Portfolio = () => {
  return (
    <Box
      component="main"
      sx={{
        marginTop: '64px',
        display: { xs: 'flex', sm: 'block' },
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography component="h1" variant="h5" fontWeight="bold" color="primary">
        Portafolio de proyectos
      </Typography>
      <Grid 
      component="section"
      container 
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
      }}>
        {projects.map((project) => {
          return (
            <ProjectsCard project={project} key={project.title} />
          )
        })}
      </Grid>
    </Box>
  )
}

export const projects = [
  {
    title: "Dictamigos",
    description: "Comunidad de desarrolladores que busca facilitar comenzar en el mundo del desarrollo, por medio de contenido educativo.",
    demo: "https://www.dictamigos.xyz/", repo: "https://github.com/DICTAMIGOS",
    img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Dictamigos%20ss.png?alt=media&token=3fdb0a26-d6a0-4005-a2ea-23906d704dc8",
    technologies: ['NextJS', 'Express', 'MongoDB', 'NodeJS', 'MaterialUI', 'SASS']
  },
  {
    title: "Personal Portfolio",
    description: "Sitio web personal con información acerca de mí, las tecnologías que manejo y mi CV, con un portafolio que contiene mis proyectos favoritos de todos los que he realizado.",
    demo: "/", repo: "https://github.com/Benjamngarcia/portfolio-benjamn",
    img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/SS%20portfolio.png?alt=media&token=1430a032-c69e-4c72-96f0-2c2e45d348a6",
    technologies: ['NextJS', 'MaterialUI', 'SASS']
  },
  {
    title: "Catarina",
    description: "Sistema para gestionar la entrada de alumnos a las escuelas en la pandemia de SARS-CoV-2, por medio de dar respuesta de cuestioanrios de síntomas y el sistema evalua el porcentaje de riesgo.",
    repo: "https://github.com/Benjamngarcia/Catarina",
    img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Catarina%20project.png?alt=media&token=7101257a-1711-46b9-b107-a3703ccf7780",
    technologies: ['NodeJS', 'MySQL', 'Tensorflow', 'EJS', 'SASS', 'Bootstrap', 'Express']
  },
  {
    title: "Pokedux",
    description: 'Platzi Pokedex realizado en "Curso profesional de React y Redux", yo integré un formato diferente así como una librería de UI distinta a la usada en el curso.',
    demo: "https://pokedux-benjamn.netlify.app/", repo: "https://github.com/Benjamngarcia/Pokedux",
    img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Pokedux.png?alt=media&token=9d5e1c21-1d74-4b5a-925e-f08db7333d5d",
    technologies: ['React', 'Redux', 'MaterialUI', 'Redux toolkit', 'Axios']
  }
]
