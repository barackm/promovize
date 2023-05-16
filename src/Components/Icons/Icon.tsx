import React, { forwardRef, Ref } from 'react';
import { CustomColor } from '@/SystemDesign/system/Color/useForegroundColors';
import { SvgProps } from 'react-native-svg';
import { TextColor } from '@/SystemDesign';

import CheckmarkIcon from './svg/CheckmarkIcon';
import CopyIcon from './svg/CopyIcon';
import WarningIcon from './svg/WarningIcon';
import EyeIcon from './svg/EyeIcon';
import EyeSlashIcon from './svg/EyeSlashIcon';
import HomeIcon from './svg/HomeIcon';
import NoteTextIcon from './svg/NoteTextIcon';
import PersonIcon from './svg/PersonIcon';
import ThreePeopleIcon from './svg/ThreePeopleIcon';

export type IconName =
  | 'copy'
  | 'checkmark'
  | 'warning'
  | 'eye'
  | 'eyeSlash'
  | 'home'
  | 'noteText'
  | 'person'
  | 'threePeople';

const IconTypes: Record<IconName, any> = {
  copy: CopyIcon,
  checkmark: CheckmarkIcon,
  warning: WarningIcon,
  eye: EyeIcon,
  eyeSlash: EyeSlashIcon,
  home: HomeIcon,
  noteText: NoteTextIcon,
  person: PersonIcon,
  threePeople: ThreePeopleIcon,
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
