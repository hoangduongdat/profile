import React from 'react';

import Github from './../../assets/img/github.png'
import TheMovie from './../../assets/img/themovie.png'
import ChatApp from './../../assets/img/chatapp.png'
import Countries from './../../assets/img/countries.png'
import Bicycle from './../../assets/img/bicycle.png'
import DashboardAdmin from './../../assets/img/dashboardadmin.png'
import ClockImage from './../../assets/img/clocktime.png'


import './projects.scss'
import Card from './../card/Card';

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-header">
                <h1 className=" to-middle show-on-scroll">My Projects</h1>
                <div className="blur" style={{top: '0',left: '30%'}}></div>
                <div className="blur" style={{top: '0%',left: '50%' ,background: '#ABF1FF94'}}></div>
            </div>
        
            <div className="projects-cards">
            <div className="blur" style={{top: '40%',left: '0%'}}></div>
            <div className="blur" style={{top: '50%',left: '50%' ,background: '#ABF1FF94'}}></div>

           
                <div className="projects-cards__item to-top show-on-scroll">
                <Card
                     img={TheMovie}
                     heading={'The Movie'}
                     deltail={'Responsive React Movies App With API.'}
                     viewSource={{
                             displayName: 'View Source',
                             link: 'https://github.com/hoangduongdat'
                     }}
                     viewWebsite={{
                             displayName: 'View Code',
                             link: 'https://movie-react-54c6a.web.app/'
                     }}
                />
                </div>
                <div className="projects-cards__item to-top show-on-scroll">
                <Card
                     img={ChatApp}
                     heading={'Chat App'}
                     deltail={'A landing page for Chat App with Firebase.'}
                     viewSource={{
                             displayName: 'View Source',
                             link: 'https://github.com/hoangduongdat'
                     }}
                     viewWebsite={{
                             displayName: 'View Code',
                             link: 'https://movie-react-54c6a.web.app/'
                     }}
                />
                </div>
                <div className="projects-cards__item to-top show-on-scroll">
                <Card
                     img={Countries}
                     heading={'Countries'}
                     deltail={'A Website View all information countries in the world using ReactJs, Redux'}
                     viewSource={{
                             displayName: 'View Source',
                             link: 'https://github.com/hoangduongdat/countries-react-redux'
                     }}
                     viewWebsite={{
                             displayName: 'View Code',
                             link: 'https://countries-react-redux.herokuapp.com/'
                     }}
                />
                </div>
                <div className="projects-cards__item to-top show-on-scroll">
                <Card
                     img={Bicycle}
                     heading={'Bicycle Shop'}
                     deltail={'A demo landing page for Ecommerce Website using HTML CSS & JavaScript '}
                     viewSource={{
                             displayName: 'View Source',
                             link: 'https://github.com/hoangduongdat/shop-bicycle'
                     }}
                     viewWebsite={{
                             displayName: 'View Code',
                             link: 'https://hoangduongdat.github.io/shop-bicycle/'
                     }}
                />
                </div>
                <div className="projects-cards__item to-top show-on-scroll">
                <Card
                     img={DashboardAdmin}
                     heading={'Dashboard Admin'}
                     deltail={'Admin Dashboard with Multiple Themes using ReactJs'}
                     viewSource={{
                             displayName: 'View Source',
                             link: 'https://github.com/hoangduongdat/dashboard-admin'
                     }}
                     viewWebsite={{
                             displayName: 'View Code',
                             link: 'https://dashboard-admin-274d1.web.app/'
                     }}
                />
                </div>
                <div className="projects-cards__item to-top show-on-scroll">
                <Card
                     img={ClockImage}
                     heading={'Time Oclock'}
                     deltail={'A demo landing page for Time Oclock using HTML CSS & JavaScript'}
                     viewSource={{
                             displayName: 'View Source',
                             link: 'https://github.com/hoangduongdat'
                     }}
                     viewWebsite={{
                             displayName: 'View Code',
                             link: 'https://hoangduongdat.github.io/Time-Clock/'
                     }}
                />
                </div>
                
            </div>
        </div>
    );
};

export default Projects;