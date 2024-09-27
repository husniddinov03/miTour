import React from 'react'
import { PageNavbar, TitlePage } from '../../../../Components'
import { TableIcon, TimeIcon } from '../../../icon'
import advImg from './image'
import serviceData from "./serviceData"
import data from './data'
import "./Style.scss"
import CardService from '../../../../Components/ServiceCard/CardService'

const SelfDrive = () => {

  const dataPage = [
    {
      id: 1,
      text: "Adventures",
      to: "/tourExcursions",
      active: false
    },
    {
      id: 2,
      text: "Attractions",
      to: "/attractions",
      active: false
    },
    {
      id: 3,
      text: "Sightseeing",
      to: "/sightseeing",
      active: false
    },
    {
      id: 4,
      text: "Self Drive luxury cars",
      to: "/selfDrive",
      active: true
    },
  ]

  return (
    <div className='selfDrive containerElement'>
      <PageNavbar dataPage={dataPage} />

      {
        data.map(datas => (
          <div key={datas.id} className="selfDrive-box d-flex flex-column">
            <h2 className='default-title-text'>{datas.title}</h2>
            <br />
            <div className="selfDrive-items flex-column">
              <div className="selfDrive-item">
                <img src={TableIcon} alt="No image" /><b className='default-title-text'> Duration: </b><p className='default-desc-text'>{datas.duration}</p>

              </div>
              <div className="selfDrive-item">
                <img src={TimeIcon} alt="No image" /><b className='default-title-text'> Gudied By: </b><p className='default-desc-text'>{datas.gudiedBy}</p>

              </div>
            </div>
            <div className="selfDrive-items mt-3 align-items-center gap-2">
              <b className='default-title-text'>Pick-up/Drop-off </b><p className='default-desc-text'> Arranged in a normal vehicle from your hotel or residence to the excursion starting point              </p>
            </div>
          </div>
        ))

      }
      <div className="selfDrive-img">
        {
          advImg.map(img => (
            <img key={img.id} src={img.img} alt="No image" />
          ))
        }
      </div>

      <TitlePage text={"Highlights"} />

      <div className="selfDrive-serviceData">
        {
          serviceData.map(datas => (
            <CardService key={datas.id} data={datas} />
          ))
        }

      </div>



    </div>
  )
}

export default SelfDrive