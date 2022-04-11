import React from 'react';
import './navbar.scss'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbar-left__name">
                    Hoàng Đạt
                </div>
                <span>toggle</span>
            </div>
            <div className="navbar-right">
                <div className="navbar-right__list">
                    <ul>
                        <li><a href="#">Home</a> </li>
                        <li><a href="#">Services</a> </li>
                        <li><a href="#">Exprerience</a> </li>
                        <li><a href="#">Portfolio</a> </li>
                        <li><a href="#">Testimonials</a> </li>
                    </ul>
                </div>

                <button className="button navbar-button">Contact us</button>
            </div>
            
        </div>
    );
};

export default NavBar;