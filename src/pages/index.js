import { Seo } from "../components/Seo";
import { Box, Typography, Grid, Link } from "@mui/material";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram
} from "@tabler/icons-react";
import { Colors } from "../styles/theme";
import { MemojiMain } from "../components/common/MemojiMain";
import { ButtonLink } from "../components/Buttons/ButtonLink";
import { MouseScroll } from "../components/common/MouseScrollIcon";
import { ProjectsCard } from "../components/Cards/ProjectsCard";
import { projectsPortfolio } from "../utils/data";

export default function Home() {
  const PROJECT = projectsPortfolio[0];

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
              Soy un apasionado <b>Desarrollador Web Fullstack</b>, con
              principal experiencia en el desarrollo Frontend y en{" "}
              <b>proyectos freelance</b> y me encanta hablar sobre todo lo
              relacionado con el mundo del desarrollo de software, por lo que
              soy muy activo en las comunidades de programadores. Junto con mis
              mejores amigos fundé
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
              tecnologías.Si necesitas ayuda para ingresar al mundo del
              desarrollo de software o tienes curiosidad por saber más sobre mi
              trabajo, <b>¡no dudes en contactarme!</b> Me encantaría compartir
              mi pasión contigo y ayudarte en todo lo me sea posible.
            </Typography>
          </Grid>
          <Box sx={{ width: { xs: "100%", sm: "50%", md: "40%", lg: "30%" }, marginTop: "16px" }}>
            <ButtonLink
              variant="contained"
              color="secondary"
              href="/contact"
              iconComponent={<IconBrandTelegram />}
              textButton="Pongámonos en contacto"
              fontBold
              paddingButton
              linkPage
              backgroundColor={Colors.secondary}
            />
          </Box>
          <Grid item xs={12} sx={{ marginTop: "16px" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <MouseScroll />
            </Box>
          </Grid>
        </Grid>
      </main>
      <Box
        component="section"
        sx={{ color: Colors.primary, marginTop: "32px" }}
      >
        <Typography component="h2" variant="h5" fontWeight="bold">
          Último proyecto...
        </Typography>
        <Typography component="p" variant="body1">
          Este es un proyecto del que me siento orgulloso. :)
        </Typography>
        <ProjectsCard project={PROJECT} />
      </Box>
      <Box
        component="section"
        sx={{
          color: Colors.primary,
          marginTop: "32px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: { xs: "100%", sm: "70%", md: "50%" }, display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* <Typography component="h2" variant="h6" fontWeight="bold">
            Gracias por tomarte el tiempo de entrar a mi sitio web.
          </Typography> */}
          <Typography
            component="h3"
            variant="h5"
            fontWeight="bold"
            color="secondary"
          >
            ¿Quieres hablar de desarrollo, proyectos o simplemente convivir?
          </Typography>
          <Typography variant="body1">
            Podemos platicar por Instagram o LinkedIn, en ambas redes comparto
            contenido acerca de proyectos que desarrollo o eventos de
            tecnología.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <ButtonLink
                variant="contained"
                color="secondary"
                href="https://www.linkedin.com/in/benjamngarcia"
                iconComponent={<IconBrandLinkedin />}
                textButton="LinkedIn"
                paddingButton
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ButtonLink
                href="https://www.instagram.com/benjamngarcia/"
                iconComponent={<IconBrandInstagram />}
                textButton="Instagram"
                paddingButton
                backgroundColor={Colors.primaryLight}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
