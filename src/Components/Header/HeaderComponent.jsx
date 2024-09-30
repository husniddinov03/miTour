import React, { useTransition } from 'react'
import "./Style.scss"
import TitlePage from '../TitleName/TitlePage'
import { MSR04060, imagePng, rightIcon } from '../image'
import { useTranslation } from 'react-i18next'
import advImg from "./image"
import { CarouselBox } from '..'

const HeaderComponent = () => {

  const [t] = useTranslation("globbal")

  return (
    <header className='header containerElement mt-5'>
      <div className="header-box">
        <img className='mt-5' src={MSR04060} alt="No image" />

        <div className="text-center">
          <h1 className='default-title-text' style={{ lineHeight: "90px", fontSize: "74px", }}>{t("header.message")}</h1><br />
          <h1 className='default-title-text' style={{ lineHeight: "90px", transform: "translateY(-30px)", fontSize: "74px", }}>{t("header.message2")}</h1><br />
          <p style={{ lineHeight: "27px", fontSize: "18px", fontWeight: "500", color: "#404653" }}>
            {t("header.descriptionHeader")} <br /> {t("header.descriptionHeader2")} </p>
        </div>
        {/* Discover the wonders of the UAE with Magical Desert Travel and Tourism L.L.C.
        We specialize in crafting */}
        <img className='header-img-one' style={{ marginTop: "100px" }} src={imagePng} alt="No image" />
      </div>

      <div className="header-banner mb-5">
        {/* <img src={headerBannerImage2} alt="No image" />
        <img src={headerBannerImage3} alt="No image" /> */}
        <CarouselBox data={advImg} slidesPerView={2} />
      </div>
      {/* // <b style={{ lineHeight: `90px`, fontSize: `74px`, fontWeight: `700`, color: `#101828` }}> */}


      <div style={{ padding: "" }} className="header-text-section containerElement text-center">
        <TitlePage textKey="header.aboutUsTitlePage" />
        <h1 style={{ fontSize: "44px" }} className='default-title-text'>
          {/* Magical Desert Travel and Tourism L.L.C. */}
          {t("header.aboutUsTitle")}
        </h1>
        <p className='default-desc-text'>{t("header.aboutUsDesc1")} <br />{t("header.aboutUsDesc2")}<br /> {t("header.aboutUsDesc3")}</p>
        <button className="default-desc-text default-button">{t("header.aboutUsWhiteBtn")} <img src={rightIcon} alt="No icon" /></button>
      </div>
    </header>
  )
}

export default HeaderComponent;
