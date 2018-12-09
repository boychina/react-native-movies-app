import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IProps {
  text: any;
  onClick: any;
}

export default class Button extends Component<IProps> {
  static propTypes = {
    text: null,
    onClick: null,
  }

  render() {
    const { text, onClick } = this.props;
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