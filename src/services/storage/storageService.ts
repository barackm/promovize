import AsyncStorage from '@react-native-async-storage/async-storage';

export const Themes = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
} as const;

export type ThemesType = (typeof Themes)[keyof typeof Themes];

const THEME_KEY = 'theme';
const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

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

export const setAccessToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(ACCESS_TOKEN, token);
  } catch (e) {}
};

export const getAccessToken = async (): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem(ACCESS_TOKEN);
    if (token !== null) {
      return token;
    }
  } catch (e) {}
  return null;
};

export const removeAccessToken = async () => {
  try {
    await AsyncStorage.removeItem(ACCESS_TOKEN);
  } catch (e) {}
};

export const setRefreshToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(REFRESH_TOKEN, token);
  } catch (error) {
    console.log(error);
  }
};

export const getRefreshToken = async (): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem(REFRESH_TOKEN);
    if (token !== null) {
      return token;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const removeRefreshToken = async () => {
  try {
    await AsyncStorage.removeItem(REFRESH_TOKEN);
  } catch (error) {
    console.log(error);
  }
};
