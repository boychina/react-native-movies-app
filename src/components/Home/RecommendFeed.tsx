import React, { Component } from "react";

import { StyleSheet, View, Text  } from "react-native";

export default class RecommendFeed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
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
  }
});