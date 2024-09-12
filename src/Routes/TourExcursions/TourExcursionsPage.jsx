import React from 'react'
import { PageNavbar } from '../../Components'

const TourExcursionsPage = () => {
  const data = [
    {
      id: 1,
      text: "Adventures",
      to: "/tourExcursions",
      active: true
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
      active: false
    },
  ]

  return (
    <div className='tourExcursions'>
      <PageNavbar data={data} />

    </div>
  )
}

export default TourExcursionsPage