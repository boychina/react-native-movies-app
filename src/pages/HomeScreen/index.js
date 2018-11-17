import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import HomeHeader from '../../component/Home/HomeHeader';
import MoviesCroup from '../../component/Home/MoviesGroup';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: '首页',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <HomeHeader />
        <MoviesCroup />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
})