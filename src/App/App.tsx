import React, { Component } from 'react';
import Search from './components/Search/Search';
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Netflixroulette</h1>
                <Search filterOptions = {['Tittle', 'Genre']}/>
            </React.Fragment>
        );
    }
}

export default App;