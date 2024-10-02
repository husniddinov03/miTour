import React from 'react';
import { TitlePage } from '../../Components';
import "./Services.scss";
import data from "./data";
import uuid4 from 'uuid4';
import { WhiteRightIcon } from '../../Routes/icon';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Services = () => {
  const uuid = uuid4();
  const { t } = useTranslation("globbal");

  return (
    <div className='services containerElement'>
      <div className="servicesTitle flex-element gap-3 mt-5">
        <h1 style={{ fontSize: "44px" }} className='default-title-text pt-5'>{t("servicesSec.title")}</h1>
        <TitlePage textKey="servicesSec.titleRight" boolean={true} FontSize="44px" padding="5px 17px"/>
      </div>
      <div id={uuid} style={{ display: "flex", marginTop: "100px", gap: "25px", flexWrap: "wrap", margin: "30px" }} className="servicesBox">
        {data.map((datas) => (
          <div key={datas.id} className="services-item" style={{
            width: "750px", height: "230px", padding: "40px", boxShadow: "0px 0px 54px 0px #25373F14", borderRadius: "20px"
          }}>
            <img src={datas.icon} alt="No icon" />
            <h3 style={{ fontSize: "24px" }} className='default-title-text'>{t(datas.titleKey)}</h3>
            <p className='default-desc-text'>{t(datas.descriptionKey)}</p>
          </div>
        ))}
      </div>
      <div className="services-btns flex-element">
        <button className='default-title-text default-button'>{t("servicesSec.servicePageBtn")}</button>
        <Link className='servicesComp-link default-desc-text' to="https://web.whatsapp.com/">
          {t("bags.book")}
          <img src={WhiteRightIcon} alt="No image" />
        </Link>
      </div>
    </div>
  );
};

export default Services;
