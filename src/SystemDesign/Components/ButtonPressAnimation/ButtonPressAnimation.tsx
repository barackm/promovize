import { HapticFeedbackType, haptics } from '@/utils';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  ViewStyle,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props extends React.ComponentProps<typeof TouchableWithoutFeedback> {
  onPress?: () => void;
  onLongPress?: () => void;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  disabled?: boolean;
  shouldAnimate?: boolean;
  hapticType?: HapticFeedbackType;
  scaleTo?: number;
}

export const ButtonPressAnimation: React.FC<Props> = ({
  onPress,
  onLongPress,
  style,
  children,
  disabled = false,
  shouldAnimate = true,
  hapticType,
  scaleTo = 0.95,
}) => {
  const scale = useSharedValue(1);
  const duration = 120;

  const scaleTraversed = useDerivedValue(() => {
    const value = withTiming(scale.value, {
      duration,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    return value;
  });

  const scaleAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scaleTraversed.value,
        },
      ],
    };
  });

  const handlePressIn = () => {
    if (!shouldAnimate || disabled) {
      return;
    }
    scale.value = withTiming(scaleTo, {
      duration,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });

    if (hapticType) {
      haptics[hapticType]();
    }
  };

  const handlePressOut = () => {
    if (disabled) {
      return;
    }
    scale.value = withTiming(1, {
      duration,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View style={[styles.container, scaleAnimatedStyle, style]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});
