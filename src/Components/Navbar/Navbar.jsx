import React, { useState } from 'react';
import "./Style.scss";
import { Link, NavLink } from 'react-router-dom';
import { useInfoContext } from '../../Context/UseInfoContext';

const Navbar = () => {
    const { helpCss } = useInfoContext();
    const [changeLanguage, setChangeLanguage] = useState("Eng");

    return (
        <nav className='nav'>
            <div className="nav-box" style={helpCss[1]}>
                <div className="logo">
                    <Link to='/'>
                        <img src="/src/assets/Icons/logo.png" alt="No image" />
                    </Link>
                </div>
                <div className="nav-menu">
                    <NavLink to='/' className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} style={helpCss[0]}>
                        <button className="nav-button">Home</button>
                    </NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} style={helpCss[0]}>
                        <button className="nav-button">About Us</button>
                    </NavLink>
                    <NavLink to='/services' className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} style={helpCss[0]}>
                        <button className="nav-button">Services</button>
                    </NavLink>
                    <NavLink to='/tourExcursions' className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} style={helpCss[0]}>
                        <button className="nav-button">Tour & Excursions</button>
                    </NavLink>
                    <NavLink to='/miceService' className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} style={helpCss[0]}>
                        <button className="nav-button">Mice services</button>
                    </NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} style={helpCss[0]}>
                        <button className="nav-button">Contact</button>
                    </NavLink>
                </div>
                <div className="nav-lang">
                    <button className={changeLanguage === "Eng" ? "lang-button active" : "lang-button"} onClick={() => setChangeLanguage("Eng")}>Eng</button>
                    <button className={changeLanguage === "Ru" ? "lang-button active" : "lang-button"} onClick={() => setChangeLanguage("Ru")}>Ru</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
