import { Grid, Typography, IconButton, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Footer() {
    return (
        <Grid container sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
            color: '#576F72'
        }}>
            <Grid item xs={12} md={6}>
                <Typography>
                <Link href="/" color="inherit" underline="none">
                    &copy; 2022 Benjamín García. Todos los derechos reservados.
                </Link>
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <IconButton  target="_blank" href="https://github.com/Benjamngarcia" sx={{color: '#576F72', transition: '.3s', '&:hover':{ color: '#BAAC8D' }}}>
                    <GitHubIcon/>
                </IconButton>
                <IconButton target="_blank" href="https://www.linkedin.com/in/benjamngarcia" sx={{color: '#576F72', transition: '.3s', '&:hover':{ color: '#BAAC8D' }}}>
                    <LinkedInIcon/>
                </IconButton>    
                <IconButton target="_blank" href="https://www.instagram.com/benjamngarcia/" sx={{color: '#576F72', transition: '.3s', '&:hover':{ color: '#BAAC8D' }}}>
                    <InstagramIcon/>
                </IconButton>    
            </Grid>
        </Grid>
    )
}