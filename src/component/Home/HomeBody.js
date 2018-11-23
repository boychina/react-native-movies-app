import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import QuckNav from './QuckNav';

export default class HomeBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <QuckNav />
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