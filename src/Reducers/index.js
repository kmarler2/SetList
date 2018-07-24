import { combineReducers } from "redux";
import errorReducer from './errorReducer.js';

const rootReducer = combineReducers({
  error: errorReducer
});

export default rootReducer;