import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Provider } from "react-redux";
import { configureStore, history } from './App/ConfigureStore';

const store = configureStore();
export const Root = () => (
  <Provider store={store}>
    <App history={history}/>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));