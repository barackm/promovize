import { useMemo } from 'react';
import { TextInputProps } from './TextInput';
import { BoxProps } from '../Box/Box';
import { useTheme } from '@/theme/ThemeProvider';
import { ViewStyle } from 'react-native/types';
import { metrics } from '@/styles';
import { useForegroundColor } from '@/SystemDesign/system/Color/useForegroundColors';
import { StyleSheet } from 'react-native';
import { android } from '@/env';
import font from '@/styles/fonts';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export const useTextInputStyle = (props: { boxProps: TextInputProps }) => {
  const { colors } = useTheme();
  const borderColor = useForegroundColor('separatorSecondary');
  const errorBorderColor = useForegroundColor('red');
  const focusBorderColor = useForegroundColor('shadowFar');

  const inputBoxStyle: BoxProps = useMemo(
    () => ({
      paddingHorizontal: '10px',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
    }),
    [],
  );

  const getBorderColor = ({
    focused,
    errorAvailable,
  }: {
    focused: boolean;
    errorAvailable: boolean;
  }) => {
    if (focused && !errorAvailable) {
      return focusBorderColor;
    } else if (errorAvailable || (focused && errorAvailable)) {
      return errorBorderColor;
    } else {
      return borderColor;
    }
  };

  const otherBoxStyle: ViewStyle = {
    borderWidth: metrics.moderateScale(android ? 1.6 : 1.2),
    backgroundColor: colors.alpha(colors.blueGreyDark40, 0.1),
    maxHeight: metrics.moderateScale(100),
    paddingVertical: metrics.moderateScale(android ? 4 : 8),
  };

  const textInputStyle = StyleSheet.create({
    textInput: {
      alignSelf: 'center',
      padding: 0,
      width: '100%',
      fontFamily: font.family.SFProRounded,
      fontWeight: font.weight.regular,
      fontSize: metrics.moderateScale(android ? 15 : 16),
      justifyContent: 'center',
      textAlignVertical: 'center',
      paddingTop: 0,
      paddingBottom: 0,
    },
  });

  return {
    inputBoxStyle,
    otherBoxStyle: [otherBoxStyle],
    textInputStyle: textInputStyle.textInput,
    getBorderColor,
  };
};
