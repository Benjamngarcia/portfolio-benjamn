// import { useEffect, useRef } from "react";
import { MouseScroll } from './MouseScrollIcon';
import { Box, Typography, Grid, Button, CardMedia, Link } from "@mui/material";
import { Colors } from '@/styles/theme';
import { IconFileDownload } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';


export const MainPresentation = () => {
  return (
    <Grid component="section" container sx={{ marginTop: '64px' }}>
      <Grid item xs={12}>
        <Box
          className="memoji-main"
          component="img"
          alt="Benjamín Arturo Pérez García desarrollador web"
          src="https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Memoji%20Main.png?alt=media&token=a2473108-1cd3-421e-965e-bb6f2466dfa7"
          sx={{
            width: '20%',
            borderRadius: '50%',
            margin: 'auto',
            filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7))',
            backgroundColor: Colors.secondary,
            padding: '16px'
          }}
        />
      </Grid>
      <Grid item xs={12} sx={{ color: Colors.primary, marginTop: '16px' }}>
        <Typography component="h1" variant="h5" fontWeight="bold">
          ¡Hola! Yo soy Benjamín 👋🏽
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '16px' }}>
          Soy un apasionado <b>desarrollador web</b> y me encanta hablar sobre todo lo relacionado con el mundo del desarrollo de software, por lo que soy
          muy activo en las comunidades de desarrolladores.
        </Typography>
        <Typography>
          Junto con mis amigos fundé
          <Link
            href="https://dictamigos.xyz/"
            target="_blank"
            underline='none'
            sx={{ color: '#3B71DD', fontWeight: 'bold' }}>
            &nbsp; Dictamigos, &nbsp;
          </Link>
          una comunidad en la que ayudamos a las personas a ingresar en este emocionante mundo de la tecnología.
        </Typography>
        <Typography variant="body1">
          Actualmente me encuentro enfocado en el área del desarrollo Frontend, sin embargo también disfruto
          practicar tecnologías de Backend.
        </Typography>
        <Typography>
          Conclusión, si necesitas ayuda para ingresar al mundo del desarrollo de software o tienes curiosidad
          por saber más sobre él, <b>¡no dudes en contactarme!</b> Me encantaría compartir mi pasión contigo y
          ayudarte en todo lo me sea posible.
        </Typography>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: '16px' }}>
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<IconFileDownload />}
            href="https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/CV%20Benjam%C3%ADn%20Arturo%20P%C3%A9rez%20Garc%C3%ADa.pdf?alt=media&token=341ea60d-6879-4ae4-9d28-df93e5d7c06b"
            target="_blank"
            sx={{
              padding: '16px',
              fontWeight: 'bold',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              borderRadius: '8px'
            }}
          >
            Ver CV
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={<IconBrandInstagram />}
            href="https://www.instagram.com/benjamngarcia/"
            target="_blank"
            sx={{
              padding: '16px',
              fontWeight: 'bold',
              width: '100%',
              backgroundColor: '#F5F5F5',
              display: 'flex',
              justifyContent: 'flex-start',
              borderRadius: '8px'
            }}
          >
            Sígueme en instagram
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{marginTop: '16px'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <MouseScroll />
        </Box>
      </Grid>
    </Grid>
  )
}