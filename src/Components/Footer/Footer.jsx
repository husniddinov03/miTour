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
        <footer className='footer containerElement'>
            <div className="footer-box flex-element">
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
                    <Link className='footer-bottom-link default-desc-text text-light flex-element' to='https://web.whatsapp.com/'><img src={WhatsappIcon} alt="No icon" /> Whatsapp</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer