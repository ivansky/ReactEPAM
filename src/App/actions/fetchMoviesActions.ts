import {Movie, MoviesApiData, MappedMoviesData} from '../typings/types';
import { Dispatch } from 'redux';
import {FETCH_MOVIES_ERROR, FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS} from '../typings/types';

function fetchMoviesPending() {
    return {
        type: FETCH_MOVIES_PENDING
    }
}

function fetchMoviesSuccess(movies: MappedMoviesData[]) {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

function fetchMoviesError(error: Error) {
    return {
        type: FETCH_MOVIES_ERROR,
        payload: error
    }
}

export function fetchMovies() {
    return (dispatch: Dispatch) => {
        dispatch(fetchMoviesPending());
        fetch('https://reactjs-cdp.herokuapp.com/movies')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchMoviesSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchMoviesError(error));
        })
    }
}