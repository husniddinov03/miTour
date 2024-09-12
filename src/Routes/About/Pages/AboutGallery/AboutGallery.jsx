import React from 'react'
import { PageNavbar } from '../../../../Components'

const AboutGallery = () => {

  const data = [
    {
      id: 1,
      text: "Magical Desert Travel and Tourism L.L.C.",
      to: "/about",
      active: false
    },
    {
      id: 2,
      text: "About UAE",
      to: "/aboutUae",
      active: false
    },
    {
      id: 3,
      text: "Gallery",
      to: "/aboutGallery",
      active: true
    },
  ]

  return (
    <div className='aboutUae containerElement'>
      <PageNavbar data={data}/>

    
    </div>
  )
}

export default AboutGallery