import React, { Component } from "react";

import { StyleSheet, View, Text  } from "react-native";

export default class HomeHeader extends Component {
  render() {
    const { gotoMovies } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>
          豆瓣
        </Text>
        <View style={styles.menu}>
          <Text style={[styles.menuItem, styles.movies]} onPress={gotoMovies}>
            电影
          </Text>
          <Text style={[styles.menuItem, styles.books]}>
            图书
          </Text>
          <Text style={[styles.menuItem, styles.radio]}>
            广播
          </Text>
          <Text style={[styles.menuItem, styles.group]}>
            小组
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
    borderStyle: 'solid'
  },
  logo: {
    width: 80,
    lineHeight: 46,
    fontSize: 22,
    color: '#42bd56',
    fontWeight: '900',
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
  },
  menuItem: {
    fontSize: 22,
    lineHeight: 46,
    paddingLeft: 5,
    paddingRight: 5,
    fontWeight: '900',
  },
  movies: {
    color: '#2384E8',
  },
  books: {
    color: '#9F7860',
  },
  radio: {
    color: '#E4A813',
  },
  group: {
    color: '#2AB8CC',
  }
});