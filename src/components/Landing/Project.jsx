import {
  Box,
  Grid,
  Typography,
  CardMedia,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip
} from '@mui/material'
import { IconCaretRight } from '@tabler/icons-react';
import { IconFolderFilled } from '@tabler/icons-react';
import { projects } from '../Portfolio/Portfolio';
import { Colors } from '@/styles/theme';

export function Project() {
  const project = projects[0]

  return (
    <Box component="section" sx={{ color: Colors.primary, marginTop: '16px' }}>
      <Typography component="h2" variant="h5" fontWeight="bold">
        Último proyecto...
      </Typography>
      <Typography component="p" variant="body1">
        Este es un proyecto del que me siento orgulloso. :)
      </Typography>
      <Card sx={{ height: '100%', borderRadius: '4px', width: '100%', marginTop: '16px' }}>
        <Grid container sx={{ display: 'flex', flexDirection: {xs: 'column-reverse', md: 'row'} }}>
          <Grid item xs={12} md={7}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5" color="primary">
                {project.title}
              </Typography>
              <Box sx={{ marginTop: '8px' }}>
                {
                  project.technologies.slice(0, 3).map((tech) => {
                    return (
                      <Chip
                        label={tech}
                        key={tech}
                        sx={{ borderRadius: '8px', marginRight: '8px' }} />
                    )
                  })
                }
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  marginTop: '8px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container spacing={2} sx={{ padding: '0px 16px' }}>
                <Grid item xs={12} sm={6}>
                  <Button
                    startIcon={<IconCaretRight />}
                    size="medium"
                    variant="contained"
                    color="secondary"
                    href={project.demo}
                    target="_blank"
                    fullWidth
                    sx={{ marginBottom: '16px', borderRadius: '8px' }}
                  >
                    Demo
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    startIcon={<IconFolderFilled />}
                    size="medium"
                    variant="contained"
                    color="secondary"
                    href={project.repo}
                    target="_blank"
                    fullWidth
                    sx={{ marginBottom: '16px', borderRadius: '8px' }}
                  >
                    Repo
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Grid>
          <Grid item xs={12} md={5}>
            <CardMedia
              component="img"
              alt={project.description}
              image={project.img}
              sx={{ borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}