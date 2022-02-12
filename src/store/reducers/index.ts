import { combineReducers } from 'redux';
import message from './message';
import auth from './auth';
import answer from './answer';
import { StoreState } from 'types/store/stateType';

const rootReducer = combineReducers<StoreState>({
  message,
  auth,
  answer,
});

export default rootReducer;
