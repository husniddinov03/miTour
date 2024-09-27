// ServicesPage.js
import React from 'react';
import data from './data';
import "./Style.scss";
import { PageNavbar } from '../../Components';
import CardService from '../../Components/ServiceCard/CardService';

const ServicesPage = () => {
  // const pageData = [
  //   {
  //     id: 1,
  //     text: "Magical Desert Travel and Tourism L.L.C.",
  //     to: "/about",
  //     active: true
  //   },
  //   {
  //     id: 2,
  //     text: "About UAE",
  //     to: "/aboutUae",
  //     active: false
  //   },
  //   {
  //     id: 3,
  //     text: "Gallery",
  //     to: "/aboutGallery",
  //     active: false
  //   },
  // ];

  return (
    <div className='servicesPage containerElement'>
      {/* <PageNavbar dataPage={pageData}/>  */}
      <div className="servicePage-box d-flex flex-wrap mt-5 gap-4">
        {
          data.map(datas => (
            <CardService key={datas.id} data={datas} /> // Использование нового компонента
          ))
        }
      </div>
    </div>
  );
}

export default ServicesPage;
