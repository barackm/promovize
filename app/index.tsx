import {
  Box,
  Button,
  ButtonPressAnimation,
  Inline,
  Stack,
  Text,
  TextInput,
} from '@/SystemDesign';
import { deviceUtils } from '@/SystemDesign/utils';
import { routes } from '@/routes';
import { metrics } from '@/styles';
import { useTheme } from '@/theme/ThemeProvider';
import { useRouter, Stack as RouterStack } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet } from 'react-native';

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = props => {
  const router = useRouter();
  const { t } = useTranslation();
  const { colors } = useTheme();
  return (
    <Box
      background="primary"
      style={styles.container}
      width="full"
      alignItems="center"
      paddingTop={{
        custom: deviceUtils.statusBarHeight + metrics.moderateScale(50),
      }}
      paddingHorizontal="20px">
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
            borderRadius={24}
          />
        </Box>
        <Box style={styles.homeTextContainer} width="full">
          <Stack space="20px">
            <Text size="44pt" weight="bold">
              {t('welcome.welcome')}
            </Text>
            <Inline>
              <Text size="44pt" weight="bold" align="left">
                {t('welcome.welcome_to')} Promo
              </Text>
              <Text size="44pt" weight="bold" color="secondary">
                vize
              </Text>
            </Inline>
          </Stack>
          <Box style={styles.subTitle}>
            <Text
              size="18px / 27px"
              color={{ custom: colors.alpha(colors.whiteLabel, 0.8) }}>
              {t('welcome.intro')}
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
              router.push(routes.register);
            }}>
            {t('welcome.join_now')}
          </Button>
          <Inline alignHorizontal="center" space="10px">
            <Text size="17pt" weight="medium">
              {t('welcome.already_member')}
            </Text>
            <ButtonPressAnimation
              hapticType="selection"
              onPress={() => {
                router.push(routes.login);
              }}>
              <Text weight="bold" size="18px / 27px">
                {t('welcome.login')}
              </Text>
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
    marginTop: deviceUtils.isLargePhone ? '20%' : '15%',
  },
  subTitle: {
    marginTop: '10%',
  },
  footerContentWrapper: {
    marginBottom: '40%',
  },
});
