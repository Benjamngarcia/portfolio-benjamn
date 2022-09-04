import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    ThemeProvider,
    CssBaseline,
    Divider,
    Box,
    List,
    ListItem,
    ListItemButton,
    Drawer,
    IconButton,
} from "@mui/material";
import { Link } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu';
import ScrollNav from "./ScrollNav"

const drawerWidth = 240;


export const Nav = props => {

    const navItems = [
        { name: '/about', text: 'Sobre mí' },
        { name: '/portfolio', text: 'Proyectos' },
        { name: '/blog', text: 'Blog' }
    ];

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Benjamín García
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link 
                                to={item.name} 
                                key={item.name}
                                style={{
                                    color: '#576F72',
                                    fontWeight: 'bold',
                                    margin: '0px 1rem',
                                    textDecoration: 'none'
                                }}>
                                {item.text}
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <ScrollNav>
                <AppBar component="nav" sx={{ display: 'flex' }}>
                    <Box>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Link 
                                to="/" 
                                class="mlink1"
                                style={{ 
                                    color:'#576F72',
                                    textAlign: 'center', 
                                    marginLeft: 'auto', 
                                    textDecoration: 'none'
                                }}
                                >
                                Benjamín García
                            </Link>
                            <Link
                                to="/"
                                class="mlink2"
                                style={{ 
                                    color:'#576F72',
                                    flexGrow: 1, 
                                    textDecoration: 'none'
                                }}
                            >
                                Benjamín García
                            </Link>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {
                                    navItems.map((item) => {
                                        return (
                                            <Link
                                                to={item.name}
                                                key={item.name}
                                                style={{
                                                    color: '#576F72',
                                                    fontWeight: 'bold',
                                                    margin: '0px 1rem',
                                                    textDecoration: 'none'
                                                }}
                                            >
                                                {item.text}
                                            </Link>
                                        )
                                    })
                                }
                            </Box>
                        </Toolbar>
                        <Box component="nav">
                            <Drawer
                                container={container}
                                variant="temporary"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Box>
                    </Box>
                </AppBar>
            </ScrollNav>
        </ThemeProvider>
    );
};
