import { StackNavigator } from 'react-navigation';
// import LoginPage from '../pages/LoginPage'
// import MainPage from '../pages/MainPage'

import HomePage from './Home';
import MoviesPage from './Movies';
import MoreMovies from './MoreMovies';

const App = StackNavigator({
  Home: {
    screen: HomePage
  },
  Movies: {
    screen: MoviesPage
  },
  MoreMovies: {
    screen: MoreMovies
  }
});

export default App;