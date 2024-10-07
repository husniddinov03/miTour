import React, { useState } from 'react';
import "./Style.scss";
import { Link, NavLink } from 'react-router-dom';
import { useInfoContext } from '../../Context/UseInfoContext';
import { logo } from '../image';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { helpCss } = useInfoContext();
    const [changeLanguage, setChangeLanguage] = useState("Eng");
    const { t, i18n } = useTranslation("globbal");

    const handleChangeLanguage = (lang, changeLang) => {
        i18n.changeLanguage(lang);
        setChangeLanguage(changeLang);
    };

    return (
        <nav className='nav'>
            <div className="nav-box" style={helpCss[1]}>
                <div className="logo">
                    <Link to='/'>
                        <img src={logo} alt="No image" />
                    </Link>
                </div>
                <div className="nav-menu">
                    <NavLink to='/' className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} style={helpCss[0]}>
                        <button className="nav-button">{t('navbar.home')}</button>
                    </NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} style={helpCss[0]}>
                        <button className="nav-button">{t('navbar.aboutUs')}</button>
                    </NavLink>
                    <NavLink to='/services' className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} style={helpCss[0]}>
                        <button className="nav-button">{t('servicesSec.titleRight')}</button>
                    </NavLink>
                    <NavLink to='/selfDrive' className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} style={helpCss[0]}>
                        <button className="nav-button">{t('navbar.tourExcursions')}</button>
                    </NavLink>
                    <NavLink to='/miceService' className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} style={helpCss[0]}>
                        <button className="nav-button">{t('navbar.miceService')}</button>
                    </NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} style={helpCss[0]}>
                        <button className="nav-button">{t('navbar.contact')}</button>
                    </NavLink>
                </div>
                <br />
                <Link className='nav-top-btn default-title-text' to='https://web.whatsapp.com/'>{t('navbar.topBtn')}</Link>
                <br />
                <div className="nav-lang">
                    <button className={changeLanguage === "Eng" ? "lang-button active" : "lang-button"} onClick={() => handleChangeLanguage("eng", "Eng")}>Eng</button>
                    <button className={changeLanguage === "Ru" ? "lang-button active" : "lang-button"} onClick={() => handleChangeLanguage("ru", "Ru")}>Ru</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
