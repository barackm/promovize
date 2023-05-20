import { Icon } from '@/Components/Icons';
import AppTabBar from '@/Components/Navigation/AppTabBar';
import { ios } from '@/env';
import { useTheme } from '@/theme/ThemeProvider';
import { Tabs } from 'expo-router';
import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

interface MainNavigatorProps {}

export type IconProps = {
  color: string;
  size: number;
  isFocused?: boolean;
};

export type RouteInterface = {
  name: string;
  route: any;
  renderIcon: (routeProps: IconProps) => ReactNode;
  label: string;
};

const MainNavigator: React.FC<MainNavigatorProps> = props => {
  const { isDarkMode, colors } = useTheme();
  const appNavigators: RouteInterface[] = [
    {
      name: 'home/index',
      route: '/main/home',
      label: 'Home',
      renderIcon: ({ color }: IconProps) => (
        <Icon name="home" size={ios ? 28 : 22} color={{ custom: color }} />
      ),
    },
    {
      name: 'posts/index',
      route: '/main/posts',
      label: 'Posts',
      renderIcon: ({ color }: IconProps) => (
        <Icon
          name="noteText"
          size={ios ? 28 : 22}
          colors={[
            {
              custom: color,
            },
            {
              custom: color,
            },
          ]}
        />
      ),
    },
    {
      name: 'collaboration/index',
      route: '/main/collaboration',
      label: 'Collaboration',
      renderIcon: ({ color, size, isFocused }: IconProps) => (
        <Icon
          name="threePeople"
          size={ios ? 35 : 30}
          colors={[
            {
              custom: color,
            },
            {
              custom: color,
            },
            {
              custom: color,
            },
          ]}
        />
      ),
    },
    {
      name: 'profile/index',
      route: '/main/profile',
      label: 'Profile',
      renderIcon: ({ color, size, isFocused }: IconProps) => (
        <Icon name="person" size={ios ? 25 : 20} color={{ custom: color }} />
      ),
    },
  ];

  const renderTabBar = (props: any) => (
    <AppTabBar
      options={appNavigators}
      state={props.state}
      descriptors={props.descriptors}
    />
  );

  return (
    <Tabs
      initialRouteName="home/index"
      tabBar={renderTabBar}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: colors.white,
        },
      }}>
      {appNavigators.map((item: RouteInterface, index: number) => (
        <Tabs.Screen
          key={item.name}
          name={item.name}
          options={{
            headerTitle: item.label,
          }}
        />
      ))}
    </Tabs>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  container: {},
});
