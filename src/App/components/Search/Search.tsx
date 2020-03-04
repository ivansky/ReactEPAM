import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import Filter from './components/Filter';

class Search extends React.Component{
    handleSearch = () => {
        console.log('Click');
    }

    handleInputChange = () => {
        console.log('Change!');
    }
    handleInputSubmit = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            console.log(e);
        }
    }

    render() {
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