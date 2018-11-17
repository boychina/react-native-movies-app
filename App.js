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


// import React from 'react';
// import {
//   NativeModules,
//   LayoutAnimation,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   View,
// } from 'react-native';

// const { UIManager } = NativeModules;

// UIManager.setLayoutAnimationEnabledExperimental &&
//   UIManager.setLayoutAnimationEnabledExperimental(true);

// export default class App extends React.Component {
//   state = {
//     w: 100,
//     h: 100,
//   };

//   _onPress = () => {
//     // Animate the update
//     LayoutAnimation.spring();
//     this.setState({w: this.state.w + 15, h: this.state.h + 15})
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
//         <TouchableOpacity onPress={this._onPress}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Press me!</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 200,
//     height: 200,
//     backgroundColor: 'red',
//   },
//   button: {
//     backgroundColor: 'black',
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     marginTop: 15,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });


// tslint:disable:jsx-no-multiline-js
// import React from 'react';
// import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
// import { Button, Flex, WhiteSpace, WingBlank } from 'antd-mobile-rn';

// const Circle = (props: any) => {
//   const size = props.size || 20;
//   const style = {
//     borderRadius: size / 2,
//     backgroundColor: '#527fe4',
//     width: size,
//     height: size,
//     margin: 1,
//   };
//   return <View style={style} />;
// };

