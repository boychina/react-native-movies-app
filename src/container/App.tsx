import { StackNavigator } from 'react-navigation';

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