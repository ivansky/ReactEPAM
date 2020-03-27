import { combineReducers } from "redux";
import { FetchMovies } from "./FetchMoviesReducer";

export default combineReducers({
    fetchedMovies: FetchMovies
});