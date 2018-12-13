import * as React from 'react'
import { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";

interface IProps {

}

export default class QuckNav extends Component<IProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.navItem}>影院热映</Text>
        <Text style={styles.navItem}>同城活动</Text>
        <Text style={styles.navItem}>豆瓣时间</Text>
        <Text style={styles.navItem}>使用豆瓣App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  navItem: {
    backgroundColor: '#f6f6f6',
    width: 163,
    margin: 3,
    textAlign: 'center',
    height: 44,
    lineHeight: 44,
    fontSize: 16,
    // backgroundOrigin: 'content-box',
    // boxSizing: 'border-box',
  }
});