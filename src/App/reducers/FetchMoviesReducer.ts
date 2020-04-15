import { Reducer } from "react";
import { FetchMoviesSuccess } from "../actions/fetchMoviesSuccess";
import { ActionTypes } from "../constants/Constants";
import { MappedMoviesData, AppState, FetchMoviesState } from "../typings/types";
import { FetchMoviesError } from "../actions/fetchMoviesError";
import { FetchMoviesPending } from "../actions/fetchMoviesPending";

const initialState: FetchMoviesState = {
    movies: [],
    pending: false
}

type Action = FetchMoviesSuccess | FetchMoviesError | FetchMoviesPending;

export const FetchMovies: Reducer<FetchMoviesState, Action> = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                pending: false
            }
        case ActionTypes.FETCH_MOVIES_PENDING:
            return {
                ...state,
                pending: true
            }
        case ActionTypes.FETCH_MOVIES_ERROR:
            return {
                ...state,
                pending: false,
            }
        default:
            return state;
    }
}