import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Image, Box, Text } from '@/SystemDesign';
import { routes } from '@/routes';
import { RootState } from '@/store';
import { useRouter } from 'expo-router';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { firstName, lastName, email, picture } = currentUser || {};

  const handleLogout = () => {
    router.push(routes.welcomeScreen);
  };

  return (
    <Box
      justifyContent="center"
      paddingHorizontal="16px"
      paddingVertical="16px">
      {picture && (
        <Box alignItems="center">
          <Image
            source={{ uri: picture }}
            iWidth={{ custom: 200 }}
            iHeight={{ custom: 200 }}
          />
        </Box>
      )}
      <Box>
        <Box paddingVertical="19px">
          <Text>First Name: {firstName}</Text>
          <Text>Last Name: {lastName}</Text>
          <Text>Email: {email}</Text>
        </Box>
        <Button onPress={handleLogout}>Logout</Button>
      </Box>
    </Box>
  );
};

export default HomeScreen;
