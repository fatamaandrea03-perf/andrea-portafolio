/**
 * Para agregar un artículo: copia un objeto, edita los campos y guarda.
 * date: 'YYYY-MM-DD'
 * readTime: minutos estimados de lectura
 */
const blog = [
  {
    id: 'por-que-ingenieria-de-software',
    date: '2026-05-10',
    readTime: 4,
    tags: ['Reflexión', 'Carrera'],
    title: {
      es: '¿Por qué elegí Ingeniería de Software?',
      en: 'Why I chose Software Engineering',
    },
    summary: {
      es: 'No fue una decisión al azar. Detrás hubo curiosidad, un poco de miedo y la certeza de que quería construir cosas.',
      en: "It wasn't a random decision. Behind it was curiosity, a little fear, and the certainty that I wanted to build things.",
    },
    content: {
      es: `Cuando terminé el colegio, sabía dos cosas: me gustaban los problemas que tenían solución y me aburría hacer lo mismo dos veces seguidas. Ingeniería de Software encajó perfectamente con esas dos condiciones.

La carrera me enseñó que programar no es solo escribir código que funcione. Es entender un problema antes de abrir el editor, hablar con las personas que tienen ese problema y proponer una solución que se pueda mantener en el tiempo.

Hoy, a mitad de la carrera, me quedo con eso: construir cosas que resuelvan algo real, con código limpio y un diseño que no duela mirar. Eso es lo que quiero seguir haciendo.`,
      en: `When I finished school, I knew two things: I liked problems that had solutions, and I got bored doing the same thing twice in a row. Software Engineering fit perfectly with both of those.

The degree taught me that programming isn't just writing code that works. It's understanding a problem before opening the editor, talking to the people who have that problem, and proposing a solution that can be maintained over time.

Today, halfway through my degree, I hold on to that: building things that solve something real, with clean code and a design that doesn't hurt to look at. That's what I want to keep doing.`,
    },
  },
  {
    id: 'primer-proyecto-react',
    date: '2026-06-01',
    readTime: 6,
    tags: ['React', 'Frontend', 'Aprendizaje'],
    title: {
      es: 'Lo que aprendí construyendo mi primer proyecto con React',
      en: 'What I learned building my first React project',
    },
    summary: {
      es: 'Componentes, estado, efectos... y sobre todo el arte de no complicar lo simple.',
      en: 'Components, state, effects... and above all, the art of not overcomplicating the simple.',
    },
    content: {
      es: `React tiene fama de tener una curva de aprendizaje empinada. Después de usarlo por primera vez en un proyecto real, creo que esa fama no es del todo justa — la curva no es empinada, es diferente.

Lo que más me costó no fue el código. Fue cambiar la forma de pensar: pasar de "¿cómo muestro esto?" a "¿cuál es el estado mínimo que necesita este componente para funcionar?".

Tres cosas que me quedaron claras:

**1. El estado es sagrado.** Si no sabes exactamente qué pieza de estado controla qué parte de la UI, estás en problemas. Dibujarlo en papel antes de escribir código salva tiempo.

**2. Los efectos son para efectos secundarios, no para lógica.** useEffect no es el lugar donde van las cosas que no sabes dónde poner.

**3. Menos estado global, más composición.** Antes de subir algo a contexto, pregúntate si realmente necesita estar ahí.

El proyecto salió. Funciona. Y aprendí más rompiéndolo que leyendo la documentación.`,
      en: `React has a reputation for a steep learning curve. After using it for the first time in a real project, I think that reputation isn't entirely fair — the curve isn't steep, it's different.

What cost me the most wasn't the code. It was changing the way I think: moving from "how do I display this?" to "what is the minimum state this component needs to work?".

Three things became clear to me:

**1. State is sacred.** If you don't know exactly which piece of state controls which part of the UI, you're in trouble. Drawing it on paper before writing code saves time.

**2. Effects are for side effects, not for logic.** useEffect is not the place where you put things you don't know where else to put.

**3. Less global state, more composition.** Before lifting something to context, ask yourself if it really needs to be there.

The project shipped. It works. And I learned more breaking it than reading the documentation.`,
    },
  },
]

export default blog
