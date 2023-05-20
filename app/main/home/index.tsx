import Screen from '@/Components/Screen/Screen';
import { Box, Button, Row, Rows, TextInput } from '@/SystemDesign';
import { firebaseAppId } from '@/env';
import { routes } from '@/routes';
import { Stack, useRouter } from 'expo-router';
import React from 'react';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const {} = props;
  const router = useRouter();

  return (
    <Screen paddingHorizontal="16px">
      <Stack.Screen
        options={{
          headerShown: true,
        }}
      />
      <Rows space="16px">
        <Row height="content">
          <TextInput placeholder="Name" />
        </Row>
        <Row height="content">
          <TextInput placeholder="Email" />
        </Row>
        <Row height="content">
          <TextInput placeholder="Message" multiline />
        </Row>
        <Row height="content">
          <Button
            size="medium"
            shadowOff
            autoWidth
            variant="outlined"
            onPress={() => {
              router.push(routes.welcomeScreen);
            }}>
            SUBMIT MESSAGE
          </Button>
        </Row>
      </Rows>
    </Screen>
  );
};

export default HomeScreen;
