import React from 'react';
import { Path, G, Rect } from 'react-native-svg';
import Svg from '../Svg';
import { useForegroundColor } from '@/SystemDesign/system/Color/useForegroundColors';
import { IconProps } from '../Icon';
import { useTheme } from '@/theme/ThemeProvider';

const EyeIcon: React.FC<IconProps> = ({ color, colors, size, ...props }) => {
  const { colors: themeColors } = useTheme();
  const colorValue = color ? useForegroundColor(color) : themeColors.text;

  return (
    <Svg
      fill="none"
      height={size}
      viewBox="0 0 26.8336 16.9168"
      width={size}
      {...props}>
      <G>
        <Rect height="16.9168" opacity="0" width="26.8336" x="0" y="0" />
        <Path
          d="M13.4199 16.9168C21.4266 16.9168 26.8336 10.4625 26.8336 8.46504C26.8336 6.46308 21.4185 0.0167966 13.4199 0.0167966C5.52949 0.0167966 0 6.46308 0 8.46504C0 10.4625 5.52149 16.9168 13.4199 16.9168ZM13.4199 15.0434C7.17245 15.0434 2.2117 9.82617 2.2117 8.46504C2.2117 7.32402 7.17245 1.89022 13.4199 1.89022C19.6434 1.89022 24.6219 7.32402 24.6219 8.46504C24.6219 9.82617 19.6434 15.0434 13.4199 15.0434ZM13.4217 13.7299C16.348 13.7299 18.6928 11.3311 18.6928 8.46504C18.6928 5.52792 16.348 3.20546 13.4217 3.20546C10.4828 3.20546 8.12655 5.52616 8.13456 8.46504C8.15057 11.3311 10.4828 13.7299 13.4217 13.7299ZM13.4182 10.1707C12.4693 10.1707 11.7035 9.39785 11.7035 8.46504C11.7035 7.52421 12.4693 6.76288 13.4182 6.76288C14.3643 6.76288 15.1318 7.52421 15.1318 8.46504C15.1318 9.39785 14.3643 10.1707 13.4182 10.1707Z"
          fill={colorValue}
        />
      </G>
    </Svg>
  );
};

export default EyeIcon;
