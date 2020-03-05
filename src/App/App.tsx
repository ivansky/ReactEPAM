import React, { Component } from 'react';
import Search from './components/Search/Search';
import './App.scss';
class App extends Component {
    render() {
        return (
            <div className = 'App'>
                <h1>Netflixroulette</h1>
                <Search filterOptions = {['Tittle', 'Genre']}/>
            </div>
        );
    }
}

export default App;