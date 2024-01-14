import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <React.StrictMode>
    <App />
  </React.StrictMode>,
  </BrowserRouter>
 
)
