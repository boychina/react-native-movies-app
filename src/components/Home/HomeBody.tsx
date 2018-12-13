import * as React from 'react'
import { Component } from 'react';
import { StyleSheet, View } from "react-native";
import QuckNav from './QuckNav';
import RecommendFeed from './RecommendFeed'

interface IProps {

}

export default class HomeBody extends Component<IProps> {
  render() {
    return (
      <View style={styles.container}>
        <QuckNav />
        <RecommendFeed />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 18,
    marginRight: 18,
    marginTop: 20,
    backgroundColor: '#ffe'
  }
});