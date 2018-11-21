import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { observer, inject } from "mobx-react";
import { Button, Container } from "native-base";
import HomeHeader from '../../component/Home/HomeHeader';
import MoviesCroup from '../../component/Home/MoviesGroup';

@inject(["homeStore"]) // 注入对应的store
@observer // 监听当前组件
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.homeStore; // 通过props来倒入访问已注入的store
    this.state = {};
  }

  static navigationOptions = {
    title: '首页',
  };

  render() {
    const { text, num } = this.store;
    return (
      <Container style={styles.container}>
        <HomeHeader />
        <MoviesCroup />
        <Text>{text}</Text>
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
