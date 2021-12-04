import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';

const allReducers = combineReducers({
  auth: AuthReducer,
});
export default allReducers;