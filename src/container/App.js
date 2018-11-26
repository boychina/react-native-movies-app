import React, {
  Component
} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
// import LoginPage from '../pages/LoginPage'
// import MainPage from '../pages/MainPage'

import HomePage from '../pages/Home';
import ProfilePage from '../pages/Profile';

const App = StackNavigator({
  Home: {
    screen: HomePage
  },
  Profile: {
    screen: ProfilePage
  },
});

export default App;