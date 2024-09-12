import React from 'react'
import data from './data'
import "./Style.scss"

const ServicesPage = () => {
  return (
    <div className='servicesPage'>
      <div className="servicePage-box">

        {
          data.map(datas => (
            <div className="servicePage-item">
              <img src={datas.icon} alt="No image" />
              <h1>{datas.title}</h1>
            </div>

          ))
        }
      </div>

    </div>
  )
}

export default ServicesPage