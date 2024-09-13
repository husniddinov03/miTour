import React from 'react'
import { PageNavbar } from '../../../../Components'
import { image1, image2, image3, image4, image5 } from '../../../image'
import "./Style.scss"

const AboutUAE = () => {

  const data = [
    {
      id: 1,
      text: "Magical Desert Travel and Tourism L.L.C.",
      to: "/about",
      active: false
    },
    {
      id: 2,
      text: "About UAE",
      to: "/aboutUae",
      active: true
    },
    {
      id: 3,
      text: "Gallery",
      to: "/aboutGallery",
      active: false
    },
  ]

  const imageData = [
    {
      id: 1,
      img: image1
    },
    {
      id: 2,
      img: image2
    },

    {
      id: 3,
      img: image3
    },

    {
      id: 4,
      img: image4
    },
    {
      id: 5,
      img: image5
    },

  ]

  return (
    <div className='aboutUae containerElement'>
      <PageNavbar data={data} />

      <div className="aboutUae-box">
        <br />
        <h1 className='default-title-text'>Welcome to the United Arab Emirates</h1><br />
        <p className='default-desc-text'>A captivating blend of ancient history and cutting-edge modernity. Formed in 1971, the UAE has grown from a group of small desert communities into a global hub of innovation and luxury.
          <br />
          The country’s seven emirates—Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah—each offer their own unique experiences, from the towering skyscrapers of Dubai to the cultural treasures of Sharjah and the natural beauty of Fujairah's mountains and beaches. Discover the rich heritage, vibrant traditions, and endless adventures that make the UAE a world-class destination.</p>
        <div className="aboutUae-images">
          {
            imageData.map(datas => (
              <img key={datas.id} src={datas.img} alt="No image" />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AboutUAE