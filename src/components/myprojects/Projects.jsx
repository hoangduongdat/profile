import React from 'react';

import Github from './../../assets/img/github.png'
import TheMovie from './../../assets/img/themovie.png'
import ChatApp from './../../assets/img/chatapp.png'
import Instagram from './../../assets/img/instagram.png'

import './projects.scss'
import Card from './../card/Card';

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-header">
                    <h1>My Project</h1>
                    <div className="blur" style={{top: '0',left: '40%'}}></div>
            </div>
        
            <div className="projects-cards">
           
                <div className="projects-cards__item">
                <Card
                     img={TheMovie}
                     heading={'The Movie'}
                     deltail={'A demo landing page for League of Legends with animations.'}
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
                <div className="projects-cards__item">
                <Card
                     img={ChatApp}
                     heading={'Chat App'}
                     deltail={'A demo landing page for League of Legends with animations.'}
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
                <div className="projects-cards__item">
                <Card
                     img={Github}
                     heading={'The Movie'}
                     deltail={'A demo landing page for League of Legends with animations.'}
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
                <div className="projects-cards__item">
                <Card
                     img={Github}
                     heading={'The Movie'}
                     deltail={'A demo landing page for League of Legends with animations.'}
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
                <div className="projects-cards__item">
                <Card
                     img={Github}
                     heading={'The Movie'}
                     deltail={'A demo landing page for League of Legends with animations.'}
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
                <div className="projects-cards__item">
                <Card
                     img={Github}
                     heading={'The Movie'}
                     deltail={'A demo landing page for League of Legends with animations.'}
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
                
            </div>
        </div>
    );
};

export default Projects;