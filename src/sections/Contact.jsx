import { useState } from 'react'
import { useLang } from '../context/LangContext'
import styles from './Contact.module.css'

const WEB3FORMS_KEY = 'dc27fd45-8343-4c92-affa-3f05e1b8b9d6'

export default function Contact() {
  const { t } = useLang()
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...form }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t.contact.title}</h2>
        <p className={styles.subtitle}>{t.contact.subtitle}</p>

        {status === 'success' ? (
          <div className={styles.success}>
            <span className={styles.successIcon}>✓</span>
            <p>{t.contact.successMsg}</p>
            <button className={styles.resetBtn} onClick={() => { setStatus('idle'); setForm({ name: '', email: '', message: '' }) }}>
              {t.contact.sendAnother}
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className={styles.form} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">{t.contact.name}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className={styles.input}
                  value={form.name}
                  onChange={onChange}
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">{t.contact.email}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={styles.input}
                  value={form.email}
                  onChange={onChange}
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">{t.contact.message}</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={styles.textarea}
                value={form.message}
                onChange={onChange}
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            {status === 'error' && <p className={styles.errorMsg}>{t.contact.errorMsg}</p>}

            <button type="submit" className={styles.submit} disabled={status === 'sending'}>
              {status === 'sending' ? t.contact.sending : t.contact.send}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
