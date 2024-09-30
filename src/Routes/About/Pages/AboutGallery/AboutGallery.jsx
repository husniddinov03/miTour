import React from 'react'
import { PageNavbar } from '../../../../Components'

const AboutGallery = () => {

  const dataPage = [
    {
      id: 1,
      text: "itemNavAbout.magical",
      to: "/about",
      active: false
    },
    {
      id: 2,
      text: "itemNavAbout.aboutUae",
      to: "/aboutUae",
      active: false
    },
    // {
    //   id: 3,
    //   text: "itemNavAbout.gallery",
    //   to: "/aboutGallery",
    //   active: false,
    //   disbled: false
    // },
  ];

  return (
    <div className='aboutUae containerElement'>
      <PageNavbar dataPage={dataPage} />
    </div>
  )
}

export default AboutGallery