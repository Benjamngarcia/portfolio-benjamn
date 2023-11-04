import { Grid, Typography, Divider, Box } from "@mui/material";
import { Colors } from "../../styles/theme";
import {
  IconSourceCode,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { SocialIcon } from "./SocialIcon";
import Link from "next/link";
import MexicoFlag from "../../assets/svg/mexico-flag.svg";

const footerItems = [
  { title: "Sobre mí  ", link: "/about" },
  { title: "Proyectos", link: "/projects" },
];

export function Footer() {
  return (
    <Grid
      container
      sx={{
        margin: "16px auto 0px auto",
        padding: "16px",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        color: Colors.primary,
      }}
    >
      <Grid item xs={12}>
        <Divider sx={{ margin: "16px auto" }}>
          <IconSourceCode />
          <Typography sx={{ fontSize: "0.9rem" }}>Ben</Typography>
        </Divider>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ fontSize: "14px" }}>
        <Link href="/" className="copyright">
          &copy; {new Date().getFullYear()} Benjamín García
        </Link>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: "fit-content",
            margin: "auto",
          }}
        >
          Hecho con 💙 en
          <Box
            component="img"
            src={MexicoFlag.src}
            alt="Bandera de México"
            sx={{ width: "24px" }}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          marginTop: { xs: "16px", sm: "0px" },
          alignItems: "center",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            margin: "auto",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <div style={{ display: "flex" }}>
            {footerItems.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="links-footer-styles"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="point-icon" />
          <Box sx={{ display: "flex", marginTop: { xs: "8px", sm: "0px" } }}>
            <SocialIcon
              href="https://github.com/Benjamngarcia"
              icon={<IconBrandGithub />}
            />
            <SocialIcon
              href="https://www.linkedin.com/in/benjamngarcia"
              icon={<IconBrandLinkedin />}
            />
            <SocialIcon
              href="https://www.instagram.com/benjamngarcia/"
              icon={<IconBrandInstagram />}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
