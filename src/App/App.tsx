import React, { Component } from 'react';
import Search from './components/Search/Search';
import './App.scss';
import SearchResult from './components/SearchResult/SearchResult';
import {movies} from '../mock-data';
import { MoviesApiData, MappedMoviesData } from './types';

class App extends Component {
    render() {
        const getMoviesData = movies.data.map((movie: MoviesApiData): MappedMoviesData => {
            return {
                key: movie.id,
                title: movie.title,
                genres: movie.genres,
                releaseDate: movie.release_date,
                imageURL: movie.poster_path,
                rating: movie.vote_average
            }
        });

        return (
            <div className = 'App'>
                <h1>Netflixroulette</h1>
                <Search filterOptions = {['title', 'genre']}/>
                <SearchResult movies = {getMoviesData} />
            </div>
        );
    }
}

export default App;