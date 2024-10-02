import React from 'react';
import data from './data';
import "./Style.scss";
import { rightIcon } from '../../Components/image';
import { TitlePage } from '../../Components'; // Assuming TitlePage is used for title display
import CardService from '../../Components/ServiceCard/CardService';
import { useTranslation } from 'react-i18next'; // Assuming you want translation support

const ServicesPage = () => {
  const { t } = useTranslation("globbal"); 
   
  return (
    <div className='servicesPage containerElement'>
      {/* <div className="servicesTitle flex-element gap-3">
      </div> */}
      
      <div className="servicePage-box d-flex flex-wrap mt-5 gap-4">
        {data.map((datas) => (
          <CardService key={datas.id} data={datas} />
        ))}
      </div>

<br /><br />
      {/* <button className='default-title-text default-button mt-5 m-auto'>
        {t("servicesSec.servicePageBtn")} 
        <img src={rightIcon} alt="No icon" /> 
      </button> */}
    </div>
  );
}

export default ServicesPage;
