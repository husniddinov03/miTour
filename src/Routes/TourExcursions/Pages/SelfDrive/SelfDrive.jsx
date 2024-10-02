import React from 'react'
import { PageNavbar, TitlePage } from '../../../../Components'
import { TableIcon, TimeIcon } from '../../../icon'
import advImg from './image'
import serviceData from "./serviceData"
import data from './data'
import "./Style.scss"
import CardService from '../../../../Components/ServiceCard/CardService'
import { useTranslation } from 'react-i18next'

const SelfDrive = () => {

  const { t } = useTranslation("globbal")

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
      active: false
    },
    {
      id: 4,
      text: "itemNavTour.selfDrive",
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
           
            <h2 className='default-title-text'>{t(datas.title)}</h2>
            <br />
            <div className="selfDrive-items flex-column">
              <div className="selfDrive-item">
                <img src={TableIcon} alt="No image" /><b className='default-title-text'> {t("selfDrive.durationText")}</b><p className='default-desc-text'>{t(datas.duration)}</p>

              </div>
              <div className="selfDrive-item">
                <img src={TimeIcon} alt="No image" /><b className='default-title-text'>{t("selfDrive.gudiedByText")}</b><p className='default-desc-text'>{t(datas.gudiedBy)}</p>

              </div>
            </div>
            <div className="selfDrive-items mt-3 align-items-center gap-2">
              <b className='default-title-text'>{t("selfDrive.pickUpText")}</b><p className='default-desc-text'>{t("selfDrive.bottom")}</p>
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

      <TitlePage textKey="selfDrive.titlePage" />


      <div className="selfDrive-serviceData">
        {
          serviceData.map(datas => (
            <CardService key={datas.id} data={datas} />
          ))
        }

      </div>


      <br /><br /><br />

    </div>
  )
}

export default SelfDrive