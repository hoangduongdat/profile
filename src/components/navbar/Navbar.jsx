import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './navbar.scss'

const NavBar = () => {
    const themeContext=useContext(ThemeContext);

    const handleTheme = ()=>{
        themeContext.toggleTheme()
        themeContext.toggleText()
    }
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbar-left__name">
                    Hoang Dat
                </div>
            </div>
            <div className="navbar-right">
                <div className="navbar-right__list">
                    <ul  >
                        <li><a className={themeContext.textTheme} href="#">Home</a> </li>
                        <li><a className={themeContext.textTheme} href="#">Services</a> </li>
                        <li><a className={themeContext.textTheme} href="#">Exprerience</a> </li>
                        <li><a className={themeContext.textTheme} href="#">Portfolio</a> </li>
                        <li><a className={themeContext.textTheme} href="#">Testimonials</a> </li>
                    </ul>
                </div>
                <button 
                className="navbar-button" 
                onClick={handleTheme}
                style={{color: themeContext.theme==='lightTheme' ? '#242D49' : '#fff' }}
                >
               
                    <i class="bx bx-palette"></i>
                </button>
            </div>
        </div>
    );
};

export default NavBar;