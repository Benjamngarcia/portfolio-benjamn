import {
  Box,
  Grid,
  Typography,
} from '@mui/material'
import ProjectsCard from './ProjectsCard'
import { projects } from './data'

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
