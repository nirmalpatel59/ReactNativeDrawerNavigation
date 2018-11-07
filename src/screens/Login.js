import React from 'react';
import { View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn } from '../utilities/auth';

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder='Email address...' />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder='Password...' />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor='#03A9F4'
        title='SIGN IN'
        onPress={() => {
          onSignIn().then((data) => {
            if (data) {
              console.log(data);
              // navigation.navigate('SignedIn');
            } else {
              console.log('emailId or Password is wrong');
            }
          });
        }}
      />
    </Card>
  </View>
);


// import React, { Component } from 'react';
// import { View, Text, Button } from 'react-native';

// class Login extends Component {
//   login() {
//     this.props.navigation.navigate('Drawer');
//   }
//   render() {
//     const { buttonStyle } = styles;
//     return (
//       <View>
//         <Text>This is Login page.</Text>
//         <Button onPress={() => this.login()} style={buttonStyle} title='Login From Here' />
//       </View>
//     );
//   }
// }

// const styles = {
//   buttonStyle: {
//       flex: 1, // expand component as much as possible
//       alignSelf: 'stretch',
//       backgroundColor: '#fff',
//       borderRadius: 5,
//       borderWidth: 1,
//       borderColor: '#0071ff',
//       marginLeft: 5,
//       marginRight: 5
//   },
//   textStyle: {
//       alignSelf: 'center',
//       color: '#007aff',
//       fontSize: 16,
//       fontWeight: '600',
//       paddingTop: 10,
//       paddingBottom: 10
//   }
// };

// export default Login;
