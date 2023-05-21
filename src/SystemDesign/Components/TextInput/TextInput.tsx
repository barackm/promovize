import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { Box } from '../Box/Box';
import {
  TextInputProps as NativeTextInputProps,
  TextInput as NativeTextInput,
} from 'react-native';
import { useTextInputStyle } from './useTextInputStyle';
import { TextColor } from '@/SystemDesign/system/Color/palettes';
import { CustomColor } from '@/SystemDesign/system/Color/useForegroundColors';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { FormikContext } from 'formik';
import { ButtonPressAnimation } from '../ButtonPressAnimation';
import Animated from 'react-native-reanimated';
import { Inline } from '../Inline/Inline';
import { Icon } from '@/Components/Icons';

export interface TextInputProps extends NativeTextInputProps {
  leftContent?:
    | (({ color }: { color: TextColor | CustomColor }) => React.ReactNode)
    | React.ReactNode;
  rightContent?:
    | (({ color }: { color: TextColor | CustomColor }) => React.ReactNode)
    | React.ReactNode;
  error?: string;
  name?: string;
  label?: ReactNode;
  disabled?: boolean;
  value?: string;
  showHidePassOption?: boolean;
}

export const TextInput: React.FC<TextInputProps> = props => {
  const {
    leftContent,
    rightContent,
    name = '',
    error,
    label,
    onChangeText,
    value,
    showHidePassOption = true,
    secureTextEntry,
  } = props;
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const formikContext = useContext(FormikContext);
  const { errors, values, touched, setFieldValue, setFieldTouched } =
    formikContext || {};

  const errorMessage: any =
    formikContext && touched ? errors[name || ''] : error;
  const actualValue = formikContext ? values[name] || undefined : value;
  const shouldEnableShowHideOption = secureTextEntry && showHidePassOption;
  const errorAvailable = Boolean(errorMessage);

  const { inputBoxStyle, otherBoxStyle, textInputStyle, placeholderTextColor } =
    useTextInputStyle({
      boxProps: props,
    });

  return (
    <Stack space="8px">
      {label && (
        <Text numberOfLines={1} weight="medium">
          {label}
        </Text>
      )}
      <Box
        as={Animated.View}
        style={[otherBoxStyle]}
        {...inputBoxStyle}
        flexDirection="row">
        {leftContent && (
          <Box paddingRight="8px" alignItems="center" justifyContent="center">
            {typeof leftContent === 'function'
              ? leftContent({ color: 'labelSecondary' })
              : leftContent}
          </Box>
        )}
        <Box style={{ flex: 1 }} alignItems="center" justifyContent="center">
          <NativeTextInput
            {...props}
            onChangeText={(value: string) => {
              if (formikContext) {
                setFieldValue(name, value);
              } else {
                onChangeText && onChangeText(value);
              }
            }}
            onBlur={() => {
              setFieldTouched && setFieldTouched(name, false);
              setIsFocused(false);
            }}
            onFocus={() => {
              setFieldTouched && setFieldTouched(name, true);
              setIsFocused(true);
            }}
            style={[textInputStyle]}
            value={actualValue}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={
              shouldEnableShowHideOption ? showPassword : secureTextEntry
            }
          />
        </Box>
        {(rightContent || shouldEnableShowHideOption) && (
          <Box paddingLeft="8px" alignItems="center" justifyContent="center">
            {shouldEnableShowHideOption ? (
              <ButtonPressAnimation
                scaleTo={0.8}
                onPress={() => setShowPassword((prev: boolean) => !prev)}>
                <Icon name={showPassword ? 'eye' : 'eyeSlash'} />
              </ButtonPressAnimation>
            ) : typeof rightContent === 'function' ? (
              rightContent({ color: 'labelSecondary' })
            ) : (
              rightContent
            )}
          </Box>
        )}
      </Box>
      {errorAvailable && (
        <Box marginTop="-10px">
          <Inline alignVertical="center">
            <Icon name="warning" scale={0.6} color="red" />
            <Text size="11pt" weight="semibold" color="red">
              {errorMessage}
            </Text>
          </Inline>
        </Box>
      )}
    </Stack>
  );
};
