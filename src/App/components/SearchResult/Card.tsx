import React from 'react';
import { Movie } from './types';
import './Card.scss';
const Card = (props: Movie) => {
    const getGenresFromArray = (genres: string[]) => {
        return genres.reduce((genre, resultString) => {
           const capitalizeGenre = genre.charAt(0).toUpperCase() + genre.slice(1);
           return `${resultString} ${capitalizeGenre}`;
        }, '');
    }
    return (
        <div className = 'result-card'>
            <img className = 'card-image' src = {props.imageURL}/>
            <div className = 'card-content'>
                <h3 className = 'card-title'>{props.title}</h3>
                <p className = 'card-date'>{props.releaseDate.substring(0, 4)}</p>
            </div>
            <p className = 'card-genres'>{getGenresFromArray(props.genres)}</p>
        </div>
    );
}

export default Card;