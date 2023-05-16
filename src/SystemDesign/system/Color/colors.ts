import { memoFn } from '@/utils/memoFn';
import currentColors from './currentColors';
import { globalColors } from './palettes';
import chroma from 'chroma-js';

const buildRgba = memoFn(
  (color: string, alpha = 1) => `rgba(${chroma(color).rgb()},${alpha})`,
);

const darkModeColors = {
  appleBlue: '#1F87FF',
  primary: '#0A84FF',
  green: '#4BD166',
  secondary: '#5E5CE6',
  background: '#121212',
  surface: '#1C1C1E',
  error: '#FF453A',
  text: '#FFFFFF',
  placeholder: '#8E8E93',
  black: '#FFFFFF',
  fill: globalColors.white30,
  fillSecondary: globalColors.white20,
  white: '#12131A',
  whiteLabel: '#FFFFFF',
  shadow: '#00000',
  shadowBlack: '#000000',
  shadowGrey: '#00000',
};

export type Colors = ReturnType<typeof getColorsByTheme>;

const getColorsByTheme = (isDarkMode?: boolean) => {
  let base = {
    appleBlue: '#0E76FD',
    primary: '#007AFF',
    secondary: '#5856D6',
    background: '#FFFFFF',
    surface: '#F2F2F7',
    error: '#FF3B30',
    text: '#000000',
    placeholder: '#C7C7CC',
    black: '#000000',
    blueGreyDark: '#3C4252',
    blueGreyDark04: '#222326',
    blueGreyDark20: '#3A3D45',
    blueGreyDark30: '#C5C6CB',
    blueGreyDark40: '#B1B3BA',
    blueGreyDark50: '#9DA0A8',
    blueGreyDark60: '#898D97',
    blueGreyDark80: '#636875',
    blueGreyDarker: '#0F0F11',
    blueGreyDarkLight: '#F3F4F5',
    grey: '#A9ADB9',
    grey20: '#333333',
    lighterGrey: '#F7F7F8',
    lightestGrey: '#E9EBEF',
    lightGrey: '#CDCFD4',
    fill: globalColors.grey30,
    fillSecondary: globalColors.grey20,
    orangeLight: '#FEBE44',
    white: '#FFFFFF',
    whiteLabel: '#FFFFFF',
    shadow: '#25292E',
    shadowBlack: '#000000',
    shadowGrey: '#6F6F6F',
    green: '#2CCC00',
  };

  if (isDarkMode) {
    base = {
      ...base,
      ...darkModeColors,
    };
  }

  return {
    ...base,
    alpha: buildRgba,
  };
};

export const darkModeThemeColors = getColorsByTheme(true);
export const lightModeThemeColors = getColorsByTheme(false);
const colors = currentColors.themedColors ?? lightModeThemeColors;

export default {
  ...colors,
  darkModeColors,
  darkModeThemeColors,
  lightModeThemeColors,
};
