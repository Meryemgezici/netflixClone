import { applyMiddleware, combineReducers, createStore } from "redux";
import { mainReducer } from "./reducer/mainReducer";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    mainReducer,
});

export default createStore(rootReducer,applyMiddleware(thunk));