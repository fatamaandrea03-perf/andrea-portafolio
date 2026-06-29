import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

export default function About() {
  const { t } = useLang()
  const ref = useReveal()

  const quickData = [
    { label: t.about.location, value: t.about.locationVal },
    { label: t.about.languages, value: t.about.languagesVal },
    { label: t.about.status, value: t.about.statusVal },
  ]

  return (
    <section id="sobre-mi" className={styles.section}>
      <div ref={ref} className={`${styles.inner} reveal`}>
        <div className={styles.text}>
          <h2 className={styles.title}>{t.about.title}</h2>
          <p className={styles.para}>{t.about.p1}</p>
          <p className={styles.para}>{t.about.p2}</p>
          <p className={styles.para}>{t.about.p3}</p>

          <dl className={styles.quick}>
            {quickData.map(({ label, value }) => (
              <div key={label} className={styles.quickRow}>
                <dt className={styles.quickLabel}>{label}</dt>
                <dd className={styles.quickValue}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.photoWrap}>
          <div className={styles.photoPlaceholder} aria-label={t.about.photoAlt}>
            <span className={styles.photoInitial}>A</span>
          </div>
        </div>
      </div>
    </section>
  )
}
