import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Platform, useColorScheme, Appearance } from 'react-native';

import { getTheme, saveTheme } from '../services/storage/storageService';
import {
  Colors,
  darkModeThemeColors,
  lightModeThemeColors,
} from '@/SystemDesign/system/Color/colors';
import currentColors from '@/SystemDesign/system/Color/currentColors';

export const Themes = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
} as const;

export type ThemesType = (typeof Themes)[keyof typeof Themes];
export interface ThemeContextProps {
  colors: Colors;
  darkScheme: Colors;
  lightScheme: Colors;
  colorScheme: ThemesType | null;
  isDarkMode: boolean;
  setTheme: (scheme: ThemesType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  colors: lightModeThemeColors,
  colorScheme: Themes.LIGHT,
  darkScheme: darkModeThemeColors,
  isDarkMode: false,
  lightScheme: lightModeThemeColors,
  setTheme: () => {},
});

export const MainThemeProvider = (
  props: PropsWithChildren<{ children: ReactNode }>,
) => {
  const [colorScheme, setColorScheme] = useState<ThemesType | null>(null);

  const ios = Platform.OS === 'ios';
  const isSystemDarkModeIOS = useColorScheme() === 'dark';
  const isSystemDarkModeAndroid = Appearance.getColorScheme() === 'dark';
  const isSystemDarkMode = ios ? isSystemDarkModeIOS : isSystemDarkModeAndroid;

  const colorSchemeSystemAdjusted =
    colorScheme === Themes.SYSTEM
      ? isSystemDarkMode
        ? 'dark'
        : 'light'
      : colorScheme;

  useEffect(() => {
    const loadUserPref = async () => {
      const userPref = (await getTheme()) ?? Themes.LIGHT;
      const userPrefSystemAdjusted =
        userPref === Themes.SYSTEM
          ? isSystemDarkMode
            ? 'dark'
            : 'light'
          : userPref;
      currentColors.theme = userPrefSystemAdjusted;
      currentColors.themedColors =
        userPrefSystemAdjusted === Themes.DARK
          ? darkModeThemeColors
          : lightModeThemeColors;
      setColorScheme(userPref);
    };
    loadUserPref();
  }, [isSystemDarkMode]);

  useEffect(() => {
    if (colorScheme) {
      saveTheme(colorScheme);
    }
  }, [colorScheme]);

  const currentTheme = useMemo(
    () => ({
      colors:
        colorSchemeSystemAdjusted === 'dark'
          ? darkModeThemeColors
          : lightModeThemeColors,
      colorScheme,
      darkScheme: darkModeThemeColors,
      isDarkMode: colorSchemeSystemAdjusted === 'dark',
      lightScheme: lightModeThemeColors,
      setTheme: (scheme: ThemesType) => {
        const schemeSystemAdjusted =
          scheme === Themes.SYSTEM
            ? isSystemDarkMode
              ? 'dark'
              : 'light'
            : scheme;
        currentColors.theme = schemeSystemAdjusted;

        currentColors.themedColors =
          schemeSystemAdjusted === Themes.DARK
            ? darkModeThemeColors
            : lightModeThemeColors;
        setColorScheme(scheme);
      },
    }),
    [colorScheme, colorSchemeSystemAdjusted, isSystemDarkMode],
  );

  if (!colorScheme) {
    return null;
  }

  return (
    <ThemeContext.Provider value={currentTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export function withThemeContext<P extends object>(
  Component: React.ComponentType<P>,
) {
  return function WrapperComponent(props: Omit<P, keyof ThemeContextProps>) {
    return (
      <ThemeContext.Consumer>
        {(state: any) => <Component {...(props as P)} {...state} />}
      </ThemeContext.Consumer>
    );
  };
}
