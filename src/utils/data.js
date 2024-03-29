import DictamigosImage from "../assets/img/dictamigos-project.png";
import PortfolioImage from "../assets/img/portfolio-project.png";
import CatarinaImage from "../assets/img/catarina-project.png";
import PokeduxImage from "../assets/img/pokedux-project.png";
import WeatherImage from "../assets/img/weather-project.png";

import {
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandMysql,
  IconBrandMongodb,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandFigma,
  IconBrandGit,
  IconBrandSass,
} from "@tabler/icons-react";

import {
  IconCategory2,
  IconBox,
  IconUser,
  IconSourceCode,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
  IconAt,
  IconX,
} from "@tabler/icons-react";

import { NodejsIcon } from "../components/Icons/NodejsIcon";

export const projectsPortfolio = [
  {
    title: "Dictamigos",
    description:
      "Comunidad de desarrolladores que busca facilitar comenzar en el mundo del desarrollo, por medio de contenido educativo.",
    demo: "https://www.dictamigos.xyz/",
    repo: "https://github.com/DICTAMIGOS",
    img: DictamigosImage.src,
    technologies: ["NextJS", "MDX", "MaterialUI", "SASS"],
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
  {
    title: "Weather App",
    description:
      "Aplicación del clima realizada como prueba tecnica para la empresa en la cual laboro actualmente, con el fin de mostrar mis habilidades como desarrollador frontend.",
    repo: "https://github.com/Benjamngarcia/weather-app",
    demo: "https://weather-app-fawn-gamma.vercel.app/",
    img: WeatherImage.src,
    technologies: [
      "React",
      "Typescript",
      "TailwindCSS",
      "Vite",
      "Axios",
      "Jest",
    ],
  },
];

export const stackTechnologies = [
  {
    name: "Javascript",
    icon: <IconBrandJavascript />,
    color: "#F7DF1E",
    link: "https://www.javascript.com/",
  },
  {
    name: "Typescript",
    icon: <IconBrandTypescript />,
    color: "#007ACC",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Python",
    icon: <IconBrandPython />,
    color: "#3776AB",
    link: "https://www.python.org/",
  },
  {
    name: "NodeJS",
    icon: <NodejsIcon />,
    color: "#339933",
    link: "https://nodejs.org/",
  },
  {
    name: "React",
    icon: <IconBrandReact />,
    color: "#61dbfb",
    link: "https://react.dev/",
  },
  {
    name: "NextJS",
    icon: <IconBrandNextjs />,
    color: "#000000",
    link: "https://nextjs.org/",
  },
  {
    name: "MySQL",
    icon: <IconBrandMysql />,
    color: "#00758F",
    link: "https://www.mysql.com/",
  },
  {
    name: "MongoDB",
    icon: <IconBrandMongodb />,
    color: "#589636",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Git",
    icon: <IconBrandGit />,
    color: "#F05032",
    link: "https://git-scm.com/",
  },
  {
    name: "Sass",
    icon: <IconBrandSass />,
    color: "#CC6699",
    link: "https://sass-lang.com/",
  },
  {
    name: "Figma",
    icon: <IconBrandFigma />,
    color: "#0ACF83",
    link: "https://www.figma.com/",
  },
];

export const socialNetworksButtons = [
  {
    name: "LinkedIn",
    description: "Conecta conmigo en LinkedIn",
    icon: <IconBrandLinkedin />,
    link: "https://www.linkedin.com/in/benjamngarcia"
  },
  {
    name: "GitHub",
    description: "Ve mis proyectos en GitHub",
    icon: <IconBrandGithub />,
    link: "https://github.com/Benjamngarcia"
  },
  {
    name: "Instagram",
    description: "Agrégame en Instagram",
    icon: <IconBrandInstagram />,
    link: "https://www.instagram.com/benjamngarcia/"
  },
  {
    name: "Email",
    description: "Envíame un correo",
    icon: <IconAt />,
    link: "mailto:benjamn.webdev3@gmail.com"
  }
];
