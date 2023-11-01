import { Seo } from "../components/Seo";
import { Box, Grid, Typography, CardMedia, Link } from "@mui/material";
import {
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandMysql,
  IconBrandMongodb,
} from "@tabler/icons-react";
import { Colors } from "../styles/theme";
import BenjaminImage from "../assets/img/benjamngarcia.png";

function about() {
  return (
    <>
      <Seo
        title="Benjamín García - Sobre mí"
        description="Soy estudiante de Ingeniería en Informática y desarrollador web; Actualmente me encuentro enfocado en poder perfeccionar mis habilidades como Frontend Developer, sin embargo me divierto igual desarrollando actividades en otras áreas como Backend o Bases de datos."
      />
      <Box component="main">
        <Grid container>
          <Grid
            container
            item
            xs={12}
            align="center"
            justify="center"
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Grid item>
              <CardMedia
                component="img"
                alt="Benjamín Arturo Pérez García desarrollador web"
                image={BenjaminImage.src}
                sx={{
                  width: "250px",
                  height: "250px",
                  margin: "auto",
                  borderRadius: "10px",
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ color: Colors.primary, marginTop: "16px" }}>
            <Typography component="h1" variant="h5" fontWeight="bold">
              Sobre mí
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Hola, soy Benjamín; estudiante de Ingeniería en Informática y{" "}
              <b>desarrollador web. </b> Desde que tengo memoria siempre me ha
              gustado la tecnología, pero mi verdadera pasión surgió cuando me
              adentré al desarrollo de software. El proceso de aprendizaje se
              convirtió en un hobby, buscando qué otras cosas puedo hacer con
              código; tomando cursos, diplomados y todo lo que me pudiera
              enseñar más, ya que esta área me pareció un mundo increíble y con
              un sinfín de posibilidades.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              He desarrollado diversos <b>proyectos Fullstack</b> como
              freelancer y actualmente laboro en una empresa de desarrollo de
              software como Frontend Developer. Mi enfoque principal es poder
              perfeccionar mis habilidades como
              <b> Frontend Developer, </b> e impulsar mi carrera profesional
              paralelo a mis estudios universitarios.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Las tecnologías que <b>más uso actualmente</b> son: Javascript
              Vanilla, React, Node, Next, MySQL y MongoDB.
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
            <Typography component="p" variant="body1" textAlign="justify">
              Una de las experiencias más gratificantes para mí es compartir lo
              que he aprendido con otros, y eso me llevó juntar a personas que
              les apasionara lo mismo que a mí y juntos fundar
              <Link
                href="https://dictamigos.xyz/"
                target="_blank"
                underline="none"
                sx={{ color: "#3B71DD", fontWeight: "bold" }}
              >
                &nbsp;Dictamigos,&nbsp;
              </Link>
              una comunidad de programadores donde ayudamos a las personas a
              adentrarse en el emocionante mundo de la tecnología.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Además de investigar y practicar nuevos lenguajes de programación,
              soy entusiasta de descubrir otras áreas fuera del código como el
              marketing, finanzas, diseño y administración.
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              En esta página, podrás explorar algunos de los proyectos que he
              tenido el placer de realizar. También encontrarás publicaciones
              relacionadas con la programación y otros temas relacionados a la
              tecnología de la información.{" "}
              <i>¡Bienvenido a mi rincón en la web!</i>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default about;
