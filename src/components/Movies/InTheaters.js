import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

export default class HomeBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <View
          style={styles.titleAndMore}
        >
          <Text style={styles.title}>影院热映</Text>
          <Text style={styles.more}>更多</Text>
        </View>
        <ScrollView
          style={styles.container}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 80,
  },
  titleAndMore: {
    height: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
  },
  more: {
    fontSize: 16,
    color: '#42bd56',
    lineHeight: 24,
  }
});