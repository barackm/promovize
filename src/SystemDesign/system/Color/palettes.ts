import { mapValues } from 'lodash';

export const globalColors = {
  green10: '#EAFCE8',
  green20: '#CDFACD',
  green30: '#A6F5AC',
  green40: '#74E082',
  green50: '#4BD166',
  green60: '#1DB847',
  green70: '#189943',
  green80: '#09752D',
  green90: '#005723',
  green100: '#003816',

  blue10: '#EDF9FF',
  blue20: '#D1EDFF',
  blue30: '#A3D7FF',
  blue40: '#6BBFFF',
  blue50: '#3898FF',
  blue60: '#0E76FD',
  blue70: '#1761E0',
  blue80: '#0B4AB8',
  blue90: '#053085',
  blue100: '#001E59',

  purple10: '#F7F5FF',
  purple20: '#E7E0FF',
  purple30: '#C6B8FF',
  purple40: '#9E8FFF',
  purple50: '#7A70FF',
  purple60: '#5F5AFA',
  purple70: '#5248E0',
  purple80: '#4936C2',
  purple90: '#38228F',
  purple100: '#2C0D6B',

  pink10: '#FFF0FA',
  pink20: '#FFD6F1',
  pink30: '#FFB8E2',
  pink40: '#FF99CF',
  pink50: '#FF7AB8',
  pink60: '#FF5CA0',
  pink70: '#E04887',
  pink80: '#CC3976',
  pink90: '#851B53',
  pink100: '#570040',

  red10: '#FFF0F0',
  red20: '#FFD4D1',
  red30: '#FFACA3',
  red40: '#FF887A',
  red50: '#FF6257',
  red60: '#FA423C',
  red70: '#D13732',
  red80: '#B22824',
  red90: '#7A1714',
  red100: '#520907',

  orange10: '#FFF6EB',
  orange20: '#FFE7CC',
  orange30: '#FFCF99',
  orange40: '#FFB266',
  orange50: '#FF983D',
  orange60: '#FF801F',
  orange70: '#E06E16',
  orange80: '#AD530E',
  orange90: '#703B12',
  orange100: '#3D1E0A',

  yellow10: '#FFFBE0',
  yellow20: '#FFF5C2',
  yellow30: '#FFEE99',
  yellow40: '#FFE566',
  yellow50: '#FFDF3D',
  yellow60: '#FFD014',
  yellow70: '#EBAF09',
  yellow80: '#B88700',
  yellow90: '#7A600A',
  yellow100: '#42320B',

  grey10: '#F7F7F7',
  grey20: 'rgba(9, 17, 31, 0.05)',
  grey30: 'rgba(16, 21, 31, 0.1)',
  grey40: 'rgba(16, 21, 31, 0.16)',
  grey50: 'rgba(22, 25, 31, 0.24)',
  grey60: 'rgba(26, 28, 31, 0.36)',
  grey70: 'rgba(27, 29, 31, 0.5)',
  grey80: 'rgba(27, 29, 31, 0.7)',
  grey90: 'rgba(27, 29, 31, 0.88)',
  grey100: '#000',

  white10: '#1B1C1E',
  white20: 'rgba(245, 248, 255, 0.12)',
  white30: 'rgba(245, 248, 255, 0.16)',
  white40: 'rgba(245, 248, 255, 0.2)',
  white50: 'rgba(245, 248, 255, 0.28)',
  white60: 'rgba(245, 248, 255, 0.4)',
  white70: 'rgba(245, 248, 255, 0.56)',
  white80: 'rgba(245, 248, 255, 0.76)',
  white90: 'rgba(247, 250, 255, 0.92)',
  white100: '#FFFFFF',

  blueGrey10: '#F5F5F7',
  blueGrey20: '#E6E9F0',
  blueGrey30: '#DADEE5',
  blueGrey40: '#CAD0D9',
  blueGrey50: '#AFB9C7',
  blueGrey60: '#929EAD',
  blueGrey70: '#78828F',
  blueGrey80: '#5F6670',
  blueGrey90: '#3C4047',
  blueGrey100: '#242529',

  dark: '#1E2028',
  darker: '#12131A',
  offwhite: '#F5F5F7',
  paleBlue: '#579DFF',
  white: '#FFFFFF',
  swapPurple: '#575CFF',
  appleBlue: '#0E76FD',
  appleBlueLight: '#1F87FF',
  black: '#000000',
  blackTint: '#12131a',
  grey: 'rgb(60, 66, 82)',
};

export const shadowColors = selectForegroundColors(
  'accent',
  'blue',
  'green',
  'red',
  'purple',
  'pink',
  'orange',
  'yellow',
  'black',
);
export type ShadowColor = (typeof shadowColors)[number];

