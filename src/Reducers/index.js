import { combineReducers } from "redux";
import errorReducer from './errorReducer.js';
import updateSetlistReducer from './updateSetlistReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  sets: updateSetlistReducer
});

export default rootReducer;