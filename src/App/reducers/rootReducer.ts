import { combineReducers } from "redux";
import { FetchMovies } from "./FetchMoviesReducer";
import { SetQuery } from "./SetSearchQueryReducer";

export default combineReducers({
    fetchedMovies: FetchMovies,
    searchQuery: SetQuery
});