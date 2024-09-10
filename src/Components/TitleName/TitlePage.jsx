import React, { useState } from 'react'

const TitlePage = ({ text, boolean }) => {

  const [textCenter, setTextCenter] = useState(true && boolean)

  return (
    <div className='titlePage d-flex  mt-5' style={textCenter ? { justifyContent: "center" } : { justifyContent: "left" }}>
      <div className="d-flex text-left align-items-center gap-2" style={{ padding: "8px 24px 8px 24px", borderRadius: "19px", background: "#EDFD1E", display: "inline", }}>
        <img style={{ width: "16px", height: "18px" }} src="./public/Icons/titleIcon.png" alt="" />
        <h2 style={{ margin: "0", fontSize: "18px", fontWeight: "700", color: "#101828", }} >{text}</h2>
      </div>
    </div>
  )
}

export default TitlePage


