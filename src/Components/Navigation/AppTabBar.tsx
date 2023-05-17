import React from 'react';
import { metrics } from '@/styles';
import { StyleSheet, View } from 'react-native';
import TabBarItem from './TabBarItem';
import { Box, Text } from '@/SystemDesign';
import { android } from '@/env';
import { useTheme } from '@/theme/ThemeProvider';
import { RouteInterface } from 'app/main/_layout';

type RootStackParamList = {
  Home: undefined;
  Reports: undefined;
  Settings2: undefined;
  Settings3: undefined;
  Settings4: undefined;
};

interface AppTabBarProps {
  state: any;
  descriptors: any;
  options: any[];
}

const AppTabBar: React.FC<AppTabBarProps> = props => {
  const { state, options: routesList } = props;
  const { colors, isDarkMode } = useTheme();

  return (
    <Box
      height={{
        custom: android
          ? metrics.moderateScale(65)
          : metrics.moderateScale(100),
      }}
      width="full"
      borderTopLeftRadius={metrics.moderateScale(20)}
      borderTopRightRadius={metrics.moderateScale(20)}
      paddingHorizontal={{ custom: metrics.moderateScale(10) }}
      alignItems="center"
      shadow="30px"
      justifyContent="flex-start"
      paddingTop={{
        custom: android ? metrics.moderateScale(10) : metrics.moderateScale(15),
      }}
      background={isDarkMode ? 'black' : 'card'}>
      <View
        style={[
          styles.linksWrapper,
          {
            backgroundColor: colors.fill,
          },
        ]}>
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;
          const currentRoute = routesList.find(
            (routeItem: any) => routeItem.name === route.name,
          );

          return (
            <TabBarItem
              {...currentRoute}
              key={index}
              name={route.name}
              isFocused={isFocused}
            />
          );
        })}
      </View>
    </Box>
  );
};

export default AppTabBar;

const styles = StyleSheet.create({
  linksWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: metrics.moderateScale(35),
    height: android ? metrics.moderateScale(35) : metrics.moderateScale(45),
    marginBottom: !android ? metrics.moderateScale(10) : 0,
  },
});