export type ForegroundColor =
  | 'label'
  | 'labelSecondary'
  | 'labelTertiary'
  | 'labelQuaternary'
  | 'blue'
  | 'green'
  | 'red'
  | 'purple'
  | 'pink'
  | 'orange'
  | 'yellow'
  | 'fill'
  | 'fillSecondary'
  | 'separator'
  | 'separatorSecondary'
  | 'separatorTertiary'
  | 'buttonStroke'
  | 'buttonStrokeSecondary'
  | 'shadowNear'
  | 'shadowFar'
  | 'black';

export type BackgroundColor =
  | 'surfacePrimary'
  | 'surfacePrimaryElevated'
  | 'surfaceSecondary'
  | 'surfaceSecondaryElevated'
  | 'fill'
  | 'fillSecondary'
  | 'blue'
  | 'green'
  | 'red'
  | 'purple'
  | 'pink'
  | 'orange'
  | 'yellow'
  | 'body'
  | 'action'
  | 'card'
  | 'cardBackdrop'
  | 'black';

export const backgroundColors: Record<
  BackgroundColor,
  BackgroundColorValue | ContextualColorValue<BackgroundColorValue>
> = {
  surfacePrimary: {
    light: {
      color: globalColors.white100,
      mode: 'light',
    },
    dark: {
      color: globalColors.darker,
      mode: 'dark',
    },
  },
  surfacePrimaryElevated: {
    light: {
      color: globalColors.white100,
      mode: 'light',
    },
    dark: {
      color: globalColors.darker,
      mode: 'dark',
    },
  },
  surfaceSecondary: {
    light: {
      color: globalColors.blueGrey10,
      mode: 'light',
    },
    dark: {
      color: globalColors.darker,
      mode: 'dark',
    },
  },
  surfaceSecondaryElevated: {
    light: {
      color: globalColors.white100,
      mode: 'light',
    },
    dark: {
      color: globalColors.dark,
      mode: 'dark',
    },
  },
  fill: {
    light: {
      color: globalColors.grey30,
      mode: 'light',
    },
    dark: {
      color: globalColors.white30,
      mode: 'dark',
    },
  },
  fillSecondary: {
    light: {
      color: globalColors.grey20,
      mode: 'light',
    },
    dark: {
      color: globalColors.white20,
      mode: 'dark',
    },
  },
  blue: {
    light: {
      color: globalColors.blue60,
      mode: 'dark',
    },
    dark: {
      color: globalColors.blue50,
      mode: 'dark',
    },
  },
  green: {
    light: {
      color: globalColors.green60,
      mode: 'dark',
    },
    dark: {
      color: globalColors.green50,
      mode: 'dark',
    },
  },
  red: {
    light: {
      color: globalColors.red60,
      mode: 'dark',
    },
    dark: {
      color: globalColors.red50,
      mode: 'dark',
    },
  },
  purple: {
    light: {
      color: globalColors.purple60,
      mode: 'dark',
    },
    dark: {
      color: globalColors.purple50,
      mode: 'dark',
    },
  },
  pink: {
    light: {
      color: globalColors.pink60,
      mode: 'dark',
    },
    dark: {
      color: globalColors.pink50,
      mode: 'dark',
    },
  },
  orange: {
    light: {
      color: globalColors.orange60,
      mode: 'dark',
    },
    dark: {
      color: globalColors.orange50,
      mode: 'dark',
    },
  },
  yellow: {
    light: {
      color: globalColors.yellow60,
      mode: 'light',
    },
    dark: {
      color: globalColors.yellow50,
      mode: 'light',
    },
  },
  action: {
    dark: {
      color: globalColors.appleBlueLight,
      mode: 'darkTinted',
    },
    light: {
      color: globalColors.appleBlue,
      mode: 'darkTinted',
    },
  },
  body: {
    dark: {
      color: globalColors.blackTint,
      mode: 'dark',
    },
    darkTinted: {
      color: globalColors.blackTint,
      mode: 'darkTinted',
    },
    light: {
      color: globalColors.white,
      mode: 'light',
    },
    lightTinted: {
      color: globalColors.white,
      mode: 'lightTinted',
    },
  },
  card: {
    dark: {
      color: globalColors.dark,
      mode: 'dark',
    },
    light: {
      color: globalColors.white,
      mode: 'light',
    },
  },
  cardBackdrop: {
    dark: {
      color: globalColors.darker,
      mode: 'dark',
    },
    light: {
      color: globalColors.offwhite,
      mode: 'light',
    },
  },
  black: {
    dark: {
      color: globalColors.darker,
      mode: 'dark',
    },
    light: {
      color: globalColors.darker,
      mode: 'dark',
    },
  },
};

