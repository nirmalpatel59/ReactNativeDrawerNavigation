import React, { Component } from 'react'; 
import { View, Text, FlatList, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation';
import { theme } from '../utilities/color-palette';

class Drawer extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    const data = [
      { key: 'Home', icon: 'home', screen: 'Home' },
      { key: 'Exam History', icon: 'history', screen: 'ExamHistory' },
      { key: 'Accounts', icon: 'account-circle', screen: 'Account' },
      { key: 'separator1', type: 'separator' },
      { key: 'Settings', icon: 'settings', screen: 'Setting' },
      { key: 'About Us', icon: 'info', screen: 'AboutUs' },
      { key: 'separator2', type: 'separator' },
      { key: 'Share App', icon: 'share', screen: 'ShareApp' },
      { key: 'Rate Us', icon: 'star', screen: 'RateUs' },      
      
    ];
    const { 
      drawerFlatList,
      drawerStyle,
      drawerHeader,
      drawerHeaderText,
      drawerItemStyle,
      seperatorStyle,
      drawerMenuStyle } = styles;
      
    return (
      <View style={drawerStyle}>
        <View style={drawerHeader}>
          <Text style={drawerHeaderText}>Nirmal Patel</Text>
        </View>
        <FlatList
          style={drawerFlatList}
          data={data}
          renderItem={({ item }, index) => {
            if (item.type === 'separator') {
              return (
                <View style={seperatorStyle} />
              );
            }
            return (
              <TouchableNativeFeedback onPress={this.navigateToScreen(item.screen)} >
                <View style={drawerItemStyle}>
                  <Icon name={item.icon} size={24} color="gray" />
                  <Text style={drawerMenuStyle} key={index}>{item.key}</Text>
                </View>
              </TouchableNativeFeedback>
            );
          }}
        />
      </View>    
    );
  }
}
const styles = {
  drawerFlatList: {
    
  },
  drawerStyle: {
    flexDirection: 'column'
  },
  drawerHeader: {
    height: 80,
    justifyContent: 'center',
    paddingLeft: 16,
    backgroundColor: theme.primary.bgNormal
  },
  drawerHeaderText: {
    fontSize: 24,
    color: theme.primary.fontColor
  },
  drawerItemStyle: { 
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center'
  },
  seperatorStyle: {
    height: 0.5,
    backgroundColor: 'gray'
  },
  drawerMenuStyle: {
    fontSize: 16,
    marginLeft: 32
  }
};

export default Drawer;