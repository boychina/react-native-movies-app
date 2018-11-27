import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Header from '../../components/Home/Header';
import MoviesBody from '../../components/Movies/MoviesBody';

export default class MoviesPage extends Component {
  static navigationOptions = {
    title: '电影',
  };
  render() {
    return (
      <View style={styles.container}>
        <Header gotoMovies={this.gotoMovies}/>
        <MoviesBody />
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