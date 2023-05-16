import React from 'react';
import { Path, G, Rect } from 'react-native-svg';
import Svg from '../Svg';
import { useForegroundColor } from '@/SystemDesign/system/Color/useForegroundColors';
import { IconProps } from '../Icon';
import { useTheme } from '@/theme/ThemeProvider';

const CheckmarkIcon: React.FC<IconProps> = ({
  color,
  colors,
  size = 16,
  ...props
}) => {
  const colorValues =
    colors?.map(color => (color ? useForegroundColor(color) : null)) || [];
  const { colors: defaultColors } = useTheme();

  return (
    <Svg
      fill="none"
      height={size}
      viewBox="0 0 20.1767 20.1812"
      width={size}
      {...props}>
      <G>
        <Rect height="20.1812" opacity="0" width="20.1767" x="0" y="0" />
        <Path
          d="M10.0875 20.175C15.6141 20.175 20.1767 15.606 20.1767 10.0875C20.1767 4.56094 15.606 0 10.0795 0C4.56269 0 0 4.56094 0 10.0875C0 15.606 4.5707 20.175 10.0875 20.175Z"
          fill={colorValues[0] || defaultColors.appleBlue}
        />
        <Path
          d="M8.99902 14.9086C8.63183 14.9086 8.33027 14.749 8.05703 14.3949L5.66386 11.4838C5.48925 11.2603 5.39961 11.035 5.39961 10.7875C5.39961 10.29 5.79414 9.88652 6.28984 9.88652C6.59941 9.88652 6.83358 9.99023 7.08476 10.3125L8.96699 12.7023L13.0051 6.23691C13.217 5.90351 13.4937 5.72793 13.7934 5.72793C14.281 5.72793 14.7289 6.07011 14.7289 6.58183C14.7289 6.80722 14.6107 7.04589 14.4742 7.2703L9.90546 14.3879C9.68105 14.7295 9.36445 14.9086 8.99902 14.9086Z"
          fill={colorValues[1] || defaultColors.whiteLabel}
        />
      </G>
    </Svg>
  );
};

export default CheckmarkIcon;
