import '../config/i18n';
import AppWrapper from '@/Components/AppWrapper/AppWrapper';
import { MainThemeProvider } from '@/theme/ThemeProvider';
import { Stack } from 'expo-router';
import React from 'react';

const App: React.FC = () => {
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
