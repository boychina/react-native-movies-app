import * as React from 'react'
import { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { renderMoviesList } from './RenderMoviesList';

interface IProps {
  title: any;
  moreType: any;
  gotoMore: any;
  movies: any;
}

export default class MoviesList extends Component<IProps> {
  render() {
    const { title, moreType, gotoMore, movies } = this.props;
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
          {renderMoviesList(movies)}
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
  }
});