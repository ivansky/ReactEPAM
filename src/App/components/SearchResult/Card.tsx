import React from 'react';
import { MovieProps } from './types'; 
const Card = (props: MovieProps) => {
    console.log(props.rating, props.releaseDate);
    return (
        <div>
            <img src = {props.imageURL}/>
            <h3>{props.title}</h3>
            <span>{props.releaseDate}</span>
            <p>{props.genres.join(' ')}</p>
        </div>
    );
}

export default Card;