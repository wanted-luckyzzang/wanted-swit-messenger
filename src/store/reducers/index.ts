import { combineReducers } from 'redux';
import message from './message';
import auth from './auth';
import { StoreState } from 'types/store/stateType';

const rootReducer = combineReducers<StoreState>({
  message,
  auth,
});

export default rootReducer;
