import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { LangProvider } from './context/LangContext'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
        <Analytics />
      </LangProvider>
    </ThemeProvider>
  </StrictMode>,
)
