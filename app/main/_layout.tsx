import { Icon } from '@/Components/Icons';
import AppTabBar from '@/Components/Navigation/AppTabBar';
import { Route } from '@/routes/routes';
import { Tabs } from 'expo-router';
import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ComponentNameProps {}

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

const ComponentName: React.FC<ComponentNameProps> = props => {
  const {} = props;
  const appNavigators: RouteInterface[] = [
    {
      name: 'home/index',
      route: '/main/home',
      label: 'Home',
      renderIcon: ({ color, size, isFocused }: IconProps) => (
        <Icon name="eye" />
      ),
    },
    {
      name: 'posts/index',
      route: '/main/posts',
      label: 'Posts',
      renderIcon: ({ color, size, isFocused }: IconProps) => (
        <Icon name="eye" />
      ),
    },
    {
      name: 'profile/index',
      route: '/main/profile',
      label: 'Profile',
      renderIcon: ({ color, size, isFocused }: IconProps) => (
        <Icon name="eye" />
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
    <Tabs initialRouteName="home" tabBar={renderTabBar}>
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

export default ComponentName;

const styles = StyleSheet.create({
  container: {},
});
