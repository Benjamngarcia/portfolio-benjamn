import { Container, CssBaseline } from "@mui/material";
import { Nav } from "../components/common/Nav";
import { Footer } from "../components/common/Footer";

export default function MainLayout(props) {
  const { children } = props;
  return (
    <Container maxWidth='lg'>
      <CssBaseline />
      <Nav />
      {children}
      <Footer/>
    </Container>
  )
}