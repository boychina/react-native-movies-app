import * as React from 'react'
import { Component } from 'react';
import { StyleSheet, View } from "react-native";
import { connect } from 'react-redux';
import * as loginAction from '../../actions/loginAction';
import HomeHeader from '../../components/Home/Header';
import HomeBody from '../../components/Home/HomeBody';
import MoviesGroup from '../../components/Home/MoviesGroup';

interface IProps {
  navigation: any;
  status: any;
}

class HomePage extends Component<IProps> {
  static navigationOptions = {
    title: '首页',
  };

  gotoMovies = () => {
    const { navigate } = this.props.navigation;
    navigate('Movies', { name: 'Jane' });
  }

  render() {
    const { status } = this.props;
    return (
      <View style={styles.container}>
        <HomeHeader gotoMovies={this.gotoMovies}/>
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
  (state: any) => {
    return {
      status: state.loginIn.status,
      isSuccess: state.loginIn.isSuccess,
      user: state.loginIn.user,
    }
  },
  (dispatch: any) => ({
    login: () => dispatch(loginAction.login()),
  })
)(HomePage);