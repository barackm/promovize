import {
  getAccessToken,
  getRefreshToken,
} from '@/services/storage/storageService';
import { RootState } from '@/store';
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { useTheme } from '@/theme/ThemeProvider';
import api from '@/api';
import axios from 'axios';
import * as Linking from 'expo-linking';
import { setCurrentUser } from '@/store/entities/auth';
import { routes } from '@/routes';
import { useRootNavigationState, useRouter } from 'expo-router';
interface AuthContainerProps {
  children: React.ReactNode;
}

const AuthContainer: React.FC<AuthContainerProps> = props => {
  const { children } = props;
  const [fetching, setFetching] = React.useState<boolean>(false);
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { colors } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  const checkAuth = async () => {
    if (currentUser) {
      return setFetching(false);
    }

    try {
      setFetching(true);
      const sessionToken = await getAccessToken();
      const refreshToken = await getRefreshToken();

      if (sessionToken) {
        const decodedToken: any = jwtDecode(sessionToken);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          if (refreshToken) {
            console.log('refresh token');
          } else {
            console.log('no refresh token');
          }
        } else {
          axios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${sessionToken}`;
          if (!currentUser) {
            await getUserInfo();
          }
        }
      }
    } catch (error) {
    } finally {
      setFetching(false);
    }
  };

  const getUserInfo = async () => {
    try {
      setFetching(true);
      const res = await api.auth.getUserDataAsync();
      const { user } = res;
      if (user) {
        dispatch(setCurrentUser(user));
      }
    } catch (error) {
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    Linking.getInitialURL().then(url => {
      if (url) {
        handleDeepLink(url);
      }
    });

    const deepLinkListener = Linking.addEventListener('url', event => {
      handleDeepLink(event.url);
    });

    return () => {
      deepLinkListener.remove();
    };
  }, []);

  const handleDeepLink = async (url: string) => {
    const { queryParams, path } = await Linking.parse(url);
    const { token } = queryParams || {};

    if (path === routes.confirmEmail.replace('/', '') && token) {
      setTimeout(() => {
        router.replace(`${routes.confirmEmail}?token=${token}`);
      }, 100);
    }
  };

  React.useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      {fetching ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.primary,
          }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default AuthContainer;

const styles = StyleSheet.create({
  container: {},
});
