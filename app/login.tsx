import Form from '@/Components/Form/form';
import Screen from '@/Components/Screen/Screen';
import {
  Box,
  Button,
  ButtonPressAnimation,
  Image,
  Inline,
  Stack,
  Text,
  TextInput,
} from '@/SystemDesign';
import { deviceUtils } from '@/SystemDesign/utils';
import { ios } from '@/env';
import { useTheme } from '@/theme/ThemeProvider';
import { Stack as RouterStack, useRouter } from 'expo-router';
import * as Yup from 'yup';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { signInOrSignupWithGoogleAsync, signinAsync } from '@/services/auth';
import { routes } from '@/routes';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = props => {
  const router = useRouter();
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
      await signInOrSignupWithGoogleAsync();
      return router.replace(routes.homeScreen);
    } catch (error) {}
  };

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      setLoading(true);
      const res = await signinAsync(values);
      console.log(res);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('register.invalid_email') || '')
      .required(t('register.email_required') || ''),
    password: Yup.string().required(t('register.password_required') || ''),
  });

  return (
    <Screen paddingHorizontal="16px">
      <RouterStack.Screen options={{ headerShown: true }} />
      <KeyboardAvoidingView
        keyboardVerticalOffset={deviceUtils.statusBarHeight}
        behavior={ios ? 'padding' : undefined}
        style={styles.container}>
        <Stack space="16px">
          <Box alignItems="center">
            <Box width="3/4" marginTop={{ custom: '5%' }}>
              <Text
                align="center"
                size="17pt"
                weight="medium"
                color={{ custom: colors.alpha(colors.blueGreyDark, 0.9) }}>
                {t('login.intro')}
              </Text>
            </Box>
          </Box>
          <Stack space="12px" style={styles.buttonsWrapper}>
            <Button
              background="googleBlue"
              size="medium"
              shadow="12px googleBlue"
              onPress={handleLogin}>
              <Box
                style={styles.authButton}
                alignItems="center"
                width="full"
                height="full">
                <Box
                  style={styles.logoContainer}
                  as={Image}
                  source={require('@/assets/images/googleIcon.png')}
                  iHeight={{ custom: 30 }}
                  contentFit="contain"
                  iWidth={{ custom: 30 }}
                />
                <Box
                  style={styles.authButtonTextWrapper}
                  alignItems="center"
                  justifyContent="center">
                  <Text size="16px / 22px" weight="semibold">
                    {t('register.continue_with_google')}
                  </Text>
                </Box>
              </Box>
            </Button>
          </Stack>
          <Box
            width="full"
            alignItems="center"
            marginVertical={{ custom: '8%' }}>
            <Text
              weight="bold"
              color={{ custom: colors.alpha(colors.blueGreyDark, 0.7) }}>
              {t('login.or_login_with_email')}
            </Text>
          </Box>
          <Form
            initialValues={{ email: '', password: '' }}
            onSubimit={handleSubmit}
            validationSchema={validationSchema}>
            <Stack space="16px" style={styles.formWrapper}>
              <TextInput
                name="email"
                placeholder={t('register.enter_email_address')}
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="email"
              />
              <TextInput
                name="password"
                placeholder={t('register.enter_password')}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
              />
              <Button disabled={loading}>{t('login.login')}</Button>
            </Stack>
          </Form>
          <Stack
            space="8px"
            alignHorizontal="center"
            style={styles.termsContainer}>
            <Text color="labelSecondary" weight="medium">
              {t('login.by_signing_in')}
            </Text>
            <Inline space="4px" alignHorizontal="center">
              <ButtonPressAnimation hapticType="selection">
                <Text textDecorationLine="underline" weight="semibold">
                  {t('register.terms_of_use')}
                </Text>
              </ButtonPressAnimation>
              <Text weight="medium" color="labelSecondary">
                {t('register.and')}
              </Text>
              <ButtonPressAnimation hapticType="selection">
                <Text textDecorationLine="underline" weight="semibold">
                  {t('register.privacy_policy')}
                </Text>
              </ButtonPressAnimation>
            </Inline>
          </Stack>
        </Stack>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  authButton: {
    flexDirection: 'row',
    width: '100%',
  },
  logoContainer: {},
  buttonsWrapper: {
    marginTop: '10%',
  },
  authButtonTextWrapper: {
    flex: 1,
  },
  formWrapper: {
    marginTop: '10%',
  },
  termsContainer: {
    marginTop: deviceUtils.isSmallPhone ? '5%' : '10%',
  },
});
