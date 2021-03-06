import React from 'react';
import { Movie } from './types';
import './Card.scss';
import { Link } from 'react-router-dom';
const Card = (props: Movie) => {
    const getGenresFromArray = (genres: string[]) => {
        return genres.reduce((genre, resultString) => {
           const capitalizeGenre = genre.charAt(0).toUpperCase() + genre.slice(1);
           return `${resultString} ${capitalizeGenre}`;
        }, '');
    }
    return (
        <div className = 'result-card' onClick = {() => props.action(props)}>
            <Link to={`/films/${props.id}`} className='link'>
                <img className = 'card-image' src = {props.imageURL}/>
                <div className = 'card-content'>
                    <h3 className = 'card-title'>{props.title}</h3>
                    <p className = 'card-date'>{props.releaseDate.substring(0, 4)}</p>
                </div>
                <p className = 'card-genres'>{getGenresFromArray(props.genres)}</p>
            </Link>
        </div>
    );
}

export default Card;