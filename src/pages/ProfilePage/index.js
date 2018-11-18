import React, { Component } from "react";

import { View, Text } from "react-native";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <Text>ProfileScreen Page</Text>
    );
  }
}