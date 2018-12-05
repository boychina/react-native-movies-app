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
    const { inTheaters, top250 } = this.props;
    const { subjects: inTheatersList = [] } = inTheaters;
    const { subjects: top250List = [] } = top250;
    return (
      <View style={styles.container}>
        <MoviesList
          title="影院热映"
          movies={inTheatersList}
        />
        <MoviesList
          title="Top 250"
          movies={top250List}
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