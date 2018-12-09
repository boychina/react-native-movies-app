import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from './Button';


interface IProps {
  decrementFn:any;
  incrementFn: any;
  counter: any;
}

export default class Counter extends Component<IProps> {
  static propTypes = {
    decrementFn: null,
    incrementFn: null,
  }

  render() {
    const { decrementFn, incrementFn, counter } = this.props;
    return (
      <View style={styles.container}>
        <Button onClick={decrementFn} text={'减'} />
        <Text style={styles.label}>{counter}
        </Text>
        <Button onClick={incrementFn} text={'加'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  label: {
    width: 40,
    textAlign: 'center',
  }
})