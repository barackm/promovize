import AsyncStorage from '@react-native-async-storage/async-storage';

export const Themes = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
} as const;

export type ThemesType = (typeof Themes)[keyof typeof Themes];

const THEME_KEY = 'theme';
const AUTH_TOKEN_KEY = 'Authorization';
const AUTH_DATA = 'auth_data';

export const saveTheme = async (theme: ThemesType) => {
  try {
    await AsyncStorage.setItem(THEME_KEY, theme);
  } catch (e) {}
};

export const getTheme = async (): Promise<ThemesType | null> => {
  try {
    const theme = await AsyncStorage.getItem(THEME_KEY);
    if (theme !== null) {
      return theme as ThemesType;
    }
  } catch (e) {}
  return null;
};

export const saveAuthToken = async (token: string | undefined) => {
  try {
    await AsyncStorage.setItem(AUTH_TOKEN_KEY, token || '');
  } catch (error) {}
};

export const getAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      return token;
    }
  } catch (error) {}
  return null;
};

export const saveAuthData = async (auth: string | undefined) => {
  try {
    await AsyncStorage.setItem(AUTH_DATA, auth || '');
  } catch (error) {}
};

export const getAuthData = async () => {
  try {
    const token = await AsyncStorage.getItem(AUTH_DATA);
    if (token) {
      return token;
    }
  } catch (error) {}

  return null;
};

export const removeAuthData = async () => {
  try {
    await AsyncStorage.removeItem(AUTH_DATA);
    return true;
  } catch (error) {}
};
