import React from 'react';
import "./Style.scss";
import { TitlePage } from '../../Components';
import data from "./data"; // data.js faylini import qilamiz
import { useTranslation } from 'react-i18next';

const Difference = () => {
    const { t } = useTranslation("globbal");

    return (
        <div className='difference containerElement mt-5'>
            <div >
                <TitlePage textKey={t("difference.titleRight")} boolean={false} />
                <h1 style={{font: "700"}}>{t("difference.title")}</h1>
            </div>

            <div className="difference-box">
                {data.map(datas => (
                    <div className="difference-item" key={datas.id}>
                        <img style={{ marginTop: datas.padding }} src={datas.icon} alt="No image" />
                        <h2 className='default-title-text'>{t(`difference.item${datas.id}.title`)}</h2>
                        <p className='default-desc-text'>{t(`difference.item${datas.id}.description`)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Difference;
