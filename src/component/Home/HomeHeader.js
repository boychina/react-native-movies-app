import React, { Component } from "react";

import { StyleSheet, View, Text  } from "react-native";

export default class HomeHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>
          豆瓣
        </Text>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  }
});