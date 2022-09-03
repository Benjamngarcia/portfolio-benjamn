import { Box, Grid, Typography, CardMedia, Button } from '@mui/material'
import { Fragment } from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import HomeIcon from '@mui/icons-material/Home';


export const Blog = () => {

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
                    Blog
                </Typography>
                <Grid container sx={{width: '100%', margin: 'auto'}}>
                    <Grid item xs={12}>
                        <CardMedia
                            component="img"
                            alt="Benjamín Arturo Pérez García desarrollador web"
                            image="https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Memoji%20Sad.png?alt=media&token=53e9d082-bc17-4539-91ca-55f38e5ce585"
                            sx={{
                                width: { xs: "50%", md: "70%", lg: "30%" },
                                margin: 'auto'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Typography variant="h5" sx={{color: '#576F72', fontWeight: 'bold'}}>
                            De momento no hay publicaciones disponibles.
                        </Typography>
                        <Button
                                variant="contained"
                                startIcon={<HomeIcon />}
                                onClick={() => {
                                    window.open('/', '_self');
                                }}
                                sx={{
                                    width: '50%',
                                    marginBottom: '1rem',
                                    backgroundColor: '#576F72',
                                                    '&:hover': {
                                                        backgroundColor: '#383838',
                                                        borderColor: '#383838'
                                                    }
                                }}
                            >
                                Volver al inicio
                            </Button>
                    </Grid>
                </Grid>
                <Footer />
            </Box>
        </Fragment>
    )
}