function selectBackgroundAsForeground(
  backgroundName: BackgroundColor,
): string | ContextualColorValue<string> {
  const bg = backgroundColors[backgroundName];

  if ('color' in bg) {
    return bg.color;
  }

  return {
    dark: bg.dark.color,
    light: bg.light.color,
    ...(bg.lightTinted && { lightTinted: bg.lightTinted.color }),
    ...(bg.darkTinted && { darkTinted: bg.darkTinted.color }),
  };
}

export const foregroundColors: Record<
  ForegroundColor,
  string | ContextualColorValue<string>
> = {
  label: {
    light: globalColors.grey100,
    dark: globalColors.white100,
  },
  labelSecondary: {
    light: globalColors.grey80,
    dark: globalColors.white80,
  },
  labelTertiary: {
    light: globalColors.grey70,
    dark: globalColors.white70,
  },
  labelQuaternary: {
    light: globalColors.grey60,
    dark: globalColors.white60,
  },
  shadowNear: globalColors.grey100,
  shadowFar: {
    dark: globalColors.grey100,
    light: '#25292E',
  },
  separator: {
    light: globalColors.grey20,
    dark: globalColors.white20,
  },
  separatorSecondary: {
    light: globalColors.grey20,
    dark: 'rgba(245, 248, 255, 0.06)',
  },
  separatorTertiary: {
    light: 'rgba(9, 17, 31, 0.02)',
    dark: 'rgba(245, 248, 255, 0.02)',
  },
  buttonStroke: {
    light: 'rgba(0, 0, 0, 0.05)',
    dark: 'rgba(255, 255, 255, 0.03)',
  },
  buttonStrokeSecondary: {
    light: globalColors.white20,
    dark: globalColors.grey20,
  },
  blue: selectBackgroundAsForeground('blue'),
  green: selectBackgroundAsForeground('green'),
  red: selectBackgroundAsForeground('red'),
  purple: selectBackgroundAsForeground('purple'),
  pink: selectBackgroundAsForeground('pink'),
  orange: selectBackgroundAsForeground('orange'),
  yellow: selectBackgroundAsForeground('yellow'),
  fill: selectBackgroundAsForeground('fill'),
  fillSecondary: selectBackgroundAsForeground('fillSecondary'),
  black: selectBackgroundAsForeground('black'),
};

export type ColorMode = 'light' | 'lightTinted' | 'dark' | 'darkTinted';

export type BackgroundColorValue = {
  color: string;
  mode: ColorMode;
};

export type Palette = {
  backgroundColors: Record<BackgroundColor, BackgroundColorValue>;
  foregroundColors: Record<ForegroundColor, string>;
};

export type ContextualColorValue<Value> = {
  light: Value;
  lightTinted?: Value;
  dark: Value;
  darkTinted?: Value;
};

export function getValueForColorMode<Value>(
  value: Value | ContextualColorValue<Value>,
  colorMode: ColorMode,
): Value {
  if (typeof value === 'object' && value !== null && 'light' in value) {
    if (colorMode === 'darkTinted') {
      return value.darkTinted ?? value.dark;
    }

    if (colorMode === 'lightTinted') {
      return value.lightTinted ?? value.light;
    }
    return value[colorMode];
  }

  return value;
}

function selectForegroundColors<
  SelectedColors extends readonly (ForegroundColor | 'accent')[],
>(...colors: SelectedColors): SelectedColors {
  return colors;
}

const createPalette = (colorMode: ColorMode): Palette => {
  return {
    backgroundColors: mapValues(backgroundColors, value => {
      if ('color' in value) {
        return value;
      }

      if (colorMode === 'darkTinted') {
        return value.darkTinted ?? value.dark;
      }

      if (colorMode === 'lightTinted') {
        return value.lightTinted ?? value.light;
      }

      return value[colorMode];
    }),
    foregroundColors: mapValues(foregroundColors, value =>
      getValueForColorMode(value, colorMode),
    ),
  };
};

export const getDefaultAccentColorForColorMode = (colorMode: ColorMode) => {
  const defaultAccentColor = backgroundColors.fill;

  return getValueForColorMode(defaultAccentColor, colorMode);
};

export const palettes: Record<ColorMode, Palette> = {
  dark: createPalette('dark'),
  darkTinted: createPalette('darkTinted'),
  light: createPalette('light'),
  lightTinted: createPalette('lightTinted'),
};

export const textColors = selectForegroundColors(
  'accent',
  'label',
  'labelSecondary',
  'labelTertiary',
  'labelQuaternary',
  'blue',
  'green',
  'red',
  'purple',
  'pink',
  'orange',
  'yellow',
);

export const separatorColors = selectForegroundColors(
  'separator',
  'separatorSecondary',
  'separatorTertiary',
);

export type SeparatorColor = (typeof separatorColors)[number];
export type TextColor = (typeof textColors)[number];
