import imgMain from '../assets/image.png'
import { MouseScroll } from './MouseScroll';
import { Box, Typography, Grid, Button, CardMedia, Link } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles'
import Typed from 'react-typed';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const useStyles = makeStyles(() =>
    createStyles({
        rotateIcon: {
            transition: "all .2s ease-in-out",
            '&:hover': {
                transform: 'scale(1.1)'
            },
        }
    })
);


export const Main = () => {
    const classes = useStyles();

    return (
        <Grid container sx={{
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' },
            paddingTop: '3rem',
            height: '100vh'
        }}
        >
            <Grid item xs={12} md={6} sx={{ color: '#576F72', fontWeight: 'bold', padding: '0px 10%' }}>
                <Typography>
                    <Link href="https://www.linkedin.com/in/benjamngarcia" color="inherit" target="_blank"><LinkedInIcon/></Link>
                    <Link href="https://www.instagram.com/benjamngarcia/" color="inherit" target="_blank"><InstagramIcon/></Link>
                    <Link href="https://github.com/Benjamngarcia" color="inherit" target="_blank"><GitHubIcon/></Link>
                    <Link href="https://wa.me/525537325700?text=%C2%A1Hola%20Benjam%C3%ADn!%20Vi%20tu%20portafolio%20web." color="inherit" target="_blank"><WhatsAppIcon/></Link>
                </Typography>
                <Typography variant="h5">
                    ¡Hola! Yo soy 👋🏽
                </Typography>
                <Typography variant="h3">
                    Benjamín García
                </Typography>
                <Typography variant="h5">
                    <Typed
                        strings={[
                            'Desarrollador Web',
                            'Desarrollador Frontend',
                            'Desarrollador Backend']}
                        typeSpeed={60}
                        backSpeed={100}
                        loop />
                </Typography>
                <Button variant="outlined"
                    startIcon={<DescriptionIcon />}
                    sx={{
                        backgroundColor: 'transparent',
                        color: '#576F72',
                        borderColor: '#576F72',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#383838',
                            borderColor: '#383838'
                        }
                    }}
                >
                    Ver CV
                </Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <CardMedia
                    className={classes.rotateIcon}
                    component="img"
                    alt="Benjamín Arturo Pérez García desarrollador web"
                    image={imgMain}
                    sx={{
                        width: { xs: "50%", md: "90%", lg: "70%" },
                        borderRadius: '50%',
                        margin: 'auto',
                        filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7))'
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <MouseScroll />
                </Box>
            </Grid>
        </Grid>
    )
}