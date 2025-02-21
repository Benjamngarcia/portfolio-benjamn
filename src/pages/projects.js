import { Seo } from "../components/Seo";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { ProjectsCard } from "../components/Cards/ProjectsCard";
import { projectsPortfolio } from "../utils/data";
import { TechnologyCard } from "../components/Cards/TechnologyCard";
import { stackTechnologies } from "../utils/data";

function Projects() {
  return (
    <>
      <Seo
        title="Benjamín García - Sobre mí"
        description="Página web para mostrar proyectos que he desarrollado durante mi carrera profesional y académica."
      />
      <Box
        sx={{
          marginTop: "64px",
          display: { xs: "flex", sm: "block" },
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          fontWeight="bold"
          color="primary"
        >
          Portafolio de proyectos
        </Typography>
        <Typography
          component="p"
          color="primary"
          variant="body1"
          textAlign="justify"
        >
          Aquí podrás ver algunos de los proyectos en los que he trabajado a lo
          largo de mi carrera, tanto en el ámbito personal como profesional y
          académico. He tenido la suerte de formar parte de proyectos con{" "}
          <b>
            miles de usuarios activos y de colaborar con equipos
            internacionales,
          </b>{" "}
          aunque por respeto a la privacidad no puedo compartir todos los
          detalles. Si te gustaría conocer más o ver otros proyectos,{" "}
          <b>¡no dudes en enviarme un DM o un email!</b> También puedes explorar
          mi perfil de GitHub para encontrar más ejemplos de mi trabajo.
        </Typography>
        <Box sx={{ margin: "16px 0px" }}>
          <Typography component="p" variant="body1" textAlign="justify">
            Puedes ver más herramientas en la página de
            <Link
              href="/about"
              style={{ fontWeight: "bold" }}
              className="links-styles"
            >
              Sobre mí.
            </Link>
          </Typography>
          <Typography component="p" variant="body1" textAlign="justify">
            Si tuviera que mencionar mis principales habilidades y tecnologías,
            serían:
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginTop: "16px",
            }}
          >
            {stackTechnologies.slice(0, 4).map((technology) => {
              return (
                <TechnologyCard
                  key={technology.name}
                  link={technology.link}
                  icon={technology.icon}
                  color={technology.color}
                  backgroundColor={technology.backgroundColor}
                  name={technology.name}
                />
              );
            })}
          </Box>
        </Box>
        <Grid
          component="section"
          container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          {projectsPortfolio.map((project) => {
            return (
              <Grid
                component="article"
                item
                xs={12}
                sm={6}
                md={4}
                sx={{ marginTop: { xs: "16px", sm: "32px" }, display: "flex" }}
                key={project.title}
              >
                <ProjectsCard project={project} isPortfolio />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default Projects;
