import Screen from '@/Components/Screen/Screen';
import { Text } from '@/SystemDesign';
import React from 'react';
import { StyleSheet } from 'react-native';

interface RegisterScreenProps {}

const RegisterScreen: React.FC<RegisterScreenProps> = props => {
  const {} = props;
  return (
    <Screen paddingHorizontal="16px">
      <Text>RegisterScreen</Text>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
});
