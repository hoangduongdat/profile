import React from 'react';
import './aboutme.scss'
const AboutMe = () => {
    return (
        <div className="aboutme">
            <div className="aboutme-header to-right show-on-scroll">
                <h1>A little bit about me</h1>
                <div className="blur" style={{top: '0',left: '30%'}}></div>
                <div className="blur" style={{top: '0%',left: '50%' ,background: '#ABF1FF94'}}></div>
            </div>
            <div className="aboutme-content">
                <span className="to-top show-on-scroll">
                I started learning how to code in January 2021 and spent most of my day experimenting with HTML, CSS and JavaScript, React.
                I enjoy coding and the challenge of learning something new everyday. My goal is to pursue a career in the field of front-end development.
                </span>
                <span className="to-top show-on-scroll">
                In my free time, I like to watch Youtube and Netflix, and playing games. My favorite youtubers are Clever Programmer and Dev Ed . Some games I usually play are Chess, Clash of Clans, and League of Legends.
                </span>
            </div>
        </div>
    );
};

export default AboutMe;