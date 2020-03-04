import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

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
                <Button content='Search' action = {this.handleSearch}/>
                <Input
                    type = 'text'
                    changeAction = {this.handleInputChange}
                    submitAction = {this.handleInputSubmit}
                />
            </>
        )
    }
}

export default Search;