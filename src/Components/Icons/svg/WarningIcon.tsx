import React from 'react';
import { Path, G, Rect } from 'react-native-svg';
import Svg from '../Svg';
import { useForegroundColor } from '@/SystemDesign/system/Color/useForegroundColors';
import { IconProps } from '../Icon';
import { useTheme } from '@/theme/ThemeProvider';

const WarningIcon: React.FC<IconProps> = ({
  color,
  colors,
  size = 16,
  ...props
}) => {
  const colorValues =
    colors?.map(color => (color ? useForegroundColor(color) : null)) || [];

  const blueColor = useForegroundColor('blue');
  const { colors: defaultColors } = useTheme();

  return (
    <Svg
      fill="none"
      height={size}
      viewBox="0 0 20.641 18.7605"
      width={size}
      {...props}>
      <G>
        <Rect height="18.7605" opacity="0" width="20.641" x="0" y="0" />
        <Path
          d="M2.77324 18.741L17.8695 18.741C19.5736 18.741 20.641 17.5166 20.641 15.982C20.641 15.509 20.506 15.0164 20.2531 14.5709L12.6943 1.39238C12.1637 0.465038 11.2576 0 10.3223 0C9.38515 0 8.46582 0.468554 7.94668 1.39238L0.38789 14.5727C0.120703 15.0244 0 15.509 0 15.982C0 17.5166 1.06738 18.741 2.77324 18.741Z"
          fill={defaultColors.orangeLight}
        />
        <Path
          d="M10.332 12.0523C9.75918 12.0523 9.43379 11.726 9.41524 11.1469L9.27774 6.22811C9.25918 5.63144 9.69102 5.21288 10.3223 5.21288C10.9375 5.21288 11.3934 5.63944 11.3748 6.23612L11.2213 11.1434C11.2027 11.734 10.8791 12.0523 10.332 12.0523ZM10.332 15.417C9.67754 15.417 9.13281 14.9377 9.13281 14.3018C9.13281 13.6596 9.66953 13.1803 10.332 13.1803C10.9883 13.1803 11.5197 13.6533 11.5197 14.3018C11.5197 14.9457 10.9785 15.417 10.332 15.417Z"
          fill={defaultColors.whiteLabel}
        />
      </G>
    </Svg>
  );
};

export default WarningIcon;
