import { Box, Grid, Typography, CardMedia, Button, Link } from '@mui/material'
import React, { Fragment } from 'react'
import { Nav } from '../General/Nav'
import { Footer } from '../General/Footer'
import { Text } from '../Props/Text'


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
                            {Text.about.title}
                        </Typography>
                        <Typography component={"p"} variant="body1" textAlign="justify">
                            {Text.about.paragraph[0]}
                        </Typography>
                        <Typography component={"p"} variant="body1" textAlign="justify">
                            {Text.about.paragraph[1]}
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
                            {
                                Text.about.social.map((social) => {
                                    return (
                                        <Button
                                            variant="contained"
                                            startIcon={social.icon}
                                            key={social.name}
                                            onClick={() => {
                                                window.open(`${social.link}`, '_blank');
                                            }}
                                            sx={{
                                                width: '100%',
                                                marginBottom: '1rem',
                                                backgroundColor: `${social.color}`,
                                                justifyContent: 'space-between',
                                                '&:hover': {
                                                    backgroundColor: `${social.color}`,
                                                    borderColor: `${social.color}`
                                                }
                                            }}
                                        >
                                            {social.name}
                                        </Button>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </Box>
        </Fragment>
    )
}
