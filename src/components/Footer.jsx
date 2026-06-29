import { useLang } from '../context/LangContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>
          Andrea Portafolio © {year} — {t.footer.rights}
        </span>

        <div className={styles.socials}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.link}>
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.link}>
            GitHub
          </a>
        </div>

        <button
          className={styles.top}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {t.footer.backToTop} ↑
        </button>
      </div>
    </footer>
  )
}
