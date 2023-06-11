import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { SplashScreen, useRouter } from 'expo-router';
import { setCurrentUserData } from '@/store/slices/auth';
import { routes } from '@/routes';
import { db } from '@/config/firebase';
import { RootState } from 'app/_layout';

interface AuthProviderProps {
  children: React.ReactNode;
}

SplashScreen.preventAutoHideAsync();

const AuthProvider: React.FC<AuthProviderProps> = props => {
  const { children } = props;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async user => {
      try {
        if (user) {
          if (currentUser?.email === user.email) return;

          const { uid } = user;
          const collection = db.collection('users');
          const docRef = collection.doc(uid);
          const doc = await docRef.get();
          if (doc.exists) {
            const userData = doc.data();
            dispatch(setCurrentUserData(userData));
            router.replace(routes.homeScreen);
          }
        } else {
          router.push(routes.welcomeScreen);
        }
      } catch (error) {}
    });
    return () => unsubscribe();
  }, []);

  return <>{children}</>;
};

export default AuthProvider;

// dispatch(setCurrentUserData(userData));
// router.replace(routes.homeScreen);
// } else {
// router.push(routes.welcomeScreen);
