import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './navbar.scss'

const NavBar = () => {
    const themeContext=useContext(ThemeContext);
    const [active,setActive] = useState(true)

    const handleTheme = ()=>{
        themeContext.toggleTheme()
        themeContext.toggleText()
    }

    const handleToggleMenu =() =>{
        setActive(active=>!active);
    }
  
    const content_el = useRef(null);
    const toggle_el = useRef(null);

    useEffect(()=>{
        const toggle =(e) => {
            if(toggle_el.current && toggle_el.current.contains(e.target)) {
                content_el.current.classList.toggle('active')
            }
            else if(content_el.current && !content_el.current.contains(e.target)) {
                content_el.current.classList.remove('active')
            }
        }

        document.addEventListener('mousedown',e=>toggle(e) )

        return () =>  document.removeEventListener('mousedown',(e)=>toggle(e) )
    },[])
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div  className={`navbar-left__name`} >
                    Hoang Dat
                </div>
                <button ref={toggle_el} className={` navbar-left__menu`} onClick={handleToggleMenu}>
                    <i class='bx bx-menu'></i>
                </button>
            </div>
            <div className={`navbar-right ${active && 'active'}`} ref={content_el}>
                <ul>
                     <li  onClick={handleToggleMenu}><a className={themeContext.textTheme} href="#intro">Home</a> </li>
                     <li  onClick={handleToggleMenu}><a className={themeContext.textTheme} href="#about">About</a> </li>
                     <li  onClick={handleToggleMenu}><a className={themeContext.textTheme} href="#portfolio">Portfolio</a> </li>
                     <li  onClick={handleToggleMenu}><a className={themeContext.textTheme} href="#projects">Projects</a> </li>
                     <li  onClick={handleToggleMenu}><a className={themeContext.textTheme} href="#contact">Contact</a> </li>
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
    );
};

export default NavBar;