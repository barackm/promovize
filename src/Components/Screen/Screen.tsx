import { Box } from '@/SystemDesign';
import { BoxProps } from '@/SystemDesign/Components/Box/Box';
import { android } from '@/env';
import { metrics } from '@/styles';
import { useTheme } from '@/theme/ThemeProvider';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

const Screen: React.FC<BoxProps> = props => {
  const { children } = props;
  const { colors } = useTheme();

  return (
    <Box
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
        },
      ]}
      {...props}>
      <StatusBar style="auto" />
      <SafeAreaView />
      {children}
    </Box>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: android ? metrics.moderateScale(15) : 0,
    flex: 1,
  },
});
