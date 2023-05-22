import { useForegroundColor } from '@/SystemDesign/system/Color/useForegroundColors';
import { TextProps, TextWeight } from './Text';
import {
  textSizes,
  textWeights,
} from '@/SystemDesign/system/typography/typography';
import { useMemo } from 'react';
import font from '@/styles/fonts';

export const useTextStyles = ({
  align: textAlign,
  color,
  size = '15pt',
  weight = 'regular',
  tabularNumbers = false,
  uppercase = false,
  textDecorationLine,
}: Pick<
  TextProps,
  | 'align'
  | 'color'
  | 'size'
  | 'weight'
  | 'tabularNumbers'
  | 'uppercase'
  | 'textDecorationLine'
>) => {
  const colorValue = useForegroundColor(color ?? 'label');
  const sizeStyles = textSizes[size];
  const weightStyles = textWeights[weight];

  const getFontFamilly = (weight: TextWeight) => {
    switch (weight) {
      case 'regular':
        return font.family.SFProRounded + '-Regular';
      case 'medium':
        return font.family.SFProRounded + '-Medium';
      case 'semibold':
        return font.family.SFProRounded + '-Semibold';
      case 'bold':
        return font.family.SFProRounded + '-Bold';
      default:
        return font.family.SFProRounded + '-Regular';
    }
  };

  const fontFamily = getFontFamilly(weight);

  const textStyle = useMemo(
    () =>
      ({
        color: colorValue,
        textAlign,
        ...sizeStyles,
        ...weightStyles,
        ...(uppercase ? { textTransform: 'uppercase' as const } : null),
        ...(tabularNumbers ? { fontVariant: ['tabular-nums' as const] } : null),
        fontFamily,
        textDecorationLine,
      } as const),
    [
      sizeStyles,
      weightStyles,
      textAlign,
      colorValue,
      tabularNumbers,
      uppercase,
    ],
  );

  return textStyle;
};
