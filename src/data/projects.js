/**
 * Para agregar un proyecto nuevo: copia un objeto, edita los campos y guarda.
 * status: 'deployed' | 'in-progress' | 'academic'
 */
const projects = [
  {
    id: 'portafolio',
    title: { es: 'Portafolio Personal', en: 'Personal Portfolio' },
    image: null,
    status: 'in-progress',
    problem: {
      es: 'Necesitaba un espacio propio donde mostrar mis proyectos y habilidades de forma clara y profesional.',
      en: 'I needed a personal space to showcase my projects and skills in a clear and professional way.',
    },
    role: {
      es: 'Diseño, desarrollo frontend y arquitectura de componentes.',
      en: 'Design, frontend development and component architecture.',
    },
    stack: ['React', 'Vite', 'CSS Modules', 'JavaScript'],
    links: { demo: null, github: 'https://github.com/fatamaandrea03-perf/andrea-portafolio' },
  },
  {
    id: 'proyecto-academico',
    title: { es: 'Sistema de Gestión Académica', en: 'Academic Management System' },
    image: null,
    status: 'academic',
    problem: {
      es: 'Proyecto universitario para digitalizar el registro y consulta de notas de estudiantes.',
      en: 'University project to digitize the registration and query of student grades.',
    },
    role: {
      es: 'Backend con Java, diseño de base de datos relacional y API REST.',
      en: 'Backend with Java, relational database design and REST API.',
    },
    stack: ['Java', 'MySQL', 'Spring Boot', 'Postman'],
    links: { demo: null, github: null },
  },
  {
    id: 'juego-unity',
    title: { es: 'Juego 2D en Unity', en: '2D Unity Game' },
    image: null,
    status: 'in-progress',
    problem: {
      es: 'Exploración del desarrollo de videojuegos como disciplina creativa y técnica.',
      en: 'Exploration of game development as a creative and technical discipline.',
    },
    role: {
      es: 'Diseño de mecánicas, programación de comportamientos y arte de prototipo.',
      en: 'Mechanics design, behaviour scripting and prototype art.',
    },
    stack: ['Unity', 'C#', 'Aseprite'],
    links: { demo: null, github: null },
  },
]

export default projects
