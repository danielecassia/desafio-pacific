import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { UserDataProvider } from './contexts/UserDataContext.tsx'
import App from './routes/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserDataProvider>
      <App />
    </UserDataProvider>
  </React.StrictMode>,
)
