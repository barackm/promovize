import React from 'react';
import { SvgProps } from 'react-native-svg';

import {
  CustomColor,
  useForegroundColor,
} from '@/SystemDesign/system/Color/useForegroundColors';
import { TextColor } from '@/SystemDesign/system/Color/palettes';
import { ICONS, Name } from './icons';

type IconProps = SvgProps & {
  name: Name;
  size?: number;
  color?: TextColor | CustomColor;
  stroke?: string;
  scale?: number;
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  color = 'label',
  stroke = 'none',
  scale = 1,
  ...props
}) => {
  const IconSVG = ICONS[name as Name];
  if (!IconSVG) {
    throw Error(`Icon ${name} is not supported`);
  }
  const colorValue = useForegroundColor(color ?? 'label');

  return (
    <IconSVG
      width={size}
      height={size}
      fill={colorValue}
      stroke={stroke}
      style={{
        transform: [
          {
            scale,
          },
        ],
      }}
      {...props}
    />
  );
};

export default Icon;
