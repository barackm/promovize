import Screen from '@/Components/Screen/Screen';
import { Text } from '@/SystemDesign';
import React from 'react';
import { StyleSheet } from 'react-native';

interface CollaborationScreenProps {}

const CollaborationScreen: React.FC<CollaborationScreenProps> = props => {
  const {} = props;
  return (
    <Screen paddingHorizontal="16px">
      <Text>CollaborationScreen</Text>
    </Screen>
  );
};

export default CollaborationScreen;

const styles = StyleSheet.create({
  container: {},
});
