import {
  createStackNavigator,
} from 'react-navigation';

import HomePage from './src/pages/HomePage';
import ProfilePage from './src/pages/ProfilePage';

const App = createStackNavigator({
  Home: { screen: HomePage },
  Profile: { screen: ProfilePage },
});

export default App;
