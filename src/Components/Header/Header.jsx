import React, { useState } from 'react';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
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
                    <a href="">Residencies</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <button className='button'>
                        <a href="">Contact</a>
                    </button>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    {menuOpen ? (
                        <BiX size={30} style={{ color: "white" }} /> 
                    ) : (
                        <BiMenuAltRight size={30} style={{ color: "white" }} /> 
                    )}
                </div>
            </div>
        </section>
    );
};

export default Header;
