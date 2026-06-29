import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Stack from './sections/Stack'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
