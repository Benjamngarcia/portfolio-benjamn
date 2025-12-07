export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',

    'hero.greeting': 'Hola, soy',
    'hero.role': 'Desarrollador Full-Stack',
    'hero.description': 'Creo experiencias web modernas y escalables que transforman ideas en productos digitales de alto rendimiento.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Contactar',

    'about.title': 'Sobre mí',
    'about.subtitle': 'Desarrollador apasionado por crear soluciones tecnológicas innovadoras',
    'about.description': 'Soy un desarrollador full-stack con experiencia en la construcción de aplicaciones web modernas y escalables. Me especializo en JavaScript/TypeScript, React, Next.js, Node.js y bases de datos SQL/NoSQL. Mi enfoque está en crear código limpio, mantenible y centrado en el usuario.',
    'about.skills.title': 'Stack Tecnológico',
    'about.experience.years': 'años de experiencia',
    'about.experience.projects': 'proyectos completados',
    'about.experience.clients': 'clientes satisfechos',

    'projects.title': 'Proyectos',
    'projects.subtitle': 'Algunos de mis trabajos más recientes',
    'projects.view': 'Ver proyecto',
    'projects.code': 'Ver código',

    'services.title': 'Servicios',
    'services.subtitle': 'Soluciones profesionales para impulsar tu negocio',
    'services.cta': 'Solicitar consulta',
    'services.fullstack.title': 'Desarrollo Full-Stack',
    'services.fullstack.description': 'Aplicaciones web completas desde el frontend hasta el backend, con arquitectura escalable y código de alta calidad.',
    'services.frontend.title': 'Desarrollo Frontend',
    'services.frontend.description': 'Interfaces modernas y responsivas usando React, Next.js y Astro con las mejores prácticas de UI/UX.',
    'services.backend.title': 'Backend & APIs',
    'services.backend.description': 'APIs RESTful y GraphQL, diseño de bases de datos, autenticación y servicios de backend robustos.',
    'services.consulting.title': 'Consultoría & Code Review',
    'services.consulting.description': 'Auditorías de código, diseño de arquitectura, optimización de rendimiento y mentoría técnica.',
    'services.mvp.title': 'Desarrollo de MVP',
    'services.mvp.description': 'Transformo tus ideas en productos mínimos viables funcionales, listos para validar en el mercado rápidamente.',

    'contact.title': 'Contacto',
    'contact.subtitle': 'Conversemos sobre tu próximo proyecto',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Mensaje enviado! Te responderé pronto.',
    'contact.form.error': 'Error al enviar. Intenta de nuevo.',
    'contact.or': 'O contáctame directamente',

    'footer.rights': 'Todos los derechos reservados.',
    'footer.built': 'Construido con',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',

    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'Full-Stack Developer',
    'hero.description': 'I create modern, scalable web experiences that transform ideas into high-performance digital products.',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',

    'about.title': 'About Me',
    'about.subtitle': 'Developer passionate about creating innovative tech solutions',
    'about.description': 'I\'m a full-stack developer with experience building modern, scalable web applications. I specialize in JavaScript/TypeScript, React, Next.js, Node.js, and SQL/NoSQL databases. My focus is on creating clean, maintainable, user-centered code.',
    'about.skills.title': 'Tech Stack',
    'about.experience.years': 'years of experience',
    'about.experience.projects': 'completed projects',
    'about.experience.clients': 'satisfied clients',

    'projects.title': 'Projects',
    'projects.subtitle': 'Some of my most recent work',
    'projects.view': 'View project',
    'projects.code': 'View code',

    'services.title': 'Services',
    'services.subtitle': 'Professional solutions to boost your business',
    'services.cta': 'Request consultation',
    'services.fullstack.title': 'Full-Stack Development',
    'services.fullstack.description': 'Complete web applications from frontend to backend, with scalable architecture and high-quality code.',
    'services.frontend.title': 'Frontend Development',
    'services.frontend.description': 'Modern, responsive interfaces using React, Next.js, and Astro with best UI/UX practices.',
    'services.backend.title': 'Backend & APIs',
    'services.backend.description': 'RESTful and GraphQL APIs, database design, authentication, and robust backend services.',
    'services.consulting.title': 'Consulting & Code Review',
    'services.consulting.description': 'Code audits, architecture design, performance optimization, and technical mentoring.',
    'services.mvp.title': 'MVP Development',
    'services.mvp.description': 'I transform your ideas into functional minimum viable products, ready to validate in the market quickly.',

    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s talk about your next project',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent! I\'ll respond soon.',
    'contact.form.error': 'Error sending. Please try again.',
    'contact.or': 'Or contact me directly',

    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
