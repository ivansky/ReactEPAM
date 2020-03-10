import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import Filter from './components/Filter';
import './Search.scss';
type SearchProps = {
    filterOptions: string[];
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

    handleButtonSubmit = () => {
        console.log('Submit with state:', this.state);
    }

    handleInputChange = (e: React.ChangeEvent) => {
        const inputText: string = (e.target as HTMLInputElement).value;
        this.setState({inputValue: inputText});
    }

    handleInputSubmit = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            console.log('Submit with state:', this.state);
        }
    }

    handleSwitchFilter = (e: React.MouseEvent) => {
        console.log('Switch!');
        this.setState({activeOption: (e.target as HTMLInputElement).value});
    }

    render() {
        console.log('Current state:', this.state);
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

export default Search;