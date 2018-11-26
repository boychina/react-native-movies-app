import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

console.log('>>>', PropTypes);

export default class Button extends Component {
  static propTypes = {
    text: null,
    onClick: null,
  }

  render() {
    const { text, onClick } = this.props;
    console.log('text', text);
    return (
      <TouchableOpacity style={styles.Button}  onPress={onClick}>
        <Text>{text}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  Button: {
    width: 60,
    height: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
})