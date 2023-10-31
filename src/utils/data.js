import DictamigosImage from "../assets/img/dictamigos-project.png";
import PortfolioImage from "../assets/img/portfolio-project.png";
import CatarinaImage from "../assets/img/catarina-project.png";
import PokeduxImage from "../assets/img/pokedux-project.png";

export const projectsPortfolio = [
  {
    title: "Dictamigos",
    description:
      "Comunidad de desarrolladores que busca facilitar comenzar en el mundo del desarrollo, por medio de contenido educativo.",
    demo: "https://www.dictamigos.xyz/",
    repo: "https://github.com/DICTAMIGOS",
    img: DictamigosImage.src,
    technologies: [
      "NextJS",
      "Express",
      "MongoDB",
      "NodeJS",
      "MaterialUI",
      "SASS",
    ],
  },
  {
    title: "Personal Portfolio",
    description:
      "Sitio web personal con información acerca de mí, las tecnologías que manejo y mi CV, con un portafolio que contiene mis proyectos favoritos de todos los que he realizado.",
    demo: "/",
    repo: "https://github.com/Benjamngarcia/portfolio-benjamn",
    img: PortfolioImage.src,
    technologies: ["NextJS", "MaterialUI", "SASS"],
  },
  {
    title: "Catarina",
    description:
      "Sistema para gestionar la entrada de alumnos a las escuelas en la pandemia de SARS-CoV-2, por medio de dar respuesta de cuestioanrios de síntomas y el sistema evalua el porcentaje de riesgo.",
    repo: "https://github.com/Benjamngarcia/Catarina",
    img: CatarinaImage.src,
    technologies: [
      "NodeJS",
      "MySQL",
      "Tensorflow",
      "EJS",
      "SASS",
      "Bootstrap",
      "Express",
    ],
  },
  {
    title: "Pokedux",
    description:
      'Platzi Pokedex realizado en "Curso profesional de React y Redux", yo integré un formato diferente así como una librería de UI distinta a la usada en el curso.',
    demo: "https://pokedux-benjamn.netlify.app/",
    repo: "https://github.com/Benjamngarcia/Pokedux",
    img: PokeduxImage.src,
    technologies: ["React", "Redux", "MaterialUI", "Redux toolkit", "Axios"],
  },
];
