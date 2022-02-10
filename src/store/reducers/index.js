import { combineReducers } from 'redux';
import message from './user';

const rootReducer = combineReducers({
  message,
});

export default rootReducer;
