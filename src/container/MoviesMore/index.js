import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from 'react-redux';

class MoviesMore extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: navigation.state.params?navigation.state.params.title:null,
  });

  componentDidMount() {
    const { } = this.props;
    console.log('name', this.props.navigation.state.params.title);
    this.props.navigation.setParams({
      title: this.props.navigation.state.params.title,
    })
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