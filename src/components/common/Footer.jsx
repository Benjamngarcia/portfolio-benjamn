import {
  Grid,
  Typography,
  Divider
} from "@mui/material";
import { Colors } from "../../styles/theme";
import { IconSourceCode } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconMailForward } from '@tabler/icons-react';
import { SocialIcon } from "./SocialIcon";
import Link from "next/link";

export function Footer() {
  return (
    <Grid
      container
      sx={{
        marginTop: '16px',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        color: Colors.primary
      }}
    >
      <Grid item xs={12} md={5}>
        <Typography>🇲🇽</Typography>
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography>
          <Link
            href="mailto:benjamin.webdev3@gmail.com?Subject=Hola%20Benjamin!"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              textDecoration: 'none',
              color: Colors.primary,
              margin: 'auto 8px',
            }}
          >
            <IconMailForward />
            Envíame un email.
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{ margin: '16px auto' }}>
          <IconSourceCode />
          <Typography>Ben</Typography>
        </Divider>
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography>
          <Link href="/" className="links-styles">
            &copy; {new Date().getFullYear()} Benjamín García. Todos los derechos reservados.
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <SocialIcon href="https://github.com/Benjamngarcia" icon={<IconBrandGithub />}/>
        <SocialIcon href="https://www.linkedin.com/in/benjamngarcia" icon={<IconBrandLinkedin />}/>
        <SocialIcon href="https://www.instagram.com/benjamngarcia/" icon={<IconBrandInstagram />}/>
      </Grid>
    </Grid>
  )
}