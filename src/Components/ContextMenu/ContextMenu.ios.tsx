import React, { Fragment, useCallback, useRef, useState } from 'react';
import ActionSheet from 'react-native-actionsheet';
import { omitFlatten, pickShallow } from '@/helpers/utilities';
import { Box, ButtonPressAnimation } from '@/SystemDesign';
import { Icon } from '../Icons';

interface ContextMenuProps {
  activeOpacity?: number;
  cancelButtonIndex?: number;
  children?: React.ReactNode;
  dynamicOptions?: () => string[];
  onPressActionSheet?: (buttonIndex: number) => void;
  options?: string[];
}

const ActionSheetProps: any = [
  'cancelButtonIndex',
  'destructiveButtonIndex',
  'message',
  'onPress',
  'options',
  'tintColor',
  'title',
];

const ContextButton: React.FC<any> = props => (
  <Box padding="6px" {...props}>
    <Icon name="copy" />
  </Box>
);

const ContextMenu: React.FC<ContextMenuProps> = ({
  activeOpacity = 0.2,
  cancelButtonIndex,
  children,
  dynamicOptions,
  onPressActionSheet,
  options = [],
  ...props
}) => {
  const actionsheetRef = useRef<ActionSheet>(null);
  const [isOpen, setIsOpen] = useState(true);

  const handlePressActionSheet = useCallback(
    (buttonIndex: number) => {
      if (onPressActionSheet) {
        onPressActionSheet(buttonIndex);
      }

      setIsOpen(false);
    },
    [onPressActionSheet],
  );

  const handleShowActionSheet = useCallback(() => {
    console.log('what?');
    setTimeout(() => {
      if (isOpen) return;
      setIsOpen(true);
      actionsheetRef.current?.show();
    }, 40);
  }, [isOpen]);

  console.log('Here we are');
  return (
    <Fragment>
      {/* {onPressActionSheet && ( */}
      <ButtonPressAnimation onPress={handleShowActionSheet}>
        {children || (
          <ContextButton {...omitFlatten(props, ActionSheetProps)} />
        )}
      </ButtonPressAnimation>
      {/* )} */}
      <ActionSheet
        {...pickShallow(props, ActionSheetProps)}
        cancelButtonIndex={
          Number.isInteger(cancelButtonIndex)
            ? cancelButtonIndex
            : options.length - 1
        }
        onPress={handlePressActionSheet}
        options={dynamicOptions ? dynamicOptions() : options}
        ref={actionsheetRef}
      />
    </Fragment>
  );
};

export default ContextMenu;
