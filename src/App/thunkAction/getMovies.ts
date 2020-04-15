import { Dispatch } from "redux";
import { fetchMoviesSuccess, FetchMoviesSuccess } from "../actions/fetchMoviesSuccess";
import { MoviesApiData, MappedMoviesData } from "../types";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../typings/types";
import { fetchMoviesError, FetchMoviesError } from "../actions/fetchMoviesError";
import { FetchMoviesPending, fetchMoviesPending } from "../actions/fetchMoviesPending";
type Action = FetchMoviesSuccess | FetchMoviesPending | FetchMoviesError;
export const getMovies = (url = 'https://reactjs-cdp.herokuapp.com/movies'): ThunkAction<void, AppState, null, Action> => {
    console.log(url);
    return (dispatch: Dispatch) => {
        dispatch(fetchMoviesPending());
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            const mapMoviesData = res.data.map((movie: MoviesApiData): MappedMoviesData => {
                return {
                    key: movie.id,
                    title: movie.title,
                    genres: movie.genres,
                    releaseDate: movie.release_date,
                    imageURL: movie.poster_path,
                    rating: movie.vote_average,
                    description: movie.overview,
                    runtime: movie.runtime
                }
            });
            dispatch(fetchMoviesSuccess(mapMoviesData));
        })
        .catch(() => dispatch(fetchMoviesError()));
    }
}