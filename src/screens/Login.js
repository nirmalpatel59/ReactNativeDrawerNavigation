import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Login extends Component {
  login() {
    this.props.navigation.navigate('Drawer');
  }
  render() {
    const { buttonStyle } = styles;
    return (
      <View>
        <Text>This is Login page.</Text>
        <Button onPress={() => this.login()} style={buttonStyle} title='Login From Here' />
      </View>
    );
  }
}

const styles = {
  buttonStyle: {
      flex: 1, // expand component as much as possible
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#0071ff',
      marginLeft: 5,
      marginRight: 5
  },
  textStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
  }
};

export default Login;
