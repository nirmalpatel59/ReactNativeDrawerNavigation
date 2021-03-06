import React from 'react';
import { Platform, StatusBar } from 'react-native';
import {
  StackNavigator,
  DrawerNavigator,
  SwitchNavigator
} from 'react-navigation';
// import { FontAwesome } from 'react-native-vector-icons';
import SignIn from './screens/Login';
import Home from './screens/Home';
import ExamHistory from './screens/ExamHistory';
import Account from './screens/Account';
import Setting from './screens/Setting';
import AboutUs from './screens/AboutUs';
import Drawer from './components/Drawer';

const headerStyle = {
  marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
};


export const SignedOut = StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign In',
      headerStyle
    }
  }
});

export const SignedIn = DrawerNavigator({
  Home: {
    screen: Home
  },
  ExamHistory: {
    screen: ExamHistory
  },
  Account: {
    screen: Account
  },
  Setting: {
    screen: Setting
  },
  AboutUs: {
    screen: AboutUs
  }
}, {
  initialRouteName: 'Home',
  contentComponent: Drawer
});


export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  );
};
