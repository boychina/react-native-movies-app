import React, { Component } from "react";
import { View } from "react-native";
import HomeHeader from '../../component/Home/HomeHeader';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: '首页',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <HomeHeader />
      </View>
    );
  }
}