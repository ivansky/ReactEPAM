import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {movies} from './mock-data';
console.log(movies.data);
ReactDOM.render(<App />, document.getElementById('root'));