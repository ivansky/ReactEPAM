import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Provider } from "react-redux";
import { configureStore } from './App/ConfigureStore';
import { getMovies } from './App/thunkAction/getMovies';
import { Movie } from './App/typings/types';

const store = configureStore();
const movies: Movie[] = []
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));