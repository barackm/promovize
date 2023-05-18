import Screen from '@/Components/Screen/Screen';
import { Text } from '@/SystemDesign';
import React from 'react';
import { StyleSheet } from 'react-native';

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = props => {
  const {} = props;
  return (
    <Screen paddingHorizontal="16px">
      <Text>ProfileScreen</Text>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
});
