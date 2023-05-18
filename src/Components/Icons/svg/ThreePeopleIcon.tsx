import React from 'react';
import { Path, G, Rect } from 'react-native-svg';
import Svg from '../Svg';
import { useForegroundColor } from '@/SystemDesign/system/Color/useForegroundColors';
import { IconProps } from '../Icon';
import { useTheme } from '@/theme/ThemeProvider';

const ThreePeopleIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 36.9482 20.9828"
      width={size}
      {...props}>
      <G>
        <Rect height="20.9828" opacity="0" width="36.9482" x="0" y="0" />
        <Path
          d="M12.3977 20.9811L24.5719 20.9811C26.1736 20.9811 26.7311 20.4959 26.7311 16.5979C26.7311 14.0854 23.5451 10.6299 18.4848 10.6299C13.4182 10.6299 10.2305 14.0854 10.2305 16.5979C10.2305 20.4959 10.7879 20.9811 12.3977 20.9811ZM18.4848 8.8959C20.6213 8.8959 22.4244 7.00332 22.4244 4.55664C22.4244 2.15508 20.608 0.327539 18.4848 0.327539C16.3695 0.327539 14.5434 2.18887 14.5549 4.57441C14.5566 7.00332 16.358 8.8959 18.4848 8.8959Z"
          fill={colorValues[0] || defaultColors.text}
        />
        <Path
          d="M1.79961 20.9828L9.12031 20.9828C8.07832 16.4889 9.22364 13.5324 11.4227 11.8146C10.3447 11.1201 8.94649 10.6023 7.18457 10.6023C2.81894 10.6023 0 13.8227 0 16.4768C0 20.4365 0.485547 20.9828 1.79961 20.9828ZM7.18457 9.11875C9.04238 9.11875 10.6129 7.4623 10.6129 5.33965C10.6129 3.24883 9.0291 1.65742 7.18457 1.65742C5.34629 1.65742 3.74824 3.28086 3.75801 5.35566C3.75977 7.4623 5.33477 9.11875 7.18457 9.11875ZM35.1486 20.9828C36.4627 20.9828 36.9482 20.4365 36.9482 16.4768C36.9482 13.8227 34.1293 10.6023 29.7637 10.6023C27.9937 10.6023 26.5955 11.1201 25.5256 11.8146C27.7166 13.5324 28.8619 16.4889 27.8199 20.9828ZM29.7557 9.11875C31.6135 9.11875 33.1885 7.4623 33.1902 5.35566C33.192 3.28086 31.6019 1.65742 29.7557 1.65742C27.9191 1.65742 26.3273 3.24883 26.3273 5.33965C26.3273 7.4623 27.9059 9.11875 29.7557 9.11875Z"
          fill={colorValues[1] || defaultColors.text}
        />
      </G>
    </Svg>
  );
};

export default ThreePeopleIcon;
