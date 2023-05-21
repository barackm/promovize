import Screen from '@/Components/Screen/Screen';
import { Text } from '@/SystemDesign';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

interface RegisterScreenProps {}

const RegisterScreen: React.FC<RegisterScreenProps> = props => {
  const {} = props;
  return (
    <Screen paddingHorizontal="16px">
      <Stack.Screen options={{ headerShown: true }} />
      <Text>RegisterScreen</Text>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
});
