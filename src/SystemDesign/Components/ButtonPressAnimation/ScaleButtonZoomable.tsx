import React, { createContext, PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';
import Animated, {
  Easing,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type ScaleButtonContextProps = SharedValue<number> | null;

export const ScaleButtonContext = createContext<ScaleButtonContextProps>(null);

type Props = ViewProps &
  PropsWithChildren<{
    duration?: number;
  }>;

export const ScaleButtonZoomable = ({
  children,
  style,
  duration = 160,
  testID,
}: Props) => {
  const scale = useSharedValue(1);
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

  return (
    <ScaleButtonContext.Provider value={scale}>
      <Animated.View style={[style, scaleAnimatedStyle]} testID={testID}>
        {children}
      </Animated.View>
    </ScaleButtonContext.Provider>
  );
};
