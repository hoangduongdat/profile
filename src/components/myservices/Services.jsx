import React from 'react';

import './services.scss'

import Glassesimoji from './../../assets/img/glassesimoji.png'
import HeartEmoji from './../../assets/img/heartemoji.png'
import Humble from './../../assets/img/humble.png'
import Card from './../card/Card';

import Resume from './resume.pdf'

const Services = () => {
    return (
        <div className="services">
            <div className="services-left">
                <span>My Awesome </span> 
                <span>Service</span>
                <span>lorem ispump is the art of the art of the world lorem ispump <br />
                 lorem  ispump is the art of the world lorem</span>
                 <a href={Resume} download target="_blank">
                    <button className="button services-button">Download CV</button>
                 </a>
                <div className="blur services-blur1" style={{background: '#ABF1FF94'}}></div>
             
               <div className="blur services-blur3" style={{background: '#ABF1FF94'}}></div>
               <div className="blur services-blur4" ></div>

            </div>

            <div className="services-right">
               <div className="services-right__card">
                    <Card
                            img={HeartEmoji}
                            heading= {'Design'}
                            deltail={'Figma, Sketch, Photoshop,...'}
                    />
               </div>
               <div className="services-right__card">
                    <Card
                            img={Glassesimoji}
                            heading= {'Developer'}
                            deltail={'Html, Css, JavaScript, React'}
                    />
               </div>
               <div className="services-right__card">
                    <Card
                            img={Humble}
                            heading= {'UI/UX'}
                            deltail={'Figma, Sketch, Photoshop,...'}
                    />
               </div>
               <div className="blur services-blur2" ></div>
             

            </div>
            
        </div>
    );
};

export default Services;