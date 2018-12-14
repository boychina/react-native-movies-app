import * as React from 'react'
import { Component } from 'react';
import { StyleSheet, View, Text, Image } from "react-native";

const starURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==';

const unstarURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=';

export const renderMovieItem = (movie: any) => {
  const renderStars = (rating) => {
    const { stars } = rating;
    const count = Number(stars[0]);
    console.log(count);
    const starsList = [];
    for(let i = 0; i < 5; i++){
      if(i < count){
        starsList.push(<Image key={i} source={{ uri: starURI, width: 12, height: 12 }} style={styles.stars} />)
      } else {
        starsList.push(<Image key={i} source={{ uri: unstarURI, width: 12, height: 12 }} style={styles.stars} />)
      }
    }
    return starsList;
  }
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