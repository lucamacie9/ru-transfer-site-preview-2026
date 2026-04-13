import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { RoleViewProvider } from './context/RoleViewContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoleViewProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RoleViewProvider>
  </StrictMode>,
)
