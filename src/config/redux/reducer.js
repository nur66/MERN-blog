// const { combineReducers } = require('redux');
import { combineReducers } from "redux";
import homeReducer from "./homereducer";
import globalReducer from "./globalreducer";

const reducer = combineReducers({homeReducer, globalReducer});

export default reducer;