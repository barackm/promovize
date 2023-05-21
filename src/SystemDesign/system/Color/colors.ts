import { memoFn } from '@/utils/memoFn';
import currentColors from './currentColors';
import { globalColors } from './palettes';
import chroma from 'chroma-js';

const buildRgba = memoFn(
  (color: string, alpha = 1) => `rgba(${chroma(color).rgb()},${alpha})`,
);

const darkModeColors = {
  appleBlue: '#1F87FF',
  primary: '#1B45B9',
  secondary: '#FDEE4F',
  green: '#4BD166',
  background: '#121212',
  surface: '#1C1C1E',
  error: '#FF453A',
  text: '#F2F2F2',
  placeholder: '#8E8E93',
  black: '#FFFFFF',
  fill: globalColors.white30,
  fillSecondary: globalColors.white20,
  white: '#12131A',
  whiteLabel: '#FFFFFF',
  shadow: '#00000',
  shadowBlack: '#000000',
  shadowGrey: '#00000',
  blueGreyDark: '#8798A4',
  blueGreyDark02: '#353F49',
  blueGreyDark04: '#2F3D48',
  blueGreyDark20: '#404F5B',
  blueGreyDark30: '#50636E',
  blueGreyDark40: '#607781',
  blueGreyDark50: '#708B94',
  blueGreyDark60: '#809FA7',
  blueGreyDark80: '#A1B4C1',
  blueGreyDarker: '#1E2C36',
  blueGreyDarkLight: '#B2C4D1',
};

export type Colors = ReturnType<typeof getColorsByTheme>;

const getColorsByTheme = (isDarkMode?: boolean) => {
  let base = {
    appleBlue: '#0E76FD',
    primary: '#1B45B9',
    secondary: '#FDEE4F',
    background: '#FFFFFF',
    surface: '#F2F2F7',
    error: '#FF3B30',
    text: '#333333',
    placeholder: '#C7C7CC',
    black: '#000000',
    blueGreyDark: '#465362',
    blueGreyDark02: '#E8ECF0',
    blueGreyDark04: '#D9DEE6',
    blueGreyDark20: '#AAB4BE',
    blueGreyDark30: '#8394A3',
    blueGreyDark40: '#5D7488',
    blueGreyDark50: '#465A69',
    blueGreyDark60: '#3E5366',
    blueGreyDark80: '#1F3244',
    blueGreyDarker: '#0C1B29',
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
    veryLightBlueGrey: '#D9DEE6',
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
