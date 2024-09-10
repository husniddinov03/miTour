import React from 'react';
import { TitlePage } from '../../Components';
import data from "./data";
import uuid4 from 'uuid4';

const Services = () => {
    console.log(data);

    const uuid = uuid4();

    return (
        <div className='services containerElement'>
            <div className="servicesTitle flex-element gap-3 mt-5">
                <h1 style={{ fontSize: "34px" }} className='default-title-text pt-5'>Our</h1>
                <TitlePage text="Services" />
            </div>
            <div id={uuid} style={{ display: "flex", marginTop: "80px", gap: "25px", flexWrap: "wrap" }} className="servicesBox">

                {data.map((datas) => (
                    <div key={datas.id} id={datas.id} className="services-item" style={{
                        padding: "20px", boxShadow: "0px 0px 54px 0px #25373F14", borderRadius: "20px"
                    }}>
                        <img src={datas.icon} alt="No icon" />
                        <h3 style={{ fontSize: "24px" }} className='default-title-text'>{datas.title}</h3>
                        <p className='default-desc-text'>{datas.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
