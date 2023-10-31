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

function ProjectsCard(props) {
  const { project } = props

  return (
    <Grid
      component="article"
      item
      xs={12}
      sm={6}
      md={4}
      sx={{ marginTop: '16px', display: 'flex' }}
    >
      <Card sx={{ maxWidth: 300, height: '100%', borderRadius: '4px' }}>
        <CardMedia
          component="img"
          alt={project.description}
          height="140"
          image={project.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5" color="primary">
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {project.description}
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            {
              project.technologies.slice(0, 3).map((tech) => {
                return (
                  <Chip
                    label={tech}
                    key={tech}
                    sx={{ borderRadius: '8px', margin: '16px 5px 5px 5px' }} />
                )
              })
            }
          </Box>
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
                disabled={!project.demo}
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
      </Card>
    </Grid>
  )
}

export default ProjectsCard