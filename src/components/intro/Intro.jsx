import React from 'react';
import './intro.scss'
import { Typewriter , Cursor} from 'react-simple-typewriter'

import Github from './../../assets/img/github.png'
import LinkedIn from './../../assets/img/linkedin.png'
import Instagram from './../../assets/img/instagram.png'

import Vector1 from './../../assets/img/Vector1.png'
import Vector2 from './../../assets/img/Vector2.png'

const Intro = () => {

    return (
        <div className="intro">
            <div className="intro-left">

                <div className="intro-left__name">
                    <span>Hy, I Am </span>
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
                <div className="intro-left__description">
                    <span>Frontend Developer with high level of 
                    experience in web designing and development,
                     producting the Quality word</span>
                </div>
                <div className="intro-left__life">
                    <span>Life is simple </span>
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
                <button className="button intro-button">Hire me</button>   

                <div className="intro-left__icon">
                    <a href="https://github.com/hoangduongdat" target="_blank"><img src={Github} alt=""/></a>
                    <a href="#"><img src={LinkedIn} alt="" /></a>
                    <a href="#"><img src={Instagram} alt="" /></a>
                </div>
                
            </div>
                
            <div className="intro-right">
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