// export default class FlexExample extends React.Component<any, any> {
//   render() {
//     return (
//       <ScrollView
//         style={{ flex: 1 }}
//         automaticallyAdjustContentInsets={false}
//         showsHorizontalScrollIndicator={false}
//         showsVerticalScrollIndicator={false}
//       >
//         <WingBlank style={{ marginTop: 20, marginBottom: 5 }}>
//           <Text style={{ marginBottom: 10 }}>项目的排列方向</Text>
//           <Text>direction="row":主轴为水平方向，起点在左端</Text>
//         </WingBlank>
//         <WingBlank style={{ marginBottom: 5 }}>
//           <Flex>
//             <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
//               <Button size="small">按钮1</Button>
//             </Flex.Item>
//             <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
//               <Button size="small">按钮2</Button>
//             </Flex.Item>
//             <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
//               <Button size="small">按钮3</Button>
//             </Flex.Item>
//           </Flex>
//         </WingBlank>
//         <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
//           <Text>direction="column":主轴为垂直方向，起点在上沿</Text>
//         </WingBlank>
//         <WingBlank style={{ marginBottom: 5 }}>
//           <Flex direction="column">
//             <Flex.Item style={{ paddingBottom: 4 }}>
//               <Button size="small">按钮1</Button>
//             </Flex.Item>
//             <Flex.Item style={{ paddingBottom: 4 }}>
//               <Button size="small">按钮2</Button>
//             </Flex.Item>
//             <Flex.Item style={{ paddingBottom: 4 }}>
//               <Button size="small">按钮3</Button>
//             </Flex.Item>
//           </Flex>
//         </WingBlank>
//         <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
//           <Text style={{ marginTop: 20, marginBottom: 20 }}>
//             项目在主轴上的对齐方式
//           </Text>
//           <Text>justify="start":左对齐</Text>
//         </WingBlank>
//         <WingBlank style={{ marginBottom: 5 }}>
//           <Flex justify="start">
//             <Circle />
//             <Circle />
//             <Circle />
//             <Circle />
//             <Circle />
//           </Flex>
//         </WingBlank>
//         <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
//           <Text>justify="center":居中</Text>
//         </WingBlank>
//         <WingBlank style={{ marginBottom: 5 }}>
//           <Flex justify="center">
//             <Circle />
//             <Circle />
//             <Circle />
//             <Circle />
//             <Circle />
//           </Flex>
//         </WingBlank>
//         <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
//           <Text>justify="end":右对齐</Text>
//         </WingBlank>
//         <WingBlank style={{ marginBottom: 5 }}>
//           <Flex justify="end">
//             <Circle />
//             <Circle />
//             <Circle />
//             <Circle />
//             <Circle />
//           </Flex>
//         </WingBlank>
//         <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
//           <Text>justify="between":两端对齐，项目之间的间隔都相等</Text>
//         </WingBlank>
//         <WingBlank style={{ marginBottom: 5 }}>
//           <Flex justify="between">
//             <Circle />
//             <Circle />
//             <Circle />
//             <Circle />
//             <Circle />
//           </Flex>
//         </WingBlank>
//         <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
//           <Text>justify="around":每个项目两侧的间隔相等</Text>
//         </WingBlank>
//         <WingBlank style={{ marginBottom: 5 }}>
//           <Flex justify="around">
//             <Circle />
//             <Circle />
//             <Circle />
//             <Circle />
//             <Circle />
//           </Flex>
//         </WingBlank>
//         <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
//           <Text style={{ marginTop: 20, marginBottom: 20 }}>
//             项目在交叉轴上的对齐方式
//           </Text>
//           <Text>align="start":交叉轴的起点对齐</Text>
//         </WingBlank>
//         <WingBlank style={{ marginBottom: 5 }}>
//           <Flex align="start" style={{ height: 30 }}>
//             <Text
//               style={{
//                 fontSize: 20,
//                 borderWidth: 1,
//                 borderStyle: 'solid',
//                 borderColor: '#527fe4',
//               }}
//             >
//               兜兜
//             </Text>
//             <Text
//               style={{
//                 fontSize: 18,
//                 borderWidth: 1,
//                 borderStyle: 'solid',
//                 borderColor: '#527fe4',
//               }}
//             >
//               兜兜
//             </Text>
//             <Text
//               style={{
//                 fontSize: 16,
//                 borderWidth: 1,
//                 borderStyle: 'solid',
//                 borderColor: '#527fe4',
//               }}
//             >
//               兜兜
//             </Text>
//             <Text
//               style={{
//                 fontSize: 14,
//                 borderWidth: 1,
//                 borderStyle: 'solid',
//                 borderColor: '#527fe4',
//               }}
//             >
//               兜兜
//             </Text>
//           </Flex>
//         </WingBlank>
//         <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
//           <Text>align="center":交叉轴的中点对齐</Text>
//         </WingBlank>
//         <WingBlank style={{ marginBottom: 5 }}>
//           <Flex align="center" style={{ height: 30 }}>
//             <Text
//               style={{
//                 fontSize: 20,
//                 borderWidth: 1,
//                 borderStyle: 'solid',
//                 borderColor: '#527fe4',
//               }}
//             >
//               兜兜
//             </Text>
//             <Text
//               style={{
//                 fontSize: 18,
//                 borderWidth: 1,
//                 borderStyle: 'solid',
//                 borderColor: '#527fe4',
//               }}
//             >
//               兜兜
//             </Text>
//             <Text
//               style={{
//                 fontSize: 16,
//                 borderWidth: 1,
//                 borderStyle: 'solid',
//                 borderColor: '#527fe4',
//               }}
//             >
//               兜兜
//             </Text>
//             <Text
//               style={{
//                 fontSize: 14,
//                 borderWidth: 1,
//                 borderStyle: 'solid',
//                 borderColor: '#527fe4',
//               }}
//             >
//               兜兜
//             </Text>
//           </Flex>
//         </WingBlank>
//         <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
//           <Text>align="end":交叉轴的终点对齐</Text>
//         </WingBlank>
//         <WingBlank style={{ marginBottom: 5 }}>
//           <Flex align="end" style={{ height: 30 }}>
//             <Text
//               style={{
//                 fontSize: 20,
//                 borderWidth: 1,
//                 borderStyle: 'solid',
//                 borderColor: '#527fe4',
//               }}
//             >
//               兜兜
//             </Text>
//             <Text
//               style={{
//                 fontSize: 18,
//                 borderWidth: 1,
//                 borderStyle: 'solid',
//                 borderColor: '#527fe4',
//               }}
//             >
//               兜兜
//             </Text>
//             <Text
//               style={{
//                 fontSize: 16,
//                 borderWidth: 1,
//                 borderStyle: 'solid',
//                 borderColor: '#527fe4',
//               }}
//             >
//               兜兜
//             </Text>
//             <Text
//               style={{
//                 fontSize: 14,
//                 borderWidth: 1,
//                 borderStyle: 'solid',
//                 borderColor: '#527fe4',
//               }}
//             >
//               兜兜
//             </Text>
//           </Flex>
//         </WingBlank>
//         <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
//           <Text>
//             align="stretch":如果项目未设置高度或设为auto，将占满整个容器的高度
//           </Text>
//         </WingBlank>
//         <WingBlank style={{ marginBottom: 5 }}>
//           <WingBlank>
//             <Flex align="stretch" style={{ height: 70 }}>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   borderWidth: 1,
//                   borderStyle: 'solid',
//                   borderColor: '#527fe4',
//                 }}
//               >
//                 兜兜
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 18,
//                   borderWidth: 1,
//                   borderStyle: 'solid',
//                   borderColor: '#527fe4',
//                 }}
//               >
//                 兜兜
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 16,
//                   borderWidth: 1,
//                   borderStyle: 'solid',
//                   borderColor: '#527fe4',
//                 }}
//               >
//                 兜兜
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 14,
//                   borderWidth: 1,
//                   borderStyle: 'solid',
//                   borderColor: '#527fe4',
//                 }}
//               >
//                 兜兜
//               </Text>
//             </Flex>
//           </WingBlank>
//         </WingBlank>
//         <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
//           <Text style={{ marginBottom: 10 }}>是否折行</Text>
//           <Text>wrap="wrap":换行</Text>
//         </WingBlank>
//         <WingBlank style={{ marginBottom: 5 }}>
//           <TouchableWithoutFeedback onPress={() => ({})}>
//             <Flex wrap="wrap">
//               {'ooooooooooooooooooooooooooooo'
//                 .split('')
//                 .map((char, i) => <Circle key={`${i}-${char}`} />)}
//             </Flex>
//           </TouchableWithoutFeedback>
//         </WingBlank>
//         <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
//           <Text>wrap="nowrap":不换行</Text>
//         </WingBlank>
//         <WingBlank style={{ marginBottom: 5 }}>
//           <Flex wrap="nowrap" onPress={() => ({})}>
//             {'ooooooooooooooooooooooooooooo'
//               .split('')
//               .map((char, i) => <Circle key={`${i}-${char}`} />)}
//           </Flex>
//         </WingBlank>
//         <WhiteSpace />
//         <WhiteSpace />
//         <WhiteSpace />
//       </ScrollView>
//     );
//   }
// }


