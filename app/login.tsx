import Screen from '@/Components/Screen/Screen';
import { Text } from '@/SystemDesign';
import React from 'react';
import { StyleSheet } from 'react-native';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = props => {
  const {} = props;
  return (
    <Screen paddingHorizontal="16px">
      <Text>RegisterScreen</Text>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
});
