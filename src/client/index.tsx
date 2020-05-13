// import isBrowser from "is-browser";
import React from 'react';
import ReactDOM from 'react-dom';
// import { createBrowserHistory, createMemoryHistory } from "history";
import { ApolloProvider } from "@apollo/react-hooks";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { createApolloClient } from "../apollo/apollo";
import App from './App/App';

// const history = isBrowser? createBrowserHistory() : createMemoryHistory();
const apolloClient = createApolloClient();

export const Root = () => (
    <ApolloProvider client={apolloClient}>
        <Router>
            <App />
        </Router>
    </ApolloProvider>
);

ReactDOM.hydrate(<Root />, document.getElementById("root"));