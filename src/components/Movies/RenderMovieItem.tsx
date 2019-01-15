import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import { starURI, unstarURI } from '../../util/util';

export const renderMovieItem = (movie: any) => {
  const renderStars = (rating) => {
    const { stars } = rating;
    const count = Number(stars[0]);
    const starsList = [];
    for(let i = 0; i < 5; i++){
      if(i < count){
        starsList.push(<Image key={i} source={{ uri: starURI, width: 12, height: 12 }} style={styles.stars} />)
      } else {
        starsList.push(<Image key={i} source={{ uri: unstarURI, width: 12, height: 12 }} style={styles.stars} />)
      }
    }
    return starsList;
  };
  return (
    <View style={styles.moviesItem} key={movie.id}>
      <Image source={{ uri: movie && movie.images.small, width: 100, height: 142 }} />
      <Text style={styles.movieName} numberOfLines={1}>{movie && movie.title}</Text>
      <View style={styles.rating}>
        {
          movie.rating.stars === '00' ?
          <Text style={styles.noAverage}>暂无评分</Text> :
          <View style={styles.starsBox}>
            {renderStars(movie.rating)}
            <Text style={styles.average}>{movie.rating.average.toFixed(1)}</Text>
          </View>
        }
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  moviesItem: {
    width: 100,
    marginLeft: 18,
  },
  movieName: {
    width: 100,
    lineHeight: 28,
    textAlign: 'center',
  },
  rating: {
    flex: 1,
    height: 40,
  },
  noAverage: {
    textAlign: 'center',
    color: '#aaa',
  },
  starsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stars: {
    marginRight: 2,
  },
  average: {
    color: '#aaa',
  }
});