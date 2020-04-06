import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from "redux-thunk";
import root from "./reducers/rootReducer";

export const history = createBrowserHistory()

export function configureStore() {
    return createStore(root(history), composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history))));
}