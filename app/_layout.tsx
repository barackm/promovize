import Header from '@/Components/Navigation/Header';
import AppWrapper from '@/Components/AppWrapper/AppWrapper';
import { MainThemeProvider } from '@/theme/ThemeProvider';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from '@/store';

import '../src/config/i18n';
import '../src/config/firebase';

const store = configureStore();
export type RootState = ReturnType<typeof store.getState>;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainThemeProvider>
        <AppWrapper>
          <Stack
            screenOptions={{
              headerShown: false,
              header: props => {
                const { navigation, options, route } = props;
                const title = options.title || route.name;
                const { canGoBack, goBack } = navigation;
                return (
                  <Header
                    title={title}
                    canGoBack={canGoBack()}
                    goBack={goBack}
                  />
                );
              },
            }}
          />
        </AppWrapper>
      </MainThemeProvider>
    </Provider>
  );
};

export default App;
