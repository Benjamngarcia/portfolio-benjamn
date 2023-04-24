import * as React from 'react';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography
} from '@mui/material';
import { IconCategory2 } from '@tabler/icons-react';
import { IconBox } from '@tabler/icons-react';
import { IconUser } from '@tabler/icons-react';
import { IconSourceCode } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { Colors } from '@/styles/theme';

export function Nav() {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navItems = [
    { title: 'Sobre mí  ', link: '/about', icon: <IconUser /> },
    { title: 'Proyectos', link: '/projects', icon: <IconBox /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ margin: '8px 16px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" className='links-styles' alt="Link para regresar a la página inicial del portafolio">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconSourceCode />
            <Typography>Ben</Typography>
          </Box>
        </Link>
        <IconButton onClick={handleDrawerToggle} >
          <IconX />
        </IconButton>
      </Box>
      <Divider />
      <Typography color="primary" variant="body2" sx={{ mt: '8px', px: '24px' }}>Navegación</Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.title}
            sx={{
              borderRadius: '8px',
              transition: '.3s',
              '&:hover': { backgroundColor: Colors.secondaryLight }
            }}
          >
            <Link
              href={item.link}
              className='links-styles'
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              {item.icon}
              <Typography sx={{ fontWeight: 'bold' }}>
                {item.title}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
      <Typography color="primary" variant="body2" sx={{ px: '24px' }}>Redes sociales</Typography>
      <List>
        <ListItem
          sx={{
            borderRadius: '8px',
            transition: '.3s',
            '&:hover': { backgroundColor: Colors.secondaryLight }
          }}
        >
          <Link
            href="https://www.instagram.com/benjamngarcia/"
            target="_blank"
            className='links-styles'
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <IconBrandInstagram />
            <Typography sx={{ fontWeight: 'bold' }}>
              Instagram
            </Typography>
          </Link>
        </ListItem>
        <ListItem
          sx={{
            borderRadius: '8px',
            transition: '.3s',
            '&:hover': { backgroundColor: Colors.secondaryLight }
          }}
        >
          <Link
            href="https://www.linkedin.com/in/benjamngarcia"
            target="_blank"
            className='links-styles'
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <IconBrandLinkedin />
            <Typography sx={{ fontWeight: 'bold' }}>
              LinkedIn
            </Typography>
          </Link>
        </ListItem>
        <ListItem
          sx={{
            borderRadius: '8px',
            transition: '.3s',
            '&:hover': { backgroundColor: Colors.secondaryLight }
          }}
        >
          <Link
            href="https://github.com/Benjamngarcia"
            target="_blank"
            className='links-styles'
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <IconBrandGithub />
            <Typography sx={{ fontWeight: 'bold' }}>
              GitHub
            </Typography>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" sx={{ backgroundColor: 'white', boxShadow: 'none', position: 'static' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link href="/" className='links-styles' alt="Link para regresar a la página inicial del portafolio">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconSourceCode />
              <Typography>Ben</Typography>
            </Box>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Link
              href="https://www.linkedin.com/in/benjamngarcia"
              target="_blank"
              className='links-styles social-icons'
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <IconBrandLinkedin />
            </Link>
            <Link
              href="https://github.com/Benjamngarcia"
              target="_blank"
              className='links-styles social-icons'
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <IconBrandGithub />
            </Link>
            {navItems.map((item) => (
              <Typography key={item.title}>
                <Link href={item.link} className='links-styles'>
                  {item.title}
                </Link>
              </Typography>
            ))}
          </Box>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};