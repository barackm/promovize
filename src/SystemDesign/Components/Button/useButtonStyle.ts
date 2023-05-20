import { useMemo } from 'react';
import { ButtonProps, ButtonSizes } from './Button';
import { BoxProps } from '../Box/Box';
import { metrics } from '@/styles';
import { TextSize } from '../Text/Text';
import { ViewStyle } from 'react-native/types';
import { useBackgroundColor } from '@/SystemDesign/system/Color/BackgroundProvider';
import { TextColor } from '@/SystemDesign/system/Color/palettes';
import { CustomColor } from '@/SystemDesign/system/Color/useForegroundColors';
import { android } from '@/env';

interface ReturnValue {
  buttonStyle: any;
  textSize: TextSize;
  height: number;
  otherStyle: ViewStyle;
  textColor: TextColor | CustomColor;
}

export const useButtonStyle = (props: ButtonProps): ReturnValue => {
  const {
    size = 'small',
    iconButton,
    background = 'action',
    variant,
    color = 'label',
    disabled,
    tintColor,
    autoWidth,
  } = props;

  const backgroundColor = useBackgroundColor(background);

  const buttonSize: Record<ButtonSizes, number> = {
    medium: metrics.moderateScale(43),
    big: metrics.moderateScale(56),
    small: metrics.moderateScale(38),
  };

  const textSize: Record<ButtonSizes, TextSize> = {
    medium: '16px / 22px',
    big: '18px / 27px',
    small: '17pt',
  };

  const height = buttonSize[size as ButtonSizes];

  const textColor: TextColor | CustomColor =
    variant === 'outlined' || variant === 'text'
      ? {
          custom: backgroundColor,
        }
      : color;

  const otherStyle: ViewStyle = useMemo(
    () => ({
      borderWidth: metrics.moderateScale(android ? 1.3 : 1.3),
      borderColor: variant === 'outlined' ? backgroundColor : 'transparent',
      backgroundColor:
        variant === 'outlined' || variant === 'text' || tintColor
          ? 'transparent'
          : backgroundColor,
      opacity: disabled ? 0.5 : 1,
    }),
    [variant, disabled, tintColor, autoWidth, background],
  );

  const buttonStyle: BoxProps = useMemo(
    () => ({
      height: { custom: height },
      paddingHorizontal: iconButton ? { custom: 0 } : '15px',
      width: iconButton ? { custom: height } : 'full',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: metrics.moderateScale(buttonSize[size as ButtonSizes] / 2),
      background,
      alignSelf: 'flex-start',
    }),
    [size, iconButton, background, variant, tintColor],
  );

  return {
    buttonStyle,
    textSize: textSize[size],
    height,
    textColor,
    otherStyle,
  };
};
