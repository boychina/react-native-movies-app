import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import MoviesList from './MoviesList';

export default class HomeBody extends Component {
  constructor(props) {
    super(props);
  }

  renderMoviseItem = ({item}) => (
    <View>
      <Text>{item.id}</Text>
      <Text>{item.title}</Text>
    </View>
  );

  render() {
    const { inTheaters, top250, comingSoon } = this.props;
    const { subjects: inTheatersList = [] } = inTheaters;
    const { subjects: top250List = [] } = top250;
    const { subjects: comingSoonList = [] } = comingSoon;
    return (
      <View style={styles.container}>
        <MoviesList
          title={inTheaters.title}
          movies={inTheatersList}
        />
        <MoviesList
          title={top250.title}
          movies={top250List}
        />
        <MoviesList
          title={comingSoon.title}
          movies={comingSoonList}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: '#ffe'
  }
});