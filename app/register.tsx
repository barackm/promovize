import Form from '@/Components/Form/form';
import Screen from '@/Components/Screen/Screen';
import {
  Box,
  Text,
  Stack,
  Button,
  TextInput,
  Image,
  Inline,
  ButtonPressAnimation,
} from '@/SystemDesign';
import { deviceUtils } from '@/SystemDesign/utils';
import { useTheme } from '@/theme/ThemeProvider';
import { Stack as RouterStack } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import * as Yup from 'yup';

interface RegisterScreenProps {}

const RegisterScreen: React.FC<RegisterScreenProps> = props => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('register.invalid_email') || '')
      .required(t('register.email_required') || ''),
  });

  return (
    <Screen paddingHorizontal="16px">
      <RouterStack.Screen options={{ headerShown: true }} />
      <KeyboardAvoidingView
        keyboardVerticalOffset={deviceUtils.statusBarHeight}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}>
        <Stack space="16px">
          <Box alignItems="center">
            <Box width="3/4" marginTop={{ custom: '5%' }}>
              <Text
                align="center"
                size="17pt"
                weight="medium"
                color={{ custom: colors.alpha(colors.blueGreyDark, 0.9) }}>
                {t('register.intro')}
              </Text>
            </Box>
          </Box>
          <Stack space="12px" style={styles.buttonsWrapper}>
            <Button
              background="facebookBlue"
              size="medium"
              shadow="12px facebookBlue">
              <Box
                style={styles.authButton}
                alignItems="center"
                width="full"
                height="full">
                <Box
                  style={styles.logoContainer}
                  as={Image}
                  source={require('@/assets/images/facebookIcon.png')}
                  iHeight={{ custom: 30 }}
                  contentFit="contain"
                  iWidth={{ custom: 30 }}
                />
                <Box
                  style={styles.authButtonTextWrapper}
                  alignItems="center"
                  justifyContent="center">
                  <Text size="16px / 22px" weight="semibold">
                    {t('register.continue_with_facebook')}
                  </Text>
                </Box>
              </Box>
            </Button>
            <Button
              background="googleBlue"
              size="medium"
              shadow="12px googleBlue">
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
              {t('register.or_register_with_email')}
            </Text>
          </Box>
          <Form
            initialValues={{ email: '' }}
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
              <Button>{t('register.register')}</Button>
            </Stack>
          </Form>
          <Stack
            space="8px"
            alignHorizontal="center"
            style={styles.termsContainer}>
            <Text color="labelSecondary" weight="medium">
              {t('register.by_signing_up')}
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

export default RegisterScreen;

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
