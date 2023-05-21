import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import Svg from '../Svg';
import { useForegroundColor } from '@/SystemDesign/system/Color/useForegroundColors';
import { IconProps } from '../Icon';

const ArrowLeftIcon: React.FC<IconProps> = ({
  color,
  colors,
  size = 16,
  ...props
}) => {
  const colorValue = useForegroundColor(color || 'label');
  return (
    <Svg
      fill="none"
      height={size}
      viewBox="0 0 18.4512 15.1519"
      width={size}
      {...props}>
      <G>
        <Rect height="15.1519" opacity="0" width="18.4512" x="0" y="0" />
        <Path
          d="M0 7.56054C0 7.85566 0.128515 8.14179 0.350193 8.35546L6.79062 14.7844C7.02109 15.0086 7.27714 15.1193 7.55195 15.1193C8.15702 15.1193 8.60467 14.6869 8.60467 14.0984C8.60467 13.7955 8.48163 13.5242 8.28847 13.3408L6.10097 11.1266L2.46229 7.80331L2.11483 8.42772L5.49314 8.62655L17.3738 8.62655C18.0152 8.62655 18.4512 8.18964 18.4512 7.56054C18.4512 6.93144 18.0152 6.49453 17.3738 6.49453L5.49314 6.49453L2.11483 6.69336L2.46229 7.32753L6.10097 3.99452L8.28847 1.7785C8.48163 1.58534 8.60467 1.32382 8.60467 1.02089C8.60467 0.432419 8.15702 0 7.55195 0C7.27714 0 7.02109 0.102733 6.77461 0.350974L0.350193 6.76562C0.128515 6.9793 0 7.26543 0 7.56054Z"
          fill={colorValue}
          fill-opacity="0.85"
        />
      </G>
    </Svg>
  );
};

export default ArrowLeftIcon;
