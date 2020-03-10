import React from 'react';
import { Movie } from './types'; 
const Card = (props: Movie) => {
    console.log(props.rating, props.releaseDate);
    return (
        <div>
            <img src = {props.imageURL} width='300px'/>
            <h3>{props.title}</h3>
            <span>{props.releaseDate}</span>
            <p>{props.genres.join(' ')}</p>
        </div>
    );
}

export default Card;