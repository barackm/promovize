import React from 'react';
import { Path, G, Rect } from 'react-native-svg';
import Svg from '../Svg';
import { useForegroundColor } from '@/SystemDesign/system/Color/useForegroundColors';
import { IconProps } from '../Icon';
import { useTheme } from '@/theme/ThemeProvider';

const PersonIcon: React.FC<IconProps> = ({ color, colors, size, ...props }) => {
  const { colors: themeColors } = useTheme();
  const colorValue = color ? useForegroundColor(color) : themeColors.text;

  return (
    <Svg
      fill="none"
      height={size}
      viewBox="0 0 16.5006 17.9793"
      width={size}
      {...props}>
      <G>
        <Rect height="17.9793" opacity="0" width="16.5006" x="0" y="0" />
        <Path
          d="M1.75429 17.9793L14.748 17.9793C15.8457 17.9793 16.5006 17.4594 16.5006 16.5961C16.5006 14.0836 13.3146 10.6281 8.24629 10.6281C3.18769 10.6281 0 14.0836 0 16.5961C0 17.4594 0.656639 17.9793 1.75429 17.9793ZM8.2543 8.89414C10.3828 8.89414 12.1939 7.00156 12.1939 4.55488C12.1939 2.15332 10.3775 0.325781 8.2543 0.325781C6.13105 0.325781 4.31289 2.18711 4.31641 4.57265C4.31816 7.00156 6.11953 8.89414 8.2543 8.89414Z"
          fill={colorValue}
        />
      </G>
    </Svg>
  );
};

export default PersonIcon;
