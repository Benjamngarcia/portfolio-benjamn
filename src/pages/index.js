import { Seo } from "../components/Seo";
import { Box, Typography, Grid, Link } from "@mui/material";
import { IconFileDownload, IconBrandInstagram } from "@tabler/icons-react";
import { Colors } from "../styles/theme";
import { MemojiMain } from "../components/common/MemojiMain";
import { ButtonLink } from "../components/Buttons/ButtonLink";
import { MouseScroll } from "../components/common/MouseScrollIcon";
import { Project } from "../components/Cards/Project";

export default function Home() {
  return (
    <>
      <Seo />
      <main>
        <Grid component="section" container sx={{ marginTop: "32px" }}>
          <Grid item xs={12}>
            <MemojiMain />
          </Grid>
          <Grid item xs={12} sx={{ color: Colors.primary, marginTop: "16px" }}>
            <Typography component="h1" variant="h5" fontWeight="bold">
              ¡Hola! Yo soy Benjamín 👋🏽
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "16px" }}>
              Soy un apasionado <b>desarrollador web</b> y me encanta hablar
              sobre todo lo relacionado con el mundo del desarrollo de software,
              por lo que soy muy activo en las comunidades de desarrolladores.
            </Typography>
            <Typography>
              Junto con mis amigos fundé
              <Link
                href="https://dictamigos.xyz/"
                target="_blank"
                underline="none"
                sx={{ color: "#3B71DD", fontWeight: "bold" }}
              >
                &nbsp;Dictamigos,&nbsp;
              </Link>
              una comunidad en la que ayudamos a las personas a ingresar en este
              emocionante mundo de la tecnología.
            </Typography>
            <Typography variant="body1">
              Actualmente me encuentro enfocado en el área del desarrollo
              Frontend, sin embargo también disfruto practicar otras
              tecnologías.
            </Typography>
            <Typography>
              Conclusión, si necesitas ayuda para ingresar al mundo del
              desarrollo de software o tienes curiosidad por saber más sobre mí,{" "}
              <b>¡no dudes en contactarme!</b> Me encantaría compartir mi pasión
              contigo y ayudarte en todo lo me sea posible.
            </Typography>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: "16px" }}>
            <Grid item xs={12} md={6}>
              <ButtonLink
                variant="contained"
                color="secondary"
                href="https://drive.google.com/file/d/1Qvve72H1VEA9HCWFCiM7wvGEYRLFWktn/view?usp=sharing"
                iconComponent={<IconFileDownload />}
                textButton="Ver CV"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ButtonLink
                href="https://www.instagram.com/benjamngarcia/"
                backgroundColor="#F5F5F5"
                iconComponent={<IconBrandInstagram />}
                textButton="Sígueme en instagram"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "16px" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <MouseScroll />
            </Box>
          </Grid>
        </Grid>
      </main>
      <Box
        component="section"
        sx={{ color: Colors.primary, marginTop: "16px" }}
      >
        <Typography component="h2" variant="h5" fontWeight="bold">
          Último proyecto...
        </Typography>
        <Typography component="p" variant="body1">
          Este es un proyecto del que me siento orgulloso. :)
        </Typography>
        <Project />
      </Box>
    </>
  );
}
