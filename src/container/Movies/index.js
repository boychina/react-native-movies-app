import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from 'react-redux';
import Header from '../../components/Home/Header';
import MoviesBody from '../../components/Movies/MoviesBody';
import * as moviesAction from '../../actions/moviesAction';

class MoviesPage extends Component {
  static navigationOptions = {
    title: '电影',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(moviesAction.getInTheaters());
    dispatch(moviesAction.getTop250());
    dispatch(moviesAction.getComingSoon());
  }

  render() {
    const { movies, navigation } = this.props;
    const { navigate } = navigation;
    const { inTheaters, top250, comingSoon } = movies;
    return (
      <View style={styles.container}>
        <Header gotoMovies={this.gotoMovies}/>
        <MoviesBody
          navigate={navigate}
          inTheaters={inTheaters}
          top250={top250}
          comingSoon={comingSoon}
        />
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

export default connect(({ movies }) => ({ movies }))(MoviesPage);