// ServiceItem.js
import React from 'react';

const CardService = ({ data }) => {
  const style = {
    width: data.width || "48%",
    padding: "20px",
    boxShadow: "0px 0px 54px 0px #25373F14",
    borderRadius: "20px",
  };

  return (
    <div className="servicePage-item d-flex flex-column align-items-start gap-2" style={style}>
      <img src={data.icon} alt="No image" />
      <h1 style={{ fontSize: "24px", marginTop: "10px" }} className='default-title-text'>{data.title}</h1>
      <p className='default-desc-text'>{data.descriptions}</p>
      {
        data.bottomText ?
          <div style={{ background: "#F5F5F5", width: "100%", padding: "6px 10px", borderRadius: "20px" }} className="servicePage-bottom-text">

            <strong style={{ fontSize: "25px", color: "white", padding: "0px 10px", borderRadius: "50%", background: "#4F73F2" }}>!</strong>
            <b className='default-desc-text' style={{ color: "#101828", marginLeft: "5px" }}>{data.bottomText}</b>
          </div>
          : <></>}
    </div>
  );
};

export default CardService;
