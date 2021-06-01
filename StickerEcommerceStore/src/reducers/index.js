import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import HeaderNavBar from './headerNavBar';

const rootReducer = combineReducers({
  form,
  HeaderNavBar
});

export default rootReducer;