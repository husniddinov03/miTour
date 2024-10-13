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
    <div className='attractions containerElement'>
      <PageNavbar dataPage={dataPage} />

      <div className="attractions">
        <h1 className='default-title-text'>{t("attractions.title")}</h1><br />
        <p className='default-desc-text'>{t("attractions.description")}</p>
        <div className="attractions-carousel mt-4">
          <CarouselBox data={advImg} slidesPerView={3} />
        </div>
      </div>

    </div>
  )
}

export default Attractions