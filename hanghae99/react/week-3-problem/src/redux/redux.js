import {createStore, combineReducers, applyMiddleware} from "redux";
import post from "./reducer/post";
import account from "./reducer/account"; 
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory(); // thunk

const middlewares = [thunk]; // thunk

const enhancer = applyMiddleware(...middlewares); // thunk
const rootReducer = combineReducers({post, account});
const store = createStore(rootReducer, enhancer); // thunk

export default store;