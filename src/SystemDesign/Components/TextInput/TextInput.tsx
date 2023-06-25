import React, { ReactNode, useContext, useState } from 'react';
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from 'react-native';
import { FormikContext } from 'formik';
import { colors } from '@/styles';
export interface TextInputProps extends NativeTextInputProps {
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
    name = '',
    error,
    label,
    onChangeText,
    value,
    showHidePassOption = true,
    secureTextEntry,
    placeholder,
  } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const formikContext = useContext(FormikContext);
  const { errors, values, touched, setFieldValue, setFieldTouched } =
    formikContext || {};

  const errorMessage: any = React.useMemo(
    () => (formikContext && touched ? errors[name || ''] : error),
    [formikContext, touched, errors, name, error],
  );

  const actualValue = formikContext ? values[name] || undefined : value;
  const shouldEnableShowHideOption = secureTextEntry && showHidePassOption;

  return (
    <>
      <NativeTextInput
        {...props}
        value={actualValue}
        onChangeText={value => {
          if (formikContext) {
            setFieldValue(name || '', value);
          }
          onChangeText && onChangeText(value);
        }}
        placeholder="Enter your email"
        placeholderTextColor={colors.black}
        onBlur={() => {
          if (formikContext) {
            setFieldTouched(name || '', true);
          }
        }}
        secureTextEntry={shouldEnableShowHideOption ? !showPassword : undefined}
      />
    </>
  );
});
