import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StarLordsApp from './StarLordsApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarLordsApp />
  </StrictMode>,
)
