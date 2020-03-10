import React  from 'react';
import { Movie } from './types';

const ShowMovieInfo = (props: Movie) => {
    return (
        <div style = {{display: props.display}}>
            <img src = {props.imageURL}/>
            <h3>{props.title}</h3>
            <p>{props.genres.join(' ')}</p>
            <span>{props.releaseDate}</span>
            <span>{props.rating}</span>
            <p>{props.description}</p>
        </div>
    );
}

export default ShowMovieInfo;