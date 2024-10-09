import React from 'react'
import "./Style.scss"
import data from "./data"
import { logo } from '../image'
import { Link } from 'react-router-dom'
import { WhatsappIcon } from '../../Routes/icon'
import { useTranslation } from 'react-i18next'

const Footer = () => {

    const { t } = useTranslation("globbal")

    return (
        <footer className='footer '>
            <div className="footer-box flex-element containerElement">
                <img src={logo} alt="No icon" className="footer-logo" />

                <div style={{ gap: "16px" }} className="footer-items d-flex flex-column">
                    <h1 className='default-title-text text-light'>Contact info</h1>
                    <div className="footer-items-ich">
                        {
                            data.map(datas => (
                                <div style={{ gap: "12px" }} key={datas.id} className="footer-item">
                                    <img src={datas.icon} alt="No image" />
                                    <b className='default-title-text'>{t(datas.description)}</b>
                                </div>
                            ))
                        }

                    </div>
                    <div className="footer-item">

                    </div>
                </div>

                <div className="footer-items">
                    <h1 className='default-title-text'>Whatsapp</h1>
                    <a target="_blank" className='footer-bottom-link default-desc-text text-light flex-element' href='https://api.whatsapp.com/send?phone=971565481752&text=I_want_to_enquire_about%20The%20Best%20Dubai%20Tours%20and%20Things%20to%20Do%20in%202024'><img src={WhatsappIcon} alt="No icon" /> Whatsapp</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer