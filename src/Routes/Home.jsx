import React, { useRef, useState } from 'react'
import { useInfoContext } from '../Context/UseInfoContext';
import "./Style.scss"
import { HeaderComponent, Services, Difference, HomeCarousel } from '../Components/';



const Home = () => {
  // const {  } = useInfoContext();

  return (
    <div className="home">
      <HeaderComponent />
      <Services />
      <Difference />
      <HomeCarousel />
    </div>
  );
};

export default Home;
