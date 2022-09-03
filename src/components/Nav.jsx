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
    ListItemText,
    Drawer,
    Button,
    IconButton
} from "@mui/material";

import { createTheme } from '@mui/material/styles'

import MenuIcon from '@mui/icons-material/Menu';
import ScrollNav from "./ScrollNav"

const drawerWidth = 240;
const navItems = ['Sobre mí', 'Proyectos', 'Blog'];

export const Nav = props => {

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
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
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
                                <Typography sx={{textAlign: 'center', marginLeft: 'auto', display: {sm: 'none'}}}>
                                    Benjamín García
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                >
                                Benjamín García
                                </Typography>
                                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                    {navItems.map((item) => (
                                        <Button key={item} sx={{ color: '#576F72', fontWeight: 'bold' }}>
                                            {item}
                                        </Button>
                                    ))}
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
