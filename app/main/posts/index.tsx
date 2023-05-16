import Screen from '@/Components/Screen/Screen';
import { Row, Rows, Text } from '@/SystemDesign';
import Menu from '@/SystemDesign/Components/Menu/Menu';
import MenuContainer from '@/SystemDesign/Components/Menu/MenuContainer';
import MenuItem from '@/SystemDesign/Components/Menu/MenuItem';
import React from 'react';
import { StyleSheet } from 'react-native';

interface PostsScreenProps {}

const PostsScreen: React.FC<PostsScreenProps> = props => {
  const {} = props;
  return (
    <Screen paddingHorizontal="16px">
      <Text>PostsScreen</Text>
      <Rows>
        <Row>
          <MenuContainer>
            <Menu>
              <MenuItem
                size={52}
                titleComponent={<MenuItem.Label text="Posts" />}
              />
            </Menu>
          </MenuContainer>
        </Row>
      </Rows>
    </Screen>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {},
});
