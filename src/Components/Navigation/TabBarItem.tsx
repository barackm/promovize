import React from 'react';
import { StyleSheet, View } from 'react-native';
import { metrics } from '@/styles';
import { Box, ButtonPressAnimation } from '@/SystemDesign';
import { RouteInterface } from 'app/main/_layout';
import { useRouter } from 'expo-router';

interface TabBarItemProps extends RouteInterface {
  isFocused?: boolean;
}

const TabBarItem: React.FC<TabBarItemProps> = props => {
  const { renderIcon, isFocused, name, route } = props;
  const router = useRouter();

  const handleNavigate = () => {
    router.push(route);
  };

  return (
    <Box style={styles.tabBarItemContainer}>
      <ButtonPressAnimation scaleTo={0.8} onPress={handleNavigate}>
        <View style={styles.iconContainer}>
          {renderIcon({
            color: '#000',
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
