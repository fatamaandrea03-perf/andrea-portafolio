import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'
import projects from '../data/projects'
import styles from './Projects.module.css'

const STATUS_STYLE = {
  deployed: 'statusDeployed',
  'in-progress': 'statusInProgress',
  academic: 'statusAcademic',
}

export default function Projects() {
  const { lang, t } = useLang()
  const ref = useReveal()

  const statusLabel = {
    deployed: t.projects.deployed,
    'in-progress': t.projects.inProgress,
    academic: t.projects.academic,
  }

  return (
    <section id="proyectos" className={styles.section}>
      <div ref={ref} className={`${styles.inner} reveal`}>
        <h2 className={styles.title}>{t.projects.title}</h2>

        <div className={styles.grid}>
          {projects.map((p) => (
            <article key={p.id} className={styles.card}>
              <div className={styles.cardImage}>
                {p.image
                  ? <img src={p.image} alt={p.title[lang]} className={styles.img} />
                  : <span className={styles.imgPlaceholder}>{p.title[lang][0]}</span>
                }
                <span className={`${styles.status} ${styles[STATUS_STYLE[p.status]]}`}>
                  {statusLabel[p.status]}
                </span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{p.title[lang]}</h3>

                <div className={styles.detail}>
                  <span className={styles.detailLabel}>{t.projects.problem}</span>
                  <p className={styles.detailText}>{p.problem[lang]}</p>
                </div>

                <div className={styles.detail}>
                  <span className={styles.detailLabel}>{t.projects.role}</span>
                  <p className={styles.detailText}>{p.role[lang]}</p>
                </div>

                <div className={styles.chips}>
                  {p.stack.map((tech) => (
                    <span key={tech} className={styles.chip}>{tech}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  {p.links.demo && (
                    <a href={p.links.demo} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                      {t.projects.demo} ↗
                    </a>
                  )}
                  {p.links.github && (
                    <a href={p.links.github} target="_blank" rel="noreferrer" className={styles.linkBtnGhost}>
                      {t.projects.code} ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
