import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

const movise = [
  {
    id: 101,
    title: 'adcdafa',
    content: 'asldfjasldfjas;ldfasdfasdlfjas'
  },
  {
    id: 102,
    title: 'adcdafa',
    content: 'asldfjasldfjas;ldfasdfasdlfjas'
  }
]

export default class HomeBody extends Component {
  constructor(props) {
    super(props);
  }

  renderMoviseItem = ({item}) => (
    <View>
      <Text>{item.id}</Text>
      <Text>{item.title}</Text>
      <Text>{item.content}</Text>
    </View>
  );

  render() {
    return (
      <FlatList
        tyle={styles.container}
        data={movise}
        extraData={this.state}
        keyExtractor={(item) => item.id}
        renderItem={this.renderMoviseItem}
      />
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