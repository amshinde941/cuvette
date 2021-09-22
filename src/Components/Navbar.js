import React, { useState } from "react";

import "../styles/navbar.css";

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">
                    <a href="/home">
                        <p className="logo">cuvette</p>
                    </a>
                </div>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="/home" >Contact</a>
                    </li>
                    <li className="option mobile-option" onClick={closeMobileMenu}>
                        <a href="/login" className="student">Student</a>
                    </li>
                    <li className=" option mobile-option" onClick={closeMobileMenu}>
                        <a href="/home" className="company">Company</a>
                    </li>
                </ul>
            </div>
            <ul className="signin-up">
                <li onClick={closeMobileMenu}>
                    <a href="/login" className="student">Student</a>
                </li>
                <li onClick={closeMobileMenu}>
                    <a href="/home" className="company">
                        Company
                    </a>
                </li>
            </ul>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <h3 className="menu-icon">*</h3>
                ) : (
                    <h3 className="menu-icon" >--</h3>
                )}
            </div>
        </div>
    );
};

export default Header;