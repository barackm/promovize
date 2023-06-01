import Screen from '@/Components/Screen/Screen';
import { Box, Button, Row, Rows, Text, TextInput } from '@/SystemDesign';
import { routes } from '@/routes';
import { logoutUser } from '@/services/auth';
import { RootState } from 'app/_layout';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
    } catch (error) {}
  };

  return (
    <Screen paddingHorizontal="16px">
      <Stack.Screen
        options={{
          headerShown: true,
        }}
      />
      <Box>
        <Text>
          Welcome {currentUser?.firstName} {currentUser?.lastName}
        </Text>
      </Box>
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
        <Row height="content">
          <Button onPress={handleLogout}>Logout</Button>
        </Row>
      </Rows>
    </Screen>
  );
};

export default HomeScreen;
