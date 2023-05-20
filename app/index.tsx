import {
  Box,
  Button,
  ButtonPressAnimation,
  Inline,
  Stack,
  Text,
} from '@/SystemDesign';
import { deviceUtils } from '@/SystemDesign/utils';
import { routes } from '@/routes';
import { metrics } from '@/styles';
import { useRouter, Stack as RouterStack, Link } from 'expo-router';
import React from 'react';

import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = props => {
  const router = useRouter();
  return (
    <Box
      background="primary"
      style={styles.container}
      width="full"
      alignItems="center"
      paddingTop={{
        custom: deviceUtils.statusBarHeight + metrics.moderateScale(50),
      }}
      paddingHorizontal="16px">
      <RouterStack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Box width="full" alignItems="center" style={styles.screenUpperContent}>
        <Box
          marginBottom={{ custom: '10%' }}
          width="full"
          justifyContent="center"
          alignItems="center"
          style={styles.logoDetailsWrapper}>
          <Box
            as={Image}
            source={require('@/assets/images/logos/LogoWhite.png')}
            width={{ custom: metrics.moderateScale(80) }}
            height={{ custom: metrics.moderateScale(80) }}
            background="black"
            borderRadius={24}
            shadow="30px accent"
          />
        </Box>
        <Box style={styles.homeTextContainer} width="full">
          <Stack space="10px">
            <Text size="44pt" weight="bold">
              Welcome
            </Text>
            <Inline>
              <Text size="44pt" weight="bold" align="left">
                To Promo
              </Text>
              <Text size="44pt" weight="bold">
                vize
              </Text>
            </Inline>
          </Stack>
          <Box style={styles.subTitle}>
            <Text size="20pt">
              Transform your social media game and engage your audience.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box width="full" style={styles.footerContentWrapper}>
        <Stack space="20px">
          <Button
            background="secondary"
            shadowOff={true}
            color="primary"
            size="medium"
            onPress={() => {
              router.push(routes.homeScreen);
            }}>
            Join now
          </Button>
          <Inline alignHorizontal="center">
            <Text size="17pt" weight="medium">
              Already a member?{' '}
            </Text>
            <ButtonPressAnimation hapticType="selection">
              <Text weight="bold">Login</Text>
            </ButtonPressAnimation>
          </Inline>
        </Stack>
      </Box>
    </Box>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  screenUpperContent: {
    flex: 1,
  },
  logoDetailsWrapper: {
    marginTop: '15%',
  },
  homeTextContainer: {
    marginTop: '25%',
  },
  subTitle: {
    marginTop: '10%',
  },
  footerContentWrapper: {
    marginBottom: '35%',
  },
});
