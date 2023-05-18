import { Redirect } from 'expo-router';
import React from 'react';

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = props => {
  return <Redirect href="main" />;
};

export default WelcomeScreen;