// tslint:disable:jsx-no-multiline-js
// import React from 'react';
// import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import { Button, Drawer, List, WhiteSpace } from 'antd-mobile-rn';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default class DrawerExample extends React.Component {
//   drawer;

//   onOpenChange = (isOpen) => {
//     /* tslint:disable: no-console */
//     console.log('是否打开了 Drawer', isOpen.toString());
//   }

//   render() {
//     const itemArr = Array.apply(null, Array(20))
//       .map(function(_, i) {
//         return i;
//       })
//       .map((_i, index) => {
//         if (index === 0) {
//           return (
//             <List.Item
//               key={index}
//               thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
//               multipleLine
//             >
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                 }}
//               >
//                 <Text>Categories - {index}</Text>
//                 <Button
//                   type="primary"
//                   size="small"
//                   onPress={() => this.drawer.closeDrawer()}
//                 >
//                   close drawer
//                 </Button>
//               </View>
//             </List.Item>
//           );
//         }
//         return (
//           <List.Item
//             key={index}
//             thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
//           >
//             <Text>Categories - {index}</Text>
//           </List.Item>
//         );
//       });

//     // Todo: https://github.com/DefinitelyTyped/DefinitelyTyped
//     const sidebar = (
//       <ScrollView style={[styles.container]}>
//         <List>{itemArr}</List>
//       </ScrollView>
//     );

//     return (
//       <Drawer
//         sidebar={sidebar}
//         position="left"
//         open={false}
//         drawerRef={(el) => (this.drawer = el)}
//         onOpenChange={this.onOpenChange}
//         drawerBackgroundColor="#ccc"
//       >
//         <View style={{ flex: 1, marginTop: 114, padding: 8 }}>
//           <Button onPress={() => this.drawer && this.drawer.openDrawer()}>
//             Open drawer
//           </Button>
//           <WhiteSpace />
//         </View>
//       </Drawer>
//     );
//   }
// }


import React from 'react';
import { Alert, View } from 'react-native';
import { SearchBar } from 'antd-mobile-rn';

export default class SearchBarDemo extends React.Component {
  state = {
    value: '美食',
  };

  onChange = (value) => {
    this.setState({ value });
  }

  clear = () => {
    this.setState({ value: '' });
  }

  render() {
    return (
      <View style={{ marginTop: 80 }}>
        <SearchBar defaultValue="初始值" placeholder="搜索" />
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          onSubmit={(value) => Alert.alert(value)}
          onCancel={this.clear}
          onChange={this.onChange}
          showCancelButton
        />
      </View>
    );
  }
}