import {createStore, combineReducers, applyMiddleware} from "redux";
import word from "./modules/word";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory(); // thunk

const middlewares = [thunk]; // thunk

const enhancer = applyMiddleware(...middlewares); // thunk
const rootReducer = combineReducers({word});
const store = createStore(rootReducer, enhancer); // thunk

export default store;