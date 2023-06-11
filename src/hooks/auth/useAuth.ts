import { routes } from '@/routes';
import auth from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router) return;
    const unsubscribe = auth().onAuthStateChanged(user => {
      console.log(user, 'user');
      if (user) {
        router.replace(routes.homeScreen);
      } else {
        router.replace(routes.welcomeScreen);
      }
    });
    return () => unsubscribe();
  }, [router]);
};
