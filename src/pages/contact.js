import { Seo } from "../components/Seo";
import { Box, Grid, Typography } from "@mui/material";
import { Colors } from "../styles/theme";
import { socialNetworksButtons } from "../utils/data";
import { ButtonSocial } from "../components/Buttons/ButtonSocial";

function contact() {
  return (
    <>
      <Seo
        title="Benjamín García - Contacto"
        description="Contáctame por alguna de mis redes sociales o por mi correo electrónico, estaré encantado de poder ayudarte en lo que me sea posible."
      />
      <Box component="main" sx={{ maxWidth: "668px", margin: "auto" }}>
        <Grid container>
          <Grid item xs={12} sx={{ color: Colors.primary, marginTop: "16px" }}>
            <Typography component="h1" variant="h5" fontWeight="bold">
              Habla conmigo
            </Typography>
            <Typography component="p" variant="body1" textAlign="justify">
              Muchas gracias por considerar contactarme, estaré encantado de
              poder ayudarte en lo que me sea posible. Puedes contactarme por
              alguna de mis redes sociales o por mi correo electrónico.
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: "16px" }}>
              {socialNetworksButtons.map((social) => (
                <Grid item xs={12} sm={6} key={social.name}>
                  <ButtonSocial
                    textButton={social.name}
                    descriptionButton={social.description}
                    iconComponent={social.icon}
                    href={social.link}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default contact;
