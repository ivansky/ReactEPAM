import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import Filter from './components/Filter';
import './Search.scss';
import { AppState, SearchQuery } from '../../typings/types';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSearchInput, setSearchFilter } from '../../actions/setSearchQuery';
type SearchProps = {
    filterOptions: string[];
    searchQuery: SearchQuery;
    setSearchInput: Function;
    setSearchFilter: Function;
    makeSearch: Function;
}
type SearchState = {
    inputValue: string;
    filterOptions: string[];
    activeOption: string;
}
class Search extends React.Component<SearchProps, SearchState>{
    constructor(props: SearchProps) {
        super(props)
        this.state = {
            inputValue: '',
            filterOptions: props.filterOptions,
            activeOption: props.filterOptions[0]
        }
    }

    componentDidUpdate(prevProps: SearchProps) {
        if (prevProps === this.props) {
            this.props.setSearchInput(this.state.inputValue);
            this.props.setSearchFilter(this.state.activeOption)
        }
    }

    handleButtonSubmit = () => {
        this.props.setSearchInput(this.state.inputValue)
        this.props.makeSearch()
    }

    handleInputChange = (e: React.ChangeEvent) => {
        const inputText: string = (e.target as HTMLInputElement).value;
        this.setState({inputValue: inputText});
    }

    handleInputSubmit = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            console.log('Submit with state:', this.state);
            this.props.makeSearch(this.props.searchQuery)
        }
    }

    handleSwitchFilter = (e: React.MouseEvent) => {
        console.log('Switch!');
        this.setState({activeOption: (e.target as HTMLInputElement).value});
    }

    render() {
        console.log('change');
        return (
            <div className = 'search-container'>
                <div className = 'search'>
                    <h1 className = 'search-title'>Netflixroulette</h1>
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
        searchQuery: state.searchQuery
    }
}

function mapDispatchToProps (dispatch: Dispatch) {
    return {
        setSearchInput: bindActionCreators(setSearchInput, dispatch),
        setSearchFilter: bindActionCreators(setSearchFilter, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);