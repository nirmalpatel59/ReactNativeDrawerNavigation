import { AsyncStorage } from 'react-native';

export const USER_KEY = 'auth-demo-key';
const authUrl = 'http://192.168.56.1:3000/';

export const onSignIn = () => {
  return fetch(authUrl, {
    method: 'GET'
  }).then((response) => response.json())
  .then((responseJson) => {
    AsyncStorage.setItem(USER_KEY, 'true');
    console.log(responseJson);
    return responseJson;
  }).catch((error) => {
    console.error(error);
  });
}

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
