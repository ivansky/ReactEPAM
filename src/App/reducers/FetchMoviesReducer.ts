import { Reducer } from "react";
import { FetchMoviesSuccess } from "../actions/fetchMoviesSuccess";
import { ActionTypes } from "../constants/Constants";
import { MappedMoviesData } from "../typings/types";
import { FetchMoviesError } from "../actions/fetchMoviesError";

const initialState: MappedMoviesData[] = [];

type Action = FetchMoviesSuccess | FetchMoviesError;

export const FetchMovies: Reducer<MappedMoviesData[], Action> = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.FETCH_MOVIES_SUCCESS:
            return action.payload
        case ActionTypes.FETCH_MOVIES_ERROR:
            return {
                ...state,
                fetchError: action.payload,
            }
        default:
            return state;
    }
}