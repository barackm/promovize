import React, { ReactNode, useCallback } from 'react';
import { Linking, Text as NativeText, TextStyle } from 'react-native';

const style: TextStyle = {
  textDecorationLine: 'underline',
};

export interface TextLinkProps {
  url: string;
  children: ReactNode;
  handleLinkPress?: (url: string) => void;
}

export const TextLink = ({
  children,
  url,
  handleLinkPress = Linking.openURL,
}: TextLinkProps) => {
  const onPressHandler = useCallback(() => {
    handleLinkPress(url);
  }, [handleLinkPress, url]);

  return (
    <NativeText onPress={onPressHandler} style={style}>
      {children}
    </NativeText>
  );
};
