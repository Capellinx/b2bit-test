import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';

import { App } from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/userContext.tsx'
import { ToastContainer } from 'react-toastify'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer
      position='top-center'
      autoClose={1200}
      pauseOnFocusLoss={false} 
    />
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
