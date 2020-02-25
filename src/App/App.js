import React, { Component } from 'react';
import ReactCreateElement from './components/ReactCreateElement';
import ReactFunctionalComponent from './components/ReactFunctionalComponent';
import ReactPureComponent from './components/ReactPureComponent';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello, this is React.Component</h1>
                <ReactCreateElement />
                <ReactFunctionalComponent />
                <ReactPureComponent />
            </React.Fragment>
        );
    }
}

export default App;