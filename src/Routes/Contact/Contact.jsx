import React from 'react'
import { TelephoneIcon, MessageIcon, webIcon, WhatsappIcon } from "../icon"
import "./Style.scss"

const Contact = () => {
  return (
    <div style={{ height: "85vh" }} className='contact containerElement flex-element'>

      <div className="contact-box">
        <h1 style={{fontWeight: "800"}} className="default-title-text">Magical Desert Travel and Tourism L.L.C</h1>
        <div className="contact-item">
          <img src={TelephoneIcon} alt="No icon" /> <b style={{ fontWeight: "700" }} className='default-desc-text'>Phone: +971581694135</b>
        </div>
        <div className="contact-item">
          <img src={MessageIcon} alt="No icon" /> <b style={{ fontWeight: "700" }} className='default-desc-text'>Operations@magical-desert.com</b>
        </div>
        <div className="contact-item">
          <img src={webIcon} alt="No icon" /> <b style={{ fontWeight: "700" }} className='default-desc-text'>www.magical-deserts.com
          </b>
        </div>
        <div className="contact-bottom-text">
          <h1>Adress</h1>
          <p className='default-desc-text'> Building Dubai, Area Hor Al Anz, AL MANSOORI Office Number 144          </p>
        </div>
        <button><img src={WhatsappIcon} alt="No icon" />Whatsapp</button>
      </div>
    </div>
  )
}

export default Contact