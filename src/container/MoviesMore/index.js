import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from 'react-redux';

class MoviesMore extends Component {
  static navigationOptions = {
    title: '更多',
  };

  componentDidMount() {
    const {name} = this.props;
    console.log('name', name);
  }

  render() {
    const {  } = this.props;
    return (
      <View style={styles.container}>
        <Text>更多电影</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#111',
    backgroundColor: '#ffffff',
  }
});

export default connect(({ movies }) => ({ movies }))(MoviesMore);