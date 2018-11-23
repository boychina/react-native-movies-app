// import React from 'react';
// import { Provider } from 'mobx-react';
// import App from './App';
// import store from './store';

// export default function setup() {
//   class Root extends React.Component {
//     render() {
//       return (
//         <Provider { ...store }>
//           <App />
//         </Provider>
//       )
//     }
//   }
//   return Root;
// }

import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface Props {
  name: string;
  count?: number;
  onInc?: () => void;
  onDec?: () => void;
}

export default ({ name, count = 1, onInc, onDec }: Props) => (
  <View style={styles.root}>
    <Text>
      Counter {name}: {count}
    </Text>
    <View>
      <Button title="+" onPress={onInc || (() => {})} />
      <Button title="-" onPress={onDec || (() => {})} />
    </View>
  </View>
);

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
});