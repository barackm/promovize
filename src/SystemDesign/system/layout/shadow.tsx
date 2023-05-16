import { ForegroundColor, ShadowColor, shadowColors } from '../Color/palettes';
import { CustomColor } from '../Color/useForegroundColors';

type ShadowSize = '12px' | '18px' | '24px' | '30px';
type ShadowColorMode = 'light' | 'dark';
type ShadowColorValue = ForegroundColor | 'accent' | CustomColor;

type ShadowSpec = {
  ios: {
    color: ShadowColorValue;
    x: number;
    y: number;
    opacity: number;
    blur: number;
  }[];
  android: {
    color: ShadowColorValue;
    elevation: number;
    opacity: number;
  };
};

type ShadowValue = ShadowSpec | Record<ShadowColorMode, ShadowSpec>;

function coloredShadows<Size extends ShadowSize>(
  size: Size,
  getShadowForColor: (color: ShadowColor) => ShadowValue,
): Record<`${Size} ${ShadowColor}`, ShadowValue> {
  return Object.assign(
    {},
    ...shadowColors.map(color => ({
      [`${size} ${color}`]: getShadowForColor(color),
    })),
  );
}

const shadowHierarchy: Record<
  ShadowSize | `${ShadowSize} ${ShadowColor}`,
  ShadowValue
> = {
  '12px': {
    light: {
      ios: [
        { x: 0, y: 4, blur: 12, color: 'shadowFar', opacity: 0.08 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.02 },
      ],
      android: { elevation: 16, color: 'shadowFar', opacity: 0.55 },
    },
    dark: {
      ios: [
        { x: 0, y: 4, blur: 12, color: 'shadowFar', opacity: 0.24 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.02 },
      ],
      android: { elevation: 16, color: 'shadowFar', opacity: 1 },
    },
  },
  ...coloredShadows('12px', color => ({
    light: {
      ios: [
        { x: 0, y: 4, blur: 12, color, opacity: 0.24 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.02 },
      ],
      android: { elevation: 16, color, opacity: 1 },
    },
    dark: {
      ios: [
        { x: 0, y: 4, blur: 12, color: 'shadowFar', opacity: 0.24 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.02 },
      ],
      android: { elevation: 16, color: 'shadowFar', opacity: 1 },
    },
  })),

  '18px': {
    light: {
      ios: [
        { x: 0, y: 6, blur: 18, color: 'shadowFar', opacity: 0.08 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.02 },
      ],
      android: { elevation: 24, color: 'shadowFar', opacity: 0.6 },
    },
    dark: {
      ios: [
        { x: 0, y: 6, blur: 18, color: 'shadowFar', opacity: 0.24 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.02 },
      ],
      android: { elevation: 24, color: 'shadowFar', opacity: 1 },
    },
  },
  ...coloredShadows('18px', color => ({
    light: {
      ios: [
        { x: 0, y: 6, blur: 18, color, opacity: 0.24 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.02 },
      ],
      android: { elevation: 44, color, opacity: 1 },
    },
    dark: {
      ios: [
        { x: 0, y: 6, blur: 18, color: 'shadowFar', opacity: 0.24 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.02 },
      ],
      android: { elevation: 24, color: 'shadowFar', opacity: 1 },
    },
  })),

  '24px': {
    light: {
      ios: [
        { x: 0, y: 8, blur: 24, color: 'shadowFar', opacity: 0.12 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.02 },
      ],
      android: { elevation: 32, color: 'shadowFar', opacity: 0.7 },
    },
    dark: {
      ios: [
        { x: 0, y: 8, blur: 24, color: 'shadowFar', opacity: 0.32 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.02 },
      ],
      android: { elevation: 32, color: 'shadowFar', opacity: 1 },
    },
  },
  ...coloredShadows('24px', color => ({
    light: {
      ios: [
        { x: 0, y: 8, blur: 24, color, opacity: 0.32 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.02 },
      ],
      android: { elevation: 54, color, opacity: 1 },
    },
    dark: {
      ios: [
        { x: 0, y: 8, blur: 24, color: 'shadowFar', opacity: 0.32 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.02 },
      ],
      android: { elevation: 32, color: 'shadowFar', opacity: 1 },
    },
  })),

  '30px': {
    light: {
      ios: [
        { x: 0, y: 10, blur: 30, color: 'shadowFar', opacity: 0.16 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.2 },
      ],
      android: { elevation: 24, color: 'shadowFar', opacity: 1 },
    },
    dark: {
      ios: [
        { x: 0, y: 10, blur: 30, color: 'shadowFar', opacity: 0.4 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.02 },
      ],
      android: { elevation: 24, color: 'shadowFar', opacity: 1 },
    },
  },
  ...coloredShadows('30px', color => ({
    light: {
      ios: [
        { x: 0, y: 10, blur: 30, color, opacity: 0.4 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.02 },
      ],
      android: { elevation: 54, color, opacity: 1 },
    },
    dark: {
      ios: [
        { x: 0, y: 10, blur: 30, color: 'shadowFar', opacity: 0.4 },
        { x: 0, y: 2, blur: 6, color: 'shadowNear', opacity: 0.02 },
      ],
      android: { elevation: 24, color: 'shadowFar', opacity: 1 },
    },
  })),
};

export const shadows = {
  ...shadowHierarchy,
};

export type CustomShadow = { custom: ShadowValue };
export type Shadow = keyof typeof shadows | CustomShadow;
