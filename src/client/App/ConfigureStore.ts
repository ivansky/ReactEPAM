import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from "redux-thunk";
import root from "./reducers/rootReducer";
import { AppState } from "./typings/types";
import isBrowser from 'is-browser';

export const history = isBrowser? createBrowserHistory() : createMemoryHistory();

declare global {
    interface Window { __PRELOADED_STATE__: AppState }
}
let state = {}
if(typeof window !== 'undefined') {
    state = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
}
export function configureStore() {
    return createStore(root(history), state, composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history))));
}