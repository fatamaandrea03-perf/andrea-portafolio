import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import ThemeToggle from './ThemeToggle'
import LangToggle from './LangToggle'
import styles from './Navbar.module.css'

const NAV_LINKS = ['home', 'about', 'projects', 'stack', 'blog', 'contact']
const ANCHORS = { home: 'inicio', about: 'sobre-mi', projects: 'proyectos', stack: 'stack', blog: 'blog', contact: 'contacto' }

export default function Navbar() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (anchor) => {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <button className={styles.logo} onClick={() => scrollTo('inicio')} aria-label="Inicio">
          AP
        </button>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map((key) => (
            <li key={key}>
              <button className={styles.link} onClick={() => scrollTo(ANCHORS[key])}>
                {t.nav[key]}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href="/Andrea_Fatama_CV.pdf" download className={styles.cvBtn}>
            {t.nav.cv}
          </a>
          <LangToggle />
          <ThemeToggle />
          <button
            className={styles.hamburger}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menú"
            aria-expanded={open}
          >
            <span className={`${styles.bar} ${open ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${open ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${open ? styles.barOpen3 : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerLinks}>
          {NAV_LINKS.map((key) => (
            <li key={key}>
              <button className={styles.drawerLink} onClick={() => scrollTo(ANCHORS[key])}>
                {t.nav[key]}
              </button>
            </li>
          ))}
          <li>
            <a href="/Andrea_Fatama_CV.pdf" download className={styles.drawerCv}>
              {t.nav.cv}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
