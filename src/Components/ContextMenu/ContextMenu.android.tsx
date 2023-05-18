import React, { Fragment, useCallback } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { showActionSheetWithOptions } from '@/utils';
import { Box } from '@/SystemDesign';
import { Icon } from '../Icons';
import { omitFlatten } from '@/helpers/utilities';

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

const ContextButton: React.FC = props => (
  <Box padding="3px" {...props}>
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
  const handlePressActionSheet = useCallback(
    (buttonIndex: number) => {
      if (onPressActionSheet) {
        onPressActionSheet(buttonIndex);
      }
    },
    [onPressActionSheet],
  );

  const handleShowActionSheet = useCallback(() => {
    showActionSheetWithOptions(
      {
        ...(Number.isInteger(cancelButtonIndex) ? { cancelButtonIndex } : {}),
        options: dynamicOptions ? dynamicOptions() : options,
      },
      handlePressActionSheet,
    );
  }, [cancelButtonIndex, dynamicOptions, handlePressActionSheet, options]);

  return (
    <Fragment>
      {onPressActionSheet && (
        <TouchableWithoutFeedback onPress={handleShowActionSheet}>
          {children || (
            <ContextButton {...omitFlatten(props, ActionSheetProps)} />
          )}
        </TouchableWithoutFeedback>
      )}
    </Fragment>
  );
};

export default ContextMenu;
