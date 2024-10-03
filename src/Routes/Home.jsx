import React, { useRef, useState } from 'react'
import { useInfoContext } from '../Context/UseInfoContext';
import "./Style.scss"
import { HeaderComponent, Services, Difference, Footer } from '../Components/';

const Home = () => {
  // const {  } = useInfoContext();

  return (
    <div className="home">
      <HeaderComponent />
      <Services />
      <Difference />
      {/* <HomeCarousel /> */}
      <br /><br /><br />
<Footer/>
    </div>
  );
};

export default Home;
