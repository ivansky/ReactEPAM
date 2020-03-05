import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import Filter from './components/Filter';
type SearchOptions = {
}
type SearchState = {
    inputValue: string;
    filter: string;
}
class Search extends React.Component<SearchOptions, SearchState>{
    constructor(props: SearchOptions) {
        super(props)
        this.state = {
            inputValue: '',
            filter: 'Tittle'
        }
    }

    handleSearch = () => {
        console.log('Click');
    }

    handleInputChange = (e: React.ChangeEvent) => {
        const inputText: string = (e.target as HTMLInputElement).value;
        this.setState({inputValue: inputText});
    }
    
    handleInputSubmit = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            console.log((e.target as HTMLInputElement).value);
        }
    }

    render() {
        console.log(this.state);
        return (
            <>
                <h2>Find your movie</h2>
                <Button content='Search' action = {this.handleSearch}/>
                <Input
                    type = 'text'
                    changeAction = {this.handleInputChange}
                    submitAction = {this.handleInputSubmit}
                />
                <Filter
                    optionOne = 'Tittle'
                    optionTwo = 'Genre'
                    activeOption = 'Tittle'
                    handleSwitch = {
                        () => console.log('Switch!')
                    }
                />
            </>
        )
    }
}

export default Search;