import React from 'react'
import { PageNavbar } from '../../../../Components'

const Attractions = () => {
  const data = [
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
    <div>
      <PageNavbar data={data} />

      <h1>
        Attractions page
      </h1>


    </div>
  )
}

export default Attractions