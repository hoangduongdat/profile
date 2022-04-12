import React, { useContext } from 'react';
import './card.scss'
import { ThemeContext } from './../../context/ThemeContext';

const Card = (props) => {
    const themeContext=useContext(ThemeContext);
    return (
        <div className={`card ${themeContext.textTheme}`}>
            <div className="card__img">
                <img src={props.img} alt="" />
            </div>
            <div className={`card__info ${themeContext.textTheme}`}>
                <span>{props.heading}</span>
                <span>{props.deltail}</span>
            </div>
            <div className="card__buttons">
                {props.viewSource ? (
                    <a href={props.viewSource.link} target="_blank">
                        <button className="button card__button">{props.viewSource.displayName}</button>
                    </a>
                ):''}
                {props.viewWebsite ? (
                    <a href={props.viewWebsite.link} target="_blank">
                        <button className="button card__button">{props.viewWebsite.displayName}</button>
                    </a>
                ):( <button className="button card__button">View more</button>)}
            </div>
            
           
            
        </div>
    );
};

export default Card;