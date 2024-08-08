import React, { useState } from 'react';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <section className="h-wrapper">
            <div className="flexCenter innerWidth paddings h-container">
                <img src="./logo.png" alt="logo" width={100} />
                <div className={`flexCenter h-menu ${menuOpen ? 'open' : ''}`}>
                    <Link to="/residencies">Residencies</Link>
                    <Link to="/value">Our Value</Link>
                    <Link to="/contacts">Contact Us</Link>
                    <Link to="/get-started">Get Started</Link>
                    <button className='button'>
                        <Link to="/contact">Contact</Link>
                    </button>
                </div>
                <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
                    {menuOpen ? (
                        <BiX size={30} style={{ color: "white" }} aria-hidden="true" />
                    ) : (
                        <BiMenuAltRight size={30} style={{ color: "white" }} aria-hidden="true" />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Header;
