import React, { Component } from 'react';
import Search from './components/Search/Search';
import './App.scss';
import SearchResult from './components/SearchResult/SearchResult';
import { Movie } from './components/SearchResult/types';
import ShowMovieInfo from './components/SearchResult/ShowMovieInfo';
import { connect } from 'react-redux'
import { AppState, SearchQuery } from './typings/types';
import { getMovies } from './thunkAction/getMovies';
import { Dispatch, bindActionCreators } from 'redux';

type State = {
    showCurrentMovie: boolean;
    currentMovie?: Movie;
}

type Props = {
    fetchedMovies: Movie[];
    getMovies: Function;
    searchQuery: SearchQuery;
}

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showCurrentMovie: false,
        }
    }

    componentDidMount() {
        this.props.getMovies();
    }

    handleSelectMovie = (movie: Movie) => {
        this.setState({
            showCurrentMovie: true,
            currentMovie: movie
        });
    }

    handleSelectSearch = () => {
        this.setState({
            showCurrentMovie: false,
        });
    }

    handleSearch = () => {
        const url = `https://reactjs-cdp.herokuapp.com/movies?search=${this.props.searchQuery.input}&searchBy=${this.props.searchQuery.filterOption}`
        this.props.getMovies(url)
    }

    render() {
        let result;
        if (this.state.showCurrentMovie) {
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
                <SearchResult movies = {this.props.fetchedMovies} action = {(movie: Movie) => this.handleSelectMovie(movie)}/>
                <div className = 'footer'>
                    <div className= 'footer-content'>Netflixroulette</div>
                </div>
            </>
        }
        else {
            result = <>
            <Search filterOptions = {['title', 'genres']} makeSearch = {this.handleSearch}/>
            <SearchResult movies = {this.props.fetchedMovies} action = {(movie: Movie) => this.handleSelectMovie(movie)}/>
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

function mapStateToProps (state: AppState){
    return {
        fetchedMovies: state.fetchedMovies,
        searchQuery: state.searchQuery
    }
}
function mapDispatchToProps (dispatch: Dispatch) {
    return {
        getMovies: bindActionCreators(getMovies, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);