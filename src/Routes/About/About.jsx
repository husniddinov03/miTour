import React from 'react';
import "./Style.scss";
import { Link } from 'react-router-dom';
import { PageNavbar } from '../../Components';

const About = () => {

  const dataPage = [
    {
      id: 1,
      text: "Magical Desert Travel and Tourism L.L.C.",
      to: "/about",
      active: true
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
      active: false
    },
  ];

  return (
    <div className='about containerElement'>
      <PageNavbar dataPage={dataPage} />

      <div className="about-box1">
        <h1 className='default-title-text'>Magical Desert Travel and Tourism L.L.C.</h1>
        <p className='default-desc-text mt-2'>Your gateway to experiencing the enchanting beauty and rich culture of the United Arab Emirates. Established with a passion for travel and a commitment to excellence, we are dedicated to providing exceptional travel experiences that are tailored to meet the unique needs and preferences of our clients.</p>

        <div className="about-items" data-iv="true"> {/* Changed iv to data-iv */}
          <div className="about-item">
            <h2 className='default-title-text'>Our Vision</h2>
            <p className='default-desc-text'>To create unforgettable travel experiences that showcase the best of the UAE, blending luxury, adventure, and cultural exploration.</p>
          </div>
          <div className="about-item">
            <h2 className='default-title-text'>Our Vision</h2>
            <p className='default-desc-text'>To be the leading travel and tourism company in the UAE, known for our personalized service, expert knowledge, and commitment to quality.</p>
          </div>
        </div>
      </div>

      <div className="about-items3">
        <h1 className='default-title-text'>Why Choose Magical Desert Travel and Tourism?</h1>
        <p className='default-desc-text'>With years of experience in the travel industry, we offer a wealth of knowledge and expertise. Our team of dedicated professionals is passionate about creating unique travel experiences that go beyond the ordinary. Whether you’re looking for luxury or adventure, we tailor our services to match your desires, ensuring a memorable journey every time.</p>
      </div>

      <div className="about-box2">
        <h2 className='default-title-text'>Our Values</h2>
        <div className="about-items2">
          <div className="about-item2">
            <div className="about-item-left-text">
              <h2 className='default-title-text'>Excellence</h2>
              <p className='default-desc-text'>We strive for excellence in everything we do, from planning your trip to providing exceptional customer service.</p>
            </div>
            <b>01</b>
          </div>
          <div className="about-item2">
            <div className="about-item-left-text">
              <h2 className='default-title-text'>Integrity</h2>
              <p className='default-desc-text'>Honesty and transparency are at the core of our business. We believe in building trust through open communication and ethical practices.</p>
            </div>
            <b>02</b>
          </div>
          <div className="about-item2">
            <div className="about-item-left-text">
              <h2 className='default-title-text'>Innovation</h2>
              <p className='default-desc-text'>We are constantly seeking new and creative ways to enhance our services and provide unique experiences for our clients.</p>
            </div>
            <b>03</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
