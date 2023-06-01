import { setCurrentUserData } from '@/store/slices/auth';
import { Dispatch } from 'redux';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const db = database();

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

export const logoutUser: any =
  (callback?: () => void) => async (dispatch: Dispatch<any>) => {
    try {
      await auth().signOut();
      dispatch(setCurrentUserData(null));
      if (callback) {
        callback();
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

export const signInOrSignupWithGoogleAsync = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const signInResult = await auth().signInWithCredential(googleCredential);
    const { uid, displayName, email, photoURL } = signInResult.user;
    const userRef = db.ref('users').child(email || '');
    const userSnapshot = await userRef.once('value');

    if (!Boolean(userSnapshot.exists())) {
      await userRef.set({
        firstName: displayName?.split(' ')[0],
        lastName: displayName?.split(' ')[1],
        email,
        photoURL,
        id: uid,
        authMethod: 'google',
        emailVerified: true,
      });
    }
    return signInResult;
  } catch (error: any) {
    if (!statusCodes) return;
    if (error.code === statusCodes?.SIGN_IN_CANCELLED) {
    } else if (error.code === statusCodes?.IN_PROGRESS) {
    } else if (error.code === statusCodes?.PLAY_SERVICES_NOT_AVAILABLE) {
    } else {
    }
  }
};

export const signUpWithEmailAndPassword = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const { email, password } = data;
    const signUpResult = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    const { uid } = signUpResult.user;
    const userRef = database().ref('users').child(email);
    const userSnapshot = await userRef.once('value');

    if (!userSnapshot.exists()) {
      await userRef.set({
        email,
        id: uid,
        authMethod: 'email',
        emailVerified: false,
      });
    }

    await signUpResult.user.sendEmailVerification();
    return signUpResult;
  } catch (error) {
    console.error('Error signing up:', error);
  }
};

export const signinAsync = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      data.email,
      data.password,
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.log(error);
  }
};
