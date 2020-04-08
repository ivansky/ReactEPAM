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
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { Route, Switch } from 'react-router';
import NotFound from './components/NotFound';
import { history } from './ConfigureStore';

type State = {
    showCurrentMovie: boolean;
    currentMovie?: Movie;
}

type Props = {
    fetchedMovies: Movie[];
    getMovies: Function;
    searchQuery: SearchQuery;
    history: History;
}

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showCurrentMovie: false,
        }
    }

    componentDidMount() {
        const url = `https://reactjs-cdp.herokuapp.com/movies?search=${history.location.pathname.substring(history.location.pathname.lastIndexOf('/') + 1).trim()}&searchBy=title`
        console.log(url)
        this.props.getMovies(url)
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
        console.log('render')
        const getResult = () => {
            if (this.state.currentMovie) {
                return (
                    <Route path={`/films/${this.state.currentMovie.id}`} >
                        <ShowMovieInfo
                            key = {this.state.currentMovie.id}
                            id = {this.state.currentMovie.id}
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
                    </Route>
                )
            }
            return (
                <Route path="/" >
                    <Search filterOptions = {['title', 'genres']} makeSearch = {this.handleSearch}/>
                    <SearchResult movies = {this.props.fetchedMovies} action = {(movie: Movie) => this.handleSelectMovie(movie)}/>
                    <div className = 'footer'>
                        <div className= 'footer-content'>Netflixroulette</div>
                    </div>
                </Route>
            );
        }
        
        return (
            <div className = 'App'>
            <ConnectedRouter history={this.props.history}>
                <Switch>
                    <Route exact path="/" >
                        {/* <Route path="/search/:searchtext" component={Search} /> */}
                        <Search filterOptions = {['title', 'genres']} makeSearch = {this.handleSearch}/>
                        {/* <SearchResult movies = {this.props.fetchedMovies} action = {(movie: Movie) => this.handleSelectMovie(movie)}/> */}
                    </Route>
                    <Route path= "/search">
                        <Search filterOptions = {['title', 'genres']} makeSearch = {this.handleSearch}/>
                        <SearchResult movies = {this.props.fetchedMovies} action = {(movie: Movie) => this.handleSelectMovie(movie)}/>
                    </Route>
                    <Route path="/films" >
                        {getResult()}
                    </Route>
                    <Route path="*" >
                        <Search filterOptions = {['title', 'genres']} makeSearch = {this.handleSearch}/>
                        <NotFound />
                    </Route>
                </Switch>
            </ConnectedRouter>
            <div className = 'footer'>
                <div className= 'footer-content'>Netflixroulette</div>
            </div>
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