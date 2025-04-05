import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="nav-container">
            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <img className="logo" src={logo} alt="Little Lemon Logo" />

                <div className="menu-icon" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                {/* nav items */}
                <ul className={menuOpen ? "visible" : ""}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/booking">Reservation</Link></li>
                    <li><Link to="/menu">Order Online</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;