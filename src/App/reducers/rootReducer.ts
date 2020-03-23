import { AppState } from "../typings/types";
import { FetchMovieSuccess, fetchMovieSuccess } from "../actions/fetchMoviesSuccess";
import { combineReducers } from "redux";
import { MovieReducer } from "./MovieReducer";

// type Action = FetchMovieSuccess;

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const root = () => (state: AppState, actions: Action): any  {
//   return combineReducers({MovieReducer});
// }
export default combineReducers({MovieReducer});