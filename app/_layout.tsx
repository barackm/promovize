import AppWrapper from '@/Components/AppWrapper/AppWrapper';
import { MainThemeProvider } from '@/theme/ThemeProvider';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

interface AppProps {}

SplashScreen.preventAutoHideAsync();

const App: React.FC<AppProps> = props => {
  const [fontsLoaded] = useFonts({
    'SFMono-Regular': require('@/assets/fonts/SFMono-Regular.otf'),
    'SF-Pro-Rounded': require('@/assets/fonts/SF-Pro-Rounded-Medium.otf'),
    'SF-Pro-Rounded-Semibold': require('@/assets/fonts/SF-Pro-Rounded-Semibold.otf'),
    'SF-Pro-Rounded-Bold': require('@/assets/fonts/SF-Pro-Rounded-Bold.otf'),
    'SF-Pro-Rounded-Regular': require('@/assets/fonts/SF-Pro-Rounded-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MainThemeProvider>
      <AppWrapper>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </View>
      </AppWrapper>
    </MainThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
