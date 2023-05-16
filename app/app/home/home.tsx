import Screen from '@/Components/Screen/Screen';
import { Text } from '@/SystemDesign';
import React from 'react';
import { StyleSheet } from 'react-native';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const {} = props;
  return (
    <Screen>
      <Text>HomeScreen</Text>
    </Screen>
  );
};

export default HomeScreen;
