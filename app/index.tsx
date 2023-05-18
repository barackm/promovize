import Screen from '@/Components/Screen/Screen';
import { Box, Button, Columns, Row, Rows, TextInput } from '@/SystemDesign';
import { Column } from '@/SystemDesign/Components/Columns/Columns';
import { Redirect } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = props => {
  return <Redirect href="main" />;
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {},
});
