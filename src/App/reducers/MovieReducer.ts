import { Reducer } from "react";
import { AppState } from "./rootReducer";
import { FetchMovieSuccess, FetchMoviePending, FetchMovieError } from "../typings/types";
import { Movie } from "../components/SearchResult/types";

const initialState = {
    movie: [],
}

export function MovieReducer(state = initialState, action: FetchMovieSuccess | FetchMoviePending | FetchMovieError): Movie[] {
    switch (action.type) {
        case 'FETCH_MOVIES_PENDING':
            return {
                ...state,
                loading: true,
                error: null
            };

        case 'FETCH_MOVIES_SUCCESS':
            return {
                ...state,
                movies: action.payload
            };

        case 'FETCH_MOVIES_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            return state;
    }
}