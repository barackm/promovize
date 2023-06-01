import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { SplashScreen, useRouter } from 'expo-router';
import database from '@react-native-firebase/database';
import { setCurrentUserData } from '@/store/slices/auth';
import { routes } from '@/routes';

const db = database();

interface AuthProviderProps {
  children: React.ReactNode;
}

SplashScreen.preventAutoHideAsync();

const AuthProvider: React.FC<AuthProviderProps> = props => {
  const { children } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        const { email } = user;
        const userRef = db.ref('users');
        userRef
          .orderByChild('email')
          .equalTo(email)
          .once('value', snapshot => {
            if (snapshot.exists()) {
              const userData = Object.values(snapshot.val())[0];
              dispatch(setCurrentUserData(userData));
              router.replace(routes.homeScreen);
            } else {
              router.push(routes.welcomeScreen);
            }
          });
      } else {
        router.push(routes.welcomeScreen);
      }
    });
    return () => unsubscribe();
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
