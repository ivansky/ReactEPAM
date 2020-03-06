import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import Filter from './components/Filter';
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
            <>
                <h2>Find your movie</h2>
                <Button content='Search' action = {this.handleButtonSubmit}/>
                <Input
                    type = 'text'
                    changeAction = {this.handleInputChange}
                    submitAction = {this.handleInputSubmit}
                />
                <Filter
                    options = {this.state.filterOptions}
                    activeOption = {this.state.activeOption}
                    handleSwitch = {
                        (e: React.MouseEvent) => this.handleSwitchFilter(e)
                    }
                />
            </>
        )
    }
}

export default Search;