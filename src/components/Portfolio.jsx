import { Box, Grid, Typography, CardMedia, Button, Card, CardActions, CardContent } from '@mui/material'
import { Fragment } from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FolderIcon from '@mui/icons-material/Folder';


export const Portfolio = () => {
    const projects = [
        {
            title: "Catarina",
            description: "Sistema para gestionar la entrada de alumnos a las escuelas en la pandemia de SARS-CoV-2. Desarrollado con Node.js, Tensorflow, MySQL, Bootstrap y Sass.",
            demo: "https://catarina-production.up.railway.app/", repo: "https://github.com/Benjamngarcia/Catarina",
            img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Catarina%20project.png?alt=media&token=7101257a-1711-46b9-b107-a3703ccf7780"
        },
        {
            title: "Pokedux",
            description: 'Platzi pokedux del "curso profesional de React y Redux" contruida con React, Redux toolkit, axios consumiendo la PokeAPI y decidí usar MaterialUI para los estilos.',
            demo: "https://pokedux-benjamn.netlify.app/", repo: "https://github.com/Benjamngarcia/Pokedux",
            img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Pokedux.png?alt=media&token=9d5e1c21-1d74-4b5a-925e-f08db7333d5d"
        },
        {
            title: "Personal Portfolio",
            description: "Portafolio personal desarrollado con React, MaterialUI, Sass. Con un blog auto administrable en proceso de desarrollo para que el que se usará MongoDB y Node.js con express.",
            demo: "/", repo: "https://github.com/Benjamngarcia/portfolio-benjamn",
            img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Portfolio%20App.png?alt=media&token=0c9ef4f0-583c-4f94-a98f-3a0a92ccd161"
        },
        {
            title: "Note App",
            description: "Aplicación de notas desarrollada con React, useState, useContext, Tailwind CSS usando los servicios de almacenamiento y autenticación de Firebase.",
            demo: "https://noteapp-benjamn.netlify.app/", repo: "https://github.com/Benjamngarcia/app-react-firebase",
            img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/NoteApp.png?alt=media&token=0f9b3ca2-bdff-41e3-9e14-73a0f7de03e1"
        },
        {
            title: "Buscador de GitHub",
            description: "Buscador de perfiles de GitHub construido con React, Material UI y axios consumiendo la API pública de GitHub.",
            demo: "https://gitsearcher-benjamn.netlify.app/", repo: "https://github.com/Benjamngarcia/GitHub-profile-searcher",
            img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/GitHub%20profile.png?alt=media&token=6a4e4dd9-6fc4-4a2a-be42-5f525aaeb91d"
        },
        {
            title: "To Do App",
            description: "Aplicación de tareas hecha con React, useEffect, componentes, Bootstrap y local storage",
            demo: "https://todo-benjamn.netlify.app/", repo: "https://github.com/Benjamngarcia/To-Do-App-React",
            img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/ToDo%20App.png?alt=media&token=c3be97e6-1161-48c0-b7bb-d40aeae34937"
        },
        {
            title: "Chat App",
            description: "Chat web dividido en foros desarrollado con Node.js, express, socket.io y Bootstrap",
            demo: "#!", repo: "https://github.com/Benjamngarcia/ChatNodeWS",
            img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Chat%20App.png?alt=media&token=9e13fe39-f739-423d-a331-8cae450b8065"
        },
        
    ]

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
                        projects.map((project) => {
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
                                        </CardContent>
                                        <CardActions>
                                            <Grid container sx={{width: '90%', textAlign: 'center'}}>
                                                <Grid xs={12} sm={6}>
                                                    <Button
                                                        startIcon={<PlayArrowIcon />}
                                                        size="medium"
                                                        variant="contained"
                                                        onClick={() => {
                                                            window.open(`${project.demo}`, '_blank');
                                                        }}
                                                        sx={{
                                                            backgroundColor: '#576F72',
                                                            marginBottom: {xs: '1rem', sm: '10px'},
                                                            '&:hover': {
                                                                backgroundColor: '#383838',
                                                                borderColor: '#383838'
                                                            }
                                                        }}
                                                    >
                                                        Demo
                                                    </Button>
                                                </Grid>
                                                <Grid xs={12} sm={6}>
                                                    <Button
                                                        startIcon={<FolderIcon />}
                                                        size="medium"
                                                        variant="contained"
                                                        onClick={() => {
                                                            window.open(`${project.repo}`, '_blank');
                                                        }}
                                                        sx={{
                                                            backgroundColor: '#576F72',
                                                            marginBottom: {xs: '1rem', sm: '10px'},
                                                            '&:hover': {
                                                                backgroundColor: '#383838',
                                                                borderColor: '#383838'
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
