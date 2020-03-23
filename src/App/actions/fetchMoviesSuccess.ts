import { Action, ActionCreator } from "redux";
import { ActionTypes } from "../constants/Constants";
import { MappedMoviesData } from "../typings/types";

export interface FetchMovieSuccess extends Action<ActionTypes.FETCH_MOVIE_SUCCESS> {
    type: ActionTypes.FETCH_MOVIE_SUCCESS;
    payload: MappedMoviesData[];
}

export const fetchMovieSuccess: ActionCreator<FetchMovieSuccess> = (movies: MappedMoviesData[]) => ({
    type: ActionTypes.FETCH_MOVIE_SUCCESS,
    payload: movies
})