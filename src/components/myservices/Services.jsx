import React from 'react';

import './services.scss'

import Glassesimoji from './../../assets/img/glassesimoji.png'
import HeartEmoji from './../../assets/img/heartemoji.png'
import Humble from './../../assets/img/humble.png'
import Card from './../card/Card';



const Services = () => {
    return (
        <div className="services">
            <div className="services-left">
                <h1 className=" to-middle show-on-scroll">My Skills</h1>
                
                 
                <div className="blur services-blur1" style={{background: '#ABF1FF94'}}></div>
             
               <div className="blur services-blur3" style={{background: '#ABF1FF94'}}></div>
               <div className="blur services-blur4" ></div>

            </div>

            <div className="services-right to-top show-on-scroll">
               <div className="services-right__card">
                    <Card
                            img={HeartEmoji}
                            heading= {'Design'}
                            deltail={'Figma, Photoshop'}
                    />
               </div>
               <div className="services-right__card">
                    <Card
                            img={Glassesimoji}
                            heading= {'FrontEnd'}
                            deltail={'Html, Css, JavaScript, ReactJS'}
                    />
               </div>
               <div className="services-right__card">
                    <Card
                            img={Humble}
                            heading= {'BackEnd'}
                            deltail={'NodeJs(Express), c++'}
                    />
               </div>
               <div className="blur services-blur2" ></div>
             

            </div>
            
        </div>
    );
};

export default Services;