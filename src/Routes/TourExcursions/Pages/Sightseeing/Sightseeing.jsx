import React from 'react'
import { PageNavbar } from '../../../../Components'
import data from "./data"
import images from "./Images"
import "./Style.scss"
import CardPage from '../../../../Components/PageCard/CardPage'

const Sightseeing = () => {
  const dataPage = [
    { id: 1, text: "Adventures", to: "/tourExcursions", active: false },
    { id: 2, text: "Attractions", to: "/attractions", active: false },
    { id: 3, text: "Sightseeing", to: "/sightseeing", active: true },
    { id: 4, text: "Self Drive luxury cars", to: "/selfDrive", active: false },
  ]

  return (
    <div className='sightseeing containerElement'>
      <PageNavbar dataPage={dataPage} />
      {data.map(item => (
        <CardPage key={item.id} item={item} advImg={images} />
      ))}
      <div className="images-sighseening">
        {
          images.map(img => (
            <img key={img.id} src={img.img} alt="No image" />
          ))
        }
      </div>
    </div>
  )
}

export default Sightseeing;