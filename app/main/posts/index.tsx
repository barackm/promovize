import Screen from '@/Components/Screen/Screen';
import { Text } from '@/SystemDesign';
import React from 'react';
import { StyleSheet } from 'react-native';

interface PostsScreenProps {}

const PostsScreen: React.FC<PostsScreenProps> = props => {
  const {} = props;
  return (
    <Screen paddingHorizontal="16px">
      <Text>PostsScreen</Text>
    </Screen>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {},
});
