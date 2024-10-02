import React, { useTransition } from 'react'
import "./Style.scss"
import TitlePage from '../TitleName/TitlePage'
import { MSR04060, imagePng, rightIcon } from '../image'
import { WhiteTelephoneIcon } from '../../Routes/icon'
import { useTranslation } from 'react-i18next'
import advImg from "./image"
import { CarouselBox } from '..'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {

  const [t] = useTranslation("globbal")

  return (
    <header className='header containerElement mt-5'>
      <div className="header-box">
        <div className="header-left-img mt-5 ">
          <img style={{transform: "rotate(9.75 deg)"}} src={MSR04060} alt="No image" />
        </div>

        <div className="text-center">
          <h1 className='default-title-text' style={{ lineHeight: "90px", fontSize: "74px", }}>{t("header.message")}</h1><br />
          <h1 className='default-title-text' style={{ lineHeight: "90px", transform: "translateY(-30px)", fontSize: "74px", }}>{t("header.message2")}</h1><br />
          <p style={{ lineHeight: "27px", fontSize: "18px", fontWeight: "500", color: "#404653" }}>
            {t("header.descriptionHeader")} <br /> {t("header.descriptionHeader2")} </p>
        </div>

        <div className="header-left-img">
          <img style={{transform: "rotate(-0.97 deg)"}} className='header-img-one'  src={imagePng} alt="No image" />
        </div>
      </div>

      <div className="header-banner mb-5">
        <CarouselBox data={advImg} slidesPerView={2} />
      </div>

      <div style={{ padding: "" }} className="header-text-section containerElement text-center">
        <TitlePage textKey="header.aboutUsTitlePage" />
        <h1 style={{ fontSize: "44px" }} className='default-title-text'>
          {t("header.aboutUsTitle")}
        </h1>
        <p className='default-desc-text'>{t("header.aboutUsDesc1")} <br />{t("header.aboutUsDesc2")}<br /> {t("header.aboutUsDesc3")}</p>
        <div className="header-text-btns">
          <button className="default-desc-text default-button">{t("header.aboutUsWhiteBtn")}
          </button>
          <Link className='header-text-link default-desc-text' to='/contact'>
            {t("navbar.contact")}
            <img src={WhiteTelephoneIcon} alt="No icon" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent;
