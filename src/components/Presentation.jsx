import { Colors } from '@/styles/theme'
import {
  Box,
  Grid,
  Typography,
  CardMedia,
  Button,
  Link
} from '@mui/material'

import {
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandMysql,
  IconBrandMongodb
} from '@tabler/icons-react';

export const Presentation = () => {
  const imgBenjamn = "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Benjamngarcia.jpeg?alt=media&token=34b66d2d-f657-47c5-9840-15fda612f95d"

  return (
    <Box component="main">
      <Grid container>
        <Grid
          container
          item
          xs={12}
          align="center"
          justify="center"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid item>
            <CardMedia
              component="img"
              alt="Benjamín Arturo Pérez García desarrollador web"
              image={imgBenjamn}
              sx={{
                width: "250px",
                height: "250px",
                margin: 'auto',
                borderRadius: '10px'
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ color: Colors.primary, marginTop: '16px' }}>
          <Typography component="h1" variant="h5" fontWeight="bold">
            Sobre mí
          </Typography>
          <Typography component={"p"} variant="body1" textAlign="justify">
            Hola, soy Benjamín; estudiante de Ingeniería en Informática y <b>desarrollador web; </b>
            desde que tengo memoria siempre me ha gustado la tecnología, pero de todas las
            áreas del desarrollo que he podido probar, el desarrollo web me pareció un mundo
            increíble y con un sinfín de posibilidades.
          </Typography>
          <Typography component={"p"} variant="body1" textAlign="justify">
            Actualmente me encuentro enfocado en poder perfeccionar mis habilidades como
            <b> Frontend Developer, </b> sin embargo me divierto igual desarrollando actividades
            en otras áreas como Backend o Bases de datos.
          </Typography>
          <Typography component={"p"} variant="body1" textAlign="justify">
            Las tecnologías que <b>más uso actualmente</b> son: Javascript Vanilla, React, Node,
            Next, MySQL y MongoDB.
          </Typography>
          <Box>
            <Link href="https://www.javascript.com/" target="_blank">
              <IconBrandJavascript width={35} height={35} color="#F7DF1E" />
            </Link>
            <Link href="https://react.dev/" target="_blank">
              <IconBrandReact width={35} height={35} color="#61dbfb" />
            </Link>
            <Link href="https://nextjs.org/" target="_blank">
              <IconBrandNextjs width={35} height={35} color="#000000" />
            </Link>
            <Link href="https://www.mysql.com/" target="_blank">
              <IconBrandMysql width={35} height={35} color="#00758F" />
            </Link>
            <Link href="https://www.mongodb.com/" target="_blank">
              <IconBrandMongodb width={35} height={35} color="#589636" />
            </Link>
          </Box>
          <Typography component={"p"} variant="body1" textAlign="justify">
            Además de investigar y practicar nuevos lenguajes de programación,
            soy entusiasta de descubrir otras áreas fuera del código
            como lo pueden ser: marketing, finanzas, diseño y administración.
            En esta página podrás encontrar algunos proyectos que he realizado y
            también algunas publicaciones sobre programación u otros temas
            relacionados a TI. Me gusta apoyar a otras personas compartiendo
            lo que voy aprendiendo por medio de
            <Link
              href="https://dictamigos.xyz/"
              target="_blank"
              underline='none'
              sx={{ color: '#3B71DD', fontWeight: 'bold' }}>
              &nbsp; Dictamigos.
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
