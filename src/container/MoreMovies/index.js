import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from 'react-redux';

class MoreMovies extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: navigation.state.params ? navigation.state.params.title : null,
  });

  componentDidMount() {
    const { navigation } = this.props;
    console.log('name', navigation.state.params.title);
    navigation.setParams({
      title: navigation.state.params.title,
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

export default connect(({ movies }) => ({ movies }))(MoreMovies);