import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export const renderMovieItem = (movie) => {
  console.log('>>>><<<<<<<<<<<<<<<<<<<<<<', movie);
  return (
    <View style={styles.moviesItem} key={movie.id}>
      <Image source={{uri: movie && movie.images.small, width: 100, height: 142}} />
      <Text style={styles.movieName} numberOfLines={1}>{movie && movie.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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