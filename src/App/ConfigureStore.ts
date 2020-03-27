import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import root from "./reducers/rootReducer";

export function configureStore() {
    return createStore(root, composeWithDevTools(applyMiddleware(thunk)));
}