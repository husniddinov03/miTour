import React from 'react'
import { PageNavbar } from '../../../../Components'
import data from "./data"
import images from "./Images"
import "./Style.scss"
import CardPage from '../../../../Components/PageCard/CardPage'

const Sightseeing = () => {
  
  const dataPage = [
    {
      id: 1,
      text: "itemNavTour.advantures",
      to: "/tourExcursions",
      active: false
    },
    {
      id: 2,
      text: "itemNavTour.attractions",
      to: "/attractions",
      active: false
    },
    {
      id: 3,
      text: "itemNavTour.sightseeing",
      to: "/sightseeing",
      active: true
    },
    {
      id: 4,
      text: "itemNavTour.selfDrive",
      to: "/selfDrive",
      active: false
    },
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
      <br /><br /><br />
    </div>
  )
}

export default Sightseeing;