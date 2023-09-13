import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './utils/routes/index.tsx'
import { UserDataProvider } from './utils/contexts/UserDataContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserDataProvider>
      <App />
    </UserDataProvider>
  </React.StrictMode>,
)
