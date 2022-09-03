import { Box, Grid, Typography, CardMedia, Button, Link } from '@mui/material'
import React, { Fragment } from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';


export const About = () => {

    const imgBenjamn = "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/msg1285725852-2502.jpg?alt=media&token=dc34cb2a-ac31-4412-8ea2-0471559a613a"
    return (
        <Fragment>
            <Nav />
            <Box
                component="main"
                sx={{
                    padding: '3.5rem 3rem 0px 3rem'
                }}
            >
                <Grid container >
                    <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        align="center"
                        justify="center"
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Grid item>
                            <CardMedia
                                component="img"
                                alt="Benjamín Arturo Pérez García desarrollador web"
                                image={imgBenjamn}
                                sx={{
                                    width: { xs: "50%", md: "70%", lg: "60%" },
                                    margin: 'auto',
                                    borderRadius: '10px'
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography component={"p"} variant="h4" textAlign="center">
                            Sobre mí
                        </Typography>
                        <Typography component={"p"} variant="body1" textAlign="justify">
                            Hola soy Benjamín, soy Técnico en Programación y desde que tengo memoria siempre me ha gustado la tecnología,
                            cuando cursé la carrera técnica aprendí las bases de varias ramas del desarrollo: aplicaciones móviles, aplicaciones de escritorio,
                            seguridad, machine learning, etc. Pero el desarrollo web fue lo que despertó aún más interés en mí, eso hizo que lleve casi dos años
                            realizando proyectos y aprendiendo nuevas tecnologías.
                        </Typography>

                        <Typography component={"p"}>
                            Actualmente estoy estudiando Ingeniería en Informática en el Instituto Politécnico Nacional; pero además de investigar y
                            practicar nuevos lenguajes de programación, soy entusiasta de descubrir otros ámbitos como lo pueden ser: marketing, leyes, finanzas, diseño y administración.
                            En este sitio podrás encontrar algunos proyectos que he realizado y también algunas publicaciones sobre programación u otros temas relacionados a TI.
                            Me gusta apoyar a otras personas compartiendo lo que sé por medio de &nbsp;
                            <Link
                                href="https://www.instagram.com/dictamigos/"
                                target="_blank"
                                underline="none"
                                sx={{
                                    color: "blue",
                                    fontFamily: "Courier New, monospace"
                                }}
                            >
                                DICTAMIGOS.
                            </Link>
                        </Typography>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                startIcon={<LinkedInIcon />}
                                onClick={() => {
                                    window.open('https://www.linkedin.com/in/benjamngarcia', '_blank');
                                }}
                                sx={{
                                    width: '100%',
                                    marginBottom: '1rem',
                                    backgroundColor: '#0077b5',
                                    justifyContent: 'space-between',
                                    '&:hover': {
                                        backgroundColor: '#0077b5',
                                        borderColor: '#0077b5'
                                    }
                                }}
                            >
                                LinkedIn
                            </Button>
                            <Button
                                variant="contained"
                                startIcon={<InstagramIcon />}
                                onClick={() => {
                                    window.open('https://www.instagram.com/benjamngarcia/', '_blank');
                                }}
                                sx={{
                                    width: '100%',
                                    marginBottom: '1rem',
                                    backgroundColor: '#e95950',
                                    justifyContent: 'space-between',
                                    '&:hover': {
                                        backgroundColor: '#e95950',
                                        borderColor: '#e95950'
                                    }
                                }}
                            >
                                Instagram
                            </Button>
                            <Button
                                variant="contained"
                                startIcon={<GitHubIcon />}
                                onClick={() => {
                                    window.open('https://github.com/Benjamngarcia', '_blank');
                                }}
                                sx={{
                                    width: '100%',
                                    marginBottom: '1rem',
                                    backgroundColor: '#333',
                                    justifyContent: 'space-between',
                                    '&:hover': {
                                        backgroundColor: '#333',
                                        borderColor: '#333'
                                    }
                                }}
                            >
                                GitHub
                            </Button>
                            <Button
                                variant="contained"
                                startIcon={<FacebookIcon />}
                                onClick={() => {
                                    window.open('https://www.facebook.com/Benjamin.1533/', '_blank');
                                }}
                                sx={{
                                    width: '100%',
                                    marginBottom: '1rem',
                                    backgroundColor: '#4267B2',
                                    justifyContent: 'space-between',
                                    '&:hover': {
                                        backgroundColor: '#4267B2',
                                        borderColor: '#4267B2'
                                    }
                                }}
                            >
                                Facebook
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </Box>
        </Fragment>
    )
}
