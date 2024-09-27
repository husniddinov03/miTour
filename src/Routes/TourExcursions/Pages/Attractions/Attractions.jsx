import React from 'react'
import { CarouselBox, PageNavbar } from '../../../../Components'
import "./Style.scss"
import advImg from './advImg'


const Attractions = () => {
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
      active: true
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
      active: false
    },
  ]

  return (
    <div className='attractions containerElement'>
      <PageNavbar dataPage={dataPage} />

      <div className="attractions">
        <h1>Attraction Tickets in Dubai</h1>
        <p>Explore Dubai’s world-class attractions with ease through our Attraction Tickets service. Whether you're seeking adventure, culture, or relaxation, we provide tickets to all major attractions in Dubai and the UAE, ensuring a seamless experience for both luxury and budget travelers. From iconic landmarks like the Burj Khalifa, thrilling parks such as IMG Worlds of Adventure, to serene desert safaris and cultural tours, we have it all.</p>
        <div className="attractions-carousel">
          <CarouselBox data={advImg} />
        </div>
      </div>

    </div>
  )
}

export default Attractions