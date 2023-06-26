import * as Google from 'expo-auth-session/providers/google';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import env from '@/env';
import api from '@/api';
import { Alert } from 'react-native';
import {
  setAccessToken,
  setRefreshToken,
} from '@/services/storage/storageService';
import { setCurrentUser } from '@/store/entities/auth';
import { useDispatch } from 'react-redux';
import { useRouter } from 'expo-router';
import { routes } from '@/routes';

interface User {
  given_name: string;
  family_name: string;
  email: string;
  email_verified: boolean;
}

export const useGoogleAuth = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const googleConfig = env?.google;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();

  const [, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: googleConfig?.googleAndroidClientId,
    iosClientId: googleConfig?.googleIosClientId,
    expoClientId: googleConfig?.googleExpoClientId,
    language: lang,
    scopes: ['openid', 'profile', 'email'],
  });

  const handleLoginWithGoogle = async () => {
    try {
      setLoading(true);
      await promptAsync({});
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (response?.type === 'success') {
      const { params } = response;
      const { id_token } = params || {};
      handleGoogleSignInRedirect(id_token);
    }
  }, [response]);

  const handleGoogleSignInRedirect = async (id_token: string) => {
    try {
      const res = await api.auth.googleSignInRedirectAsync({
        idToken: id_token,
      });
      const { user, accessToken, refreshToken } = res;
      await setAccessToken(accessToken);
      await setRefreshToken(refreshToken);
      dispatch(setCurrentUser(user));
      router.replace(routes.homeScreen);
    } catch (error: any) {
      console.log(error);
      Alert.alert('Error', error.message);
    }
  };

  return {
    handleLoginWithGoogle,
    loading,
  };
};
