import { combineReducers, createStore } from "redux";
import filesReducer from "./filesReducer";

let reducers = combineReducers({
    foldersPage: filesReducer,
})

const store = createStore(reducers);

export default store;