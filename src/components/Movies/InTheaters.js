import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

export default class HomeBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 50,
  }
});