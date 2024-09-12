import React from 'react';
import "./Style.scss";
import { TitlePage } from '../../Components';
import data from "./data";

const Difference = () => {
    return (
        <div className='difference containerElement mt-5'>
            <div className="text-center">
                <TitlePage text="Why Choose Us" boolean={false} />
                <h1>What makes us different</h1>
            </div>

            <div className="difference-box">
                {data.map(datas => (
                    <div className="difference-item" key={datas.id}>
                        <img style={{ marginTop: datas.padding }} src={datas.icon} alt="No image" />
                        <h2 className='default-title-text'>{datas.title}</h2>
                        <p className='default-desc-text'>{datas.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Difference;
