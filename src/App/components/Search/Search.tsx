import React from 'react';
import Button from '../common/Button';

class Search extends React.Component{
    handleSearch = () => {
        console.log('Click');
    }

    render() {
        return (
            <Button content='Search' action = {this.handleSearch}/>
        )
    }
}

export default Search;