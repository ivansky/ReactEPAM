import React, { Component } from 'react';
import Search from './components/Search/Search';
import './App.scss';
import SearchResult from './components/SearchResult/SearchResult';
import {movies} from '../mock-data';
import { MoviesApiData, MappedMoviesData } from './types';
import { Movie } from './components/SearchResult/types';
import ShowMovieInfo from './components/SearchResult/ShowMovieInfo';
import { connect } from 'react-redux'
import { AppState } from './typings/types';
import { getMovies } from './thunkAction/getMovies';
import { Dispatch } from 'redux';
import { fetchMovieSuccess } from './actions/fetchMoviesSuccess';
type State = {
    showMovie: boolean;
    currentMovie: Movie;
}
type Props = {
    movies: Movie[];
    //getMovies: Dispatch;
}
class App extends Component<Props, State> {
    constructor(props: Props) {
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
    componentDidMount() {
        this.props.dispatch(fetchMovieSuccess());
        console.log(this.props, this.state);
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

const mapStateToProps = (state: AppState) => ({
    movies: state.movies
});
const mapDispatchToProps = {
    dispatch: getMovies,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);