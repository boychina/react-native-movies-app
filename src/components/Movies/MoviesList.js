import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

export default class MoviesList extends Component {
  constructor(props) {
    super(props);
  }

  renderMoviesList = () => {
    const { movies } = this.props;
    return movies.map((movie) => (
      <View style={styles.moviesItem} key={movie.id}>
        <Image source={{uri: movie && movie.images.small, width: 100, height: 142}} />
        <Text style={styles.movieName} numberOfLines={1}>{movie && movie.title}</Text>
      </View>
    ))
  }

  render() {
    const { title, movies, moreType, gotoMore } = this.props;
    console.log('movies', movies);
    return (
      <View
        style={styles.container}
      >
        <View
          style={styles.titleAndMore}
        >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.more} onPress={() => gotoMore(moreType)}>更多</Text>
        </View>
        <ScrollView
          style={styles.container}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {/* <View style={styles.moviesItem}>
            <Image source={{uri: movies[0] && movies[0].images.small, width: 100, height: 142}} />
            <Text style={styles.movieName}>{movies[0] && movies[0].title}</Text>
          </View> */}
          {this.renderMoviesList()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 240,
  },
  titleAndMore: {
    height: 42,
    marginLeft: 18,
    marginRight: 18,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    lineHeight: 42,
  },
  more: {
    fontSize: 16,
    color: '#42bd56',
    lineHeight: 42,
  },
  moviesItem: {
    width: 100,
    marginLeft: 18,
  },
  movieName: {
    width: 100,
    lineHeight: 28,
    textAlign: 'center',
  }
});