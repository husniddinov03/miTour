import React, { useState } from 'react';
import "./Style.scss";
import { Link, NavLink } from 'react-router-dom';
import { useInfoContext } from '../../Context/UseInfoContext';

const Navbar = () => {
    const { helpCss } = useInfoContext();
    const [changeLanguage, setChangeLanguage] = useState("Eng")
    const [changePage, setChangePage] = useState("Home")

    // console.log(DifferentIcon4);
    return (
        <nav className='nav'> {/* Make sure .container is defined */}
            <div className="nav-box" style={helpCss[1]}>
                <div className="logo">
                    <Link>
                        <img src="./public/Icons/logo.png" alt="No image" />
                    </Link>
                </div>
                <div className="nav-menu">

                    <button style={changePage == "Home" ? { background: "#1D2939" } : { background: "transparent" }} onClick={() => setChangePage("Home")}>
                        <NavLink className="navbar-link" style={helpCss[0]}>Home</NavLink>
                    </button>
                    <button style={changePage == "About Us" ? { background: "#1D2939" } : { background: "transparent" }} onClick={() => setChangePage("About Us")}>
                        <NavLink className="navbar-link" style={helpCss[0]}>About Us</NavLink>
                    </button>
                    <button style={changePage == "Services" ? { background: "#1D2939" } : { background: "transparent" }} onClick={() => setChangePage("Services")}>
                        <NavLink className="navbar-link" style={helpCss[0]}>Services</NavLink>
                    </button>
                    <button style={changePage == "Tour & Excursions" ? { background: "#1D2939" } : { background: "transparent" }} onClick={() => setChangePage("Tour & Excursions")}>
                        <NavLink className="navbar-link" style={helpCss[0]}>Tour & Excursions</NavLink>
                    </button>
                    <button style={changePage == "Mice services" ? { background: "#1D2939" } : { background: "transparent" }} onClick={() => setChangePage("Mice services")}>
                        <NavLink className="navbar-link" style={helpCss[0]}>Mice services</NavLink>
                    </button>
                    <button style={changePage == "Contact" ? { background: "#1D2939" } : { background: "transparent" }} onClick={() => setChangePage("Contact")}>
                        <NavLink className="navbar-link" style={helpCss[0]}>Contact</NavLink>
                    </button>
                </div>
                <div className="nav-lang">
                    <button style={changeLanguage == "Eng" ? { background: "#344054" } : { background: "#1D2939" }} onClick={() => setChangeLanguage("Eng")}>Eng</button>
                    <button style={changeLanguage == "Ru" ? { background: "#344054" } : { background: "#1D2939" }} onClick={() => setChangeLanguage("Ru")}>Ru</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
