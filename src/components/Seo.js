import Head from "next/head";
import PortfolioImage from "../assets/img/portfolio-project.png";

export function Seo(props) {
  const { title, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta
        name="keywords"
        content="Benjamin Arturo Perez Garcia, benjamngarcia, desarrollador web, desarrollador frontend, programadores CDMX"
      />
      <meta name="author" content="Benjamín García" />
      <meta name="copyright" content="Benjamín García" />
      <meta name="robots" content="index" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Benjamín García | Web developer" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://benjamngarcia.me/" />
      <meta property="og:image" content={PortfolioImage.src} />
      <link rel="icon" href="/benjamngarcia.png" />
    </Head>
  );
}

Seo.defaultProps = {
  title: "Benjamín García | Web developer",
  description:
    "Benjamín Arturo Pérez García estudiante de ingeniería en informática; desarrollador web frontend y backend. Fundador de DICTAMIGOS.",
};
