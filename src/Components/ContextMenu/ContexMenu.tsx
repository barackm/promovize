import React from 'react';
import {
  ContextMenuButton,
  ContextMenuButtonProps,
} from 'react-native-ios-context-menu';

interface ContextMenuProps extends ContextMenuButtonProps {
  wrapNativeComponent?: never;
}

const ContextMenu: React.FC<ContextMenuProps> = props => {
  const { wrapNativeComponent, ...restProps } = props;

  return (
    <ContextMenuButton
      isMenuPrimaryAction
      useActionSheetFallback={false}
      {...restProps}
    />
  );
};

export default ContextMenu;
