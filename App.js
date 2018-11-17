import {
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from './src/pages/HomeScreen';
import ProfileScreen from './src/pages/ProfileScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default App;
