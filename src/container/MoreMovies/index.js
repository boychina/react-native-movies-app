import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from 'react-redux';
import * as moreMoviesAction from '../../actions/moreMoviesAction';

class MoreMovies extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: navigation.state.params ? navigation.state.params.title : null,
  });

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const moreType = navigation.state.params.moreType;
    console.log('name', navigation.state.params.moreType);
    navigation.setParams({
      title: navigation.state.params.title,
    })
    dispatch(moreMoviesAction.getMoreMovies(moreType));
  }

  render() {
    const { moreMovies } = this.props;
    console.log('>>>>', moreMovies);
    return (
      <View style={styles.container}>
        <Text>更多电影</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#111',
    backgroundColor: '#ffe',
  }
});

export default connect(({ moreMovies }) => ({ moreMovies }))(MoreMovies);