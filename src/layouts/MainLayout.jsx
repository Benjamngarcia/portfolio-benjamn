import { Container, CssBaseline, Box } from "@mui/material";
import { Nav } from "../components/common/Nav";
import { Footer } from "../components/common/Footer";
import BackgroundWave from "../assets/svg/background-wave.svg";

export default function MainLayout(props) {
  const { children } = props;
  const backgroundStyle = {
    backgroundImage: `url(${BackgroundWave.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
  };

  return (
    <Box sx={backgroundStyle}>
      <Container maxWidth="lg">
        <CssBaseline />
        <Nav />
        {children}
        <Footer />
      </Container>
    </Box>
  );
}
