import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from 'dva';
import HomeHeader from '../../component/Home/HomeHeader';
import MoviesCroup from '../../component/Home/MoviesGroup';

class HomePage extends Component {
  static navigationOptions = {
    title: '首页',
  };
  render() {
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
});

export default connect(({ home }) => ({ home }))(HomePage);