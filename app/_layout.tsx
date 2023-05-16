import AppWrapper from '@/Components/AppWrapper/AppWrapper';
import { MainThemeProvider } from '@/theme/ThemeProvider';
import { Stack } from 'expo-router';
import React from 'react';

interface AppProps {}

const App: React.FC<AppProps> = props => {
  return (
    <MainThemeProvider>
      <AppWrapper>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </AppWrapper>
    </MainThemeProvider>
  );
};

export default App;
