import { combineReducers } from 'redux';
import loginIn from './loginReducer';
import counter from './counterReducer';
import movies from './moviesReducer';
import moreMovies from './moreMoviesReducer';

const rootReducer = combineReducers({
  loginIn,
  counter,
  movies,
  moreMovies,
});

export default rootReducer;