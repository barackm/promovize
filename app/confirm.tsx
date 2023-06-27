import { useRouter, useSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, StyleSheet, View } from 'react-native';
import jwtDecode from 'jwt-decode';
import { routes } from '@/routes';
import { useTheme } from '@/theme/ThemeProvider';
import { useDispatch } from 'react-redux';
import api from '@/api';
import { setCurrentUser } from '@/store/entities/auth';
import {
  setAccessToken,
  setRefreshToken,
} from '@/services/storage/storageService';

const Confirm: React.FC = () => {
  const params = useSearchParams<any>();
  const router = useRouter();
  const { colors } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    const { token } = params;
    if (token) {
      const decodedToken: any = jwtDecode(token || '');
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        Alert.alert('Error', 'Token is invalid');
        router.replace(routes.register);
      } else {
        handleConfirm(token);
      }
    }
  }, [params]);

  const handleConfirm = async (token: string) => {
    try {
      const res = await api.auth.verifyEmailAsync(token);
      const { user, accessToken, refreshToken } = res;
      dispatch(setCurrentUser(user));
      await setAccessToken(accessToken);
      await setRefreshToken(refreshToken);
      Alert.alert('Success', 'Your email has been verified');
      router.replace(routes.welcomeScreen);
    } catch (error: any) {
      Alert.alert('Error', error.message);
      router.replace(routes.register);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.primary,
        },
      ]}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
