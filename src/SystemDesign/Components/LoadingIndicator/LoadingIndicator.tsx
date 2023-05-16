import React from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { Svg, Rect } from 'react-native-svg';

interface LoadingIndicatorProps {}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = props => {
  const rotation = useSharedValue(0);

  const animationConfig = {
    duration: 2000,
    easing: Easing.linear,
  };

  const startAnimation = () => {
    rotation.value = withTiming(360, animationConfig);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  React.useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View>
      <Svg width={22} height={22} viewBox="0 0 22 22">
        <Animated.View style={animatedStyle}>
          <Rect x={-3} y={-3} width={28} height={28} fill="#0E76FD" />
        </Animated.View>
      </Svg>
    </View>
  );
};
