import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import HomeHeader from '../../component/Home/HomeHeader';
import HomeBody from '../../component/Home/HomeBody';
import MoviesGroup from '../../component/Home/MoviesGroup';

class HomePage extends Component {
  static navigationOptions = {
    title: '首页',
  };
  render() {
    return (
      <View style={styles.container}>
        <HomeHeader />
        <HomeBody />
        <MoviesGroup />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#111',
    backgroundColor: '#ffffff',
  }
});

export default HomePage;