import * as React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  IconCategory2,
  IconBox,
  IconUser,
  IconSourceCode,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
  IconX,
} from "@tabler/icons-react";
import { Colors } from "../../styles/theme";
import { SocialIcon } from "./SocialIcon";
import Link from "next/link";

export function Nav() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navItems = [
    { title: "Sobre mí  ", link: "/about", icon: <IconUser /> },
    { title: "Proyectos", link: "/projects", icon: <IconBox /> },
  ];

  const styleSocialIcon = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ margin: "8px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          className="links-styles"
          alt="Link para regresar a la página inicial del portafolio"
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <IconSourceCode />
            <Typography sx={{ fontSize: "0.9rem" }}>Ben</Typography>
          </Box>
        </Link>
        <IconButton onClick={handleDrawerToggle}>
          <IconX />
        </IconButton>
      </Box>
      <Divider />
      <Typography
        color="primary"
        variant="body2"
        sx={{ mt: "8px", px: "24px" }}
      >
        Navegación
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.title}
            sx={{
              borderRadius: "8px",
              transition: ".3s",
              "&:hover": { backgroundColor: Colors.secondaryLight },
            }}
          >
            <Link
              href={item.link}
              className="links-styles"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: "100%",
              }}
            >
              {item.icon}
              <Typography sx={{ fontWeight: "bold" }}>{item.title}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
      <Typography color="primary" variant="body2" sx={{ px: "24px" }}>
        Redes sociales
      </Typography>
      <List>
        <ListItem
          sx={{
            borderRadius: "8px",
            transition: ".3s",
            "&:hover": { backgroundColor: Colors.secondaryLight },
          }}
        >
          <Link
            href="https://www.instagram.com/benjamngarcia/"
            target="_blank"
            className="links-styles"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              width: "100%",
            }}
          >
            <IconBrandInstagram />
            <Typography sx={{ fontWeight: "bold" }}>Instagram</Typography>
          </Link>
        </ListItem>
        <ListItem
          sx={{
            borderRadius: "8px",
            transition: ".3s",
            "&:hover": { backgroundColor: Colors.secondaryLight },
          }}
        >
          <Link
            href="https://www.linkedin.com/in/benjamngarcia"
            target="_blank"
            className="links-styles"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              width: "100%",
            }}
          >
            <IconBrandLinkedin />
            <Typography sx={{ fontWeight: "bold" }}>LinkedIn</Typography>
          </Link>
        </ListItem>
        <ListItem
          sx={{
            borderRadius: "8px",
            transition: ".3s",
            "&:hover": { backgroundColor: Colors.secondaryLight },
          }}
        >
          <Link
            href="https://github.com/Benjamngarcia"
            target="_blank"
            className="links-styles"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              width: "100%",
            }}
          >
            <IconBrandGithub />
            <Typography sx={{ fontWeight: "bold" }}>GitHub</Typography>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        sx={{ backgroundColor: "transparent", boxShadow: "none", position: "static" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link
            href="/"
            className="links-styles"
            alt="Link para regresar a la página inicial del portafolio"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <IconSourceCode />
              <Typography sx={{ fontSize: "0.9rem" }}>Ben</Typography>
            </Box>
          </Link>
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            <SocialIcon
              href="https://github.com/Benjamngarcia"
              icon={<IconBrandGithub />}
              style={styleSocialIcon}
            />
            <SocialIcon
              href="https://www.linkedin.com/in/benjamngarcia"
              icon={<IconBrandLinkedin />}
              style={styleSocialIcon}
            />
            <div className="point-icon" />
            {navItems.map((item) => (
              <Typography key={item.title}>
                <Link href={item.link} className="links-styles">
                  {item.title}
                </Link>
              </Typography>
            ))}
          </Box>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <IconCategory2 />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="top"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              borderRadius: "0 0 8px 8px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
