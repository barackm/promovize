import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ComponentNameProps {}

const ComponentName: React.FC<ComponentNameProps> = props => {
  const {} = props;
  return <Tabs />;
};

export default ComponentName;

const styles = StyleSheet.create({
  container: {},
});
