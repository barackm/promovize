import Header from '@/Components/Navigation/Header';
import '../src/config/i18n';
import AppWrapper from '@/Components/AppWrapper/AppWrapper';
import { MainThemeProvider } from '@/theme/ThemeProvider';
import { Stack } from 'expo-router';
import React from 'react';
import configureStore from '@/store/';
import { Provider } from 'react-redux';
import AuthContainer from '@/Components/AuthContainer/AuthContainer';

const store = configureStore;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainThemeProvider>
        <AppWrapper>
          <AuthContainer>
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
          </AuthContainer>
        </AppWrapper>
      </MainThemeProvider>
    </Provider>
  );
};

export default App;
