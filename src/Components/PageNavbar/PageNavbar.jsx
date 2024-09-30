import React from 'react';
import "./Style.scss";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PageNavbar = ({ dataPage }) => {
    const { t } = useTranslation("globbal")

    return (
        <div className='pageNavbar'>
            <div className="about-links flex-element">
                {
                    dataPage.map(datas => (
                        <Link
                            key={datas.id}
                            style={datas.active ? { background: "#F2F4F7" } : { background: "transparent" }  }
                            className='default-desc-text about-link'
                            
                            to={datas.to}
                        >
                            {t(datas.text)}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default PageNavbar;
