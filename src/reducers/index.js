'use strict';

import { combineReducers } from 'redux';
import loginIn from './loginReducer';
import counter from './counterReducer';
import movies from './moviesReducer';

const rootReducer = combineReducers({
  loginIn: loginIn,
  counter: counter,
  movies,
});

export default rootReducer;