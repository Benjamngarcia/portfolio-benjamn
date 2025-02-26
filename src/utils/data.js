import DictamigosImage from "../assets/img/dictamigos-project.png";
import PortfolioImage from "../assets/img/portfolio-project.png";
import CatarinaImage from "../assets/img/catarina-project.png";
import PokeduxImage from "../assets/img/pokedux-project.png";
import WeatherImage from "../assets/img/weather-project.png";
import EliteCoach from "../assets/img/elite-coach-project.png";
import Dashboard from "../assets/img/dashboard-project.png";
import ReadmeBuilder from "../assets/img/readme-project.png";

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
  IconBrandGraphql,
  IconBrandTailwind,
  IconBrandSlack,
  IconBrandAuth0,
  IconBrandFirebase,
} from "@tabler/icons-react";

import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
  IconAt,
} from "@tabler/icons-react";

import { NodejsIcon } from "../components/Icons/NodejsIcon";

export const projectsPortfolio = [
  {
    title: "Elite Coach",
    description:
      "Aplicación para agendar asesorías online y presenciales con entrenadores profesionales y recibir tus planes de entrenamiento personalizados.",
    demo: "https://www.elite-coach.com.mx/",
    img: EliteCoach.src,
    technologies: ["NextJS", "Express", "Mercado Pago", "Typescript"],
  },
  {
    title: "Readme Builder",
    description:
      "Herramienta para generar un archivo README.md de tus proyectos de GitHub, con la información básica y necesaria para mostrar tus proyectos.",
    demo: "https://readmes-builder.vercel.app/",
    repo: "https://github.com/Benjamngarcia/readme-builder",
    img: ReadmeBuilder.src,
    technologies: ["NextJS", "Tailwind CSS", "Typescript"],
  },
  {
    title: "Dictamigos",
    description:
      "Comunidad de desarrolladores que busca facilitar comenzar en el mundo del desarrollo, por medio de contenido educativo.",
    demo: "https://dictamigos-oficial-web-dictamigos.vercel.app/",
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
    title: "User dashboard",
    description:
      "Aplicación para mostrar y filtrar información, con la posibilidad de eliminar usuarios. La aplicación consume una API REST de usuarios y muestra operaciones CRUD, paginación y diseños modernos.",
    demo: "https://user-dashboard-sooty.vercel.app/",
    repo: "https://github.com/Benjamngarcia/user-dashboard",
    img: Dashboard.src,
    technologies: ["NextJS", "TypeScript", "Tailwind CSS"],
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
    name: "React",
    icon: <IconBrandReact />,
    color: "#61dbfb",
    link: "https://react.dev/",
  },
  {
    name: "NodeJS",
    icon: <NodejsIcon />,
    color: "#339933",
    link: "https://nodejs.org/",
  },
  {
    name: "Graph QL",
    icon: <IconBrandGraphql  />,
    color: "#E535AB",
    link: "https://graphql.org/",
  },
  {
    name: "Python",
    icon: <IconBrandPython />,
    color: "#3776AB",
    link: "https://www.python.org/",
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
    name: "Auth0",
    icon: <IconBrandAuth0 />,
    color: "#EB5424",
    link: "https://auth0.com/",
  },
  {
    name: "Firebase",
    icon: <IconBrandFirebase />,
    color: "#FFCA28",
    link: "https://firebase.google.com/",
  },
  {
    name: "Sass",
    icon: <IconBrandSass />,
    color: "#CC6699",
    link: "https://sass-lang.com/",
  },
  {
    name: "TailwindCSS",
    icon: <IconBrandTailwind />,
    color: "#38B2AC",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Figma",
    icon: <IconBrandFigma />,
    color: "#0ACF83",
    link: "https://www.figma.com/",
  },
  {
    name: "Slack",
    icon: <IconBrandSlack />,
    color: "#4A154B",
    link: "https://slack.com/",
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
