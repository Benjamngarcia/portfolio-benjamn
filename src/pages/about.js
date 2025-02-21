import { Seo } from "../components/Seo";
import { Box, Grid, Typography, Link } from "@mui/material";
import { Colors } from "../styles/theme";
import { stackTechnologies } from "../utils/data";
import { TechnologyCard } from "../components/Cards/TechnologyCard";
import BenjaminImage from "../assets/img/benjamngarcia.png";
import DictamigosImage from "../assets/img/dictamigos-team.png";

function about() {
  return (
    <>
      <Seo
        title="Benjamín García - Sobre mí"
        description="Soy estudiante de Ingeniería en Informática y desarrollador web; Actualmente me encuentro enfocado en poder perfeccionar mis habilidades como Frontend Developer, sin embargo me divierto igual desarrollando actividades en otras áreas como Backend o Bases de datos."
      />
      <Box component="main">
        <Grid container>
          <Box
            component="img"
            alt="Benjamín Arturo Pérez García desarrollador web"
            src={BenjaminImage.src}
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "10px",
              margin: "auto",
            }}
          />
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
            <Box sx={{ margin: "16px 0px" }}>
              <Typography component="h2" variant="h6" fontWeight="bold">
                Tecnologías y herramientas:
              </Typography>
              <Typography component="p" variant="body1" textAlign="justify">
                Estás son algunos de los lenguajes de programación y
                herramientas que he utilizado a lo largo de mi carrera como
                desarrollador web y especialmente mis favoritas
              </Typography>
              <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {stackTechnologies.map((technology) => {
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
            <Typography component="p" variant="body1" textAlign="justify">
              Una de las experiencias más gratificantes para mí es compartir lo
              que he aprendido con otros y eso me llevó juntar a personas que
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
            <Box
              sx={{
                width: { xs: "100%", sm: "380px" },
                margin: "auto",
                padding: "16px 0px",
              }}
            >
              <Box
                component="img"
                alt="Equipo de Dictamigos en las Binary Talks v2"
                src={DictamigosImage.src}
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
              <Typography component="p" variant="body2" textAlign="justify">
                Dictamigos, como quiero a Dictamigos. 🫶🏽
              </Typography>
            </Box>
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
