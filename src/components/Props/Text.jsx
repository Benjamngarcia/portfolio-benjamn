import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Text = {
    skills: {
        title: "Resumen",
        paragraph: [
            'Soy un desarrollador web de 19 años originario de México, programo desde el 2020 con tecnologías web. Actualmente me dedico a desarrollar proyectos con el stack MERN y a seguir descubriendo cosas nuevas.',
            'Me considero una persona con objetivos muy claros y muy persistente; una de las cosas que más me apasionan es aprender cosas nuevas tanto en el ámbito de la tecnología como fuera de él.'
        ] 
    },
    languages: [
        { name: "html", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" },
        { name: "css", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" },
        { name: "javascript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "react", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "redux", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "sass", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
        { name: "bootstrap", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" },
        { name: "tailwind", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
        { name: "materialui", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
        { name: "nodejs", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" },
        { name: "java", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" },
        { name: "python", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" },
        { name: "mysql", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
        { name: "mongodb", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" },
        { name: "firebase", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" },
        { name: "git", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" },
        { name: "github", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" }
    ],
    about: {
        title: "Sobre mí",
        paragraph: [
            'Hola soy Benjamín, soy Técnico en Programación y desde que tengo memoria siempre me ha gustado la tecnología, cuando cursé la carrera técnica aprendí las bases de varias ramas del desarrollo: aplicaciones móviles, aplicaciones de escritorio, seguridad, machine learning, etc. Pero el desarrollo web fue lo que despertó aún más interés en mí, eso hizo que lleve casi dos años realizando proyectos y aprendiendo nuevas tecnologías.',
            'Actualmente estoy estudiando Ingeniería en Informática en el Instituto Politécnico Nacional; pero además de investigar y practicar nuevos lenguajes de programación, soy entusiasta de descubrir otros ámbitos como lo pueden ser: marketing, leyes, finanzas, diseño y administración. En este sitio podrás encontrar algunos proyectos que he realizado y también algunas publicaciones sobre programación u otros temas relacionados a TI. Me gusta apoyar a otras personas compartiendo lo que sé por medio de '
        ],
        social: [
            {
                name: 'LinkedIn',
                icon: <LinkedInIcon />,
                link: 'https://www.linkedin.com/in/benjamngarcia',
                color: '#0077b5'
            },
            {
                name: 'Instagram',
                icon: <InstagramIcon />,
                link: 'https://www.instagram.com/benjamngarcia/',
                color: '#e95950'
            },
            {
                name: 'GitHub',
                icon: <GitHubIcon />,
                link: 'https://github.com/Benjamngarcia',
                color: '#333'
            },
            {
                name: 'Facebook',
                icon: <FacebookIcon />,
                link: 'https://www.facebook.com/Benjamin.1533/',
                color: '#4267B2'
            },
        ]
    },
    projects: [
        {
            title: "Catarina",
            description: "Sistema para gestionar la entrada de alumnos a las escuelas en la pandemia de SARS-CoV-2.",
            demo: "https://catarina-production.up.railway.app/", repo: "https://github.com/Benjamngarcia/Catarina",
            img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Catarina%20project.png?alt=media&token=7101257a-1711-46b9-b107-a3703ccf7780",
            technologies: ['NodeJS', 'MySQL', 'Bootstrap', 'Tensorflow', 'EJS', 'SASS']
        },
        {
            title: "Dictamigos",
            description: "Comunidad de desarrolladores que busca facilitar el acceso al mundo del desarrollo a gente externa.",
            demo: "https://www.dictamigos.xyz/", repo: "https://github.com/DICTAMIGOS/dictamigos-web",
            img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/DictamigosFoto.png?alt=media&token=46e1eac4-4a0b-41cb-8dcd-8d29dbbe5cc6",
            technologies: ['React', 'MaterialUI', 'SASS', 'NodeJS', 'MongoDB']
        },
        {
            title: "Pokedux",
            description: 'Platzi Pokedex con paginación y buscador realizada en "curso profesional de React y Redux".',
            demo: "https://pokedux-benjamn.netlify.app/", repo: "https://github.com/Benjamngarcia/Pokedux",
            img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Pokedux.png?alt=media&token=9d5e1c21-1d74-4b5a-925e-f08db7333d5d",
            technologies: ['React', 'Redux', 'Redux toolkit', 'Axios', 'MaterialUI']
        },
        {
            title: "Personal Portfolio",
            description: "Sitio web personal con información acerca de mí, las tecnologías que manejo y mi CV, con un portafolio que contiene mis proyectos favoritos de todos los que he realizado.",
            demo: "/", repo: "https://github.com/Benjamngarcia/portfolio-benjamn",
            img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Portfolio%20App.png?alt=media&token=0c9ef4f0-583c-4f94-a98f-3a0a92ccd161",
            technologies: ['React', 'MaterialUI', 'SASS']
        },
        {
            title: "Note App",
            description: "Aplicación de notas con autenticación por google que permite subir imágenes para proporcionar más información.",
            demo: "https://noteapp-benjamn.netlify.app/", repo: "https://github.com/Benjamngarcia/app-react-firebase",
            img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/NoteApp.png?alt=media&token=0f9b3ca2-bdff-41e3-9e14-73a0f7de03e1",
            technologies: ['React', 'TailwindCSS', 'Firebase']
        },
        {
            title: "Buscador de GitHub",
            description: "Buscador de perfiles de GitHub construido con React, Material UI y axios consumiendo la API pública de GitHub.",
            demo: "https://gitsearcher-benjamn.netlify.app/", repo: "https://github.com/Benjamngarcia/GitHub-profile-searcher",
            img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/GitHub%20profile.png?alt=media&token=6a4e4dd9-6fc4-4a2a-be42-5f525aaeb91d",
            technologies: ['React', 'MaterialUI', 'Axios']
        },
        {
            title: "Chat App",
            description: "Chat en tiempo real dividido en foros que saluda a cada usuario nuevo en el foro con un mensaje de bienvenida.",
            demo: "#!", repo: "https://github.com/Benjamngarcia/ChatNodeWS",
            img: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Chat%20App.png?alt=media&token=9e13fe39-f739-423d-a331-8cae450b8065",
            technologies: ['NodeJS', 'Bootstrap', 'Socket.io']
        }
    ]
}