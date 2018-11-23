import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { observer, inject } from "mobx-react";
import { Button, Container } from "native-base";
import HomeHeader from '../../component/Home/HomeHeader';
import MoviesCroup from '../../component/Home/MoviesGroup';

export default class HomePage extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: '首页',
  };

  render() {
    return (
      <Container style={styles.container}>
        <HomeHeader />
        <MoviesCroup />
        <Text>Hello World</Text>
        <Button primary onPress={() => this.store.plus()}>
          <Text>add</Text>
        </Button>
        <Text>{num}</Text>
        <Button primary onPress={() => this.store.minus()}>
          <Text>Minu</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});
