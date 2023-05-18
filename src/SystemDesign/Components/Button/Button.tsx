import React, { ReactNode } from 'react';
import { StyleSheet, TouchableOpacityProps, View } from 'react-native';
import { Box } from '../Box/Box';
import { Text, TextWeight } from '../Text/Text';
import {
  BackgroundColor,
  ForegroundColor,
  TextColor,
} from '@/SystemDesign/system/Color/palettes';
import { useButtonStyle } from './useButtonStyle';
import { Inline } from '../Inline/Inline';
import { Shadow } from '@/SystemDesign/system/layout/shadow';
import { Cover } from '../Cover/Cover';
import { AccentColorProvider } from '@/SystemDesign/system/Color/AccentColorContext';
import {
  CustomColor,
  useForegroundColor,
} from '@/SystemDesign/system/Color/useForegroundColors';
import { useTheme } from '@/theme/ThemeProvider';
import { ButtonPressAnimation } from '../ButtonPressAnimation';
import { HapticFeedback, HapticFeedbackType } from '@/utils/haptics';

export type ButtonSizes = 'big' | 'medium' | 'small';
export type ButtonVariants = 'contained' | 'outlined' | 'text';

export interface ButtonProps extends TouchableOpacityProps {
  children: string | ReactNode | null;
  leftContent?:
    | (({ color }: { color: TextColor | CustomColor }) => React.ReactNode)
    | React.ReactNode;
  rightContent?:
    | (({ color }: { color: TextColor | CustomColor }) => React.ReactNode)
    | React.ReactNode;
  background?: BackgroundColor;
  size?: ButtonSizes;
  uppercase?: boolean;
  shadowOff?: boolean;
  shadow?: Shadow;
  iconButton?: boolean;
  tabularNumbers?: boolean;
  containsEmoji?: true;
  color?: TextColor | CustomColor;
  tintColor?: ForegroundColor;
  weight?: TextWeight;
  variant?: ButtonVariants;
  autoWidth?: boolean;
  enableHapticFeedback?: boolean;
  hapticType?: HapticFeedbackType;
}

export const Button: React.FC<ButtonProps> = props => {
  const {
    children,
    uppercase,
    shadowOff,
    shadow,
    leftContent,
    rightContent,
    containsEmoji,
    tabularNumbers,
    tintColor: tintColorProp,
    weight = 'bold',
    enableHapticFeedback = true,
    hapticType = HapticFeedback.selection,
  } = props;
  const { buttonStyle, textSize, height, otherStyle, textColor } =
    useButtonStyle(props);
  let tintColor = useForegroundColor(tintColorProp || 'accent');
  const { colors } = useTheme();
  const { alpha } = colors;

  return (
    <Box
      as={ButtonPressAnimation}
      activeOpacity={1}
      hapticType={hapticType}
      enableHapticFeedback={enableHapticFeedback}
      underlayColor="transparent"
      shadow={shadowOff ? null : shadow ?? '18px'}
      {...props}
      {...buttonStyle}
      style={[otherStyle]}>
      <Inline alignVertical="center" alignHorizontal="center" space="5px">
        {leftContent && (
          <Box alignItems="center" justifyContent="center">
            {typeof leftContent === 'function'
              ? leftContent({ color: textColor })
              : leftContent}
          </Box>
        )}
        <Box alignItems="center" justifyContent="center">
          {typeof children === 'string' && (
            <Text
              containsEmoji={containsEmoji}
              tabularNumbers={tabularNumbers}
              weight={weight}
              color={textColor}
              uppercase={uppercase}
              size={textSize}>
              {children}
            </Text>
          )}
          {typeof children !== 'string' && children}
        </Box>
        {rightContent && (
          <Box alignItems="center" justifyContent="center">
            {typeof rightContent === 'function'
              ? rightContent({ color: textColor })
              : rightContent}
          </Box>
        )}
      </Inline>
      {tintColorProp && (
        <Cover>
          <AccentColorProvider color={alpha(tintColor, 0.1)}>
            <Box
              alignItems="center"
              background="accent"
              borderRadius={height / 2}
              height={{ custom: height }}
              justifyContent="center"
              width="full"
            />
          </AccentColorProvider>
        </Cover>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
