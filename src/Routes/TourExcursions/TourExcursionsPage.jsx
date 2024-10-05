import React, { useTransition } from 'react';
import { PageNavbar } from '../../Components';
import "./Style.scss";
import advImg from './advImg'; // TourExcursions rasmlari
import data from './data';
import CardPage from '../../Components/PageCard/CardPage';

const TourExcursionsPage = () => {

  const { t } = useTransition("globbal")
  const dataPage = [
    {
      id: 1,
      text: "itemNavTour.advantures",
      to: "/tourExcursions",
      active: true
    },
    {
      id: 2,
      text: "itemNavTour.attractions",
      to: "/attractions",
      active: false
    },
    {
      id: 3,
      text: "itemNavTour.sightseeing",
      to: "/sightseeing",
      active: false
    },
    {
      id: 4,
      text: "itemNavTour.selfDrive",
      to: "/selfDrive",
      active: false
    },
  ]
  return (
    <div className='tourExcursions resp-box2'>
      <PageNavbar dataPage={dataPage} />
      <div className="adv-box">
        {data.map(item => (
          <CardPage key={item.id} item={item} advImg={advImg} /> // TourExcursions rasmlari
        ))}
      </div>
      <br /><br /><br />

    </div>
  );
};

export default TourExcursionsPage;
