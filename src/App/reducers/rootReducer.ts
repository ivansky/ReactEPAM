import { combineReducers } from "redux";
import { FetchMovies } from "./FetchMoviesReducer";
import { SetQuery } from "./SetSearchQueryReducer";
import { connectRouter } from 'connected-react-router';
import { History } from 'history'

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    fetchMovies: FetchMovies,
    searchQuery: SetQuery
});

export default createRootReducer;