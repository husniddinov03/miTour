import React from 'react'
import { TelephoneIcon, MessageIcon, webIcon, WhatsappIcon } from "../icon"
import "./Style.scss"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Contact = () => {

  const { t } = useTranslation("globbal")
  return (
    <div style={{ height: "85vh" }} className='contact containerElement flex-element'>

      <div className="contact-box">
        <h1 style={{ fontWeight: "800" }} className="default-title-text">{t("contact.title")}</h1>
        <div className="contact-item">
          <img src={TelephoneIcon} alt="No icon" /> <b style={{ fontWeight: "700" }} className='default-desc-text'>{t("contact.number")}</b>
        </div>
        <div className="contact-item">
          <img src={MessageIcon} alt="No icon" /> <b style={{ fontWeight: "700" }} className='default-desc-text'>{t("contact.email")}</b>
        </div>
        <div className="contact-item">
          <img src={webIcon} alt="No icon" /> <b style={{ fontWeight: "700" }} className='default-desc-text'>{t("contact.webSite")}
          </b>
        </div>
        <div className="contact-bottom-text">
          <h1 >{t("contact.adressTitle")}</h1>
          <p className='default-desc-text'>{t("contact.adress")}</p>
        </div>
        <Link className='contact-link' to='https://web.whatsapp.com/'><img src={WhatsappIcon} alt="No icon" />Whatsapp</Link>
      </div>

        <br /><br /><br />
      <div style={{height: "200px", background: "transparent"}} className=""></div>
      
    </div>
  )
}

export default Contact