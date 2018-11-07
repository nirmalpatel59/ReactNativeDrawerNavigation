/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './src/screens/Login';
// import Drawer from './src/components/Drawer';
import DrawerNavigator from './src/screens';

const AppNavigator = StackNavigator(
  {
    Login: { screen: Login },
    Drawer: { 
      screen: ({ navigation }) => <DrawerNavigator screenProps={{ rootNavigation: navigation }} /> 
    }
  },
  {
    index: 0,
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
      // <DrawerNavigator />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   }
// });
