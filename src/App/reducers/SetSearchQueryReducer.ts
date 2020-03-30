import { Reducer } from "react";
import { SetSearchInput, SetSearchFilter } from "../actions/setSearchQuery";
import { ActionTypes } from "../constants/Constants";
import { SearchQuery } from "../typings/types";

type Action = SetSearchInput | SetSearchFilter;
const initialState: SearchQuery = {
    input: '',
    filterOption: ''
}

export const SetQuery: Reducer<SearchQuery, Action> = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.SET_SEARCH_INPUT:
            return {
                ...state,
                input: action.payload
            }
        case ActionTypes.SET_SEARCH_FILTER:
            return {
                ...state,
                filterOption: action.payload
            }
        default:
            return state;
    }
}