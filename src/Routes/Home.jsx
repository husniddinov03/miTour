import React, { useRef, useState } from 'react'
import { useInfoContext } from '../Context/UseInfoContext';
import "./Style.scss"
import { HeaderComponent, Services, Difference } from '../Components/';



const Home = () => {
  // const {  } = useInfoContext();

  return (
    <div className="home">
      <HeaderComponent />
      <Services />
      <Difference />
    </div>
  );
};

export default Home;
