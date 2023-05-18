import React from 'react';
import { Path, G, Rect } from 'react-native-svg';
import Svg from '../Svg';
import { useForegroundColor } from '@/SystemDesign/system/Color/useForegroundColors';
import { IconProps } from '../Icon';
import { useTheme } from '@/theme/ThemeProvider';

const HomeIcon: React.FC<IconProps> = ({ color, colors, size, ...props }) => {
  const { colors: themeColors } = useTheme();
  const colorValue = color ? useForegroundColor(color) : themeColors.text;

  return (
    <Svg
      fill="none"
      height={size}
      viewBox="0 0 23.8344 22.5111"
      width={size}
      {...props}>
      <G>
        <Rect height="22.5111" opacity="0" width="23.8344" x="0" y="0" />
        <Path
          d="M14.474 18.9573L9.35233 18.9573L9.35233 12.6183C9.35233 12.162 9.65858 11.8655 10.1148 11.8655L13.7213 11.8655C14.1775 11.8655 14.474 12.162 14.474 12.6183ZM3.15761 18.6192C3.15761 20.0224 4.03945 20.8706 5.48495 20.8706L18.3637 20.8706C19.8092 20.8706 20.6812 20.0224 20.6812 18.6192L20.6812 11.1784L12.5238 4.33563C12.1439 4.0161 11.6922 4.0241 11.3203 4.33563L3.15761 11.1784ZM0 9.84501C0 10.3491 0.379294 10.7792 0.99804 10.7792C1.30136 10.7792 1.57167 10.6222 1.81015 10.4263L11.51 2.28817C11.7723 2.05594 12.0799 2.05594 12.3439 2.28817L22.0385 10.4263C22.2707 10.6222 22.541 10.7792 22.8443 10.7792C23.4053 10.7792 23.8344 10.4309 23.8344 9.86903C23.8344 9.53915 23.7068 9.28408 23.4596 9.07314L13.2953 0.529978C12.4601-0.176659 11.4018-0.176659 10.5586 0.529978L0.38281 9.0749C0.127538 9.28759 0 9.57294 0 9.84501ZM17.9559 5.11553L20.7146 7.4372L20.7146 2.72334C20.7146 2.28311 20.4342 2.00264 19.9939 2.00264L18.6783 2.00264C18.2461 2.00264 17.9559 2.28311 17.9559 2.72334Z"
          fill={colorValue}
        />
      </G>
    </Svg>
  );
};

export default HomeIcon;
