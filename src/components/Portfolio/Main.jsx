import { useEffect, useRef } from "react";
import { MouseScroll } from './MouseScroll';
import { Box, Typography, Grid, Button, CardMedia, Link } from "@mui/material";
import Typed from "typed.js";
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Main = () => {

    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Desarrollador Frontend', 'Desarrollador Backend', 'Desarrollador Web'], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 200,
            typeSpeed: 60,
            backSpeed: 100,
            backDelay: 100
        });
        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

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
                    <Link href="https://www.instagram.com/benjamngarcia/" target="_blank" sx={{color: '#576F72', transition: '.3s', '&:hover':{ color: '#BAAC8D' }}}><InstagramIcon /></Link>
                    <Link href="https://www.linkedin.com/in/benjamngarcia" target="_blank" sx={{color: '#576F72', transition: '.3s', '&:hover':{ color: '#BAAC8D' }}}><LinkedInIcon /></Link>
                    <Link href="https://github.com/Benjamngarcia" target="_blank" sx={{color: '#576F72', transition: '.3s', '&:hover':{ color: '#BAAC8D' }}}><GitHubIcon /></Link>
                    <Link href="https://www.facebook.com/Benjamin.1533/" target="_blank" sx={{color: '#576F72', transition: '.3s', '&:hover':{ color: '#BAAC8D' }}}><FacebookIcon /></Link>
                </Typography>
                <Typography variant="h5">
                    ??Hola! Yo soy ????????
                </Typography>
                <Typography variant="h3">
                    Benjam??n Garc??a
                </Typography>
                <Typography variant="h5" sx={{color: '#BA918D'}}>
                    <span ref={el}></span>
                </Typography>
                <Button variant="outlined"
                    startIcon={<DescriptionIcon />}
                    onClick={() => {
                        window.open('https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/CV%20Benjam%C3%ADn%20Arturo%20P%C3%A9rez%20Garc%C3%ADa.pdf?alt=media&token=341ea60d-6879-4ae4-9d28-df93e5d7c06b', '_blank');
                    }}
                    sx={{
                        backgroundColor: 'transparent',
                        color: '#576F72',
                        borderColor: '#576F72',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#BAAC8D',
                            borderColor: '#BAAC8D'
                        }
                    }}
                >
                    Ver CV
                </Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <CardMedia
                    className="memoji-main"
                    component="img"
                    alt="Benjam??n Arturo P??rez Garc??a desarrollador web"
                    image="https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Memoji%20Main.png?alt=media&token=a2473108-1cd3-421e-965e-bb6f2466dfa7"
                    sx={{
                        width: { xs: "50%", md: "90%", lg: "70%" },
                        borderRadius: '50%',
                        margin: 'auto',
                        filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7))',
                        // transition: "all .2s ease-in-out",
                        // '&:hover': {
                        //     transform: 'scale(1.1)'
                        // }
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