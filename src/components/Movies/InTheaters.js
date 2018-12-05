import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

export default class HomeBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movies } = this.props;
    console.log('movies', movies);
    return (
      <View
        style={styles.container}
      >
        <View
          style={styles.titleAndMore}
        >
          <Text style={styles.title}>影院热映</Text>
          <Text style={styles.more}>更多</Text>
        </View>
        <ScrollView
          style={styles.container}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.moviesItem}>
            <Image source={{uri: movies[0] && movies[0].images.small, width: 100, height: 142}} />
            <Text style={styles.movieName}>{movies[0] && movies[0].title}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    lineHeight: 24,
    textAlign: 'center'
  }
});