import React, { useContext } from 'react';
import './intro.scss'
import { Typewriter } from 'react-simple-typewriter'
import Resume from './resume.pdf'

import Github from './../../assets/img/github.png'
import LinkedIn from './../../assets/img/linkedin.png'
import Instagram from './../../assets/img/instagram.png'

import Vector1 from './../../assets/img/Vector1.png'
import Vector2 from './../../assets/img/Vector2.png'
import { ThemeContext } from './../../context/ThemeContext';

const Intro = () => {
    const themeContext=useContext(ThemeContext);
    return (
        <div className="intro"  id="intro">
            <div className="intro-left">

                <div className="intro-left__name to-right show-on-scroll">
                    <span className={themeContext.textTheme}>Hy, I Am </span>
                    <span>
                        <Typewriter
                            words={['Hoang Duong Đat']}
                            loop={1}
                            cursor
                            cursorStyle=' !'
                            delaySpeed={1500}
                        />
                        
                    </span>
                </div>
                <div className="intro-left__description to-left show-on-scroll">  
                    <span>Frontend Developer with intern level in web designing and development ^^</span>
                </div>
                <div className="intro-left__life to-right show-on-scroll">
                    <span className={themeContext.textTheme}>Life is simple </span>
                        <span>
                            <Typewriter
                                words={['Eat!', 'Sleep!', 'Code!']}
                                loop={false}
                                cursor
                                cursorStyle=''
                                typeSpeed={100}
                                deleteSpeed={80}
                                delaySpeed={1500}
                            />
                       
                    </span>
                </div>
                <a href={Resume} download target="_blank" className="to-bottom show-on-scroll">
                    <button className="button intro-button">Download Resume</button>  
                </a> 

                <div className="intro-left__icon to-right show-on-scroll">
                    <a href="https://github.com/hoangduongdat" target="_blank"><img src={Github} alt=""/></a>
                    <a href="#"><img src={LinkedIn} alt="" /></a>
                    <a href="#"><img src={Instagram} alt="" /></a>
                </div>
                
            </div>
                
            <div className="intro-right to-top show-on-scroll">
                <img className="intro-right__vector" src={Vector1} alt="" />
                <img className="intro-right__vector" src={Vector2} alt="" />
                <div className="intro-right__image">
                </div>

                <div className="blur intro-blur1"></div>
                <div className="blur intro-blur2"></div>
            </div>

            
        </div>
    );
};

export default Intro;