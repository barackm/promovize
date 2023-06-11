import { setCurrentUserData } from '@/store/slices/auth';
import { Dispatch } from 'redux';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const db = database();

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import api from '@/api';

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
    const res = await api.auth.signinWithGoogle({
      uid,
      displayName,
      email,
      photoURL,
    });

    return res;
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
    const res = await api.auth.signUpWithEmail({
      uid,
      email,
    });
    return res;
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
