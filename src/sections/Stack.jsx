import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'
import stackData from '../data/stack'
import styles from './Stack.module.css'

export default function Stack() {
  const { lang, t } = useLang()
  const ref = useReveal()

  return (
    <section id="stack" className={styles.section}>
      <div ref={ref} className={`${styles.inner} reveal`}>
        <h2 className={styles.title}>{t.stack.title}</h2>

        <div className={styles.categories}>
          {stackData.map((group) => (
            <div key={group.category.es} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.category[lang]}</h3>
              <div className={styles.badges}>
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className={styles.badge}
                    style={{ '--dot': item.color }}
                  >
                    <span className={styles.dot} />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
