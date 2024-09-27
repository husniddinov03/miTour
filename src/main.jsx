import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { InfoProvider } from './Context/UseInfoContext.jsx'
import globbal_Eng from "./Translations/eng/globbal.json"
import globbal_rus from "./Translations/rus/globbal.json"

import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'



i18next.init({
  interpolation: { escapeValue: false },
  lng: "eng",
  resources: {
    eng: {
      globbal: globbal_Eng
    },
    ru: {
      globbal: globbal_rus
    }
  }

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InfoProvider>
      <BrowserRouter>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </InfoProvider>
  </React.StrictMode>,
)
