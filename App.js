// import {
//   createStackNavigator,
// } from 'react-navigation';

// import HomeScreen from './src/pages/HomeScreen';
// import ProfileScreen from './src/pages/ProfileScreen';

// const App = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Profile: { screen: ProfileScreen },
// });

// export default App;

// import React from 'react';
// import { Animated, Text, View } from 'react-native';

// class FadeInView extends React.Component {
//   state = {
//     fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
//   }

//   componentDidMount() {
//     Animated.timing(                  // 随时间变化而执行动画
//       this.state.fadeAnim,            // 动画中的变量值
//       {
//         toValue: 1,                   // 透明度最终变为1，即完全不透明
//         duration: 10000,              // 让动画持续一段时间
//       }
//     ).start();                        // 开始执行动画
//   }

//   render() {
//     let { fadeAnim } = this.state;

//     return (
//       <Animated.View                 // 使用专门的可动画化的View组件
//         style={{
//           ...this.props.style,
//           opacity: fadeAnim,         // 将透明度指定为动画变量值
//         }}
//       >
//         {this.props.children}
//       </Animated.View>
//     );
//   }
// }

// // 然后你就可以在组件中像使用`View`那样去使用`FadeInView`了
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
//           <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
//         </FadeInView>
//       </View>
//     )
//   }
// }


import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
  state = {
    w: 100,
    h: 100,
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});