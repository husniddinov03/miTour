import React from 'react';
import "./Style.scss";
import { Link } from 'react-router-dom';
import { PageNavbar } from '../../Components';
import { useTranslation } from 'react-i18next';

const About = () => {

  const { t } = useTranslation("globbal");
  const dataPage = [
    {
      id: 1,
      text: "itemNavAbout.magical",
      to: "/about",
      active: true
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
    //   disbled: true
    // },
  ];

  return (
    <div className='about containerElement'>
      <PageNavbar dataPage={dataPage} />

      <div className="about-box1">
        <h1 className='default-title-text'>{t("about.title")}</h1>
        <p className='default-desc-text mt-2'>{t("about.description")}</p>

        <div className="about-items" data-iv="true"> {/* Changed iv to data-iv */}
          <div className="about-item">
            <h2 className='default-title-text'>{t("about.item1.title")}</h2>
            <p className='default-desc-text'>{t("about.item1.description")}</p>
          </div>
          <div className="about-item">
            <h2 className='default-title-text'>{t("about.item2.title")}</h2>
            <p className='default-desc-text'>{t("about.item2.description")}</p>
          </div>
        </div>
      </div>

      <div className="about-items3">
        <h1 className='default-title-text'>{t("about.title2")}</h1>
        <p className='default-desc-text'>{t("about.description2")}</p>
      </div>

      <div className="about-box2">
        <h2 className='default-title-text'>{t("about.title3")}</h2>
        <div className="about-items2">
          <div className="about-item2">
            <div className="about-item-left-text">
              <h2 className='default-title-text'>{t("about.bottomItem1.title")}</h2>
              <p className='default-desc-text'>{t("about.bottomItem1.description")}</p>
            </div>
            <b>01</b>
          </div>
          <div className="about-item2">
          <div className="about-item-left-text">
              <h2 className='default-title-text'>{t("about.bottomItem2.title")}</h2>
              <p className='default-desc-text'>{t("about.bottomItem2.description")}</p>
            </div>
            <b>02</b>
          </div>
          <div className="about-item2">
          <div className="about-item-left-text">
              <h2 className='default-title-text'>{t("about.bottomItem3.title")}</h2>
              <p className='default-desc-text'>{t("about.bottomItem3.description")}</p>
            </div>
            <b>03</b>
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
}

export default About;
