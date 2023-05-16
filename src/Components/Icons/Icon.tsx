import React, { forwardRef, Ref } from 'react';
import CopyIcon from './svg/CopyIcon';
import { CustomColor } from '@/SystemDesign/system/Color/useForegroundColors';
import CheckmarkIcon from './svg/CheckmarkIcon';
import { SvgProps } from 'react-native-svg';
import WarningIcon from './svg/WarningIcon';
import { TextColor } from '@/SystemDesign';
import EyeIcon from './svg/EyeIcon';
import EyeSlashIcon from './svg/EyeSlashIcon';

export type IconName = 'copy' | 'checkmark' | 'warning' | 'eye' | 'eyeSlash';

const IconTypes: Record<IconName, any> = {
  copy: CopyIcon,
  checkmark: CheckmarkIcon,
  warning: WarningIcon,
  eye: EyeIcon,
  eyeSlash: EyeSlashIcon,
};

export interface IconProps extends Omit<SvgProps, 'color'> {
  color?: TextColor | CustomColor;
  colors?: (TextColor | CustomColor | null)[];
  size?: number;
  name: IconName;
}

const Icon: React.ForwardRefRenderFunction<Ref<unknown>, IconProps> = (
  { name, size = 20, ...props },
  ref,
) => {
  const IconElement = IconTypes[name];
  return <IconElement size={size} {...props} name={name} ref={ref} />;
};

export default forwardRef(Icon);
