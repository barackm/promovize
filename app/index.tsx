import Screen from '@/Components/Screen/Screen';
import { Box, Button, Columns } from '@/SystemDesign';
import { Column } from '@/SystemDesign/Components/Columns/Columns';
import { useTheme } from '@/theme/ThemeProvider';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = props => {
  const {} = props;
  const { colors } = useTheme();

  return (
    <Screen>
      <Box padding="16px">
        <View style={styles.container}>
          <Columns>
            <Column>
              <Button background="orange" size="small" shadowOff>
                This is a button
              </Button>
            </Column>
          </Columns>
        </View>
      </Box>
    </Screen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {},
});
