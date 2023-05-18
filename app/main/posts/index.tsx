import { ContextMenuButton } from '@/Components/ContextMenu';
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
                rightComponent={<MenuItem.StatusIcon status="selected" />}
                titleComponent={<MenuItem.Label text="Posts" />}
              />
              <MenuItem
                size={52}
                rightComponent={<MenuItem.StatusIcon status="incomplete" />}
                titleComponent={<MenuItem.Label text="Posts" />}
              />
              <MenuItem
                size={52}
                rightComponent={<MenuItem.StatusIcon status="complete" />}
                titleComponent={<MenuItem.Label text="Posts" />}
              />
              <MenuItem
                size={52}
                rightComponent={<MenuItem.StatusIcon status="warning" />}
                titleComponent={<MenuItem.Label text="Posts" />}
              />

              {/* <ContextMenuButton
                menuConfig={{
                  menuItems: [
                    {
                      actionKey: 'key-01-01',
                      actionTitle: 'small',
                      icon: {
                        type: 'IMAGE_SYSTEM',
                        imageValue: {
                          systemName: 'heart',
                          scale: 'small',
                        },
                      },
                    },
                    {
                      actionKey: 'key-01-02',
                      actionTitle: 'small',
                      icon: {
                        type: 'IMAGE_SYSTEM',
                        imageValue: {
                          systemName: 'heart',
                          scale: 'small',
                        },
                      },
                    },
                  ],
                  menuTitle: 'Theme',
                }}
                activeOpacity={0}
                enableContextMenu={false}
                onPressMenuItem={() => {}}>
                <MenuItem
                  size={52}
                  rightComponent={<MenuItem.StatusIcon status="warning" />}
                  titleComponent={<MenuItem.Label text="Posts" />}
                />
              </ContextMenuButton> */}
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
