import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from 'react-redux';
import * as loginAction from '../../actions/loginAction';
import HomeHeader from '../../components/Home/HomeHeader';
import HomeBody from '../../components/Home/HomeBody';
import MoviesGroup from '../../components/Home/MoviesGroup';

class HomePage extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { status } = this.props;
    console.log('>>>>', status);
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

export default connect(
  (state) => {
    console.log("status", state);
    return {
      status: state.loginIn.status,
      isSuccess: state.loginIn.isSuccess,
      user: state.loginIn.user,
    }
  },
  (dispatch) => ({
    login: () => dispatch(loginAction.login()),
  })
)(HomePage);