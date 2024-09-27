import React from 'react'
import { miceService } from '../image'
import CardPage from '../../Components/PageCard/CardPage'

const MiceService = () => {

  const data = [

    {
      id: 1,
      title: "MICE Group Services Overview",
      descriptions: "Magical Desert Travel and Tourism specializes in delivering world-class MICE group services, ensuring your corporate events, incentives, and exhibitions are seamlessly organized in the heart of Dubai and across the UAE. With our deep expertise and local knowledge, we offer comprehensive services tailored to meet the needs of businesses of all sizes."
    },
  ]

  const advImg = [
    {
      id: 1,
      img: miceService
    }
  ]
  return (
    <div className='miceService containerElement'>
      {
        data.map(datas => (
          <CardPage key={datas.id} item={datas} advImg={data} />
        ))
      }
      <br />
      {
        advImg.map(img => (
          <img key={img.id} style={{ width: "100%" }} src={img.img} alt="No image" />
        ))
      }
      <br /><br />
      <br /><br />

    </div>
  )
}

export default MiceService