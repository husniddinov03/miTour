import React from 'react'
import { miceService } from '../image'
import CardPage from '../../Components/PageCard/CardPage'
import { useTranslation } from 'react-i18next'

const MiceService = () => {

  const {t}=useTranslation("globbal")

  const data = [

    {
      id: 1,
      title: "miceService.title",
      descriptions: "miceService.descriptions"
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