import AsyncStorage from '@react-native-async-storage/async-storage';

export const Themes = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
} as const;

export type ThemesType = (typeof Themes)[keyof typeof Themes];

const THEME_KEY = 'theme';

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
