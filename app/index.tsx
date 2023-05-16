import Screen from '@/Components/Screen/Screen';
import { Box, Button, Columns, Row, Rows, TextInput } from '@/SystemDesign';
import { Column } from '@/SystemDesign/Components/Columns/Columns';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = props => {
  return (
    <Screen>
      <Box padding="16px">
        <View style={styles.container}>
          <Rows space="16px">
            <Row height="content">
              <TextInput placeholder="Name" />
            </Row>
            <Row height="content">
              <TextInput placeholder="Email" />
            </Row>
            <Row height="content">
              <TextInput placeholder="Message" multiline />
            </Row>
            <Row height="content">
              <Button size="medium" shadowOff autoWidth>
                SUBMIT MESSAGE
              </Button>
            </Row>
          </Rows>
        </View>
      </Box>
    </Screen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {},
});
