import React, { Component } from 'react';
import Search from './components/Search/Search';
import './App.scss';
import SearchResult from './components/SearchResult/SearchResult';
import {movies} from '../mock-data';
import { MoviesApiData, MappedMoviesData } from './types';
import { Movie } from './components/SearchResult/types';
import ShowMovieInfo from './components/SearchResult/ShowMovieInfo';
type State = {
    showMovie: boolean;
    currentMovie: Movie;
}
class App extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            showMovie: false,
            currentMovie: {
                title: '',
                genres: [''],
                releaseDate: '',
                imageURL: '',
                rating: 0,
            }
        }
    }
    handleSelectMovie = (movie: Movie) => {
        this.setState({
            showMovie: true,
            currentMovie: movie
        });
    }
    handleSelectSearch = () => {
        this.setState({
            showMovie: false,
        });
    }
    render() {
        const getMoviesData = movies.data.map((movie: MoviesApiData): MappedMoviesData => {
            return {
                key: movie.id,
                title: movie.title,
                genres: movie.genres,
                releaseDate: movie.release_date,
                imageURL: movie.poster_path,
                rating: movie.vote_average,
                description: movie.overview,
                runtime: movie.runtime
            }
        });
        let result;
        if (this.state.showMovie) {
            result = <>
                <ShowMovieInfo
                    title = {this.state.currentMovie.title}
                    genres = {this.state.currentMovie.genres}
                    releaseDate = {this.state.currentMovie.releaseDate}
                    imageURL = {this.state.currentMovie.imageURL}
                    rating = {this.state.currentMovie.rating}
                    description = {this.state.currentMovie.description}
                    action = {() => this.handleSelectSearch()}
                    runtime = {this.state.currentMovie.runtime}
                />
                <SearchResult movies = {getMoviesData} action = {(movie: Movie) => this.handleSelectMovie(movie)}/>
                <div className = 'footer'>
                    <div className= 'footer-content'>Netflixroulette</div>
                </div>
            </>
        }
        else {
            result = <>
            <Search filterOptions = {['title', 'genre']}/>
            <SearchResult movies = {getMoviesData} action = {(movie: Movie) => this.handleSelectMovie(movie)}/>
            <div className = 'footer'>
                <div className= 'footer-content'>Netflixroulette</div>
            </div>
            </>
        }
        return (
            <div className = 'App'>
                {result}
            </div>
        );
    }
}

export default App;