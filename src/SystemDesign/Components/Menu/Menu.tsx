import React from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Separator } from '../Separator/Separator';
import { Stack } from '../Stack/Stack';

interface MenuProps {
  children: React.ReactNode;
  header?: string;
  description?: string;
}

const Menu = ({ children, description, header }: MenuProps) => {
  return (
    <>
      {!!header && (
        <Box paddingBottom="12px" paddingHorizontal={{ custom: 16 }}>
          <Text color="labelSecondary" size="16px / 22px" weight="regular">
            {header}
          </Text>
        </Box>
      )}
      <Box background="card" borderRadius={18} shadow="12px" width="full">
        <Stack separator={<Separator color="separatorTertiary" />}>
          {children}
        </Stack>
      </Box>
      {!!description && (
        <Box paddingHorizontal={{ custom: 16 }} paddingTop={{ custom: 17 }}>
          <Text color="labelSecondary" size="15pt" weight="regular">
            {description}
          </Text>
        </Box>
      )}
    </>
  );
};

export default Menu;
