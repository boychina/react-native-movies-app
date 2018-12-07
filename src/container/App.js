import { StackNavigator } from 'react-navigation';
// import LoginPage from '../pages/LoginPage'
// import MainPage from '../pages/MainPage'

import HomePage from './Home';
import MoviesPage from './Movies';
import MoviesMore from './MoviesMore';

const App = StackNavigator({
  Home: {
    screen: HomePage
  },
  Movies: {
    screen: MoviesPage
  },
  MoviesMore: {
    screen: MoviesMore
  }
});

export default App;