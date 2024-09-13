import React from 'react'
import data from './data'
import "./Style.scss"

const ServicesPage = () => {

  const pageData = [
    {
      id: 1,
      text: "Magical Desert Travel and Tourism L.L.C.",
      to: "/about",
      active: true
    },
    {
      id: 2,
      text: "About UAE",
      to: "/aboutUae",
      active: false
    },
    {
      id: 3,
      text: "Gallery",
      to: "/aboutGallery",
      active: false
    },
  ];


  return (
    <div className='servicesPage containerElement'>
      <div className="servicePage-box d-flex flex-wrap mt-5 gap-4">

        {
          data.map(datas => (
            <div className="servicePage-item d-flex flex-column align-items-start gap-2 " key={datas.id} style={datas.width ? { width: datas.width, padding: "20px", boxShadow: "0px 0px 54px 0px #25373F14", borderRadius: "20px" } : {
              width: "48%", boxShadow: "0px 0px 54px 0px #25373F14", padding: "20px", borderRadius: "20px"
            }}>
              <img src={datas.icon} alt="No image" />
              <h1 style={{ fontSize: "24px", marginTop: "10px" }} className='default-title-text'>{datas.title}</h1>
              <p className='default-desc-text'>{datas.descriptions}</p>
              <div style={{ background: "#F5F5F5", width: "100%", padding: "6px 10px", borderRadius: "20px" }} className="servicePage-bottom-text">
                <strong style={{ fontSize: "25px", color: "white", padding: "0px 10px", borderRadius: "50%", background: "#4F73F2" }}>!</strong>
                <b className='default-desc-text' style={{ color: "#101828", marginLeft: "5px" }}>{datas.bottomText}</b>
              </div>
            </div>

          ))
        }
      </div>

    </div>
  )
}

export default ServicesPage