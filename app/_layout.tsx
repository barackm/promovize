import Header from '@/Components/Navigation/Header';
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
            header: props => {
              const { back, navigation, options, route } = props;
              const title = options.title || route.name;
              console.log(navigation);
              const { canGoBack, goBack } = navigation;
              return (
                <Header title={title} canGoBack={canGoBack()} goBack={goBack} />
              );
            },
          }}
        />
      </AppWrapper>
    </MainThemeProvider>
  );
};

export default App;
