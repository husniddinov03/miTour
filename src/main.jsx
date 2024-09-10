import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { InfoProvider } from './Context/UseInfoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InfoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </InfoProvider>
  </React.StrictMode>,
)
