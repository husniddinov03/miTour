import React from 'react'
import { PageNavbar } from '../../../../Components'
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
      img: "./src/assets/Images/image1.png"
    },
    {
      id: 2,
      img: "./src/assets/Images/image2.png"
    },

    {
      id: 3,
      img: "./src/assets/Images/image3.png"
    },

    {
      id: 4,
      img: "./src/assets/Images/image4.png"
    },
    {
      id: 5,
      img: "./src/assets/Images/image5.png"
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