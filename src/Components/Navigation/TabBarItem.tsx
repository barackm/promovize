import React from 'react';
import { StyleSheet, View } from 'react-native';
import { metrics } from '@/styles';
import { Box, ButtonPressAnimation } from '@/SystemDesign';
import { RouteInterface } from 'app/main/_layout';
import { useRouter } from 'expo-router';
import { useTheme } from '@/theme/ThemeProvider';

interface TabBarItemProps extends RouteInterface {
  isFocused?: boolean;
}

const TabBarItem: React.FC<TabBarItemProps> = props => {
  const { renderIcon, isFocused, name, route } = props;
  const router = useRouter();
  const { colors } = useTheme();
  const handleNavigate = () => {
    router.push(route);
  };

  const focusedColor = colors.appleBlue;
  const defaultColor = colors.text;

  return (
    <Box style={styles.tabBarItemContainer}>
      <ButtonPressAnimation
        scaleTo={0.8}
        onPress={handleNavigate}
        hapticType="selection">
        <View style={styles.iconContainer}>
          {renderIcon &&
            renderIcon({
              color: isFocused ? focusedColor : defaultColor,
              size: metrics.moderateScale(20),
              isFocused,
            })}
        </View>
      </ButtonPressAnimation>
    </Box>
  );
};

export default TabBarItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarItemContainer: {
    flex: 1,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
