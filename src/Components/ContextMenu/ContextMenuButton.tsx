import { ButtonPressAnimation } from '@/SystemDesign';
import React from 'react';
import {
  ContextMenuButton as IOSContextMenuButton,
  ContextMenuButtonProps as Props,
} from 'react-native-ios-context-menu';

interface ContextMenuButtonProps extends Props {
  children: React.ReactNode;
  onPressAndroid?: () => void;
  onPressMenuItem: (menuItem: any) => void;
  testID?: string;
  activeOpacity: number;
}

const ContextMenuButton: React.FC<ContextMenuButtonProps> = props => {
  const { children, onPressAndroid, testID, menuConfig } = props;
  return (
    <IOSContextMenuButton
      isMenuPrimaryAction
      {...(onPressAndroid ? { onPress: onPressAndroid } : {})}
      menuConfig={menuConfig}
      useActionSheetFallback={false}
      {...props}>
      <ButtonPressAnimation hapticType="selection" testID={testID}>
        {children}
      </ButtonPressAnimation>
    </IOSContextMenuButton>
  );
};

export default ContextMenuButton;
