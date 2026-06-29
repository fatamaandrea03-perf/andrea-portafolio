/**
 * Para agregar una tecnología: añade un objeto { name, color } a la categoría correcta.
 * color: valor CSS (hex, hsl, etc.)
 */
const stack = [
  {
    category: { es: 'Lenguajes', en: 'Languages' },
    items: [
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'Python', color: '#3776AB' },
      { name: 'Java', color: '#ED8B00' },
      { name: 'C++', color: '#00599C' },
      { name: 'C#', color: '#239120' },
      { name: 'HTML', color: '#E34F26' },
      { name: 'CSS', color: '#1572B6' },
    ],
  },
  {
    category: { es: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Vite', color: '#646CFF' },
      { name: 'CSS Modules', color: '#A78BFA' },
    ],
  },
  {
    category: { es: 'Backend', en: 'Backend' },
    items: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Express', color: '#888888' },
      { name: 'Spring Boot', color: '#6DB33F' },
    ],
  },
  {
    category: { es: 'Bases de datos', en: 'Databases' },
    items: [
      { name: 'MySQL', color: '#4479A1' },
      { name: 'MongoDB', color: '#47A248' },
    ],
  },
  {
    category: { es: 'Game Dev', en: 'Game Dev' },
    items: [
      { name: 'Unity', color: '#FFFFFF' },
      { name: 'Aseprite', color: '#7D929E' },
    ],
  },
  {
    category: { es: 'Cloud / DevOps', en: 'Cloud / DevOps' },
    items: [
      { name: 'Git', color: '#F05032' },
      { name: 'GitHub', color: '#AAAAAA' },
      { name: 'Vercel', color: '#FFFFFF' },
    ],
  },
  {
    category: { es: 'Herramientas', en: 'Tools' },
    items: [
      { name: 'VS Code', color: '#007ACC' },
      { name: 'Figma', color: '#F24E1E' },
      { name: 'Postman', color: '#FF6C37' },
    ],
  },
]

export default stack
