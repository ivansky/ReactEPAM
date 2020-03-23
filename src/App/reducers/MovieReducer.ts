import { Reducer } from "react";
import { FetchMovieSuccess } from "../actions/fetchMoviesSuccess";
import { ActionTypes } from "../constants/Constants";
import { MappedMoviesData } from "../typings/types";

const initialState: MappedMoviesData[] = [];

type Action = FetchMovieSuccess;

export const MovieReducer: Reducer<MappedMoviesData[], Action> = (state = initialState, action: Action) => {
    switch (action.type) {
        case `${ActionTypes.FETCH_MOVIE_SUCCESS}`:
            console.log(action.payload);
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state;
    }
}