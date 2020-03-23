import {MoviesApiData, Movie} from '../types'
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import {FETCH_MOVIES_ERROR, FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS, FetchMovieSuccess} from '../types';
const initialState: MoviesApiData[] = [{
    id: null,
    title: '',
    tagline: '',
    vote_average: null,
    vote_count: null,
    release_date: '',
    poster_path: '',
    overview: '',
    budget: null,
    revenue: null,
    genres: [''],
    runtime: null,
}];

function movieReducer(state = initialState, action: FetchMovieSuccess) {
    switch (action.type) {
      // case FETCH_MOVIES_PENDING:
      //   return {
      //     ...state,
      //     loading: true,
      //     error: null
      //   };
  
      case FETCH_MOVIES_SUCCESS:
        return {
          ...state,
          movies: action.payload
        };
  
      // case FETCH_MOVIES_ERROR:
      //   return {
      //     ...state,
      //     loading: false,
      //     error: action.payload.error,
      //     items: []
      //   };
  
      default:
        return state;
    }
}

export type AppState = ReturnType<typeof movieReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(movieReducer);

  return store;
}