import React from 'react';
import "./Style.scss";
import { Link } from 'react-router-dom';

const PageNavbar = ({ data }) => {
    return (
        <div className='pageNavbar'>
            <div className="about-links flex-element">
                {
                    data.map(datas => (
                        <Link 
                            key={datas.id} 
                            style={datas.active ? { background: "#F2F4F7" } : { background: "transparent" }} 
                            className='default-desc-text about-link' 
                            to={datas.to}
                        >
                            {datas.text}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default PageNavbar;
