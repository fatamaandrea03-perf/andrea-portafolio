import { useLang } from '../context/LangContext'
import styles from './LangToggle.module.css'

export default function LangToggle() {
  const { lang, toggle } = useLang()

  return (
    <button onClick={toggle} className={styles.btn} aria-label="Cambiar idioma">
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  )
}
