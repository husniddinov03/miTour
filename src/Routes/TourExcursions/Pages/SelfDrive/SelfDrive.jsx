import React from 'react'
import { PageNavbar } from '../../../../Components'

const SelfDrive = () => {
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
    <div>
        <PageNavbar data={data}/>
   
   <h1>SelfDrive page</h1>
    </div>
  )
}

export default SelfDrive