import { Seo } from "../components/Seo";
import { Box, Grid, Typography } from "@mui/material";
import { ProjectsCard } from "../components/Cards/ProjectsCard";
import { projectsPortfolio } from "../utils/data";

function projects() {
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

export default projects;
