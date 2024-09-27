import React from 'react';
import { PageNavbar } from '../../Components';
import "./Style.scss";
import advImg from './advImg'; // TourExcursions rasmlari
import data from './data';
import CardPage from '../../Components/PageCard/CardPage';

const TourExcursionsPage = () => {
  const dataPage = [
    { id: 1, text: "Adventures", to: "/tourExcursions", active: true },
    { id: 2, text: "Attractions", to: "/attractions", active: false },
    { id: 3, text: "Sightseeing", to: "/sightseeing", active: false },
    { id: 4, text: "Self Drive luxury cars", to: "/selfDrive", active: false },
  ];

  return (
    <div className='tourExcursions containerElement'>
      <PageNavbar dataPage={dataPage} />
      <div className="adv-box">
        {data.map(item => (
          <CardPage key={item.id} item={item} advImg={advImg} /> // TourExcursions rasmlari
        ))}
      </div>
    </div>
  );
};

export default TourExcursionsPage;
