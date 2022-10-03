import { Box, Grid, Typography, CardMedia, Button, Card, CardActions, CardContent, Chip } from '@mui/material'
import { Fragment } from 'react'
import { Nav } from '../General/Nav'
import { Footer } from '../General/Footer'
import { Text } from '../Props/Text'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FolderIcon from '@mui/icons-material/Folder';


export const Portfolio = () => {
    return (
        <Fragment>
            <Nav />
            <Box
                component="main"
                sx={{
                    padding: '3.5rem 3rem 0px 3rem'
                }}
            >
                <Typography variant="h4" sx={{ color: "#576F72", textAlign: "center", fontWeight: "bold" }}>
                    Portafolio de proyectos
                </Typography>
                <Grid container sx={{ justifyContent: 'center', marginTop: '2rem' }}>
                    {
                        Text.projects.map((project) => {
                            return (
                                <Grid key={project.title} item xs={10} sm={6} md={4} lg={3} sx={{ marginBottom: '2rem' }} >
                                    <Card sx={{ maxWidth: 300, height: '100%' }}>
                                        <CardMedia
                                            component="img"
                                            alt={project.description}
                                            height="140"
                                            image={project.img}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {project.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {project.description}
                                            </Typography>
                                            <Box  sx={{textAlign: 'center'}}>
                                                {
                                                    project.technologies.map((tech) => {
                                                        return (
                                                            <Chip label={tech} key={tech} sx={{ backgroundColor: "#BA918D", margin: '3px 5px 5px'}} />
                                                        )
                                                    })
                                                }
                                            </Box>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container sx={{ width: '90%', textAlign: 'center' }}>
                                                <Grid item xs={12} sm={6}>
                                                    <Button
                                                        startIcon={<PlayArrowIcon />}
                                                        size="medium"
                                                        variant="contained"
                                                        onClick={() => {
                                                            window.open(`${project.demo}`, '_blank');
                                                        }}
                                                        sx={{
                                                            backgroundColor: '#576F72',
                                                            marginBottom: { xs: '1rem', sm: '10px' },
                                                            '&:hover': {
                                                                backgroundColor: '#BAAC8D',
                                                                borderColor: '#BAAC8D'
                                                            }
                                                        }}
                                                    >
                                                        Demo
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Button
                                                        startIcon={<FolderIcon />}
                                                        size="medium"
                                                        variant="contained"
                                                        onClick={() => {
                                                            window.open(`${project.repo}`, '_blank');
                                                        }}
                                                        sx={{
                                                            backgroundColor: '#576F72',
                                                            marginBottom: { xs: '1rem', sm: '10px' },
                                                            '&:hover': {
                                                                backgroundColor: '#BAAC8D',
                                                                borderColor: '#BAAC8D'
                                                            }
                                                        }}
                                                    >
                                                        Repositorio
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Footer />
            </Box>
        </Fragment>
    )
}
