import React, { useTransition } from 'react'
import "./Style.scss"
import TitlePage from '../TitleName/TitlePage'
import { headerBannerImage2, headerBannerImage3, MSR04060, imagePng, rightIcon } from '../image'
import { useTranslation } from 'react-i18next'


const HeaderComponent = () => {

  const [t] = useTranslation("globbal")

  return (
    <header className='header containerElement mt-5'>
      <div className="header-box">
        <img className='mt-5' src={MSR04060} alt="No image" />

        <div className="text-center">
          <h1 className='default-title-text' style={{ lineHeight: "90px", fontSize: "74px", }}>Welcome to Magical <br /> Desert
            <b style={{ lineHeight: "90px", fontSize: "74px", fontWeight: "700", color: "#101828" }}> Travel and Tourism</b></h1>
          <p style={{ lineHeight: "27px", fontSize: "18px", fontWeight: "500", color: "#404653" }}>Discover the wonders of the UAE with Magical Desert Travel and Tourism L.L.C.
            We specialize in crafting <br /> unforgettable experiences that showcase the beauty,
            culture, and adventure of the desert and beyond. </p>
        </div>
        <img className='header-img-one' style={{ marginTop: "100px" }} src={imagePng} alt="No image" />
      </div>

      <div className="header-banner">
        <img src={headerBannerImage2} alt="No image" />
        <img src={headerBannerImage3} alt="No image" />
      </div>

      <div style={{ padding: "" }} className="header-text-section containerElement text-center">
        <TitlePage text={"About Us"} />
        <h1 style={{ fontSize: "44px" }} className='default-title-text'>
          {/* Magical Desert Travel and Tourism L.L.C. */}
          {t("header.AboutUsTitle")}
        </h1>
        <p className='default-desc-text'> Your gateway to experiencing the enchanting beauty and rich culture of the United Arab Emirates. <br /> Established with a passion for travel and a commitment to excellence, we are dedicated to providing exceptional travel <br /> experiences that are tailored to meet the unique needs and preferences of our clients.</p>
        <button className="default-desc-text default-button">Read more <img src={rightIcon} alt="No icon" /></button>
      </div>
    </header>
  )
}

export default HeaderComponent;
