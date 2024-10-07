import React from 'react'
import { CarouselBox, PageNavbar } from '../../../../Components'
import "./Style.scss"
import advImg from './advImg'
import { useTranslation } from 'react-i18next'

const Attractions = () => {
  const { t } = useTranslation("globbal")

  const dataPage = [
    {
      id: 1,
      text: "itemNavTour.selfDrive",
      to: "/selfDrive",
      active: false
    },
    {
      id: 2,
      text: "itemNavTour.advantures",
      to: "/tourExcursions",
      active: false
    },
    {
      id: 3,
      text: "itemNavTour.attractions",
      to: "/attractions",
      active: true
    },
    {
      id: 4,
      text: "itemNavTour.sightseeing",
      to: "/sightseeing",
      active: false
    },

  ]

  return (
    <div className='attractions resp-box2'>
      <PageNavbar dataPage={dataPage} />

      <h1 style={{ fontWeight: "660" }} className=''>{t("attractions.title")}</h1><br />
      <p className='default-desc-text'>{t("attractions.description")}</p>
      <div className="attractions-carousel">
        <CarouselBox data={advImg} slidesPerView={3} width="1340px"/>
      </div>
      <br /><br />
      <br />

    </div>
  )
}

export default Attractions