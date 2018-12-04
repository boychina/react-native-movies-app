import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import InTheaters from './InTheaters';

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
    const { inTheaters } = this.props;
    const { subjects } = inTheaters;
    return (
      <View>
        <InTheaters />
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