import Screen from '@/Components/Screen/Screen';
import { Text } from '@/SystemDesign';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = props => {
  const {} = props;
  return (
    <Screen paddingHorizontal="16px">
      <Stack.Screen options={{ headerShown: true }} />
      <Text>RegisterScreen</Text>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
});
