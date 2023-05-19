import { useMemo } from 'react';
import { TextInputProps } from './TextInput';
import { BoxProps } from '../Box/Box';
import { useTheme } from '@/theme/ThemeProvider';
import { ViewStyle } from 'react-native/types';
import { metrics } from '@/styles';
import { StyleSheet } from 'react-native';
import { android } from '@/env';
import font from '@/styles/fonts';

export const useTextInputStyle = (props: { boxProps: TextInputProps }) => {
  const { boxProps } = props;
  const { multiline } = boxProps;
  const { colors, isDarkMode } = useTheme();
  const backgroundColor = colors.alpha(colors.lightGrey, 0.3);

  const inputBoxStyle: BoxProps = useMemo(
    () => ({
      paddingHorizontal: '10px',
      justifyContent: 'center',
      alignItems: multiline ? 'flex-start' : 'center',
      borderRadius: multiline
        ? metrics.moderateScale(20)
        : metrics.moderateScale(30),
    }),
    [],
  );

  const otherBoxStyle: ViewStyle = {
    height: multiline ? metrics.moderateScale(100) : undefined,
    paddingVertical: metrics.moderateScale(android ? 4 : 10),
    backgroundColor,
  };

  const placeholderTextColor = colors.alpha(colors.text, 0.6);

  const textInputStyle = StyleSheet.create({
    textInput: {
      alignSelf: 'center',
      padding: 0,
      width: '100%',
      fontFamily: font.family.SFProRounded,
      fontWeight: font.weight.medium,
      fontSize: metrics.moderateScale(android ? 15 : 18),
      justifyContent: 'center',
      textAlignVertical: multiline ? 'top' : 'center',
      paddingTop: 0,
      paddingBottom: 0,
      paddingVertical: metrics.moderateScale(5),
      color: colors.alpha(colors.text, 0.8),
      height: multiline ? '100%' : undefined,
    },
  });

  return {
    inputBoxStyle,
    otherBoxStyle: [otherBoxStyle],
    textInputStyle: textInputStyle.textInput,
    placeholderTextColor,
  };
};
