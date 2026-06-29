import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'
import blogData from '../data/blog'
import styles from './Blog.module.css'

function ArticleView({ article, onBack }) {
  const { lang, t } = useLang()

  const paragraphs = article.content[lang].split('\n\n')

  return (
    <div className={styles.articleView}>
      <button className={styles.back} onClick={onBack}>{t.blog.back}</button>

      <div className={styles.articleMeta}>
        <time className={styles.date}>{article.date}</time>
        <span className={styles.readTime}>{article.readTime} {t.blog.readTime}</span>
      </div>

      <div className={styles.tags}>
        {article.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      <h2 className={styles.articleTitle}>{article.title[lang]}</h2>

      <div className={styles.articleBody}>
        {paragraphs.map((para, i) => {
          if (para.startsWith('**') && para.endsWith('**')) {
            return <h3 key={i} className={styles.articleHeading}>{para.slice(2, -2)}</h3>
          }
          const parts = para.split(/(\*\*[^*]+\*\*)/g)
          return (
            <p key={i} className={styles.articlePara}>
              {parts.map((part, j) =>
                part.startsWith('**') && part.endsWith('**')
                  ? <strong key={j}>{part.slice(2, -2)}</strong>
                  : part
              )}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default function Blog() {
  const { lang, t } = useLang()
  const [selected, setSelected] = useState(null)
  const ref = useReveal()

  if (selected) {
    return (
      <section id="blog" className={styles.section}>
        <div className={styles.inner}>
          <ArticleView article={selected} onBack={() => setSelected(null)} />
        </div>
      </section>
    )
  }

  return (
    <section id="blog" className={styles.section}>
      <div className={styles.inner}>
        <div ref={ref} className="reveal" style={{width:'100%'}}>
        <h2 className={styles.title}>{t.blog.title}</h2>

        <div className={styles.list}>
          {blogData.map((post) => (
            <article key={post.id} className={styles.card} onClick={() => setSelected(post)}>
              <div className={styles.cardMeta}>
                <time className={styles.date}>{post.date}</time>
                <span className={styles.readTime}>{post.readTime} {t.blog.readTime}</span>
              </div>

              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <h3 className={styles.cardTitle}>{post.title[lang]}</h3>
              <p className={styles.cardSummary}>{post.summary[lang]}</p>

              <span className={styles.readMore}>{t.blog.readMore} →</span>
            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
