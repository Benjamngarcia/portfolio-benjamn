import { Grid, Typography, Box } from '@mui/material'
import { Colors } from '../styles/theme';
import NotFound from '@/assets/img/NotFound.svg'
import Link from 'next/link';
import { Seo } from '@/components/Seo';

const NotFoundPage = () => {
  return (
    <>
      <Seo title="Benjamín García - 404" description="No encontramos el sitio web que intentas buscar." />
      <Grid
        container
        sx={{
          marginTop: '64px',
          textAlign: 'center'
        }}
      >
        <Grid item xs={12}>
          <Box
            component="img"
            src={NotFound.src}
            sx={{ maxWidth: '100%' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ margin: '16px 32px', color: Colors.primary }}
        >
          <Typography component="h1" variant="h5" fontWeight="bold" sx={{ marginBottom: '16px' }}>
            Parece que la página a la que deseas ingresar no existe.
          </Typography>
          <Link
            href="/"
            className='links-styles'
            style={{
              backgroundColor: "#F5F5F5",
              padding: '16px',
              borderRadius: '8px'
            }}
          >
            Regresar al inicio
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default NotFoundPage;