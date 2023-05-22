import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
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
import { useTheme } from '@/theme/ThemeProvider';

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
  placeholder?: string | any;
  autoFocus?: boolean;
}

export const TextInput: React.FC<TextInputProps> = React.memo(props => {
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
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const formikContext = useContext(FormikContext);
  const { colors } = useTheme();
  const { errors, values, touched, setFieldValue, setFieldTouched } =
    formikContext || {};

  const errorMessage: any = React.useMemo(
    () => (formikContext && touched ? errors[name || ''] : error),
    [formikContext, touched, errors, name, error],
  );

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
              if (!touched[name]) {
                setFieldTouched && setFieldTouched(name, false);
              }
            }}
            onFocus={() => {
              if (touched[name]) {
                setFieldTouched && setFieldTouched(name, true);
              }
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
      <Box marginTop={errorAvailable ? '-6px' : undefined}>
        {errorAvailable && (
          <Inline alignVertical="center" space="4px">
            <Icon name="warning" scale={0.6} color="red" />
            <Text
              size="13pt / 135%"
              weight="semibold"
              color={{ custom: colors.alpha(colors.error, 0.7) }}>
              {errorAvailable && errorMessage}
            </Text>
          </Inline>
        )}
      </Box>
    </Stack>
  );
});
