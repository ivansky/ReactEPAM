import React  from 'react';
import { Movie } from './types';
import './ShowMovieInfo.scss';
import '../common/Button.scss';
import { Link } from 'react-router-dom';

const ShowMovieInfo = (props: Movie) => {
    return (
        <div className = 'movie-modal-container'>
            <div className = 'movie-modal'>
                <div className = 'movie-modal-header'>
                    <Link to='/'>
                        <a className = 'search-title'>
                            <h1>Netflixroulette</h1>
                        </a>
                    </Link>
                    <Link to='/'>
                        <button className = 'button' onClick = {() => props.action(props)}>Search</button>
                    </Link>
                </div>
                <div className = 'movie-content-container'>
                    <img className = 'movie-image' src = {props.imageURL}/>
                    <div className = 'movie-modal-info'>
                        <div className = 'movie-content-container'>
                            <h3 className = 'movie-modal-title'>{props.title}</h3>
                            <p className = 'movie-rating'>{props.rating}</p>
                        </div>
                        <p className = 'movie-genres'>{props.genres.join(' ')}</p>
                        <div className = 'movie-content-container'>
                            <p className = 'movie-release'>{props.releaseDate.substring(0, 4)}</p>
                            <p className = 'movie-runtime'>{props.runtime} min</p>
                        </div>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowMovieInfo;