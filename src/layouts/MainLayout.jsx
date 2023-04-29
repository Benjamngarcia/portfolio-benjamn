import { Container, CssBaseline } from "@mui/material";
import { Nav } from "../components/General/Nav";
import { Footer } from "../components/General/Footer";

export default function MainLayout(props) {
  const { children } = props;
  return (
    <Container maxWidth='lg'>
      <CssBaseline />
      <Nav />
      {children}
      {/* <ScrollToTop/>*/}
      <Footer/>
    </Container>
  )
}