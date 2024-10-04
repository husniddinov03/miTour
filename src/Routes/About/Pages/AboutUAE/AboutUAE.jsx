import React from 'react';
import { PageNavbar } from '../../../../Components';
import { image1, image2, image3, image4, image5 } from '../../../image';
import "./Style.scss";
import { useTranslation } from 'react-i18next';

const AboutUAE = () => {
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
      active: true
    },
    {
      id: 3,
      text: "itemNavAbout.gallery",
      to: "/aboutGallery",
      active: false,
      disabled: true
    },
  ];

  const imageData = [
    { id: 1, img: image1 },
    { id: 2, img: image2 },
    { id: 3, img: image3 },
    { id: 4, img: image4 },
    { id: 5, img: image5 },
  ];

  const { t } = useTranslation("globbal"); // Corrected usage

  return (
    <div className='aboutUae containerElement'>
      <PageNavbar dataPage={dataPage} />
      <div className="aboutUae-box">
        <br />
        <h1 className='default-title-text'>{t("aboutUae.title")}</h1><br />
        <p className='default-desc-text'>{t("aboutUae.description1")} {t("aboutUae.description2")}</p>

        <div className="aboutUae-images">
          {imageData.map(data => (
            <div className="aboutUaeImg">
              <img key={data.id} src={data.img} alt="No image" />
            </div>
          ))}
        </div>
      </div>
      <br /><br /><br />
    </div>
  );
}

export default AboutUAE;