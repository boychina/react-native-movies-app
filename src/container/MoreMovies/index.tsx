import * as React from 'react'
import { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from "react-native";
import { connect } from 'react-redux';
import * as moreMoviesAction from '../../actions/moreMoviesAction';
import { renderMovieItem } from '../../components/Movies/RenderMovieItem';

interface IProps {
  navigation: any;
  dispatch: any;
  moreMovies: any;
}

class MoreMovies extends Component<IProps> {
  static navigationOptions = ({ navigation, screenProps }: any) => ({
    title: navigation.state.params ? navigation.state.params.title : null,
  });

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const moreType = navigation.state.params.moreType;
    navigation.setParams({
      title: navigation.state.params.title,
    });
    dispatch(moreMoviesAction.getMoreMovies(moreType));
  }

  componentWillUnmount(): void {
    const { dispatch } = this.props;
    dispatch(moreMoviesAction.clearMoreMovies());
  }

  _keyExtractor = (item) => item.id;

  render() {
    const { moreMovies: { moreMovies } } = this.props;
    const { subjects: movies = [] } = moreMovies;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{moreMovies.title || ''}</Text>
        <FlatList
          style={styles.moviesList}
          numColumns={3}
          data={movies}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => renderMovieItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#111',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginTop: 12,
    marginBottom: 8,
    paddingLeft: 20,
  },
  moviesList: {
    flex: 1,
    flexDirection: 'column',
  }
});

export default connect(({ moreMovies }: any) => ({ moreMovies }))(MoreMovies);