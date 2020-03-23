import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import configureStore from './store/reducers/rootReducer';
import thunk from "redux-thunk";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));