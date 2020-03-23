import { Dispatch } from "redux";
import { fetchMovieSuccess, FetchMovieSuccess } from "../actions/fetchMoviesSuccess";
import { MoviesApiData, MappedMoviesData } from "../types";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../typings/types";
type Action = FetchMovieSuccess;
export const getMovies = (): ThunkAction<void, AppState, null, Action> => {
    return (dispatch: Dispatch) => {
        fetch('https://reactjs-cdp.herokuapp.com/movies')
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
           dispatch(fetchMovieSuccess(mapMoviesData));
        });
    }
}