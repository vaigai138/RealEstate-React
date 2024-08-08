import React, { useState } from 'react';
import { BiMenuAltRight, BiX } from 'react-icons/bi'; // Import BiX for the close icon
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
                    <a href="#resi">Residencies</a>
                    <a href="#value-section">Our Value</a>
                    <a href="#contact-section">Contact Us</a>
                    <a href="#get-started">Get Started</a>
                    <button className='button'>
                        <a href="#contact-section">Contact</a>
                    </button>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    {menuOpen ? (
                        <BiX size={30} style={{ color: "white" }} /> 
                    ) : (
                        <BiMenuAltRight size={30} style={{ color: "white" }} /> // Show menu icon when closed
                    )}
                </div>
            </div>
        </section>
    );
};

export default Header;
