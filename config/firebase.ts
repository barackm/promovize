import '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

if (__DEV__) {
  firestore().useEmulator('localhost', 4000);
  auth().useEmulator('http://localhost:4000');
}

export const db = firestore();
