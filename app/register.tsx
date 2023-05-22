import Form from '@/Components/Form/form';
import Screen from '@/Components/Screen/Screen';
import { Box, Text, Stack, Button, TextInput } from '@/SystemDesign';
import { deviceUtils } from '@/SystemDesign/utils';
import { useTheme } from '@/theme/ThemeProvider';
import { Stack as RouterStack } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import * as Yup from 'yup';

interface RegisterScreenProps {}

const RegisterScreen: React.FC<RegisterScreenProps> = props => {
  const {} = props;
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
                justifyContent="center"
                width="full"
                height="full">
                <Box style={styles.logoContainer}></Box>
                <Text size="16px / 22px" weight="semibold">
                  {t('register.continue_with_facebook')}
                </Text>
              </Box>
            </Button>
            <Button
              background="googleBlue"
              size="medium"
              shadow="12px googleBlue">
              <Box
                style={styles.authButton}
                alignItems="center"
                justifyContent="center"
                width="full"
                height="full">
                <Box style={styles.logoContainer}></Box>
                <Text size="16px / 22px" weight="semibold">
                  {t('register.continue_with_google')}
                </Text>
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
  logoContainer: {
    position: 'absolute',
    left: 0,
  },
  buttonsWrapper: {
    marginTop: '10%',
  },
  formWrapper: {
    marginTop: '10%',
  },
});
