import { Box, ButtonPressAnimation, Inline, Text } from '@/SystemDesign';
import { deviceUtils } from '@/SystemDesign/utils';
import { metrics } from '@/styles';
import { useTheme } from '@/theme/ThemeProvider';
import React, { ReactNode } from 'react';
import {
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Icon } from '../Icons';
import { capitalizeFirstLetters } from '@/utils';

interface HeaderProps {
  title: string | undefined;
  canGoBack: boolean;
  goBack?: () => void;
}
const statusBarHeight = StatusBar.currentHeight;
const CONTENT_HEIGHT = metrics.moderateScale(44);

const Header: React.FC<HeaderProps> = props => {
  const { title, canGoBack, goBack } = props;
  const { colors } = useTheme();
  const backgroundColor = colors.primary;

  return (
    <Box
      style={[styles.container]}
      // background="primary"
      width="full"
      justifyContent="flex-end">
      <Box alignItems="center" justifyContent="center">
        <View style={styles.contentWrapper}>
          {canGoBack && (
            <Box
              as={ButtonPressAnimation}
              width={{ custom: CONTENT_HEIGHT }}
              height={{ custom: CONTENT_HEIGHT }}
              alignItems="flex-start"
              justifyContent="center"
              paddingLeft="16px"
              onPress={goBack}
              hapticType="selection">
              <Icon name="arrowLeft" />
            </Box>
          )}
          <Box
            alignItems="center"
            justifyContent="center"
            marginLeft={{ custom: -CONTENT_HEIGHT }}
            style={styles.titleContainer}>
            <Text align="center" size="17pt" weight="bold">
              {capitalizeFirstLetters(title)}
            </Text>
          </Box>
        </View>
      </Box>
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: deviceUtils.statusBarHeight + CONTENT_HEIGHT,
  },
  contentWrapper: {
    height: CONTENT_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleContainer: {
    flex: 1,
  },
  backButton: {
    width: CONTENT_HEIGHT,
    height: CONTENT_HEIGHT,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
