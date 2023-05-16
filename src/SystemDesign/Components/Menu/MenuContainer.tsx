import React from 'react';
import { ScrollView } from 'react-native';
import { android, ios } from '@/env';
import { Inset } from '../Inset/Inset';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';

interface MenuContainerProps {
  children: React.ReactNode;
  testID?: string;
}
const MenuContainer = ({ children, testID }: MenuContainerProps) => {
  return (
    <Inset {...(ios && { bottom: '42px', top: '12px' })}>
      <ScrollView
        scrollEventThrottle={32}
        // ios scroll fix
        {...(ios && { style: { overflow: 'visible' } })}
        testID={testID}>
        <Box
          {...(android && {
            paddingBottom: { custom: 22 },
            paddingTop: { custom: 7 },
          })}>
          <Stack space="36px">{children}</Stack>
        </Box>
      </ScrollView>
    </Inset>
  );
};

export default MenuContainer;
