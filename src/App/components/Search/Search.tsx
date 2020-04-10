import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import Filter from './components/Filter';
import './Search.scss';
import { AppState, SearchQuery, Movie } from '../../typings/types';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSearchInput, setSearchFilter } from '../../actions/setSearchQuery';
import { Link } from 'react-router-dom';
import { history } from '../../ConfigureStore';
import { getMovies } from '../../thunkAction/getMovies';
type Props = {
    filterOptions: string[];
    searchQuery: SearchQuery;
    setSearchInput: Function;
    setSearchFilter: Function;
    getMovies: Function;
    fetchedMovies: Movie[];
}

type State = {
    inputValue: string;
    filterOptions: string[];
    activeOption: string;
}
class Search extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            inputValue: '',
            filterOptions: props.filterOptions,
            activeOption: props.filterOptions[0]
        }
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps === this.props) {
            this.props.setSearchInput(this.state.inputValue);
            this.props.setSearchFilter(this.state.activeOption)
        }
    }

    componentDidMount() {
        //this.props.setSearchFilter(this.state.activeOption)
        //console.log(this.props.searchQuery.filterOption)
        //console.log(localStorage.getItem('lastSearch'))
        // if (localStorage.getItem('lastSearch')) {
        //     const url = `https://reactjs-cdp.herokuapp.com/movies?search=${localStorage.getItem('lastSearch')}&searchBy=title`;
        //     this.props.getMovies(url)
        //     history.push(`/search/${localStorage.getItem('lastSearch')}`);
        //     localStorage.clear()
        // }
        // else {
        //     const lastPathFragment = history.location.pathname.substring(history.location.pathname.lastIndexOf('/') + 1).trim()
        //     localStorage.setItem('lastSearch', lastPathFragment);
        //     const url = `https://reactjs-cdp.herokuapp.com/movies?search=${lastPathFragment}&searchBy=title`;
        //     this.props.getMovies(url)
        //     history.push(`/search/${lastPathFragment}`);
        // }
        const searchPathFragment = /search\/(.*)/.exec(history.location.pathname);
        
        if (searchPathFragment) {
            localStorage.setItem('lastSearch', searchPathFragment[1]);
            const url = `https://reactjs-cdp.herokuapp.com/movies?search=${searchPathFragment[1]}&searchBy=${this.state.activeOption}`;
            this.props.getMovies(url);
            this.props.setSearchInput(searchPathFragment[1]);
            history.push(`/search/${searchPathFragment[1]}`);
        }
        else {
            const url = `https://reactjs-cdp.herokuapp.com/movies?search=${localStorage.getItem('lastSearch')}&searchBy=${this.state.activeOption}`;
            this.props.getMovies(url)
            history.push(`/search/${localStorage.getItem('lastSearch')}`);
            // console.log('storage clear')
            // localStorage.clear()
        }
        //localStorage.clear()
    }

    handleButtonSubmit = () => {
        this.handleSearch();
        localStorage.setItem('lastSearch', this.state.inputValue);
        history.push(`/search/${this.state.inputValue}`);
    }

    handleInputChange = (e: React.ChangeEvent) => {
        const inputText: string = (e.target as HTMLInputElement).value;
        this.setState({inputValue: inputText});
    }

    handleSearch = () => {
        const url =
        `https://reactjs-cdp.herokuapp.com/movies?search=${this.props.searchQuery.input}&searchBy=${this.props.searchQuery.filterOption}`;
        this.props.getMovies(url)
    }

    handleInputSubmit = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            this.handleSearch();
            localStorage.setItem('lastSearch', this.state.inputValue);
            history.push(`/search/${this.state.inputValue}`);
        }
    }

    handleSwitchFilter = (e: React.MouseEvent) => {
        this.setState({activeOption: (e.target as HTMLInputElement).value});
    }

    render() {
        return (
            <div className = 'search-container'>
                <div className = 'search'>
                    <Link to='/' className = 'search-title'>
                        <h1 >Netflixroulette</h1>
                    </Link>
                    <h2>Find your movie</h2>
                    <Input
                        type = 'text'
                        changeAction = {this.handleInputChange}
                        submitAction = {this.handleInputSubmit}
                    />
                    <div className = 'search-filter-container'>
                        <Filter
                            options = {this.state.filterOptions}
                            activeOption = {this.state.activeOption}
                            handleSwitch = {
                                (e: React.MouseEvent) => this.handleSwitchFilter(e)
                            }
                        />
                        <Button content='Search' action = {this.handleButtonSubmit}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state: AppState){
    return {
        searchQuery: state.searchQuery,
        fetchedMovies: state.fetchedMovies,
    }
}

function mapDispatchToProps (dispatch: Dispatch) {
    return {
        setSearchInput: bindActionCreators(setSearchInput, dispatch),
        setSearchFilter: bindActionCreators(setSearchFilter, dispatch),
        getMovies: bindActionCreators(getMovies, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);