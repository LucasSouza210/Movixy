import { StrictMode } from 'react'
import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/layers.css'
import 'overlayscrollbars/overlayscrollbars.css'
import App from './App.tsx'

flushSync(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})