import { StackNavigator } from 'react-navigation';
// import LoginPage from '../pages/LoginPage'
// import MainPage from '../pages/MainPage'

import HomePage from '../pages/Home';
import MoviesPage from '../pages/Movies';
import MoviesMore from '../pages/MoviesMore';

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