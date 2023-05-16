import { useTheme } from '@/theme/ThemeProvider';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = props => {
  const { children } = props;
  const { colors, setTheme, colorScheme, isDarkMode } = useTheme();

  useEffect(() => {
    setTheme('system');
  }, []);

  console.log(isDarkMode, 'isDarkMode');

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
        },
      ]}>
      {children}
    </View>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
