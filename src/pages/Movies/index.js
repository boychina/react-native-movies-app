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
  }

  render() {
    const { movies } = this.props;
    const { inTheaters, top250 } = movies;
    return (
      <View style={styles.container}>
        <Header gotoMovies={this.gotoMovies}/>
        <MoviesBody
          inTheaters={inTheaters}
          top250={top250}
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