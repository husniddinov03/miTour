import React from 'react';
import { TitlePage } from '../../Components';
import "./Services.scss";
import data from "./data";
import uuid4 from 'uuid4';
import { rightIcon } from '../../Components/image';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const uuid = uuid4();
    const { t } = useTranslation("globbal");

    return (
        <div className='services containerElement'>
            <div className="servicesTitle flex-element gap-3 mt-5">
                <h1 style={{ fontSize: "34px" }} className='default-title-text pt-5'>{t("servicesSec.title")}</h1>
                <TitlePage textKey="servicesSec.titleRight" />
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

            <button className='default-title-text default-button mt-5 m-auto'>{t("servicesSec.servicePageBtn")} <img src={rightIcon} alt="No icon" /></button>
        </div>
    );
};

export default Services;
