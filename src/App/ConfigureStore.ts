import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import root from "./reducers/rootReducer";

export function configureStore() {
    return createStore(root, applyMiddleware(thunk));
}