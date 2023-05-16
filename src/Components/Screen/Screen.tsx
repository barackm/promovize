import { android } from '@/env';
import { metrics } from '@/styles';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

interface ScreenProps {
  children: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = props => {
  const { children } = props;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView />
      {children}
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: android ? metrics.moderateScale(15) : 0,
    flex: 1,
  },
});
