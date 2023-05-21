import { useTheme } from '@/theme/ThemeProvider';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

interface AppWrapperProps {
  children: React.ReactNode;
}

SplashScreen.preventAutoHideAsync();

const AppWrapper: React.FC<AppWrapperProps> = props => {
  const { children } = props;
  const { colors } = useTheme();

  const [fontsLoaded] = useFonts({
    'SFMono-Regular': require('@/assets/fonts/SF-Pro-Rounded-Regular.otf'),
    'SF-Pro-Rounded': require('@/assets/fonts/SF-Pro-Rounded-Medium.otf'),
    'SF-Pro-Rounded-Medium': require('@/assets/fonts/SF-Pro-Rounded-Medium.otf'),
    'SF-Pro-Rounded-Semibold': require('@/assets/fonts/SF-Pro-Rounded-Semibold.otf'),
    'SF-Pro-Rounded-Bold': require('@/assets/fonts/SF-Pro-Rounded-Bold.otf'),
    'SF-Pro-Rounded-Regular': require('@/assets/fonts/SF-Pro-Rounded-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
        },
      ]}
      onLayout={onLayoutRootView}>
      {children}
    </View>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'SF-Pro-Rounded-Regular',
  },
});
